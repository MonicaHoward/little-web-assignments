var foods = [
  'steak',
  'nachos',
  'wings',
  'fried shrimp',
  'pizza',
  'burger'
];

var foodListOL = document.querySelector('#food-list');

for (var i = 0; i < foods.length; i++) {

  var li = document.createElement('li');

  li.textContent = foods[i];

  foodListOL.appendChild(li);

}

input.addEventListener('keyup', function() {
  console.log('keyup' input.value);
});
