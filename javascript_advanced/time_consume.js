console.time("loop");
for (var i = 0; i < 1000000; i += 1) {
  // Do nothing
  var a;
  a += 3;
}
console.timeEnd("loop");
