var navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', function() {

  if (window.scrollY > 1000) {
    navContainer.style.display = 'none';
    console.log('am I scrolling down?')
  }
  else {
    navContainer.style.display = 'block';
    console.log('am I scrolling up?')
  }


});
