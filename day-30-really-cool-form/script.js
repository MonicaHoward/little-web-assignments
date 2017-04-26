
var firstSection = document.querySelector('#first-section');
var signUpButton = document.querySelector('#sign-up-button');

var nameSection = document.querySelector('#name-section');
var namePrevious = document.querySelector('#namePrevious');
var nameNext = document.querySelector('#nameNext');

var ageSection = document.querySelector('#age-section');
var agePrevious = document.querySelector('#agePrevious');
var ageNext = document.querySelector('#ageNext');

var occupationSection = document.querySelector('#occupation-section');
var occupationPrevious = document.querySelector('#occupationPrevious');
var occupationNext = document.querySelector('#occupationNext');

var thankYouSection = document.querySelector('#thank-you');


signUpButton.addEventListener('click', function(evt) {
  evt.preventDefault(signUpButton);
  firstSection.style.display = 'none';
  nameSection.style.display = 'block';
});
namePrevious.addEventListener('click', function(evt) {
  evt.preventDefault(namePrevious);
    firstSection.style.display = 'block';
    nameSection.style.display= 'none';
    ageSection.style.display = 'none';
    occupationSection.style.display = 'none';
    thankYouSection.style.display = 'none';
});
nameNext.addEventListener('click', function(evt) {
  evt.preventDefault(nameNext);
    firstSection.style.display = 'none';
    nameSection.style.display= 'none';
    ageSection.style.display = 'block';
    occupationSection.style.display = 'none';
    thankYouSection.style.display = 'none';
});
agePrevious.addEventListener('click', function(evt) {
  evt.preventDefault(agePrevious);
    firstSection.style.display = 'none';
    nameSection.style.display= 'block';
    ageSection.style.display = 'none';
    occupationSection.style.display = 'none';
    thankYouSection.style.display = 'none';
});
ageNext.addEventListener('click', function(evt) {
  evt.preventDefault(ageNext);
    firstSection.style.display = 'none';
    nameSection.style.display= 'none';
    ageSection.style.display = 'none';
    occupationSection.style.display = 'block';
    thankYouSection.style.display = 'none';
});
occupationPrevious.addEventListener('click', function(evt) {
  evt.preventDefault(occupationPrevious);
    firstSection.style.display = 'none';
    nameSection.style.display= 'none';
    ageSection.style.display = 'block';
    occupationSection.style.display = 'none';
    thankYouSection.style.display = 'none';
});
occupationNext.addEventListener('click', function(evt) {
  evt.preventDefault(occupationNext);
    firstSection.style.display = 'none';
    nameSection.style.display= 'none';
    ageSection.style.display = 'none';
    occupationSection.style.display = 'none';
    thankYouSection.style.display = 'block';
});
