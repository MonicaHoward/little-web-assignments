var walk = document.querySelector('#walk');
var stop = document.querySelector('#stop');
var sprite = document.querySelector('#sprite-sheet');

var positionX = 0;
var positionY= -418;

window.addEventListener('keydown', function(evt) {
  console.log(evt.keyCode);
  if (evt.keyCode === 37) {
    positionY = -0;
  }
  else if (evt.keyCode === 39) {
    positionY = -418;
  }
});

stop.addEventListener('click', function() {
  console.log('stop', intervalId);
  clearInterval(intervalId);
});

walk.addEventListener('click', function() {
  intervalId = setInterval(animate, 500);
});

function animate() {

  positionX -= 120;

  sprite.style.backgroundPositionX = positionX + 'px';
  sprite.style.backgroundPositionY = positionY + 'px';
}

var intervalId = setInterval(animate, 500);
