



  //toggleThisButton.addEventListener('click', function(){

    //var eachButton = document.getElementsByClassName('.bubble');

///var toggleThisButton = document.querySelectorAll('.bubble');


//  for (var i = 0; i < toggleThisButton.length; i++); {


//    toggleThisButton[i].addEventListener('click', function(){

  //  toggleThisButton[i].classList.toggle('on');
    //});

//  };



  //  toggleThisButton[i].addEventListener('click', function() {

//  toggleThisButton.classList.toggle('on');


var theButton = document.querySelector('#add-thing');
var ol = document.querySelector('ol');


ol.addEventListener('click', function(evt) {
  console.log(evt);
  if(evt.target.tagname === 'LI'){
    
  }
  evt.target.classList.toggle('on');
});

theButton.addEventListener('click' function () {

  var li = document.createElement('li');

  li.textContent = 'new';

  var ol = document.querySelector('ol');

  ol.appendChild(li);
})
