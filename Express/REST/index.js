var express = require('express');

var api = require('./routes');


var port = 8008;
var app = express();

app.use('/api' , api);

app.listen(port , () => console.log("Node Server running at http://127.0.0.1:" + port + "....."));
