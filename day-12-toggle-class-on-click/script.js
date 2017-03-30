var onOff = document.querySelector('.the-button');

onOff.addEventListener('click', function(){
  onOff.textContent = 'OFF';
  onOff.classList.toggle('on');
});
