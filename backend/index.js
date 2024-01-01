const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config()
const app = express()


app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );



const authRoute = require('./routes/auth')
const userRoute = require('./routes/User')
const postRoute = require('./routes/Post')
const commentRoute = require('./routes/Comment')
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};




app.listen(process.env.PORT, () =>{
    connectDB()
    console.log('backend server is running')
})