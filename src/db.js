const mongoose = require("mongoose")
const db = process.env.DB
mongoose.connect(db,{
}).then(()=>{
    console.log("Connection Successfull")
}).catch(()=>{
    console.log("No connection")
})