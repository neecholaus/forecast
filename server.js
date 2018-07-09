var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

console.log('Starting server...');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('.'));

app.get('/', function(request, response) {
  response.send('FORECAST');
});

app.listen(8000);
