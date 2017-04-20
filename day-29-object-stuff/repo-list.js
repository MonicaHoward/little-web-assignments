

(function() {


  var repoList = document.querySelector('#repo-list');

function loadThemRepos(url) {

  $.ajax ({
    url: url
  })
  .done(function(data) {
    if (data.length === 0) {
      alert('no repos');

    }
      else {
    data.forEach(function(repo) {
      var li = document.createElement('li');
      li.textContent = repo.name;
      repoList.appendChild(li);
    })
  })
}

  GithubApp.loadThemRepos = loadThemRepos;

}());
