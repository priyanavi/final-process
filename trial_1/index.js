const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const otpGenerator = require('otp-generator');
const dbConfig = require('./db.config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const pool = new sql.ConnectionPool(dbConfig);
const poolConnect = pool.connect();

pool.on('error', err => {
    console.error('SQL Pool Error:', err);
});

async function executeQuery(query) {
    try {
        await poolConnect;
        const request = pool.request();
        const result = await request.query(query);
        return result.recordset;
    } catch (err) {
        console.error('SQL Error:', err);
        throw err;
    }
}

// Registration Page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

// Handle Registration
app.post('/register', async (req, res) => {
    const { username, password, email, phone } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await executeQuery(`SELECT * FROM Users WHERE Phone='${phone}' OR Email='${email}'`);
        if (existingUser.length > 0) {
            res.status(400).send('<script>alert("User already registered."); window.location.href = "/login";</script>');
            return;
        }

        // Insert the new user into the database
        await executeQuery(`INSERT INTO Users (Username, Password, Email, Phone) VALUES ('${username}', '${password}', '${email}', '${phone}')`);

        // Redirect to login page after registration
        res.redirect('/login');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error registering user. Please try again.');
    }
});

// Login Page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

// Handle Login
app.post('/login', async (req, res) => {
    const { username, phone } = req.body;

    try {
        // Check if the user exists in the database
        const existingUser = await executeQuery(`SELECT * FROM Users WHERE Username='${username}' AND Phone='${phone}'`);
        if (existingUser.length === 0) {
            // If user doesn't exist, redirect to register page
            res.redirect('/register');
            return;
        }

        // User authentication successful, redirect to verify OTP page
        res.redirect(`/verify-otp?phone=${phone}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error logging in. Please try again.');
    }
});

// Verify OTP Page
app.get('/verify-otp', (req, res) => {
    const { phone } = req.query;
    res.sendFile(path.join(__dirname, '/public/verify-otp.html'));
});

// Handle OTP Verification
app.post('/verify-otp', (req, res) => {
    const { phone, otp } = req.body;
    
    // Retrieve stored OTP from session or database
    
    // Compare submitted OTP with stored OTP
    
    // If OTP is valid, proceed to welcome page
});

// Welcome Page
app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/welcome.html'));
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
