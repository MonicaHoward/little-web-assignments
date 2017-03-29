var theHeader = document.querySelector('#the-header');
theHeader.textContent = 'Javascript Changed Me!';



function clickTheHeader () {
  console.log('clicked!');
  theHeader.textContent = 'Changed on click listener';
}

theHeader.addEventListener('click', clickTheHeader);

theHeader.classList.add('hovery')





var theP = document.querySelector('.the-p');

theP.addEventListener('click', function () {
  console.log('clicked the paragraph.');
}
)
