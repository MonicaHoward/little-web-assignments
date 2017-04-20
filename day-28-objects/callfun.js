function myLog() {
  var arr = Array.prototype.slice.call(arguments, 0);
  console.log(arguments);
}

mylog('hello', 'Monica');
