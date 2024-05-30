const mongoose = require("mongoose")

const Message = mongoose.Schema({
    name : {
        type:String,
        require : true
    },
    email : {
        type:String,
        require : true
    },
    message : {
        type:String,
        require : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("message",Message)