var backButton = document.querySelector('.back-button');
var nextButton = document.querySelector('.next-button');
var playButton = document.querySelector('.play-button');
var slideShow = document.querySelector('.slide-show');


var currentImage = 0;


var showImages = [


'images/chuck-norris-death.jpg',

'chuck-norris-guns.jpg',

'chuck-norris-password.jpg'

];

slideShow.src = showImages[0];



//nextButton.addEventListener('click', function (){

//  currentImage += 1;

//  if (currentImage === showImages.length) {

//    currentImage = 0;
//  }

//previousButton.addEventListener('click', function (){

  //currentImage -= 1;

//  if (currentImage === 0) {
  //  currentImage === showImages.length;
  }
});



});

slideShow.src = showImages[currentImage];
