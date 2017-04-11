var promise =
$.ajax ({
  url: 'http://swapi.co/api/vehicles'
});

var vehiclesList = document.querySelector('#vehicles-list');

promise.done(function(data) {

for (var i = 0; i < data.results.length; i++) {

  var addLI = document.createElement('li');


  var vehicleImg = document.createElement('img');
  vehicleImg.textContent = data.results[i].url;
  addLI.appendChild(vehicleImg);

  var vehicleName = document.createElement('h2');
  vehicleName.textContent = data.results[i].name;
  addLI.appendChild(vehicleName);

  var vehicleModel = document.createElement('h3');
  vehicleModel.textContent = data.results[i].model;
  addLI.appendChild(vehicleModel);

  var vehicleManufacturer = document.createElement('h4');
  vehicleManufacturer.textContent = data.results[i].manufacturer;
  addLI.appendChild(vehicleManufacturer);




  vehiclesList.appendChild(addLI);
}



});
