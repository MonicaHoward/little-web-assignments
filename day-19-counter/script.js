var theContainer = document.querySelector('.container');

var downButton = document.querySelector('.down-button');

var theCounter = document.querySelector('.the-counter');

var upButton = document.querySelector('.up-button');

var num = 0;

downButton.addEventListener('click', function() {

  if(num <= 0) {
    return;
  }

num -= 5;

theCounter.textContent=num;

});

upButton.addEventListener('click', function() {
 num += 5;

 theCounter.textContent=num;

});
