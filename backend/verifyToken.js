const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) =>{
    const token = req.cookies.token 
    if(!token){
        return res.status(401).json({error: 'You are not authenticated'})
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, data) =>{
        if(err){
            return res.status(403).json({error: 'Token is not valid'})
        }
        req.userId = data.id
        console.log("passed")
        next()
    })
}

module.exports = verifyToken