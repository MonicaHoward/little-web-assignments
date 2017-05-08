var arr = [2, 4, 0, 100, 4, 11, 2602, 36];

var even = [];
var odd = [];

function findOutlier(arr){
  for (var i = 0; i < arr.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push.arr[i];
    }
      else {
      odd.push.arr[i];
      }
  }
}
function compare(even, odd) {
  if (even.length > odd.length) {
    return odd;
  }
    else if (even.length < odd.length) {
    return even;
    }
}
