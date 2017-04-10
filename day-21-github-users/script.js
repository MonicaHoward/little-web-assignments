var promise =

$.ajax ({
  url: 'https://api.github.com/search/users?q=supermariobro'
});

var githubUsersMario = document.querySelector('#github-users');


promise.done(function(data){

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



});
