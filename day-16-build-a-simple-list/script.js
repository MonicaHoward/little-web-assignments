var theList = document.querySelector('#the-list');

var theButton = document.querySelector('.button');

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

theButton.addEventListener('click', function(evt) {

  for (var i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);

    var addLI = document.createElement('li');

    addLI.textContent = groceryList[i];





  }

theList.appendChild(addLI);

});
