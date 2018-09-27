var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var text = "hello";

app.get('/', function(request, response) {
	response.send(text);
	});

app.listen(3007, function() {
    console.log("Shop API running on port 3007...");
});
