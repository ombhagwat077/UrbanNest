// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/contact_form', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define Mongoose schema for contact form data
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// Define route to handle form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Create a new Contact document
    const newContact = new Contact({ name, email, message });

    // Save the new contact to the database
    newContact.save()
        .then(() => {
            res.status(200).send({ message: 'Email sent successfully' });
        })
        .catch(error => {
            res.status(500).send({ error: 'Error saving contact data' });
        });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
