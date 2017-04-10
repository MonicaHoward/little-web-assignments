var promise =

$.ajax ({
  url: 'http://swapi.co/api/people'
});

  var peopleList = document.querySelector('#people-list');


promise.done(function(data) {
  console.log('got the data!', data);
  console.log(data.count);
  console.log('results', data.results);

  for (var i = 0; i < data.results.length; i++) {
    console.log('each object', data.results[i]);

    var anLI = document.createElement('li');

    var nameH2 = document.createElement('h2');
    nameH2.textContent = data.results[i].name;
      anLI.appendChild(nameH2);

    var genderDiv = document.createElement('div');
    genderDiv.textContent = data.results[i].gender;
    anLI.appendChild(genderDiv);

    var hairColor = document.createElement('div');
    hairColor.textContent = data.results[i].hair_color;
    anLI.appendChild(hairColor);

    peopleList.appendChild(anLI);
  }
});

var promise =
$.ajax ({
  url: 'http://swapi.co/api/vehicles'
});

var vehiclesList = document.querySelector('#vehicles-list');

promise.done(function(data) {

for (var i = 0; i < data.results.length; i++) {

  var addLI = document.createElement('li');
}



});
