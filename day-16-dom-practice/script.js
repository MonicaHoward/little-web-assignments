

var clickMeButton =document.querySelector('#click-me');

var clickCount = 0;

var countDisplay = document.querySelector('#countDisplay');


 clickMeButton.addEventListener('click', function() {
   alert('clicked');



   console.log('click-count', clickCount++);



    countDisplay.textcontent = 'You clicked' + clickCount + ' times.';


 });
var addToListButton = document.querySelector('#add-to-list');
var listOfStuff = document.querySelector('#list-of-stuff');


addToListButton.addEventListener('click', function () {


  // var currentHTML = listOfStuff.innerHTML;
  // currentHTML += '<li>steak</li>';
  // listOfStuff.innerHTML = currentHTML;

var newItem = document.createElement('li');
newItem.textContent = 'steak';
newItem.classList.add('tasty');
listOfStuff.appendChild(newItem);



});


var favoriteFoodsList = document.querySelector('#favorite-foods');

var foods =['steak', 'shrimp', 'wings', 'nachos', 'smoked brisket'];

  favoriteFoodsList.addEventListener(function () {
    for (var i = 0; i < favoriteFoodsList.length; i++) {
  var li = document.createElement('li');
        li.textContent = foods[i];
        favoriteFoodsList.appendChild(li);
}


var bookThing = document.querySelector('#book-thing');

var books = [
  {
    name: "Intelligent Person's Guide to Mud",
    author: "Frank Lyn",
    pageCount: 60
  },
  {
    name: 'Tao of Steak',
    author: 'Eric Sowell',
    pageCount: 135
  },
  {
    name: 'Books are Great',
    author: 'Guy Pants',
    pageCount: 190
  },
  {
    name: 'How to be a Sucker',
    author: 'Frank Lyn',
    pageCount: 83
  }
];



    for (var i = 0; i < books.length; i++) {

      var li = document.createElement('li');
      li.textContent = books[i].name;
      bookThing.appendChild(li);

      var nameAuthorPages = [];
      books[i].name + ' (' + books[i].author + ' - ' + book[i].pageCount + ('pages');
    }

    output += books[i].pageCount;
    output / 2;
