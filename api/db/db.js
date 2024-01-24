const mongoose=require('mongoose')



exports.db=async ()=>{
    try{
        mongoose.connect(process.env.MONGO,{
        })
        console.log('Connected to database')
    }catch(err){
        console.log(err)
    }
}