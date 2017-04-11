var foods = [
  'steak',
  'nachos',
  'wings',
  'fried shrimp',
  'pizza',
  'burger'
];

var foodListOL = document.querySelector('#food-list');

var input = document.querySelector('#query');

createList(foods);

input.addEventListener('keyup'. function() {

  var newList = [];


for (var i = 0; i < foods.length; i++) {

  if (foods[i].indexOf(input.value) > -1) {
    newList.push(foods[i]);
  }
}

  foodListOL.innerHTML = '';

  createList(newList);

)};


function CreateList(arr {

  for (var i = 0; i < arr.length; i++) {
    
  }
})



input.addEventListener('keyup', function() {
  console.log('keyup' input.value);
});
