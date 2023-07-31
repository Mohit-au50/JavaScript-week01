// Q Write a program to check if a number is divisible by four or not?
// (no need to use if else, just print true if the number is divisible by four,
// otherwise print false)

console.log("Enter a number to continue");

// let the number be user defined
num = Number(require("prompt-sync")()());

// print the result along with the input and a string and then the result
console.log(num, "is divisible by 4:", num % 4 == 0);
