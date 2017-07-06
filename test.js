

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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
app.post('/summer' , function(req, res) {
  console.log("got a summer post");
  var startingNode = req.body.startingNode;
  var endingNode = req.body.endingNode;
  console.log(req.body);

});

/*var os = require('os');
var interfaces = os.networkInterfaces();

Object.keys(interfaces).forEach(function (interfaces) {
    console.log(interfaces);


});*/
