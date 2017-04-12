var promise =

$.ajax ({

    url: 'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'

  });

var repoList = document.querySelector('#repo-directory');

var searchQuery = document.querySelector('#search-query');



promise.done(function(data) {
  for (var i = 0; i < data.items.length; i++) {


    console.log(data.items);
  }

});
