var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');
var nextButton = document.querySelector('#next-button');
var previousButton = document.querySelector('#previous-button');
var submitButton = document.querySelector('#submit-button');
var nameSection = document.querySelector('#age-section');
var ageSection = document.querySelector('#age-section');
var occupationSection = document.querySelector('#occupation-section');
var thankYouSection = document.querySelector('#thank-you');
var nextButton1 = document.querySelector('#next-button-1');
var nextButton2 = document.querySelector('#next-button-2');

function sectionRules(hideSection, showSection) {
  if (hideSection.style.display !== 'none') {
  hideSection.style.display = 'none';
  showSection.style.display = 'block';
  }
}

nextButton.addEventListener('click', function(evt) {
  evt.preventDefault(nextButton);
  nameSection.style.display = 'none';
  ageSection.style.display = 'block';

});
 nextButton2.addEventListener('click', function(evt) {
   evt.preventDefault(nextButton2);
   sectionRules(ageSection, occupationSection);
 });
submitButton.addEventListener('click', function () {
  evt.preventDefault(submitButton);
  sectionRules(occupationSection, thankYouSection)
});
// nextButton.addEventListener('click', function() {
//
//   // showNextSection(nameSection);
//   // showButton(previousButton);
//   nameSectionRules();
// });



// hidePreviousSection(nameSection);
// nextButton.addEventListener('click', function (){
//   function
// });



// previousButton.addEventListener('click', function() {
//
// });

// nameSection.addEventListener(function() {
//
// });



// function(showHideSection)


// nextButton.addEventListener('click', function() {
//
//   console.log('whats going on here');
//     var section = document.getElementById('age-Section');
//     if (section.style.display !== 'none') {
//         section.style.display = 'none';
//     }
//     else {
//         section.style.display = 'block';
//     }




// nextButton.addEventListener('click', function() {
//   if (ageSection.style.display == 'none') {
//         ageSection.style.display == 'none';
//             console.log('whats happening');
//   }
//       // if (ageSection.style.display !== 'none') {
      //     ageSection.style.display = 'none';
      // }
      // else {
      //     ageSection.style.display = 'block';
      // }

//
//
// previousButton.addEventListener('click', function(evt) {
//
// });
// submitButton.addEventListener('click', function(evt) {
//
// });
