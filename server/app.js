// import files and packages up here
var data = require('./data.json')


// create your express server below
var express = require('express')
var app = express();

// add your routes and middleware below
var morgan  = require('morgan')
app.use(morgan('dev'))

app.get('/data', function(request,response){
    response.json(data);
});


app.get('/', function(request,response){
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end();
});


// finally export the express application
module.exports = app;
