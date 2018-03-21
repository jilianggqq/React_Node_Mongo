Set.prototype.con = function(setB) {
  var newRe = new Set();
  for (const item of setB) {
    if (this.has(item)) {
      newRe.add(item);
    }
  }
  return newRe;
};

function result(a1, a2) {
  var s1 = new Set([...a1]);
  var s2 = new Set([...a2]);
  return s1.con(s2);
}

var arrA = [1, 2, 3, 4];
var arrB = [3, 4, 5, 6];
var myresult = result(arrA, arrB);
console.log(myresult);
