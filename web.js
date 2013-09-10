var express = require('express');
var fs = require('fs');
var htmfile = "index.html";
 
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//    fs.readFileSync(outfile);
    var html = fs.readFileSync(htmlfile).toString();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
