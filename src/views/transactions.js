import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Web3 from 'web3';

import Navbar8 from '../components/navbar8';
import Footer4 from '../components/footer4';
import './transactions.css';

const CONTRACT_ADDRESS = '0x31f2d51dea38979725336f8ff72f0d39d16e0da7';
const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "currency_type",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "gas_fee",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "transaction_type",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "geolocation_sender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "geolocation_receiver",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "watchlist_match",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "aml_kyc_verified",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "purpose_of_transaction",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "cross_border_transaction",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "regulatory_region",
        "type": "string"
      }
    ],
    "name": "storeTransaction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "transaction_id",
        "type": "string"
      }
    ],
    "name": "TransactionAdded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "complianceData",
    "outputs": [
      {
        "internalType": "string",
        "name": "transaction_type",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "geolocation_sender",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "geolocation_receiver",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "watchlist_match",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "aml_kyc_verified",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "purpose_of_transaction",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "cross_border_transaction",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "regulatory_region",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "coreTransactions",
    "outputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "currency_type",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "gas_fee",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllTransactionIds",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "transaction_id",
        "type": "string"
      }
    ],
    "name": "getTransactionDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "currency_type",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "gas_fee",
            "type": "uint256"
          }
        ],
        "internalType": "struct TransactionStore.CoreTransaction",
        "name": "core",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "transaction_type",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "geolocation_sender",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "geolocation_receiver",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "watchlist_match",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "aml_kyc_verified",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "purpose_of_transaction",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "cross_border_transaction",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "regulatory_region",
            "type": "string"
          }
        ],
        "internalType": "struct TransactionStore.ComplianceDetails",
        "name": "compliance",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactionIds",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const regionImages = {
  APAC: 'https://www.vhv.rs/dpng/d/449-4491998_image-asia-pacific-map-vector-hd-png-download.png',
  US: 'https://www.vhv.rs/dpng/d/326-3267140_3-regions-of-us-hd-png-download.png',
  EU: 'https://www.shutterstock.com/image-vector/blue-europe-map-countries-outline-260nw-2434226059.jpg',
};

const getRegionImage = (region) => {
  return regionImages[region] || 'https://via.placeholder.com/300'; // Default placeholder if region not found
};

// Delay Function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to Retry API Calls
const fetchWithRetry = async (fn, retries = 3, delayMs = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.message.includes('Too Many Requests') && i < retries - 1) {
        await delay(delayMs);
      } else {
        throw error;
      }
    }
  }
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null); // Track the hovered card

  useEffect(() => {
    const fetchTransactions = async () => {
		try {
		  const web3 = new Web3('https://sepolia.infura.io/v3/431809bc32c9490781aea4868ac63d63');
		  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
	  
		  // Fetch Transaction IDs
		  const transactionIds = await fetchWithRetry(
			() => contract.methods.getAllTransactionIds().call(),
			3,
			2000
		  );
	  
		  console.log('Fetched Transaction IDs:', transactionIds);
		  const limitedIds = transactionIds.slice(0, 40);
		  const batchSize = 5;
		  const fetchedTransactions = [];
	  
		  // Fetch Transaction Details
		  for (let i = 0; i < limitedIds.length; i += batchSize) {
			const batch = limitedIds.slice(i, i + batchSize);
			const batchTransactions = await Promise.all(
			  batch.map(async (id) => {
				const details = await fetchWithRetry(
				  () => contract.methods.getTransactionDetails(id).call(),
				  3,
				  2000
				);
				return {
				  id,
				  core: details[0],
				  compliance: details[1],
				};
			  })
			);
			fetchedTransactions.push(...batchTransactions);
			await delay(1000); // Delay between batches
		  }
	  
		  // Prepare data for risk scoring
		  const forRiskModel = fetchedTransactions.map((txn) => ({
			TransactionID: txn.id,
			Amount: Number(txn.core.amount) / 1e18,
			GasFee: Number(txn.core.gas_fee) / 1e18,
			Currency: txn.core.currency_type,
			Purpose: txn.compliance.purpose_of_transaction || 'N/A',
			Region: txn.compliance.regulatory_region || 'N/A',
			AML_KYC_Verified: txn.compliance.aml_kyc_verified ? 'Yes' : 'No',
			Geolocation_Receiver: txn.compliance.geolocation_receiver || 'N/A',
			Geolocation_Sender: txn.compliance.geolocation_sender || 'N/A',
		  }));
	  
		  // Call Flask endpoint for risk scoring
		  const response = await fetch('http://localhost:5005/predict-risk', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ transactions: forRiskModel }),
		  });
	  
		  if (!response.ok) {
			throw new Error(`Risk scoring failed: ${response.statusText}`);
		  }
	  
		  // Parse the JSON response once
		  const data = await response.json();
		  console.log('Received predictions:', data);
	  
		  const { predictions } = data;
	  
		  if (!predictions || !Array.isArray(predictions)) {
			throw new Error('Invalid response from risk prediction API.');
		  }
	  
		  // Merge predictions back into transactions
		  const finalTransactions = fetchedTransactions.map((tx) => {
			const matchedScore = predictions.find((sc) => sc.TransactionID === tx.id);
			return {
			  ...tx,
			  Risk_Category: matchedScore ? matchedScore.Risk_Category : 'Unknown',
			};
		  });
	  
		  setTransactions(finalTransactions);
	  
		  // Optionally save the data to CSV
		  await saveToCSV(finalTransactions);
		} catch (err) {
		  console.error('Error fetching transactions:', err.message);
		  setError('Failed to fetch transactions.');
		}
	  };
	  
    fetchTransactions();
  }, []);

  // Save to CSV (includes Risk_Category if present)
  const saveToCSV = async (data) => {
    try {
      const csvData = data.map((txn) => ({
        TransactionID: txn.id,
        Sender: txn.core.sender,
        Receiver: txn.core.receiver,
        Amount: Number(txn.core.amount) / 1e18,
        Currency: txn.core.currency_type,
        GasFee: Number(txn.core.gas_fee) / 1e18,
        Timestamp: new Date(Number(txn.core.timestamp) * 1000).toISOString(),
        Purpose: txn.compliance.purpose_of_transaction || 'N/A',
        Region: txn.compliance.regulatory_region || 'N/A',
        AML_KYC_Verified: txn.compliance.aml_kyc_verified ? 'Yes' : 'No',
        Geolocation_Receiver: txn.compliance.geolocation_receiver || 'N/A',
        Geolocation_Sender: txn.compliance.geolocation_sender || 'N/A',
        // Add risk category
        Risk_Category: txn.Risk_Category || 'Unknown',
      }));

      const response = await fetch('http://localhost:5004/save-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ csvData }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
      } else {
        console.error('Error saving CSV:', await response.text());
      }
    } catch (err) {
      console.error('Error:', err.message);
    }
  };

  const formatBigInt = (value, decimals = 18) =>
    Number(value) / Math.pow(10, decimals);

  return (
    <div className="transactions-container">
      <Helmet>
        <title>ChainGuardian AI - Transactions</title>
        <meta property="og:title" content="ChainGuardian AI Transactions" />
      </Helmet>

      {/* NAVBAR */}
      <Navbar8
        link1={<Fragment><span>Home</span></Fragment>}
        link2={<Fragment><span>Dashboard</span></Fragment>}
        link3={<Fragment><span>Regulatory Library</span></Fragment>}
        link4={<Fragment><span>AI Assistant</span></Fragment>}
        action1={<Fragment><span>Sign In</span></Fragment>}
        action2={<Fragment><span>Get Started</span></Fragment>}
      />

      {/* TRANSACTIONS */}
      <div className="transactions-content">
        <h1 className="transactions-heading">Blockchain Transactions</h1>
        <p className="transactions-description">
          Explore detailed records of blockchain transactions with real-time insights.
        </p>
        {error && <p className="transactions-error">{error}</p>}
        {transactions.length === 0 ? (
          <p className="transactions-empty">Loading transactions...</p>
        ) : (
          <div className="transactions-grid">
            {transactions.map(({ id, core, compliance, Risk_Category }, index) => (
              <div
                className="transaction-card"
                key={id}
                onMouseEnter={() => setHoveredCard(index)} // Set hovered card index
                onMouseLeave={() => setHoveredCard(null)}  // Clear hovered card index
              >
                <img
                  src={getRegionImage(compliance.regulatory_region)}
                  alt={`${compliance.regulatory_region} Map`}
                  className="transaction-card-image"
                />
                <div className="transaction-card-content">
                  <h3>Transaction ID</h3>
                  <p>
                    <strong>Transaction ID:</strong>{' '}
                    {hoveredCard === index ? id : `${id.slice(0, 10)}...`}
                  </p>
                  <div className="transaction-details">
                    <p>
                      <strong>Sender:</strong>{' '}
                      {hoveredCard === index
                        ? core.sender
                        : `${core.sender.slice(0, 10)}...`}
                    </p>
                    <p>
                      <strong>Receiver:</strong>{' '}
                      {hoveredCard === index
                        ? core.receiver
                        : `${core.receiver.slice(0, 10)}...`}
                    </p>
                    <p>
                      <strong>Amount:</strong> {formatBigInt(core.amount)}{' '}
                      {core.currency_type}
                    </p>
                    <p>
                      <strong>Gas Fee:</strong> {formatBigInt(core.gas_fee)} ETH
                    </p>
                    <p>
                      <strong>Timestamp:</strong>{' '}
                      {new Date(Number(core.timestamp) * 1000).toLocaleString()}
                    </p>
                    <p>
                      <strong>Purpose:</strong>{' '}
                      {compliance.purpose_of_transaction || 'N/A'}
                    </p>
                    <p>
                      <strong>AML/KYC Verified:</strong>{' '}
                      {compliance.aml_kyc_verified ? 'Yes' : 'No'}
                    </p>
                    <p>
                      <strong>Region:</strong>{' '}
                      {compliance.regulatory_region || 'N/A'}
                    </p>
                    <p>
                      <strong>Gelocation of Sender:</strong>
                      {compliance.geolocation_sender || 'N/A'}
                    </p>
                    <p>
                      <strong>Gelocation of Receiver:</strong>
                      {compliance.geolocation_receiver || 'N/A'}
                    </p>
                    {/* NEW: Display Risk Category */}
                    <p>
                      <strong>Risk Category:</strong> {Risk_Category || 'Unknown'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <Footer4
        link1={<Fragment><span>Dashboard</span></Fragment>}
        link2={<Fragment><span>Regulatory Library</span></Fragment>}
        link3={<Fragment><span>AI Assistant</span></Fragment>}
        link4={<Fragment><span>Help/FAQ</span></Fragment>}
        link5={<Fragment><span>Settings</span></Fragment>}
        termsLink={<Fragment><span>Terms of Use</span></Fragment>}
        cookiesLink={<Fragment><span>Cookies Policy</span></Fragment>}
        privacyLink={<Fragment><span>Privacy Policy</span></Fragment>}
      />
    </div>
  );
};

export default Transactions;