// Importing necessary modules and models
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Route to update user information
router.put("/:id", async (req, res) => {
    try {
        // Check if the request body includes a password
        if (req.body.password) {
            // Generate a salt and hash the password
            const salt = await bycrypt.genSalt(10);
            req.body.password = await bycrypt.hashSync(req.body.password, salt);
        }

        // Update the user and get the updated user information
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });

        // Respond with the updated user information
        res.status(200).json(updateUser);
    } catch (err) {
        // Handle errors and respond with an error status
        res.status(500).json(err);
    }
});

// Route to delete user
router.delete("/:id", async (req, res) => {
    try {
        // Delete user, posts, and comments associated with the user
        await User.findByIdAndDelete(req.params.id);
        await Post.deleteMany({ userId: req.params.id });
        await Comment.deleteMany({ userId: req.params.id });

        // Respond with a success message
        res.status(200).json("User deleted");
    } catch (err) {
        // Handle errors and respond with an error status
        res.status(500).json(err);
    }
});

// Route to get a user by ID
router.get("/:id", async (req, res) => {
    try {
        // Find the user by ID
        const user = await User.findById(req.params.id);

        // Exclude the password from the user information
        const { password, ...info } = user._doc;

        // Respond with the user information
        res.status(200).json(info);
    } catch (err) {
        // Handle errors and respond with an error status
        res.status(500).json(err);
    }
});

// Export the router
module.exports = router;
