const User  = require("../models/user.models")
const jwt=require('jsonwebtoken')
const bcrypt=require("bcryptjs")
const errorHandler=require("../utils/error")
const signup=async (req,res,next)=>{
const {userName,email,password} = req.body


try{
    const hashedpassword=await bcrypt.hash(password,10)
    
const newUser = new User({
    userName:userName,email:email,password:hashedpassword
})
    await newUser.save()
    res.status(201).json("new user created sucessfully")
}catch(err){
next(err)
}
}


const signin=async (req,res,next)=>{
    try{
        const {email,password}=req.body
        const validuser=await User.findOne({email:email})
        // console.log(validuser)
        if(!validuser) return next(errorHandler(404,"user not found"))
        const passwordMatch=await bcrypt.compare(password,validuser.password)
        if(!passwordMatch) return next(errorHandler(401,"invalid credentialls"))
        const token=jwt.sign({_id:validuser._id},process.env.JWT_SECRET)
        const {password:pass,...others}=validuser._doc
        res.cookie("acssesToken",token,{httpOnly:true,expires:new Date(Date.now()+1000*60*60*12)}).status(200).json(others)
            
    }catch(err){
        next(err)
    }
 
    
}

module.exports ={signup,signin}