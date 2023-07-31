// Q Write a program to print the vowels in a particular str given by the
// Eg Attainu Output: vowels are A, a, i, u

console.log("Enter a string to print the vowels of it");

// take the input from the user
let string = require("prompt-sync")()();

let output = "";
// run a for loop check is the string index is equal to any vowels Capital or small then print it
for (let i = 0; i < string.length; i++) {
  if (
    string[i] === "A" ||
    string[i] === "a" ||
    string[i] === "E" ||
    string[i] === "e" ||
    string[i] === "I" ||
    string[i] === "i" ||
    string[i] === "O" ||
    string[i] === "o" ||
    string[i] === "U" ||
    string[i] === "u"
  )
    output += string[i] + ", ";
}
console.log("All the vowels of", string, "is: ", output);

console.log("\n");

// Q-2) Write a program to print sum of n natural numbers
// Output 1 + 2 + 3 + 4 + 5 = 15

console.log("Enter a number to print sum of natural numbers");

// take the input from user
let num = Number(require("prompt-sync")()());

let result = 0;
// run the for loop and add the new value in the previous value and print the result
for (let j = 1; j <= num; j++) {
  result += j;
}
console.log("The sum of", num, "Natural number is:", result);

console.log("\n");

// Q-3) Write a program to find out all the factors of an entered
// number. Eg; 10 -> 1, 2, 5, 10

console.log("Enter a number to find all the factors of it");

// take the input from user in number format
let input = Number(require("prompt-sync")()());

let outputResult = "";
// run the for loop and use j mod input then return the outputResult
for (let j = 1; j <= input; j++) {
  if (input % j === 0) {
    outputResult += j + ", ";
  }
}
console.log("All the factors of", input, "is:", outputResult);
