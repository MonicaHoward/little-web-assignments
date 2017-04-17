var numbers = [ 11, 45, 56, 321, 56, 89, 12, 45, 2];

 var count = 0;


numbers.sort(function(a, b) {
  if (a > b) {
    return false;
  }
});
console.log(numbers, count)

// var bigger = numbers.map(function(x) {
//   return x + 100;
// });
//
// console.log('bigger', bigger);
//
// var lis = numbers.map(function(x) {
//
//   return '<li>' + x + '</li>';
//
// });
//
// console.log('list item', lis);



// numbers.forEach(function(num) {
//   var output = [];
//   if (numbers[i] > 50) {
//
//   }
// console.log(output)
// })
//
//
//
//
// var output = numbers.filter(function(num) {
//   return num > 50;
// });
//
//
// filter()
//
// function filter(arr, func) {
//   for (var i = 0; i < arr.length; i ++) {
//     if (true) {
//       output.push(arr[i]);
//     }
//   }
//   return output;
// }
//

// function loopAndConsoleLog(arr) {

//   for (var i = 0; i < arr.length; i++) {
//      //console.log(arr[i]);
//   }
//
// }
//
// loopAndConsoleLog(numbers);
//
// numbers.forEach(function(num) {
//   console.log(num);
// });
//
// function forEvery(arr, func) {
//   for (var i = 0; i < arr.length; i++) {
//     funct(arr[i]);
//   }
// }
//
// forEvery(numbers, function(num) {
//   console.log(num);
// });
//
// /// New EXAMPLE
//
// forEvery(['Bob', 'Frank'] function() {
//
// })
