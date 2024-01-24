const express=require('express')
const app=express()


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(3000,(eror)=>{
    if(eror){
        console.log(eror)
    }
    else{
        console.log('Server is running on port 3000')
    }
})