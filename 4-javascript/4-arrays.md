# JavaScript (Arrays)

An array is a data structure that can hold multiple values under one variable. It's a list of items.

This might be useful when you want to group related values without the need to create multiple variables.
You are implementing a list of customers waiting for a restaurant. Using string variables would be hard to work with.

```javascript
// Don't do this:
const person1 = "Zoe";
const person2 = "Natalia";
const person3 = "Toma";
```

## Creating an array

Instead, you can create a single variable with all three strings. Arrays start and end with brackets, `[` and `]`.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
```

## Accessing items in an array

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

## Updating items in an array

You can update individual items in an array using the index. For example, we spelled their name wrong:

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting[0] = "Zoey";

console.log(customersWaiting[0]); // Zoey
```

### .push()

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

### .pop()

`.pop()` removes the last item in the array. It does not take any arguments. It will return the removed item.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
const customerRemoved = customersWaiting.pop();

console.log(customersWaiting); // ["Zoe", "Natalia"]
console.log(customerRemoved); // "Toma"
```

### .unshift()

`.unshift()` adds an item to the front of an array.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
customersWaiting.unshift("Dan");

console.log(customersWaiting); // ["Dan", "Zoe", "Natalia", "Toma"]
```

### .shift()

`.shift()` removes the first item in the array. It will return the removed item.

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
const customerRemoved = customersWaiting.shift();

console.log(customersWaiting); // ["Natalia", "Toma"]
console.log(customerRemoved); // "Zoe"
```

## Data types

Arrays can hold all types of data:

```javascript
const randomStuff = ["100", 372, "hello", null, new Date(), true];
```

Or you can create an empty array too:

```javascript
const emptyArray = [];
```

### Nested arrays

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

## const vs. let

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

## .length

`.length` will tell you how many items exist in the array including `undefined` and `null`.
This is not a method, but a property. You can tell because we do not need parentheses (`()`).

```javascript
const customersWaiting = ["Zoe", "Natalia", "Toma"];
console.log(customersWaiting.length); // 3

const arrayLength = [1, 2, 3, 4].length;
console.log(arrayLength); // 4
```

#### Accessing the last item

Since the length of the array can be different every time, it can be hard to know the exact index for that item.
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

## Objects

Similar to arrays, objects are a way to hold multiple items in one variable.
In objects, items are stored as "key-value" pairs (pair meaning two items that go together).

Objects start and end with curly braces (`{` and `}`), and the key and value are separated by a colon, `:`.
In the following example, **key** is `boston` and the **value** is `"The Daily Catch"`.

```javascript
const myFavoriteRestaurants = {
  boston: "The Daily Catch",
};
```

You can sepecify multiple key-value pairs at once.
Make sure to put a comma after each value. You can omit the comma after the last value.

```javascript
const myFavoriteRestaurants = {
  boston: "The Daily Catch",
  newYork: "The Pecking House", // comma is optional
};
```

Many other languages call this a "dictionary". Like a physical dictionary, you can look up a term (or key) and find a value.
Like in a physical dictionary, it's easy to find the definition (or value) using the word (or key), but harder to find the key using the definition (or value).

## Keys

Keys is like the address within an object.
Keys are always strings. You can use other values, but they get turned into a string.
Bracket notation

- Allows accessing keys with special characters
- Allows accessing when key is stored in a variable

## Values

Values can be any data type (e.g., strings, numbers, booleans, object, arrays, etc.).

## Accessing a value

### Dot notation

This is the preferred way of accessing items, but it cannot always be used.
You can access an item by using a dot (`.`) after the object and specifying the key.

```javascript
const myFavoriteRestaurants = {
  boston: "The Daily Catch",
  newYork: "The Pecking House",
};

console.log(myFavoriteRestaurants.boston); // The Daily Catch
```

This only works if the key is a valid variable name (no special character except `$` and `_` and doesn't start with a number). Reserved words also work.
If your key is not a valid variable name, use the bracket notation.

### Bracket notation

Similar to accessing an item of an array using the index, you use brackets (`[` and `]`) after the object and specify the key.
This allow you to access keys that dot notations does not allow.

However, when picking a key, I would recommend using `camelCase` (or maybe `snake_case`).

```javascript
const myFavoriteRestaurants = {
  boston: "The Daily Catch",
  newYork: "The Pecking House",
  "san francisco": "La Taqueria",
};

console.log(myFavoriteRestaurants["san francisco"]); // La Taqueria
```

Bracket notation also allows you to use variables.

```javascript
const nextCityToVisit = "boston";

const myFavoriteRestaurants = {
  boston: "The Daily Catch",
  newYork: "The Pecking House",
  "san francisco": "La Taqueria",
};

console.log(myFavoriteRestaurants[nextCityToVisit]); // The Daily Catch
```

## Updating a value

```javascript
const myFavoriteRestaurants = {
  boston: "The Daily Catch",
  newYork: "The Pecking House",
  "san francisco": "La Taqueria",
};

myFavoriteRestaurants.boston = "Vietnamese";
myFavoriteRestaurants["newYork"] = "Sushi";
```

## Adding a new key-value pair

```javascript
const myFavoriteRestaurants = {
  boston: "The Daily Catch",
  newYork: "The Pecking House",
  sanFrancisco: "La Taqueria",
};

myFavoriteRestaurants.los_angeles = "Vietnamese";
myFavoriteRestaurants["tokyo"] = "Sushi";
```

## Deleting a value

You can set a value to `null` to indicate that that key no longer has a value. However, you can also delete the key-value pair.

```javascript
const myFavoriteRestaurants = {
  boston: "The Daily Catch",
  newYork: "The Pecking House",
  sanFrancisco: "La Taqueria",
};

delete myFavoriteRestaurants.boston;

console.log(myFavoriteRestaurants);
console.log(myFavoriteRestaurants.boston);
```

You can see that `myFavoriteRestaurants.boston` returns `undefined`.

How is `delete` different from setting the value to `undefined`?

```javascript
const myFavoriteRestaurants = {
  boston: "The Daily Catch",
  newYork: "The Pecking House",
  sanFrancisco: "La Taqueria",
};

delete myFavoriteRestaurants.boston;
myFavoriteRestaurants.newYork = undefined;

console.log(myFavoriteRestaurants);
console.log(myFavoriteRestaurants.boston);
console.log(myFavoriteRestaurants.newYork);
```

The small difference is that when you `console.log(myFavoriteRestaurants)`, you can see that `newYork` is still there.

## Methods in objects

When a function is stored inside an object it is called a method.

```javascript
const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
};
```

You can also use the ES6 syntax which allows you to leave out the `function` keyword and the colon (`:`).

```javascript
const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
};
```

## Non-strings as keys

You can also use keys that are not strings using the bracket notation. However, JavaScript will convert these values to strings.
It's generally safer to always use strings as keys.

```javascript
const myObject = {};

myObject["true"] = 1;
myObject[true] = 2;

console.log("true"); // 2
console.log(true); // 2
```

## Nested objects

Just like arrays, objects can hold a lot different types of data.

For example, you might want more details about each restaurant. There is no real limit on how much you can nest objects and arrays.
Keep in mind that nesting arrays and objects can make it harder to understand.

```javascript
const myFavoriteRestaurants = {
  updatedAt: new Date(),
  boston: {
    name: "The Daily Catch",
    address: "323 Hanover Street Boston, Massachusetts 02113",
    overallRating: 5,
    dishes: [
      {
        name: "Calamari",
        rating: 4,
      },
      {
        name: "Black Pasta: Aglio Olio",
        rating: 5,
      },
    ],
  },
  newYork: {
    name: "The Pecking House",
    address: "244 Flatbush Ave, Brooklyn, NY 11217",
    overallRating: 4,
  },
  sanFrancisco: {
    name: "La Taqueria",
    address: "2889 Mission St, San Francisco, CA 94110",
    overallRating: 5,
  },
};
```

You can access and modify these objects using either the dot or bracket notations.

```javascript
// Either works!
console.log(myFavoriteRestaurants.sanFrancisco.name);
console.log(myFavoriteRestaurants.["sanFrancisco"].name);

myFavoriteRestaurants.boston.dishes.push({
  name: "Broccoli Saute"
  rating: 3
});

myFavoriteRestaurants.boston.hasOtherLocations = true;
```

### Order of operations:

Similar to in math ([PEMDAS](https://www.mathnasium.com/eagan/news/what-pemdas-e)), JavaScript is evaluated in a certain order.
In the below example, it will:

1. get the variable `myFavoriteRestaurants`
1. get `sanFrancisco` inside the `myFavoriteRestaurants` object
1. get `name` inside the `sanFrancisco` object

```javascript
myFavoriteRestaurants.sanFrancisco.name;
```

### Accessing a value that does not exist

Using a key that does not exist to retrieve data, it will return `undefined`.

```javascript
const myFavoriteRestaurants = {
  boston: {
    name: "The Daily Catch",
    address: "323 Hanover Street Boston, Massachusetts 02113",
    overallRating: 5,
  },
  newYork: {
    name: "The Pecking House",
    address: "244 Flatbush Ave, Brooklyn, NY 11217",
    overallRating: 4,
  },
  sanFrancisco: {
    name: "La Taqueria",
    address: "2889 Mission St, San Francisco, CA 94110",
    overallRating: 5,
  },
};

console.log(myFavoriteRestaurants.seattle); // undefined
console.log(myFavoriteRestaurants["seattle"]); // undefined
```

While above is okay, trying to retrieve a nested value where the first key (`seattle`) don't exist will throw an error.

```javascript
console.log(myFavoriteRestaurants.seattle.name); // throws an error
console.log(undefined.name); // this is the same
```

This is because it evaluates in this order:

1. `myFavoriteRestaurants` returns the object.
1. `myFavoriteRestaurants.seattle` returns `undefined`, because the object doesn't have a key of `seattle`.
1. `myFavoriteRestaurants.seattle.name` throws an error because `undefined` is not an object.

<details>
  <summary>Side Note (you don't need to know this!):</summary>

It might make sense to you that `myFavoriteRestaurants.seattle.name` and `undefined.name` throw errors, because they primitives and not objects.
However, why does `"foo".name` not throw an error if strings are also primitives and not objects?

This is because JavaScript converts some of their primitive types (string, number, bigint, boolean, and symbol) to objects temporarily when you access their methods.
Only `undefined` and `null` are not converted to objects automatically by JavaScript.

Strings, for example, are converted to the `String` object.

</details>

### Objects in arrays

Arrays can also have objects too!

```javascript
[{ foo: 1 }, { bar: 2 }];
```

## Passing by reference

Both arrays and objects are passed into a function by reference.
When a primitive is passed into a function as an argument, any changes made to the primitive does not affect the original variable.

```javascript
function something(number1) {
  number1 = number1 + 1;

  return number1;
}

const initialValue = 10;
const finalValue = something(initialValue);

console.log(initialValue); // 10
console.log(finalValue); // 11
```

However, when you make changes to an array or an object that was passed in as an argument, the changes show up on the variable outside the function too.

Here is an example with an array:

```javascript
function something(myArray) {
  myArray.push(2);

  return myArray;
}

const initialValue = [1];
const finalValue = something(initialValue);

console.log(initialValue); // [1, 2]
console.log(finalValue); // [1, 2]
```

Here is an example with an object:

```javascript
function something(myObject) {
  myObject.name = "something object!";

  return myObject;
}

const initialValue = {
  name: "turkey object",
};
const finalValue = something(initialValue);

console.log(initialValue.name); // something object!
console.log(finalValue.name); // something object!
```

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
