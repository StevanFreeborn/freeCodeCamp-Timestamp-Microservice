var express = require('express');
var app = express();

// enable CORS to allow FCC to test project.
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// serve static files from the public directory
app.use(express.static('public'));

// request to root directory serves index.html file
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// initial test route
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});