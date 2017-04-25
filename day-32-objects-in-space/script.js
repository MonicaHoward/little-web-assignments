function counter() {
  this.count = 0;
}


Counter.prototype.createDOM = function(x, y) {
  var div = document.createElement('div');
  div.textContent ='0';
  div.style.left = evt.pageX + 'px';
  div.style.top = evt.pageY + 'px';
  document.body.appendChild(div);
  return div;
}

var self = this;
div.addEventListener('click', function() {
  console.log('clicking', this);
  self.count += 1;
  div.textCount = self.count;
});

document.body.addEventListener('click', function(evt) {
  console.log('x', evt.pageX, 'y', evt.pageY);

  if (evt.target.tagName === 'DIV') {

    else {
      var counter = new Counter();
      var div = counter.createDOM(evt.pageX, evt.pageY);
      document.body.appendChild(div);
    }
  }
});
