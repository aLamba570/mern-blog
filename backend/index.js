const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const multer = require('multer')
const cookieParser = require('cookie-parser')
dotenv.config()
const app = express()


app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );


  app.use(express.json())
  app.use(cookieParser())
  const authRoute = require('./routes/auth')
  const userRoute = require('./routes/User')
  const postRoute = require('./routes/Post')
  const commentRoute = require('./routes/Comment')
  
  app.use('/api/auth', authRoute)
  app.use('/api/users', userRoute)
  app.use('/api/posts', postRoute)
  app.use('/api/comments', commentRoute)
    app.use('/images', express.static(path.join(__dirname, "/images")));  

//image upload

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

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process
    }
};




app.listen(process.env.PORT, () =>{
    connectDB()
    console.log('backend server is running')
})