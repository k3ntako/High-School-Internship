# JavaScript (Arrays)

An array is a data structure that can hold multiple values under one variable. It's a list of items.

This might be useful when you want to group related values without creating multiple variables.
For example, you are implementing a list of customers waiting for a restaurant. Using string variables would be hard to work with.

```javascript
// Don't do this:
let person1 = "Zoe";
let person2 = "Natalia";
let person3 = "Toma";
```

For every new person, you have to create a variable.

## Creating an array

Instead, you can create a single variable with all three strings. Arrays start and end with brackets, `[` and `]`.
You can place as many values as you want inside. Each value must be separated by a comma (`,`).

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
```

## Accessing Items

To access data in an array, you can use the position number of that item or **index**. Because JavaScript is _zero-inedxed_, the index starts with `0` for the first item in the array, `1` for the second item, and goes up by 1 from there.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];

// Access items in the array
console.log(customersWaiting[0]); // Zoe
console.log(customersWaiting[1]); // Natalia
console.log(customersWaiting[2]); // Toma

// You can also print the whole array
console.log(customersWaiting);
```

## Updating Items

You can update individual items in an array using the index. For example, we spelled their name wrong:

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting[0] = "Zoey";

console.log(customersWaiting[0]); // Zoey
```

### `.push()`

`.push()` adds an item to the back of an array.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting.push("Dan");

console.log(customersWaiting); // ["Zoe", "Natalia", "Toma", "Dan"]
```

It can also take more than one argument. It will add each item separately.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting.push("Dan", "Rosa");

console.log(customersWaiting); // ["Zoe", "Natalia", "Toma", "Dan", "Rosa"]
```

### `.pop()`

`.pop()` removes the last item in the array. It does not take any arguments. It will return the removed item.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
const customerRemoved = customersWaiting.pop();

console.log(customersWaiting); // ["Zoe", "Natalia"]
console.log(customerRemoved); // "Toma"
```

## Data Types

Arrays can hold all types of data.

```javascript
const randomStuff = ["100", 372, "hello", null, new Date(), true];
```

Or you can create an empty array too:

```javascript
const emptyArray = [];
```

### Nested Arrays

It can even hold other arrays.

```javascript
// A nested array
const ticTacToeBoard = [
  ["X", "O", null],
  ["O", "X", null],
  [null, "O", "X"],
];
```

To access items in a nested array, you will need multiple indexes.
The first one selects which row (or inner array) you want to access, and the second index specifies which item within the row.

```javascript
console.log(ticTacToeBoard[1]); // ["O", "X", null]
console.log(ticTacToeBoard[1][1]); // "X"
```

You can update nested arrays too.

```javascript
ticTacToeBoard[1] = ["O", "X", "O"];
ticTacToeBoard[1][1] = "O";
```

## Why Mutating Arrays is Allowed

You might have noticed that we are updating arrays that we declared with `const`.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];

customersWaiting[0] = "Zoey";
```

Above is allowed because we are updating the array and not the variable, `customersWaiting`.
However, updating the `customersWaiting` is still not allowed with `const` as shown below.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting = ["Zoey", "Natalia", "Toma"]; // throws an error
```

This is called mutating an array.

## `.length`

`.length` will tell you how many items exist in the array including `undefined` and `null`.
This is not a method (aka function), but a property. You can tell because we do not need parentheses (`()`).

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
console.log(customersWaiting.length); // 3

const arrayLength = [1, 2, 3, 4].length;
console.log(arrayLength); // 4
```

#### Accessing the Last Item

Since the length of the array can be different every time, it can be hard to know the exact index for the last item.
You can use `.length` instead to access the last item. Since JavaScript is zero-indexed, you need to subtract 1 from the length to get the index of the last item.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
console.log(customersWaiting[customersWaiting.length - 1]); // "Toma"
```

## Summary

A few benefits of using arrays over using individual variables:

- It's dynamic. The number of items in an array is dynamic. You can add/remove/replace items in an array.
- Can handle large number of items (hundreds, thousands or more).
- Maintains the order of the items inside. The order of items in an array will remain the same unless you make changes.
- Only need one variable to represent multiple items.

### Other methods

Here are some methods on an array that you can check out. We will not being covering these in this lesson.
You can look for them on the left-hand side of the [MDN page on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

`.join()`, `.slice()`, `.splice()`, `.shift()`, `.unshift()`, and `.concat()`.

## Homework

**FreeCodeCamp**

- Go to freeCodeCamp's [**JavaScript Algorithms and Data Structures**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) course.
  - Make sure you're logged in!
- Start with **Store Multiple Values in one Variable using JavaScript Arrays** through **Shopping List**.

  - Before you leave, let us know which lesson you got to during standup!

**Codecademy**

Complete the [Arrays](https://www.codecademy.com/courses/introduction-to-javascript/lessons/arrays/exercises/arrays) course on Codecademy.

- Do the "Secret Message" project at the end if you have the time and take the quiz.

## Resources

- [W3Schools - JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)
- [The Modern JavaScript Tutorial - Arrays](https://javascript.info/array)
