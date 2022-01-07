"use strict";

const fizz = require('./fizzbuzz')

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const intro = (
  "\nThe excercise is about iterating from 1 to N and displaying:\n\n" +
  " 1) Fizz when the number is divisable by 3,\n" +
  " 2) Buzz when the number is divisable by 5,\n" +
  " 3) FizzBuzz when the number is divisable by both 3 and 5.\n\n"
);

const outro = "\nThat's all folks!!!"

console.log(intro);

readline.question("Gimme a natural number (N) = ...\n\n", (N) => {

  const n = Number(N);

  if (isNaN(n)) {
    console.log("Ooopsie! That doesn't look like a natural number.");
  } else {
    for (let i = 1; i <= n; i++) {
      console.log(fizz.fizzbuzz(i));
    }
  }
  readline.close();
  console.log(outro);
})