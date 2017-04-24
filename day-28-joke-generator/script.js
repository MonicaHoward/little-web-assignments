var chuckFacts = [
  'Chuck Norris doesnt shower, he only takes blood baths.',
  'Time waits for no man. Unless that man is Chuck Norris.',
  'Chuck Norris doesnt wash his clothes. He disembowels them.',
  'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis.',
  'Chuck Norris can win a game of Connect Four in only three moves.',
  'Crop circles are Chuck Norris way of telling the world that sometimes corn needs to lie down.',
  'Chuck Norris once ate a whole cake before his friends could tell him there was a stripper in it.',
  'When Chuck Norris falls in water, Chuck Norris doesnt get wet. Water gets Chuck Norris.',
  'Chuck Norris can divide by zero.',
  'Chuck Norris always knows the EXACT location of Carmen SanDiego.',
  'When taking the SAT, write "Chuck Norris" for every answer. You will score over 8000.',
  'On his birthday, Chuck Norris randomly selects one lucky child to be thrown into the sun.',
  'Chuck Norris grinds his coffee with his teeth and boils the water with his own rage.',
  'Chuck Norris doesnt believe in Germany.',
  'Chuck Norris once ate an entire bottle of sleeping pills. They made him blink.'

];


var randomizerButton = document.querySelector('#randomizer-button');


randomizerButton.addEventListener('click', function(evt) {
  var randomChuckFacts = chuckFacts[Math.ceil(Math.random() * chuckFacts.length - 1)];

  var randomChuckFactsDisplay = document.querySelector;
    

  var addLI = document.querySelector('li');
  addLI.textContent = randomChuckFacts;

  randomChuckFactsDisplay.appendChild(addLI);
  console.log(randomChuckFacts);
});




// for (var i = 0; i < chuckFacts; i)
//   var theJokes = document.querySelector('#the-jokes');
//   theJokes.textContent = randomChuckFacts[i];
//   addLI.appendChild(addLI);
//
//
// alert(randomChuckFacts);
// });
// function randomChuckFacts {
//   chuckFacts[Math.ceil(Math.random() * chuckFacts.length)];
// }
