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
app.get("/api/greeting", (req, res) => {
  res.json({greeting: 'hello world'});
});

// date route
app.get("/api/:date?", (req, res) => {

  let dateString = req.params.date

  // no date provided
  if (dateString == undefined) {

    res.json({
      unix: new Date().getTime(),
      utc: new Date().toUTCString()
    });

    return;
  }

  // attempt to parse string param value to date
  date = new Date(dateString);

  // if parsing param value as string fails
  // try parsing param value to number then to date 
  if (date == 'Invalid Date') {
    date = new Date(parseInt(dateString));
  }

  // if cannot parse param value as string or number to date
  // respond with error message.
  if (date == 'Invalid Date') {
    res.json({
      error: 'Invalid Date'
    });

    return;
  }

  // otherwise respond with object that contains
  // date in milliseconds and a utc string
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  })

});

// listen for requests
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});