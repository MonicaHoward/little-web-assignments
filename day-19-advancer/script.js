var previousButton = document.querySelector('#previous-button');

var nextButton = document.querySelector('#next-button');

var display = document.querySelector('#display');

var currentMessageIndex = 0;

var messages = [
  'hello',
  'good-day',
  'good morning',
  'buenos dias',
  'goodnight',
  'good evening',
];

display.textContent = messages[0];

nextButton.addEventListener('click', function(){

  currentMessageIndex += display;

if (currentMessageInded === messages.length) {
  currentMessagesIndex = 0;
}

  messages[currentMessageIndex += 1
  display.textContent=messages[currentMessagesIndex];

})
