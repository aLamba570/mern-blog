// Import Mongoose module
const mongoose = require('mongoose');

// Define PostSchema using Mongoose Schema
const PostSchema = new mongoose.Schema({
    // Title of the post
    title: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness of post titles
    },
    // Description of the post
    desc: {
        type: String,
        required: true,
    },
    // Path to the photo associated with the post
    photo: {
        type: String,
        required: true,
    },
    // Username of the author of the post
    username: {
        type: String,
        required: true,
    },
    // User ID of the author of the post
    userId: {
        type: String,
        required: true,
    },
    // Categories associated with the post (array of strings)
    categories: {
        type: Array,
    }
}, {
    // Enable timestamps to automatically add 'createdAt' and 'updatedAt' fields
    timestamps: true
});

// Export the Post model based on PostSchema
module.exports = mongoose.model('Post', PostSchema);
