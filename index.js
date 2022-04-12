var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//multer for file upload
var multer = require('multer');
// var upload = multer({ dest: 'public/uploads/' });
var upload = multer();

// database initialization
require('./database');

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

// for parsing multipart/form-data
app.use(upload.array()); 

//link pubic static files
app.use(express.static('public'));

//Import all routes in main page.
var router = require("./routers")


// app.use(router)
//use routes in app.
app.use("/test",router)


app.listen(3000);
