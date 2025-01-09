# ChainGuardian

ChainGuardian is an integrated platform designed to **monitor**, **analyze**, and **categorize** blockchain transactions. By combining a powerful web-based interface, a robust blockchain backbone, and an intelligent assistant, ChainGuardian helps individuals and organizations make sense of on-chain data in real time.

---

## Table of Contents

1. [Business Use Case](#business-use-case)  
2. [Key Benefits](#key-benefits)  
3. [Who Can Use ChainGuardian?](#who-can-use-chainguardian)  
4. [Platform Features](#platform-features)  
5. [Repository Structure](#repository-structure)  
6. [Setup and Installation](#setup-and-installation)  
   - [ChainGuardianAI](#chainguardianai)  
   - [ChainGuardianAssistant](#chainguardianassistant)  
   - [ChainGuardianBlockchain](#chainguardianblockchain)  
7. [Running the Platform](#running-the-platform)  
   - [Launching the Web Platform](#launching-the-web-platform)  
   - [Launching the Smart Assistant](#launching-the-smart-assistant)  
   - [Launching the Blockchain Server](#launching-the-blockchain-server)  
8. [Risk Prediction](#risk-prediction)  
9. [Contributing](#contributing)  
10. [License](#license)

---

## Business Use Case

Modern blockchain ecosystems are rapidly evolving, with an increasing number of transactions taking place every second. Traditional monitoring solutions may fail to provide real-time insights, automated risk categorization, or intelligent assistance. **ChainGuardian** addresses these challenges by offering:

- **Real-time Tracking**: Monitor transactions as they happen on your blockchain network.  
- **Intelligent Analytics**: Use AI/ML-driven models to categorize and predict transaction risk levels.  
- **Enhanced Compliance**: Ensure transactions adhere to certain standards or regulations via risk scoring.

---

## Key Benefits

- **Comprehensive Monitoring**: Consolidate transaction data in a single dashboard for quick insights.  
- **Predictive Analytics**: Leverage ML models to assign risk levels (Low, Medium, High).  
- **Enhanced Security**: Quickly identify suspicious activity to mitigate potential fraud or compliance issues.  
- **User-Friendly Interface**: Access and interpret blockchain data easily through a web-based dashboard.  
- **Customizable**: Integrate seamlessly with existing workflows or expand to new blockchains.

---

## Who Can Use ChainGuardian?

- **Financial Institutions**: Track large volumes of cryptocurrency transactions and flag potential AML concerns.  
- **Enterprises**: Manage private blockchains, consortium networks, or other enterprise-grade DLT setups.  
- **Developers & Researchers**: Build or test new blockchain-based solutions that need real-time data analysis.  
- **Crypto Enthusiasts**: Individuals wanting an easy-to-use tool to monitor and analyze their transactions.

---

## Platform Features

1. **Real-Time Transaction Tracking**  
   - *Overview*: Keep a live view of transactions occurring on the network.  
   - *Benefit*: Helps you catch anomalies or suspicious activity quickly.

2. **Risk Categorization (AI-Driven)**  
   - *Overview*: Automatically classify transactions as **Low**, **Medium**, or **High** risk.  
   - *Benefit*: Enables faster compliance checks and reduces manual review time.

3. **Smart Assistant**  
   - *Overview*: A conversational interface that can answer questions, provide insights, or guide you through transaction details.  
   - *Benefit*: Makes analyzing transaction data more accessible to non-technical stakeholders.

4. **Blockchain Explorer**  
   - *Overview*: A straightforward explorer for your custom or public blockchain.  
   - *Benefit*: Simplifies the process of looking up blocks, transactions, addresses, and more.

5. **Developer-Friendly APIs**  
   - *Overview*: Easily integrate with the platform's backend to programmatically fetch or push data.  
   - *Benefit*: Allows developers to build customized workflows or dashboards.

---

## Repository Structure

- **ChainGuardianAI** ([Link](https://github.com/harshvs4/ChainGuardianAI))  
  - Platform page built with Yarn (React/Node.js)  
  - `server.js` for blockchain transaction retrieval  
  - `model/predict_risk.py` for AI-based risk classification

- **ChainGuardianBlockchain** ([Link](https://github.com/harshvs4/ChainGuardianBlockchain))  
  - Foundational blockchain components (custom blockchain code or smart contracts)

- **ChainGuardianAssistant** ([Link](https://github.com/harshvs4/ChainGuardianAssistant))  
  - Smart assistant logic in Python  
  - `main.py` (or `main:app`) for the backend to handle user queries

---

## Setup and Installation

### ChainGuardianAI

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harshvs4/ChainGuardianAI.git
   cd ChainGuardianAI
   ```

2. **Install dependencies (using Yarn)**:
   ```bash
   yarn install
   ```

3. **Environment Variables (optional)**:  
   Configure any environment variables (e.g., blockchain endpoint) in an `.env` file if needed.

4. **Build the platform**:
   ```bash
   yarn build
   ```

5. **Start the platform**:
   ```bash
   yarn start
   ```
   The application typically runs at `http://localhost:3000`.

---

### ChainGuardianAssistant

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harshvs4/ChainGuardianAssistant.git
   cd ChainGuardianAssistant
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Linux/Mac
   # or
   venv\Scripts\activate     # For Windows
   ```

3. **Install required packages**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Smart Assistant**:
   ```bash
   uvicorn main:app --reload --port 5000 --loop asyncio
   ```
   The assistant’s API will be available at `http://localhost:5000`.

---

### ChainGuardianBlockchain

1. **Set up your blockchain environment**:  
   Refer to the ChainGuardianBlockchain repository for instructions on spinning up a local blockchain node or deploying smart contracts as necessary.

---

## Running the Platform

### Launching the Web Platform

1. **Navigate to the ChainGuardianAI folder**:
   ```bash
   cd ChainGuardianAI
   ```

2. **Run the platform**:
   ```bash
   yarn build
   yarn start
   ```

3. **Access the UI**:  
   Open `http://localhost:3000` in your browser.

---

### Launching the Smart Assistant

1. **Navigate to the ChainGuardianAssistant folder**:
   ```bash
   cd ChainGuardianAssistant
   ```

2. **Activate the virtual environment**:
   ```bash
   source venv/bin/activate  # For Linux/Mac
   # or
   venv\Scripts\activate     # For Windows
   ```

3. **Run the assistant**:
   ```bash
   uvicorn main:app --reload --port 5000 --loop asyncio
   ```

---

### Launching the Blockchain Server

1. **Navigate to the ChainGuardianAI folder**:
   ```bash
   cd ChainGuardianAI
   ```

2. **Run the blockchain server**:
   ```bash
   node server.js
   ```

---

## Risk Prediction

1. **Navigate to the model directory**:
   ```bash
   cd ChainGuardianAI/model
   ```

2. **Activate the virtual environment**:
   ```bash
   source venv/bin/activate  # For Linux/Mac
   # or
   venv\Scripts\activate     # For Windows
   ```

3. **Run the risk prediction script**:
   ```bash
   python predict_risk.py
   ```

---

## Contributing

I welcome contributions, bug reports, and feature requests! Feel free to open an issue or submit a pull request in any of the following repositories:

- [ChainGuardianAI Issues](https://github.com/harshvs4/ChainGuardianAI/issues)
- [ChainGuardianBlockchain Issues](https://github.com/harshvs4/ChainGuardianBlockchain/issues)
- [ChainGuardianAssistant Issues](https://github.com/harshvs4/ChainGuardianAssistant/issues)

---

## License

This project is licensed under the MIT License. See the LICENSE file in each repository for details.

Thank you for using ChainGuardian! If you have any questions or feedback, feel free to reach out via GitHub or submit an issue.
