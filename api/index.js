const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
require('./db/db').db()


app.listen(3000,(eror)=>{
    if(eror){
        console.log(eror)
    }
    else{
        console.log('Server is running on port 3000')
    }
})