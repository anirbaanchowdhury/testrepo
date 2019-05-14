var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World Second");
});

app.listen(4000);