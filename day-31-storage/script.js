
var clickMe = document.querySelector('#click-me');

var count = Number(localStorage.getItem(''));
;
clickMe.innerHTML = count;

clickMe.addEventListener('click', function() {
  count += 1;
  localStorage.setItem('click', count);

  clickMe.innerHTML = count;
});

//localStorage.setItem('key', 'value')
//localStorage.getItem('key');




localStorage.getItem('');
