var backButton = document.querySelector('.back-button');
var nextButton = document.querySelector('.next-button');
var playButton = document.querySelector('.play-button');
 var slideShow = document.querySelector('.slide-show');

 var advancer;

var currentImage = 0;

var images = [
'images/chuck-norris-death.jpg',
'images/chuck-norris-guns.jpg',
'images/chuck-norris-password.jpg'
];


slideShow.src = images[currentImage];

backButton.addEventListener('click', function() {
  currentImage -= 1;
  if (currentImage === -1) {
    currentImage = images.length -1;
  }
  slideShow.src = images[currentImage];
});

nextButton.addEventListener('click', function() {
  currentImage += 1;
  if (currentImage === images.length) {
    currentImage = 0;
  }
  slideShow.src = images[currentImage];
});

playButton.addEventListener('click', function() {
  if (advancer === undefined) {
    advancer = setInterval(function() {
      currentImage ++;
      slideShow.src = images[currentImage];
    }, 500);
    playButton.src = 'stop';
  }
  else {
    clearInterval(advancer);
    advancer = undefined;
    playButton.src = 'play';
  }
});
