var promise =

$.ajax ({

  url: 'http://localhost:7691/api/favoritefoods'



});

var foodsList =  document.querySelector('#foods-list');

promise.done(function(data) {

  for (var i = 0; i < data.foods.length; i++) {

  var addLI = document.createElement('li');

  addLI.textContent = data.foods[i];

  foodsList.appendChild(addLI);
}


});
