const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let receivedData = [];

// Endpoint to receive data from the Lua script
app.post('/data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  receivedData.push(data);
  res.sendStatus(200);
});

// Endpoint to serve received data
app.get('/data', (req, res) => {
  res.json(receivedData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
