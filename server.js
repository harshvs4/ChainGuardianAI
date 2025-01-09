const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON payloads

const PORT = 5004;

app.post('/save-csv', (req, res) => {
  const { csvData } = req.body;

  if (!csvData || !Array.isArray(csvData)) {
    console.error('Invalid CSV data received');
    return res.status(400).json({ error: 'Invalid CSV data' });
  }

  // File path to save the CSV file
  const filePath = path.join(__dirname, 'files', 'transactions.csv');

  // Ensure the directory exists
  const directoryPath = path.join(__dirname, 'files');
  if (!fs.existsSync(directoryPath)) {
    console.log('Creating "files" directory');
    fs.mkdirSync(directoryPath);
  }

  // Prepare CSV content
  const headers = Object.keys(csvData[0]).join(',');
  const rows = csvData.map((row) => Object.values(row).join(',')).join('\n');
  const csvContent = `${headers}\n${rows}`;

  // Write the CSV content to the file
  fs.writeFile(filePath, csvContent, (err) => {
    if (err) {
      console.error('Error writing CSV file:', err);
      return res.status(500).json({ error: 'Failed to save CSV file' });
    }

    console.log(`CSV file saved successfully at: ${filePath}`);
    res.status(200).json({ message: 'CSV saved successfully.', path: filePath });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});