# JavaScript (Arrays and Objects)

## Arrays

An array is a data structure that can hold multiple values under one variable. It's a list of items.

This might be useful when you want to group related values without the need to create multiple variables.
You are implementing a list of customers waiting for a restaurant. Using string variables would be hard to work with.

```javascript
// Don't do this:
const person1 = "Zoe";
const person2 = "Natalia";
const person3 = "Toma";
```

### Creating an array

Instead, you can create a single variable with all three strings:

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
```

### Accessing items in an array

To access data in an array, you can use their index. Index starts with `0` for the first item in the array, `1` for the second item, and goes up by 1 from there.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];

// Access items in the array
console.log(customersWaiting[0]); // Zoe
console.log(customersWaiting[1]); // Natalia
console.log(customersWaiting[2]); // Toma

// You can also print the whole array
console.log(customersWaiting);
```

### Updating items in an array

You can update individual items in an array using the index. For example, we spelled their name wrong:

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting[0] = "Zoey";

console.log(customersWaiting[0]); // Zoey
```

#### .push()

`.push()` adds an item to the back of an array.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting.push("Dan");

console.log(customersWaiting); // ["Zoe", "Natalia", "Toma", "Dan"]
```

#### .pop()

`.pop()` removes the last item in the array. It will return the removed item.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
const customerRemoved = customersWaiting.pop();

console.log(customersWaiting); // ["Zoe", "Natalia"]
console.log(customerRemoved); // "Toma"
```

#### .unshift()

`.unshift()` adds an item to the front of an array.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting.unshift("Dan");

console.log(customersWaiting); // ["Dan", "Zoe", "Natalia", "Toma"]
```

#### .shift()

`.shift()` removes the first item in the array. It will return the removed item.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
const customerRemoved = customersWaiting.shift();

console.log(customersWaiting); // ["Natalia", "Toma"]
console.log(customerRemoved); // "Zoe"
```

### Data types

Arrays can hold all types of data:

```javascript
const randomStuff = ["100", 372, "hello", null, new Date()];
```

#### Nested arrays

It can even hold other arrays:

```javascript
// A nested array
const ticTacToeBoard = [
  ["X", "O", null],
  ["O", "X", null],
  [null, "O", "X"],
];
```

To access items in a nested array:

```javascript
console.log(ticTacToeBoard[1]); // ["O", "X", null]
console.log(ticTacToeBoard[1][1]); // "X"
```

You can update nested arrays too:

```javascript
ticTacToeBoard[1] = ["O", "X", "O"];
ticTacToeBoard[1][1] = "O";
```

### const vs. let

You might have noticed that we are updating arrays that we declared with `const`.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];

customersWaiting[0] = "Zoey";
```

Above is allowed because we are updating the array and not the variable, `customersWaiting`.

For example, updating the `customersWaiting` is still not allowed with `const`:

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting = ["Zoey", "Natalia", "Toma"]; // throws an error
```

### Summary

A few benefits of using arrays over using individual variables:

- It's dynamic. The number of items in an array is dynamic. You can add/remove/replace items in an array.
- Can handle large number of items (hundreds, thousands or more).
- Maintains the order of the items inside. The order of items in an array will remain the same unless you make changes.
- Only need one variable to represent multiple items.

## Objects

Key-value pair (dictionary)

Accessing/modifying with bracket and dot notations

Manipulating Complex Objects (nested arrays and objects)

Accessing Object Properties with Variables

Add/delete properties

Testing Objects for Properties with hasOwnProperty
