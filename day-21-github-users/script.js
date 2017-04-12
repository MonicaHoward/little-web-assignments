var promise =

$.ajax ({
  url: 'https://api.github.com/search/users?q=supermariobro'
});

var githubUsersMario = document.querySelector('#github-users');

var searchQuery = document.querySelector('#search-query');
var nextButton = document.querySelector('#next-button');
var previousButton = document.querySelector('@previous-button');
var page = 1;

//var totalResutls;



//function makeAjaxCall()

searchQuery.addEventListener('keyup', function(evt) {
  if (evt.keycode !== 13);
  return;
});
/* to change github users to all after changing url in ajax to return repository search

githubUsersMario.innerHTML = '';
*/

promise.done(function(data){

  //totalResutls = data.total_count;
  //pageCount = Math.ceil(totalResults/30)

  for (var i=0; i < data.items.length; i++) {

  console.log('each object', data.items[i]);

    var addLI = document.createElement('li');

    var userLogin = document.createElement('h2');
    userLogin.textContent = data.items[i].login;
    addLI.appendChild(userLogin);

    var userURL = document.createElement('p');
    userURL.textContent = data.items[i].html_url;
    addLI.appendChild(userURL);

    var userScore = document.createElement('p');
    userScore.textContent = data.items[i].score;
    addLI.appendChild(userScore);



githubUsersMario.appendChild(addLI);

  }
//nextButton.addEventListener('click', fucntion)

 page += 1;


});
