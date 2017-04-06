var navSystem = document.querySelector('.nav-bar');

var isHidden = false

window.addEventListener('scroll', function (evt) {

  if (window.scrollY > 1000 && isHidden === false) {
   console.log('hiding!');
   navSystem.style.display = 'none';
   isHidden = true;
 }
 else if (window.scrollY <= 1000 && isHidden === true) {
   console.log('showing!');
   navSystem.style.display = 'block';
   isHidden = false;
 }

});
