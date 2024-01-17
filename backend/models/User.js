// Import Mongoose module
const mongoose = require('mongoose');

// Define UserSchema using Mongoose Schema
const UserSchema = new mongoose.Schema({
    // Username of the user
    username: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness of usernames
    },
    // Email of the user
    email: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness of email addresses
    },
    // Password of the user
    password: {
        type: String,
        required: true,
    }
}, {
    // Enable timestamps to automatically add 'createdAt' and 'updatedAt' fields
    timestamps: true
});

// Export the User model based on UserSchema
module.exports = mongoose.model('User', UserSchema);
