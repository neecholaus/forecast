const express = require('express');
const handlebars = require('express-handlebars');
const bp = require('body-parser');
const axios = require('axios');

var app = express();

console.log('Starting server...');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('.'));
app.use(bp.urlencoded({
  extended: true
}));
app.use(bp.json());

app.get('/', function(request, response) {
  response.render('index');
});

app.post('/weather', function(request, response) {
  response.header('Content-Type', 'text/javascript');
  let key = 'GETYOUROWN';
  let lat = request.body.lat;
  let lng = request.body.lng;
  let url = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

  axios.get(url).then(function(res) {
    response.json(res.data);
  }).catch(function(error) {
    console.log(error);
  });
});

app.listen(8000);
