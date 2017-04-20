var promise =

$.ajax ({

    url: 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'

  });

var repoDirectory = document.querySelector('#repo-directory');
var searchQuery = document.querySelector('#search-query');


searchQuery.addEventListener('keyup', function(evt) {
  if (evt.keycode !== 13) {
    return;
  }
repoDirectory.innerHTML = '';

});




promise.done(function(data) {

  for (var i = 0; i < data.items.length; i++) {


      var addLI = document.createElement('li');

console.log(repoDirectory);

      var repoName = document.createElement('h3');
      repoName.textContent = data.items[i].name;
      addLI.appendChild(repoName);


      var repoOwner = document.createElement('h3');
      repoOwner.textContent = data.items[i].owner.login;
      addLI.appendChild(repoOwner);


  }
      // repoDirectory.appendChild(addLI);
      // console.log(repoDirectory);

});
