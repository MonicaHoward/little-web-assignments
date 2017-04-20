var nums = [1, 18, 9, 14, 5];

var

var shuffled = [];

while(nums.length > 0) {
  var randomIndex = Math.floor(Math.random() * nums.length);
  shuffled.push(nums[randomIndex]);
  nums.splice(randomIndex, 1);
}
console.log(shuffled);

nums.shuffle = function() {
  console.log('You called shuffled LOL');
}
nums.shuffle();

// Array.prototype.shuffle = function() {
//   console.log(this);
// }

// function randomNumer(arr) {
//   Math.ceil(Math.random(arr * 1));
// }
// console.log(arr);

function Animal() {

}

Animal.prototype.makeNoise = function () {
  console.log('grrrrrr';)
}

var fido = new Animal();
fido.makeNoise()
console.log(fido.makeNoise);
