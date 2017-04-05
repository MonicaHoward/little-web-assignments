var bubbleHolder = document.querySelector('.div-container');
bubbleHolder.addEventListener('click', function(evt) {
    console.log('clicked', evt);
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('on');

  }
});
