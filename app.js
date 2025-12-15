// 💻 JavaScript Function Assignment

// 📘 Instructions:
// ● Write a JavaScript function for each question below.
// ● Use function arguments to accept inputs.
// ● Use the return keyword to return the result.
// ● Test each function using console.log().

// 🧩 Questions:
/*
1. addTwoNumbers
Write a function that takes two numbers and returns their sum. */

function addTwoNumbers(a, b) {
  return a + b;
}

console.log(addTwoNumbers(44, 66));
////////////////////////////////////
// Completed

// 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.

function subtractNumbers(y, z) {
  return y - z;
}
console.log(subtractNumbers(20, 20));
//////////////////////////////////////
// Completed

// 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.

function multiplyNumbers(a, z) {
  return a * z;
}

console.log(multiplyNumbers(3, 7));
/////////////////////////////////////////
// Completed

// 4. divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.

function divideNumbers(x, y) {
  return x / y;
}

console.log(divideNumbers(50, 10));
/////////////////////////////////////////
// Completed

// 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.

function getRemainder(a, b) {
  return a % b;
}
console.log(getRemainder(10, 4));

/////////////////////////////////////////
// Completed

// 6. isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".

function isPositive(number) {
  if (number > 0) return "Positive";
  return "Not Positive";
}

console.log(isPositive(5));

/////////////////////////////////////////
// Completed

// 7. isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".

function isNegative(isNum) {
  if (isNum < 0) return "Negative";
  return "Not Negative";
}

console.log(isNegative(-21));

/////////////////////////////////////////
// Completed

// 8. checkEven
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".

function checkEven(checkNumEven) {
  if (checkNumEven % 2 === 0) return "Even";
  return "Odd";
}

console.log(checkEven(5));

/////////////////////////////////////////
// Completed

// 9. isEqual
// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".

function isEqual(val1, val2) {
  if (val1 === val2) return "Equal";
  return "Not Equal";
}

console.log(isEqual(40, 40));
/////////////////////////////////////////
// Completed

// 10. compareNumbers
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".

function compareNumbers(num1, num2) {
  if (num1 > num2) return "First-Greater";
  if (num2 > num1) return "Second-Greater";
  if (num1 === num2) return "Equal";
  return "smaller";
}
console.log(compareNumbers(0, -34));
/////////////////////////////////////////
// Completed

// 11. getFullName
// Write a function that takes a first name and last name, and returns the full name.

function getFullName(fName, lName) {
  return fName + lName;
}
console.log(getFullName("khalilullah" + " ", "sadique"));

/////////////////////////////////////////
// Completed

// 12. getGrade
// Create a function that takes a number (0–100) and returns:
// ● "Pass" if the score is 40 or more
// ● "Fail" if it is less than 40

function getGrade(getNum) {
  if (getNum < 0 || getNum > 100) return "Not valid Score";
  if (getNum >= 40) return "Pass";
  if (getNum < 40) return "Fail";
}

console.log(getGrade(55));

/////////////////////////////////////////
// Completed

// redundant => meaning unneeded

// 13. isTeenager
// Write a function that takes an age and returns "Teenager" if the age is between 13
// and 19, otherwise return "Not a Teenager".

function isTeenager(isTeenNum) {
  if (isTeenNum <= 19 && isTeenNum >= 13) return "Teenager";
  return "Not a Teenager";
}

// console.log(isTeenager(Number(prompt("Enter Your age!"))));

/////////////////////////////////////////
// Completed

// 14. greetUser
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".

function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(greetUser("Ahmed!"));
/////////////////////////////////////////
// Completed

// 15. isEligibleToVote
// Create a function that takes age and returns "Eligible" if age is 18 or above,
// otherwise "Not Eligible".

function isEligibleToVote(age) {
  if (age >= 18) return "Eligible";
  return "Not Eligible";
}
console.log(isEligibleToVote(69));

/////////////////////////////////////////
// Completed

//   16. findAbsoluteValue
// Write a function that returns the absolute value of a number (no Math.abs, use if-else
// only).

function findAbsoluteValue(value) {
  if (value < 0) return value * -1;
  return value;
}

console.log(findAbsoluteValue(1));

/////////////////////////////////////////
// Completed

// 17. checkTemperature
// Write a function that takes a temperature and returns:
// ● "Hot" if temperature is above 30
// ● "Cold" if below 10
// ● "Normal" otherwise

function checkTemperature(vale) {
  if (vale > 30) return "Hot";
  if (vale < 10) return "Cold";
  return "Normal";
}
console.log(checkTemperature(45));

/////////////////////////////////////////
// Completed

// 18. getTriangleType
// Create a function that takes 3 sides and returns:
// ● "Equilateral" if all are equal
// ● "Isosceles" if any two are equal
// ● "Scalene" if all are different

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side3 === side1) return "Equilateral";
  if (side1 === side2 || side3 === side1 || side2 === side3) return "Isosceles";
  return "Scalene";
}
console.log(getTriangleType(23, 44, 55));

/////////////////////////////////////////
// Completed

// 19. calculateDiscountedPrice
// Write a function that takes a price and discount percentage, and returns the discounted
// price.

function calculateDiscountedPrice(OriginalPrice, DiscountedPrice) {
  let price = (OriginalPrice * DiscountedPrice) / 100;
  let finalPrice = OriginalPrice - price;
  return finalPrice;
}

// console.log(
//   calculateDiscountedPrice(
//     Number(prompt("Enter Original Price")),
//     Number(prompt("Enter Dicount Percentage"))
//   )
// );

/////////////////////////////////////////
// Completed

// Question 1: CalculateTax
// Write a function that takes a price and tax percentage, and returns the final price INCLUDING tax.

function CalculateTax(taxPrice, taxPercentage) {
  const pricing = (taxPrice * taxPercentage) / 100;
  const finalPricing = taxPrice + pricing;

  return finalPricing;
}

console.log(CalculateTax(1000, 30));

/////////////////////////////////////////
// Completed

// 20. isPasswordValid
// Write a function that takes a password and checks if its length is 8 characters or more.
// Return "Valid Password" or "Too Short".

function isPasswordValid(params) {
  const miLength = 8;

  if (params.length >= 8) return "valid password";
  return "Too Short";
}
console.log(isPasswordValid(prompt("Enter Your Password")));
