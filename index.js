const bodyParser = require("body-parser");
const express = require("express")
const { body, validationResult } = require('express-validator')
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const Messsage = require('./src/model')

// Enable CORS for all routes
app.use(cors());
require('dotenv').config()
const PORT = process.env.PORT|8000



require("./src/db")
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:true
}))




app.post("/message", [
    body('name', 'Name must be of minimum 5 length').isLength({ min: 5 }),
    body('email', 'Enter a valid email ').isEmail(),
    body('message', 'Message must be of minimum 5 length').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status : false,
            type : 1,
            error: errors.array()
        })
    }
    try {
        const {name, email, message} = req.body
        const user = await Messsage.create({
            name,
            email,
            message
        })
        res.status(200).json({
            status : true,
            message : "Message saved successfully"
        })

    } catch (err) {
        res.status(500).json({
            error: err,
            type:2,
            message: "Intern server error"
        })
    }
})

app.use('/',(req,res)=>{
    res.status(404).json({
        status : false,
        type : 2,
        message : "Page not found"
    })
})


app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`server is running at ${PORT}`)
})