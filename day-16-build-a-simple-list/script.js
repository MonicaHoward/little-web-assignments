



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
var theList = document.querySelector('#the-list');



theButton.addEventListener('click', function(evt) {
  for (var i = 0; i < groceryList.length; i++) {

    var addLI = document.createElement('li');
    var listItem = document.createTextNode(groceryList[i]);
    // listItem.textContent = groceryList[i];
    //
    // addLI.appendChild(listItem);
    //
    //
    // console.log(addLI);
  }
addLI  += groceryList[i] ;
console.log(addLI);
// theList.appendChild(addLI);
 });


  // var addLI = document.createElement('li');
  // var listItem = document.createElement('href')
  // listItem.textContent.groceryList[i];
  //
  // theList.appendChild.addLI.appendChild.listItem;
  //
  //
  //
  //
  //
  //
  //
  // }
  // // theList.appendChild(addLI);

// });
