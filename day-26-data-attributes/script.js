

var clickMe = document.querySelector('#click-me');
var swapiPeople = document.querySelector('swapi-people');
// var addLI = document.querySelector('li');
var listItemTemplateText = document.querySelector('#list-item-template').innerHTML;
// var peopleLI = document.querySelector('li');
var detailsDiv = document.querySelector('#details');
vard detailTemplate = document.querySelector(#detail-template).innerHTML;

clickMe.addEventListener('click', function() {
  var att = clickMe.getAttribute('data-id');
  alert(att);

});

var ajaxData;

$.ajax({
  url: 'http://swapi.co/api/people'
})

.done(function(data) {

  var html = '';

    for (var i = 0; i < data.results.length; i++) {

      html += Mustache.render(listItemTemplateText, {index: i, name: data.results[i].name});

  }
swapiPeople.innerHTML = html;

});

swapiPeople.addEventListener('click', function(evt) {
  var index = evt.target.getAttribute('data-index');

  var person = ajaxData.results[index];

  var html = Mustace.render(detailTemplate, person);
  detailDiv.innerHTML = html;

    if (evt.target.tagName === 'LI') {

    alert(evt.target.getAttribute('data-index'));

    detailsDiv.textContent = data.results[i].eye_color;
    detailsDiv.textConten = data.results[i].birth_year;

  }

});
