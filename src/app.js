const path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");

var app = express();


//middlewares

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));


// routes

app.use('/',indexRoutes);


//sentings

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!'+__dirname);
});
