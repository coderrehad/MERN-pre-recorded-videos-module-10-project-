//Basic Package Import
const express = require('express');
const router = require('./src/routes/api');

const app = new express();
const bodyParser = require('body-parser');

//Security Middleware Package Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize  = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


//Database Package Import
const mongoose  = require('mongoose');

// Security Middleware Implement
app.use(helmet())
app.use(mongoSanitize())
app.use(xssClean())
app.use(hpp())
app.use(cors())


//BodyParser Implement
app.use(bodyParser.json())


//Request Ret Limit
const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);

let URI = "mongodb://localhost:27017/Todo";
let Option = {User:'',Pass:'', autoIndex: true};

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected Successfully"))
    .catch((err) => {
        console.error(err);
    });


//Routing Implement
app.use('/api/v1',router);

//Undefined Routing Implement
app.use('*',(req,res)=>{
    res.status(404).json({
        status: "fail",
        data: "Not Found"
    })
})



module.exports = app;

