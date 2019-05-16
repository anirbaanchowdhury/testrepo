var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World Second Third 2:44PM IST");
});

app.listen(8080);