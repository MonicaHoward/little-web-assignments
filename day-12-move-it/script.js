var downButton = document.querySelector('#down-button');

var topValue = 0;

downButton.addEventListener('click', function () {

  topValue += 5;

  var theCircle = document.querySelector('.circle');

  theCircle.style.top = topValue + 'px';
});

var upButton = document.querySelector('#up-button');



upButton.addEventListener('click', function (){
  topValue -=25;

  var theCircle = document.querySelector('.circle');

  theCircle.style.topValue + 'px';
});
