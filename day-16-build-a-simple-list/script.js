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
var theButton = document.querySelector('.button');

theButton.addEventListener('click', function() {
  var theList = document.querySelector('#the-list');

  function addStuff(x){
  for (var i = 0; i < groceryList.length; i++) {
    // function addStuff() {
      var addLI = document.createElement('li');
      addLI.textContent = groceryList[i];
      theList.appendChild(addLI);

      console.log(groceryList);

    }

    // }

  }
addStuff(groceryList);
});
