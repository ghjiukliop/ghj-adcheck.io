const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Use the port provided by the hosting service or default to 3000

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);

    // Here you would handle the data (e.g., save to a database)
    
    res.status(200).send('Data received successfully');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
