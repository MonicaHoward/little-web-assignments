var firstNameInput = document.querySelector('#first-name');
var lastNameInput = document.querySelector('#last-name');
var nextButton = document.querySelector('#next-button');
var previousButton = document.querySelector('#previous-button');
var submitButton = document.querySelector('#submit-button');
var nameSection = document.querySelector('#age-section');
var ageSection = document.querySelector('#age-section');
var occupationSection = document.querySelector('#occupation-section');
var nextButton1 = document.querySelector('#next-button-1');
// function showNextSection(section) {
//   if (section.style.display !== 'none') {
//     section.style.display = 'none';
//   }
//     else {
//       section.style.display = 'block';
//     }
// }
// function showButton(button) {
//   if (button.section.display == 'none') {
//     button.style.display = 'block';
//   }
// }
nextButton1.addEventListener('click', function() {
  SectionRules(nameSection, ageSection);
});

function SectionRules(hideSection, showSection) {
  hideSection.style.display = 'none';
  showSection.style.display = 'block';
}
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
