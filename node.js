const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    
    console.log("Form submission received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Respond to the client
    res.send(`
        <h2>Thank you, ${name}!</h2>
        <p>Your message has been received.</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <a href="/">Back to Home</a>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
