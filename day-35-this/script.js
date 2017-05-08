function Dude(name) {
  this.name = name;
}

Dude.prototype.sayMyName = function() {
  setTimeout(function() {
    console.log('My name is', this.name);
  }, 0);
}
Dude.prototype.sayMyName2 = function() {
  let callback = function(){

  }
  setTimeout(callback, 0);
};

var theDude = new Dude('Stevie');
theDude.sayMyName();
theDude.sayMyName();
