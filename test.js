

var express = require('express');
var app = express();
var path = require('path');
const _dirname = "C:/Users/Matt/Desktop/Node Sandbox";

app.use(express.static(path.join(_dirname+"/Scripts")));
app.use(express.static(path.join(_dirname+"/HTML")));
app.use(express.static(path.join(_dirname+"/Styles")));

app.listen(8080, function() {
  console.log("Server opened...");
});
//so if it gets a request with nothing there, it will do this
app.get('/' , function(req, res) {
  res.sendFile(path.join(_dirname+'/index.html'));
});

var os = require('os');
var interfaces = os.networkInterfaces();

Object.keys(interfaces).forEach(function (interfaces) {
    console.log(interfaces);


});
