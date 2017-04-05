var redBox = document.querySelector ('.red-box');


window.addEventListener('scroll', function(){

  if (window.scrollY > 1000) {

  redBox.style.display = 'none';
}
else {
  redBox.style.display = 'block';
}

});

window.addEventListener('resize', function(){

console.log(resizing!)

});
