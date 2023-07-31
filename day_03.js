// Q Write a program to print “hello world” n times, take n as input from the user.

console.log("Q1 Enter a number to print Hello World!");

// take the input from user
num = Number(require("prompt-sync")()());

// run a for loop till n is less than or equals to the value
for (let i = 0; i < num; i++) {
  console.log("Hello World!");
}

console.log("\n");

// Q Write a program to print n powers of 2, take n as input from the user.

console.log("Q2 Enter a number to print n powers of 2");

// take the input from the user
input = Number(require("prompt-sync")()());

result = 1;
// run a for loop and multiply the number by 2 and store it inside result and print it
for (let j = 0; j < input; j++) {
  result *= 2;
  console.log(result);
}

console.log("\n");

// Q FizzBuzz - take n as input from the user.
// From 1 to n, print Fizz if a number is divisible by 3,
// print Fuzz if a number is divisible by 5.
// print FizzFuzz if a number is divisible by 3 and 5 both

console.log("Q3 Enter a number to conditionally print Fizz, Fuzz and FizzFuzz n times");

// take the input from the user
numInput = Number(require("prompt-sync")()());

// run the loop check if the number is divisible by 3, 5 and 3&5 both then print the result
for (let i = 1; i <= numInput; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("FizzFuzz", i);
      continue;
    } else {
      console.log("Fizz", i);
      continue;
    }
  }
  if (i % 5 === 0) {
    console.log("Fuzz", i);
  }
}
