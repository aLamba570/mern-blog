// Import necessary modules and models
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hashSync(password, salt);

        // Create a new user with the hashed password
        const newUser = new User({ username, email, password: hashpassword });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user data
        res.status(200).json(savedUser);
    } catch (err) {
        // Handle errors and respond with a 500 status code
        res.status(500).json(err);
    }
});

// Login an existing user
router.post('/login', async (req, res) => {
    try {
        // Find the user by their email
        const user = await User.findOne({ email: req.body.email });

        // If user not found, respond with a 404 status code
        if (!user) {
            return res.status(404).json("User not found");
        }

        // Compare the provided password with the hashed password in the database
        const match = await bcrypt.compare(req.body.password, user.password);

        // If passwords do not match, respond with a 400 status code
        if (!match) {
            return res.status(400).json("Wrong password");
        }

        // Create a JWT token with user information and sign it
        const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: "20d" });

        // Exclude the password from the user information
        const { password, ...info } = user._doc;

        // Set the token as a cookie and respond with user information
        res.cookie("token", token).status(200).json(info);
    } catch (err) {
        // Handle errors and respond with a 500 status code
        res.status(500).json(err);
    }
});

// Logout a user by clearing the token cookie
router.get('/logout', (req, res) => {
    try {
        res.clearCookie("token", { sameSite: "none", secure: true }).status(200).json("Logged out");
    } catch (err) {
        // Handle errors and respond with a 500 status code
        res.status(500).json(err);
    }
});

// Refetch user information using the token
router.get('/refetch', async (req, res) => {
    // Retrieve the token from the cookie
    const token = req.cookies.token;

    // Verify the token and respond with user information or an unauthorized status code
    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
            res.status(401).json("Unauthorized");
        }
        res.status(200).json(data);
    });
});

// Export the router
module.exports = router;
