var promise =
 $.ajax ({
   url: '/api/favoritesoda'

 });

 var sodaList = document.querySelector('#soda-list');

 promise.done(function(data){


   for (var i = 0; i < data.sodas.length; i++) {

   var addLI = document.createElement('li');

   addLI.textContent = data.sodas[i];

   sodaList.appendChild(addLI);
 }


 });
