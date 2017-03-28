console.log('hi');
var peeps = ['Stevie', 'Ali', 'Haley', 'Monica', 'Nikki', 'Sam', 'Brian', 'David'];

var randomNumber = Math.random();
randomNumber = randomNumber * peeps.length;
randomNumber = Math.floor(randomNumber);



console.log(randomNumber);

console.log(randomNumber, peeps[randomNumber]);



for (var i = 0; i < peeps.length; i++) {
  var randomNumber = Math.random();
  randomNumber = randomNumber * peeps.length;
  randomNumber = Math.floor(randomNumber);

  randomPeeps.push(peeps[randomNumber]);
}
