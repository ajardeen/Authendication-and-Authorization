const userData = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const {username,email,password} = req.body;
    const checkedUser = await userData.findOne({username});
    if(!checkedUser){
        const user = await userData.create({username,email,password:password});
        res.status(201).json({ message: "Successfully Registered", user });
    }else{
        res.status(401).json({message:"This user is already Registered try login"});
    }
   
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Registration Failed" });
  }
};
const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userData.findOne({email});
        if(user){
            const isPasswordCorrect = await bcrypt.compare(password,user.password);
            if(isPasswordCorrect){
                const Token = jwt.sign({id:user._id,role:'Admin'},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});
                res.status(200).json({message:"Successfully Login",token:Token});
                
            }else{
                res.status(401).json({message:"Invalid Credentials"});
            }
        }else{
            res.status(404).json({message:"User Not Found"});
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}
const getUserInfo =async (req,res)=>{
   try{
    const {user}=req;
    res.status(200).json({message:"User Found",user});
   }catch(error){
    console.log(error.message);
    res.status(500).json({message:"Internal Server Error"});
   }
}

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
