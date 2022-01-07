"use strict";

const fizzbuzz = (n) => {
  let output = n;

  if (n % 15 == 0) {
    output = "FizzBuzz";
  } else if (n % 3 == 0) {
    output = "Fizz";
  } else if (n % 5 == 0) {
    output = "Buzz";
  }
  
  return output;
}

module.exports.fizzbuzz = fizzbuzz;