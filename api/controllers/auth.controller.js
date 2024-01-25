const User  = require("../models/user.models")
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

module.exports =signup