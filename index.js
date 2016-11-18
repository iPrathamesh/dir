var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.raw({
  limit: '50mb'
}))
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

app.get('/api/ping', function (req, res) {
  console.log('pong');
  res.status(200).send("Pong");
});

app.get('/api/mkdir', require('./app/dir').mkdir);

var portno = process.env.PORT || 3030
app.listen(portno);
console.log('API is running on local port ' + portno);