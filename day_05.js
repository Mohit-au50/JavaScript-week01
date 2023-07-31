// Q write a program to find the sum of the first n natural numbers, take the value of n by yourself?

let number = 5;
let output = 0;
// run the for loop and add the i in output and print it
for (let i = 1; i <= number; i++) {
  output += i;
}
console.log("The sum of first", number, "natural number is: ", output);
