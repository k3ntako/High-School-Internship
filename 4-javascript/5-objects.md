# JavaScript (Objects)

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
- Start with **Build JavaScript Objects** through **Record Collection** and **Stand in Line**.
  - Before you leave, let us know which lesson you got to during standup!

**Codecademy**

Complete the [Objects](https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/intro) course on Codecademy.

- Do **not** do the _Advanced Objects_ course.

## Resources

- [W3Schools - JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)
- [The Modern JavaScript Tutorial - Arrays](https://javascript.info/object)
