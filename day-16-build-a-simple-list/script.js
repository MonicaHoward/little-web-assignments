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


console.log(theList);
theButton.addEventListener('click', function(evt) {

  for (var i = 0; i < groceryList.length; i++) {

  var li = document.createElement('li');
  li.textContent = groceryList[i];
  theList.appendChild(li);



}


     //theList.appendChild(addLI);
  //}
//theList.appendChild(groceryList);
});
