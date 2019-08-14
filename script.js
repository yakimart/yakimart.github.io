//counting square
let a = prompt("Enter value and see the square", "");
alert(a * a);

//arithmetic operations
let b0 = prompt("Enter first value", "");
let b1 = prompt("Enter second value", "");
alert("ADD: " + (+b0 + +b1) + 
	"\nSUB: " + (b0 - b1) + 
	"\nMULT: " + (b0 * b1) + 
	"\nDIV: " + (b0 / b1));

//deposit counter
let sum = prompt("Enter sum", "");
let term = prompt("Enter term", "");
let profPerMonth = (sum * 0.18) / 12; //yearly profit divided into 12 months
alert("Your profit per month: " + profPerMonth);
