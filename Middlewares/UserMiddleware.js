const jwt = require("jsonwebtoken");

const verifyTokenUserMiddleware = (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message:"You are not authenticated noToken Provided"});
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message:"Invalid Token"});
    }
}
module.exports = verifyTokenUserMiddleware;