var express = require('express');

var app = express();


app.listen(7691, function() {

console.log('Listening at Port 7691.');

});


app.get('/api/favoritesoda', function(req, res) {

  var output = {
    sodas: ['Dr Pepper', 'Coke', 'IDC', 'Sunkist']
  };
  res.send(output);

});





app.use(express.static('public'));

app.get('/api/favoritefoods', function(req, res) {

  var output = {
    foods:['steak', 'shrimp', 'nachos', 'wings']
  };

  res.send(output);

});
