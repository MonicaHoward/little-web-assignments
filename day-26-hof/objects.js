var peeps = [
  { firstName: 'Jane', lastName: 'Jones', age: 12 },
  { firstName: 'John', lastName: 'Smith', age: 18 },
  { firstName: 'Fred', lastName: 'Johnson', age: 11 },
  { firstName: 'Jaime', lastName: 'Oliver', age: 9 },
  { firstName: 'Ragan', lastName: 'Perkinson', age: 1 },
  { firstName: 'Chris', lastName: 'Smith', age: 5 },
  { firstName: 'George', lastName: 'Jungle', age: 17 },
  { firstName: 'Mike', lastName: 'Tyson', age: 16 },
  { firstName: 'Jimmy', lastName: 'Smith', age: 21 },
  { firstName: 'Chris', lastName: 'Thompson', age: 17 }
];
var newPeeps = [];

newPeeps = peeps.map(function(x) {
  return {
    firstName: x.firstName,
    lastName: x.lastName,
    fullName: x.firstName + ' ' + x.lastName,
    age: x.age
  };
});
console.log(newPeeps);

// var names = peeps.map(function(x) {
// return x.firstname;
// });
// console.log(names);

// var firstAndLast = peeps.map(function(x, y) {
//   return x.firstName + ' ' + x.lastName;
// });
// console.log(firstAndLast);




// peeps.forEach(function(x) {
//   console.log(x.firstName);
// })

// var output = peeps.filter(function(young) {
//   return young.age > 15;
// });
// console.log('younger than 15');
//
// var OlderThanFifteen = peeps.filter(function(older) {
//
//   return older.age >= 15;
//
// });
// console.log('older than 15')
//
// var Chrises = peeps.filter(function(yoNameChris) {
//   return yoNameChris.firstname === 'Chris';
//
// });
//   console.log(Chrises);
// var haveI = peeps.filter (function(i) {
//
//   return i.firstName.indexOf(i) !== -1;
//
// });
// console.log('i have an i');
