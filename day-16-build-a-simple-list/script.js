var theList = document.querySelector('#the-list');

var theButton = document.querySelector('.button');

var li = document.createElement('li');

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
    document.createElement('LI');

    li.textContent = groceryList[i];

  }

theList.appendChild(li);

});
