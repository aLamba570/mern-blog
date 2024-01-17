// Importing required packages and modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const cookieParser = require('cookie-parser');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Enable CORS with specified options
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse cookies
app.use(cookieParser());

// Importing route modules
const authRoute = require('./routes/auth');
const userRoute = require('./routes/User');
const postRoute = require('./routes/Post');
const commentRoute = require('./routes/Comment');

// Set up routes for different functionalities
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

// Serve static images from the 'images' directory
app.use('/images', express.static(path.join(__dirname, "/images")));

// Image upload configuration using Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const originalExtension = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + originalExtension);
    },
});

const upload = multer({ storage: storage });

// Endpoint for handling file uploads
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process in case of connection failure
    }
};

// Start the server and connect to MongoDB
app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Backend server is running');
});
