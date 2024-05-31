const mongoose = require("mongoose")
const db = process.env.DB
mongoose.connect("mongodb+srv://vedprakash182001:EhJ1Ve0jSUIAPJeb@cluster0.wibqnb5.mongodb.net/",{
}).then(()=>{
    console.log("Connection Successfull")
}).catch(()=>{
    console.log("No connection")
})