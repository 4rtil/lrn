"use strict";

const assert = require('assert')
const fizz = require('./fizzbuzz')

console.log(JSON.stringify(fizz, null, 4));

it("should return FizzBuzz for 15", () => {
  assert.equal(fizz.fizzbuzz(15), "FizzBuzz");
});

it("should return Fizz for 6", () => {
  assert.equal(fizz.fizzbuzz(6), "Fizz");
});

it("should return Buzz for 50", () => {
  assert.equal(fizz.fizzbuzz(50), "Buzz");
});