var connect = require('connect');
var http = require('http');
var compression = require('compression');
var bodyParser = require('body-parser');

var app = connect();

// gzip/deflate outgoing responses
app.use(compression());

// parse urlencoded request bodies into req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// respond to all requests
app.use(function(req, res){


    res.end('Hello from Connect!\n');
});

//create node.js http server and listen on port
http.createServer(app).listen(3000);