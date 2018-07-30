var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());


var distDir = __dirname + "/dist/";
app.use(express.static(distDir + "index.html"));


// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});