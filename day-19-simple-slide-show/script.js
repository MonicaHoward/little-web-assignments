var backButton = document.querySelector('.back-button');
var nextButton = document.querySelector('.next-button');
var playButton = document.querySelector('.play-button');
var  slideShow = document.querySelector('.slide-show');


var currentImage = 0;


var images = [

'images/chuck-norris-death.jpg',

'images/chuck-norris-guns.jpg',

'image/chuck-norris-password.jpg'

];
  document.getElementById("slide-show").src="images/";
//slideShow.src = showImages[0];

nextButton.addEventListener('click', function (){
  

/*  for (var i = 0; i < showImages.length; i++) {

  currentImage += 1;

    if (currentImage === showImages.length) {

      currentImage = 0;
    }
  }
  slideShow.src = showImages[currentImage];
});

console.log(slideShow);

//previousButton.addEventListener('click', function (){

  //currentImage -= 1;

//  if (currentImage === 0) {
  //  currentImage === showImages.length;

//});

*/
