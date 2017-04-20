function View(selector) {
  this.el = document.querySelector(selector);
}

View.prototype.text = function(txt) {
  this.el.textContent = txt;
}

var aDiv = new View('#a-div');
console.log(aDiv.el);
aDiv.text('I have text');
