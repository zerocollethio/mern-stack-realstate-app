const User  = require("../models/user.models")
const bcrypt=require("bcryptjs")
const signup=async (req,res)=>{
const {userName,email,password} = req.body


try{
    const hashedpassword=await bcrypt.hash(password,10)
    
const newUser = new User({
    userName:userName,email:email,password:hashedpassword
})
    await newUser.save()
    res.status(201).json("new user created sucessfully")
}catch(err){
res.status(500).json(err.message)
}
}

module.exports =signup