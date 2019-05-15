var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World Second Third");
});

app.listen(4000);