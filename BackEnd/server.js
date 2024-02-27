const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

// MongoDB connection
mongoose.connect('mongodb+srv://ganeshshatrugna:rj8DyBUfzjaTdO2k@mornon.gdze2yg.mongodb.net/userdetails', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Database connected') })
    .catch((error) => { console.error('Error connecting to MongoDB:', error) });

// Define a schema for the data
const buttonDataSchema = new mongoose.Schema({
    totalButtonsPressed: Number
});

// Create a model based on the schema
const ButtonData = mongoose.model('ButtonData', buttonDataSchema);

// Middleware
app.use(express.json());
app.use(cors());

// Endpoint to receive data from Arduino
app.post('/data', (req, res) => {
    const { totalButtonsPressed } = req.body;

    // Create a new document using the ButtonData model
    const newData = new ButtonData({ totalButtonsPressed });

    // Save the new document to the database
    newData.save()
        .then(() => {
            console.log('Data inserted successfully');
            res.send('Data inserted successfully');
        })
        .catch((error) => {
            console.error('Error inserting data into MongoDB:', error);
            res.status(500).send('Internal server error');
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
