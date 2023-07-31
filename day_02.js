// Q Write a program to check if a number is even or odd?

console.log("Enter a number to continue");

// let the number be user defined
num = Number(require("prompt-sync")()());

// if a number mod 2 and the remainder is 0 then the number is even else odd
if (num % 2 === 0) {
  console.log(num, "is an Even Number");
} else {
  console.log(num, "is an Odd Number\n");
}

// alternatively we can use ternery operator
// num % 2 === 0
//   ? console.log(num, "is an Even Number")
//   : console.log(num, "is an Odd Number");


// Q Write a program to print truth-table of OR logical operator
console.log("//truthTable//")
console.log("--------------");
console.log("X", "|", "Y", "|", "X || Y")
console.log("T", "|", "T", "|", "  T");
console.log("T", "|", "F", "|", "  T");
console.log("F", "|", "T", "|", "  T");
console.log("F", "|", "F", "|", "  F");
