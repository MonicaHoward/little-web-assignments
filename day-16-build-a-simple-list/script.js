var groceryList = [
  'sausage',
  'shrimp',
  'Texjoy',
  'Dr Pepper',
  'steak',
  'Tostitos',
  'cheese',
  'gum'
];

// var oneAtATime = 0;

var theButton = document.querySelector('.button');

theButton.addEventListener('click', function() {
  var theList = document.querySelector('#the-list');

  for (var i = 0; i < groceryList.length; i++) {
    // function addStuff() {
      var addLI = document.createElement('li');
      addLI.textContent = groceryList[i];
      theList.appendChild(addLI);

      console.log(groceryList);

    }

});
