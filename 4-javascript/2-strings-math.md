# JavaScript (Strings, Math)

## REPL

Like in previous lessons, try running the code for each section in [replit](https://replit.com/languages/javascript).

## String

Review: [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) are a type of primitive value that represent a sequence of characters.
```javascript
const thisIsAString = "Hello world!";
const thisIsAlsoAString = "I live on 59th St.";
const thisIsAlsoAlsoAString = "1223"; // Not a number!
```
Strings are created by wrapping text in either single quotes(`' '`) or double quotes (`" "`) – these are called **string literals.**

### Concatenating with the plus operator
In JavaScript you can combine multiple strings together by using the plus (`+`) operator:
```js
"My name is " + "Matt";
// returns a single string "My name is Matt"
```
This works both with string literals (above) as well as with string values assigned to variables:
```js
const firstName = "Matt ";    // note the space at the end
const lastName = "Readout";
const fullName = firstName + lastName;

console.log(fullName);
// "Matt Readout"
```
Note: Concatenation combines strings exactly as they are, so be careful with spaces!
### Concatenating with the plus equals operator
You can also combine strings with the plus equals (`+=`) operator – this is particularly useful if you want to build up a string in multiple parts, but assigned to a single variable
```js
let myString;
myString = "The beginning, ";
myString += "the middle, ";
myString += "the end.";

console.log(myString);
// "The beginning, the middle, the end."
```
This can be done with variables as well
```js
let myString = "The beginning, ";
const middleString = "the middle, ";
const endString = "the end.";

myString += middleString;
myString += endString;

console.log(myString);
// "The beginning, the middle, the end."
```
### Template literals
We've seen how we can construct strings with variables using the plus or plus equals operators. JavaScript also gives us another way – by using **template literals.**

If we want to insert a variable in the middle of a string sequence, we could use string concatenation like this:
```js
const firstName = "Matt";
const greetingString = "Hello, my name is " + firstName + ". Nice to meet you!";

console.log(greetingString);
// "Hello, my name is Matt. Nice to meet you!"
```
This can be a bit hard to read, especially when you have multiple variables/expressions.

Using a template literal, however, allows us to do the same thing in a little bit more straightforward way. To construct a template literal, the whole string needs to be wrapped in backticks (\`), and any variables are substituted in-place in the form `${variableName}`. This is called **string interpolation:**
```js
const firstName = "Matt";
const greetingString = `Hello, my name is ${firstName}. Nice to meet you!`;

console.log(greetingString);
// "Hello, my name is Matt. Nice to meet you!"
```
### String `length` property
Every JS string object has a data property that contains the length of the string. To access a property of an object, we call it with `.length` right after the string literal or variable. (We'll talk about using a dot `.` to access properties/values like this a little more in later lessons)
```js
const firstName = "Matt";
const fullName = "Matt Readout";
const emptyString = "";

console.log(firstName.length);    // 4
console.log(fullName.length);     // 12
console.log(emptyString.length);  // 0
// 
```
The length property will always return a non-negative integer. Note that it includes any character, including spaces and punctuation!

## Math
JavaScript has the ability to perform basic arithmetic operations on numbers
### Addition
Add two (or more) numbers with the plus (`+`) operator – which can be used with both literals as well as variables:
```js
const x = 2 + 2;

console.log(x); // 4

const a = 15;
const b = 20;
const y = a + b;

console.log(y); // 35
```
### Subtraction
Subtract one number from another with the minus (`-`) operator – which can be used with both literals as well as variables:
```js
const x = 10 - 3;

console.log(x); // 7

const a = 50;
const b = 20;
const y = a - b;

console.log(y); // 30
```
### Multiplication
Multiply one number by another with the multiply (`*`) operator – which can be used with both literals as well as variables:
```js
const x = 10 * 3;

console.log(x); // 30

const a = 5;
const b = 2;
const y = a * b;

console.log(y); // 10
```
### Division
Divide one number by another with the divide (`/`) operator – which can be used with both literals as well as variables:
```js
const x = 21 / 3;

console.log(x); // 7

const a = 10;
const b = 2;
const y = a / b;

console.log(y); // 5
```
### Remainder
Find the remainder of dividing one number by another with the modulus (`%`) operator – which can be used with both literals as well as variables:
```js
const x = 21 % 3;

console.log(x); // 0

const a = 10;
const b = 3;
const y = a % b;

console.log(y); // 1
```
### Increment
Increment a number by 1 with the increment (`++`) operator – which can only be used with variables:
```js
let x = 1;
x++;

console.log(x); // 2

// This is equivalent to:
let x = 1;
x = x + 1;
```
Note: the `++` operator can actually go immediately before or after the variable and be correct JavaScript code in both cases. There's a slightly different behavior, however – so for now just make sure the `++` comes after the variable (like `x++`).
### Decrement
Decrement a number by 1 with the decrement (`--`) operator – which can only be used with variables:
```js
let x = 10;
x--;

console.log(x); // 9

// This is equivalent to:
let x = 10;
x = x - 1;
```

## Homework
- Continue with freeCodeCamp's [**JavaScript Algorithms and Data Structures**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) course from last week.
- Start with **Add Two Numbers with JavaScript** and do all exercise through **Find the Length of a String**.
  - Before you leave, let us know which lesson you got to during standup!

### Resources
- [MDN - Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [W3Schools - JavaScript Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)