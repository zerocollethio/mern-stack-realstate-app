const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
require('./db/db').db()
const user=require('./routes/user.route.js')
const auth=require('./routes/auth.route.js')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/users',user)
app.use('/api/users/auth',auth)
app.listen(3000,(eror)=>{
    if(eror){
        console.log(eror)
      console.log('Server is not running on port 3000')
    }
    else{
        console.log('Server is running on port 3000')
    }
})