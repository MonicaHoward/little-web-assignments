var fs = require ('fs');

var fileData = fs.readFileSync('HOF.csv', 'utf-8');

var rows = fileData.split('\r\n');

var arr = [];

for (var i = 0; i < rows.length; i++) {

  var lines = rows[i];

  var data = lines.split(',');

var person = values[0];
var year = values[0]
var votes = values[5];
  arr.push ({
    personId: person,
    year: year,
    votes: votes,

  });

  console.log(arr);
  }
