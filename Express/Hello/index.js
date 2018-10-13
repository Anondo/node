var express = require('express');

var app = express();

app.get('/' , (request , respond) => respond.send("Hello World!"));

app.listen(8008 , () => console.log("Server now running..."));
