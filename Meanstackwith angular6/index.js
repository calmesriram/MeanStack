var express = require('express');
var app = express();
var cors = require('cors');

var appRoutes = require("./Routes/appRoutes");
var mongoose = require('mongoose');
var axios = require('axios');
// var bodyParser = require('body-parser');


mongoose.connect('mongodb://127.0.0.1:27017/meanDb',{useMongoClient:true});
app.use(cors());
// app.use(axios());
app.use('/',appRoutes);
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

app.listen(8080);
