var express = require('express');
var fs = require('fs');
var outfile = "index.html";
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    fs.readFileSync(outfile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
