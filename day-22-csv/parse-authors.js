var fs = require('fs');


var fileData = fs.readFileSync('authors.csv', 'utf-8');

var lines = fileData.split('\n');

for (var i = 1; i <lines.length - 1; i++) {
  var line = lines[i];
  var pieces = line.split(',');
  console.log('name-', pieces[0]);


}
console.log('--------------------');

fileData = fs.readFile('authors.csv', 'utf-8', function () {

  console.log('async data', data);

  var lines = data.split('\n');
});
