var pageReadTime = document.querySelector('#read-time-holder');
var sectionOne = document.querySelector('#section-one').innerHTML;
var sectionTwo = document.querySelector('#section-two').innerHTML;
// var addLI = document.querySelector('#read-time-holder');

sectionOneWords = sectionOne.split(' ');
sectionTwoWords = sectionTwo.split(' ');

sectionOneCount = sectionOneWords.length;
sectionTwoCount = sectionTwoWords.length;

totalWordCount = sectionOneCount + sectionTwoCount;


var readTime = totalWordCount / 230;

console.log(Math.ceil(readTime) + " read time in minutes");



var readTimeHolder = document.querySelector('#read-time-holder').innerHTML = Math.ceil(readTime) + " min. read";
//
// addLI.addEventListener('onload', function() {
//   console.log("whats going on?");
//   addLI = document.createElement('li');
//   var showReadTime = document.textContent(readTime);
//   addLI.appendChild(showReadTime);
// });
//
// addLI;
