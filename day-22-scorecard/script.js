var fs = require('fs');

var fileData = fs.readFileSync('scorecard.csv', 'utf-8');

console.log('---------------------------------------');
console.log('75th Percentile ACT ScoreCard by School');
console.log('---------------------------------------');

var lines = fileData.split('\r');

for (var i = 1; i < lines.length -1; i++) {
  var line = lines[i];
  var pieces = line.split(',');
  if (pieces[32] !== 'NULL') {
    console.log('________________________________________________________________');
    console.log('Institution Name - ', pieces[3]);
    console.log('COMPOSITE ACT SCORE -', pieces[32]);
  }
}
