// Import Mongoose module
const mongoose = require('mongoose');

// Define CommentSchema using Mongoose Schema
const CommentSchema = new mongoose.Schema({
    // Comment text
    comment: {
        type: String,
        required: true,
    },
    // Post ID to which the comment belongs
    postId: {
        type: String,
        required: true,
    },
    // User ID who made the comment
    userId: {
        type: String,
        required: true,
    },
    // Author of the comment
    author: {
        type: String,
        required: true,
    },
}, {
    // Enable timestamps to automatically add 'createdAt' and 'updatedAt' fields
    timestamps: true
});

// Export the Comment model based on CommentSchema
module.exports = mongoose.model('Comment', CommentSchema);
