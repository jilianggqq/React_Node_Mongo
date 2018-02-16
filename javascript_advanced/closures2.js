// 1. Maintain State between function calls
// IIFE
(function() {
  let addFunc = function() {
    // local to closure and hold the value inbetween multiple calls.
    //For scenarios like this, Closure is the best candidate for maintaining state between function calls without using globals. Let’s see how.
    let total = 0;
    return function(val) {
      total += val;
      return total;
    };
  };

  let add = addFunc();
  console.log(add(3)); // 3
  console.log(add(20)); // 23
  console.log(add(15)); // 38
})();

// 2. Partial application, a.k.a Currying
(function() {
  // Lets add Curry method to Function so that we can call it on any function we want.
  Function.prototype.curry = function() {
    var fn = this,
      args = Array.prototype.slice.call(arguments);
    return function() {
      // fn which is stored in Closure is the function showMessage.
      // args are also stored in the Closure. for showError, are ['error', 'top'].
      return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    };
  };

  // Core method.
  function showMessage(type, position, message) {
    console.log("showing [" + message + "] of type [" + type + "] at [" + position + "].");
  }

  // Create special versions of Core method using Currying.
  var showError = showMessage.curry("error", "top");
  var showInfo = showMessage.curry("info", "bottom");

  // Call our special methods.
  showError("Not good.");
  showInfo("You better know this.");
})();

// 3. Private methods in JavaScript
(function() {
  let makeCar = () => {
    let fuel = 0;
    // accelerate fillGas burnFuel
    let burnFuel = () => {
      fuel -= 10;
      console.log("burning 10 fuel, current fuel is " + fuel);
    };
    return {
      accelerate: () => {
        // when we are using this method. fuel and burnFuel are all in the Closure.
        if (fuel < 10) {
          console.log("no enough fuel, please refill it.");
        } else {
          burnFuel();
          console.log("accelerating");
        }
      },
      fillGas: () => {
        if (fuel >= 100) {
          console.log("fuel is full");
        } else {
          fuel += 10;
          console.log("adding fuel, current fuel is " + fuel);
        }
      }
    };
  };

  let car = makeCar();
  car.accelerate();
  car.fillGas();
  car.fillGas();
  car.accelerate();
})();
