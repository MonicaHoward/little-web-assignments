var promise =
$.ajax ({
  url: 'http://swapi.co/api/starships/'
});

var starshipList = document.querySelector('#starship-list');

promise.done(function(data) {

  for (var i = 0; i < data.results.length; i++) {
    var addLI = document.createElement('li');


    var starshipImg = document.createElement('img');
    starshipImg.textContent = data.results[i].url;
    addLI.appendChild(starshipImg);

    var starshipName = document.createElement('h2');
    starshipName.textContent = data.results[i].name;
    addLI.appendChild(starshipName);

    var starshipModel = document.createElement('h3');
    starshipModel.textContent = data.results[i].model;
    addLI.appendChild(starshipModel);

    var starshipManufacturer = document.createElement('h4');
    starshipManufacturer.textContent = data.results[i].manufacturer;
    addLI.appendChild(starshipManufacturer);




    starshipList.appendChild(addLI);
  }

});
