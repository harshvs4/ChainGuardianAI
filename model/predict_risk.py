from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder
import lightgbm as lgb

app = Flask(__name__)

CORS(app)

###############################################################################
# 1) LOAD THE PICKLED MODEL
#    Make sure "lgb_risk_model.pkl" is the same model you trained with the
#    preprocessing steps shown in your question (Amount, GasFee, cat_cols, etc.).
###############################################################################
with open("/Users/harshsharma/Desktop/Hackathons/ChainGuardianBlockchain/lgb_risk_model.pkl", "rb") as f:
    model = pickle.load(f)

###############################################################################
# 2) REPLICATE TRAINING PREPROCESSING
#    We must apply the exact transformations used when creating the pickle file.
#    That included:
#      - Keeping columns: Amount, GasFee, Currency, Purpose, Region,
#        AML_KYC_Verified, Geolocation_Receiver, Geolocation_Sender, Risk_Category
#      - Mapping Risk_Category to {Low:0, Medium:1, High:2}
#        (For inference, we won't have Risk_Category, but we'll do the same cat col steps.)
#      - Label encoding cat_cols: ["Currency", "Purpose", "Region",
#        "Geolocation_Receiver", "Geolocation_Sender"]
#      - AML_KYC_Verified mapped from {"True","False","Yes","No"} to bool, then int
###############################################################################

# For demonstration, we define the same columns and label encoders here.
# In a real environment, you'd load the exact encoders from separate pickles.

cat_cols = ["Currency", "Purpose", "Region", "Geolocation_Receiver", "Geolocation_Sender"]

# We'll define label_encoders as empty placeholders; we will "fit" them on
# known categories or data. However, if your training data had many categories,
# you must replicate them exactly. For a real solution, you'd store them in
# separate pickles after training.

label_encoders = {col: LabelEncoder() for col in cat_cols}

# Suppose we know the possible categories from training. (Example only!)
# Adjust to your real categories or dynamically load from your training dataset.
possible_categories = {
    "Currency": ["BTC", "ETH", "USDT", "unknown"],
    "Purpose": [
        "savings", "remittance", "trade", "investment", 
        "unusual_investment", "unregistered_trade", 
        "high_value_transfer", "offshore_account", 
        "untracked_funds", "unknown"
    ],
    "Region": ["APAC", "US", "EU", "unknown"],
    "Geolocation_Receiver": ["United States", "China", "Japan", "unknown"],
    "Geolocation_Sender": ["United States", "China", "Japan", "unknown"],
}

# Fit each LabelEncoder on its known categories
for col in cat_cols:
    label_encoders[col].fit(possible_categories[col])

# Risk mapping from numeric to label (for returning predictions)
# In your question, you have 3 categories: Low, Medium, High => {0,1,2}
inverse_risk_map = {0: "Low", 1: "Medium", 2: "High"}

def preprocess_transactions(transactions):
    """
    Convert raw transaction JSON into a DataFrame, exactly matching
    the training-time preprocessing steps.
    """
    df = pd.DataFrame(transactions)

    # Ensure the relevant columns exist; fill missing to avoid errors
    needed_cols = [
        "Amount", "GasFee", "Currency", "Purpose", "Region",
        "AML_KYC_Verified", "Geolocation_Receiver", "Geolocation_Sender"
    ]
    for col in needed_cols:
        if col not in df.columns:
            df[col] = np.nan

    # 1) Convert AML_KYC_Verified from {True,False,Yes,No} to bool -> int
    df["AML_KYC_Verified"] = df["AML_KYC_Verified"].map(
        {"True": True, "False": False, "Yes": True, "No": False}
    )
    df["AML_KYC_Verified"] = df["AML_KYC_Verified"].fillna(False).astype(bool)
    df["AML_KYC_Verified"] = df["AML_KYC_Verified"].astype(int)

    # 2) Label-encode categorical columns
    for col in cat_cols:
        # Replace missing with "unknown"
        df[col] = df[col].fillna("unknown").astype(str)
        # If a new category is present that wasn't in training, force "unknown"
        df[col] = df[col].where(df[col].isin(possible_categories[col]), "unknown")
        # Apply the label encoder
        df[col] = label_encoders[col].transform(df[col])

    # 3) Convert numeric columns if needed
    df["Amount"] = pd.to_numeric(df["Amount"], errors="coerce").fillna(0)
    df["GasFee"] = pd.to_numeric(df["GasFee"], errors="coerce").fillna(0)

    # 4) Subset the final columns in the same order the model expects
    #    (the same order you used in training).
    final_cols = [
        "Amount",
        "GasFee",
        "Currency",
        "Purpose",
        "Region",
        "AML_KYC_Verified",
        "Geolocation_Receiver",
        "Geolocation_Sender",
        # In training, "Risk_Category" was the target, so we don't include it here
    ]
    X = df[final_cols]

    return X, df

@app.route("/predict-risk", methods=["POST"])
def predict_risk():
    """
    Endpoint to receive a list of transactions in JSON format,
    preprocess them, apply the model, and return the risk predictions.
    """
    data = request.json
    #print("Received Request Data:", data)  # Print the incoming request
    transactions = data.get("transactions", [])  # Expecting {"transactions": [{...}, {...}]}

    if not transactions:
        print("Error: No transactions provided") 
        return jsonify({"error": "No transactions provided"}), 400

    # Preprocess
    X, df_original = preprocess_transactions(transactions)

    # Predict with the model
    preds = model.predict(X)

    # Check if predictions are probabilities (multi-class)
    if len(preds.shape) > 1:  # If preds is 2D, assume it's probabilities
        # Convert probabilities to discrete class labels
        class_preds = np.argmax(preds, axis=1)
    else:  # Otherwise, assume it's already class indices
        class_preds = preds

    # Map numeric predictions to labels
    label_map = {0: "Low", 1: "Medium", 2: "High"}
    labeled_preds = [label_map.get(int(p), "Unknown") for p in class_preds]

    # Attach predictions back to original data
    results = []
    for tx, label in zip(transactions, labeled_preds):
        tx["Risk_Category"] = label
        results.append(tx)
    print("Processed Response Data:", results)
    return jsonify({"predictions": results}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5005, debug=True)