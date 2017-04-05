var sentences = 'I ate the steak. I think the steak is declicious. I want more steak';

var words sentences.split(' ');

var dict = {};

for (var i = 0; i < words.length; i++) {

var word = words[i];

  if (dict[word] === undefined) {

  }
  else {
    dict[word] += 1;
  }
}

console.log(dict);
