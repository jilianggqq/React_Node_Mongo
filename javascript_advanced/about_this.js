// 1. Basic Understanding about this.
// console.log(this);
// true, because this is really window.
if (typeof window === undefined) {
  var window = global;
}

console.log("(this === window)", this === window);

// function printThis() {
//   // this is also pointing to the global object, but not undefined.
//   // the reason is calling printThis equals to window.printThis();
//   console.log(typeof this);
// }
// printThis();

(function() {
  var aism = {
    checkThis: function() {
      // first
      console.log("this === global: ", this === global);
      // 2nd
      //   console.log("this === aism: ", this === aism);
      console.log(this.name);
    },
    name: "aism original object",
    isObject: true
  };
  // 1st print aism, 2nd print true. This points to the object who calls the function.
  // that means, it depends on the calling context(So so important!!!!).
  aism.checkThis();
  // 1st print global(window), 2nd print false.
  var check = aism.checkThis;
  check();

  check.call({ name: "check call object!!" });
});

// 2. A tricky problem for this.
(function() {
  var aism2 = {
    checkThis: function() {
      // 'use strict';
      // first
      // console.log(this);
      // 2nd
      console.log("this === aism2: ", this === aism2);

      var checkThis2 = function() {
        // here, we must take a great attention that 'this' here does not point
        // to aism2 but the window. Because the calling context is window.
        // this is really we dont wanted.
        //   console.log(this);
        // we can use 'use strict' to avoid this.
        console.log("in checkThis2 this === aism2: ", this === aism2);
        console.log("in checkThis2 this === global: ", this === global);
        this.info = "checkThis2";
      };
      checkThis2();
      console.log("after checkThis2, this is: ", this);

      // ES6 fixed this problem, this here is still aism2.
      let checkThisArrow = () => {
        console.log("in checkThisArrow this === aism2: ", this === aism2);
        console.log("in checkThisArrow this === global: ", this === global);
        this.info = "checkThisArrow";
      };
      checkThisArrow();
      console.log("after checkThisArrow, this is: ", this);
    },
    name: "aism2",
    isObject: true
  };
  aism2.checkThis();
  console.log();
})();

// 3. How to fix the above problem.
var aism3 = {
  checkThis: function() {
    // 'use strict';
    // we can use a variable to point to this.
    var self = this;
    console.log(self);
    // 2nd
    console.log(self === aism3);

    var checkThis2 = function() {
      console.log(self);
      self.info = "checkThis2";
    };
    checkThis2();
    console.log(self.info);
  },
  name: "aism3",
  isObject: true
};
aism3.checkThis();
