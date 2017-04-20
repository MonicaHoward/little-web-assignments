(function() {

  var userList = document.querySelector('#users-list');



  $.ajax ({
    url: 'https://api.github.com/search/users?q=capybara'
  })
  .done(function(data) {
    data.items.forEach(function(user) {
      var li = document.createElement('li');
      li.textContent = user.login;
      li.setAttribute('data-repos', users.repos_url);
      usersList.appendChild(li);
    });
  });

    userList.addEventListener('click', function(evt) {ßß
      if(evt.target.tagName === 'LI') {
        var repoUrl = evt.target.getAttribute('data-repos');
        alert(repoUrl);

        GithubApp.loadThemRepos(repoUrl);
      }

    });

}());
