# JavaScript (Functions)

Let's say you have a task you do more than once. It would be inefficient to have to write the same code multiple times.
Functions are a way to write code once and use it multiple times.

Just like variables, function names can be whatever you want them to be with some exceptions.

## Defining a function

There are many ways to define a function, but here is the original way.

```javascript
function sayHi(name) {
  console.log("Hi" + name);
}
```

Parts to a function:

- `function` keyword
- `sayHi` is the name of the function
- Parentheses `()` goes right after name of the function
  - This is where the parameters go (more on this later)
- Function code goes inside the brackets (`{`and `}`)

You can also use an arrow function introduced in ES6.

```javascript
const sayHi = () => {
  console.log("Hi!");
};
```

Differences:

- No `function` keyword
- Variable assignment: `const sayHi =` (you can use `let` too)
- The arrow (`=>`) after the parentheses

You can also have one line arrow functions without brackets.

```javascript
const sayHi = () => console.log("Hi!");
```

## Using a function

Once the function is defined, you can call it using parentheses (`()`) after the name of the function.

```javascript
sayHi();
```

You can call functions from within other functions.

```javascript
function printResult(result) {
  console.log("Your result is:", result);
}

function add() {
  const sum = 2 + 5;

  printResult(sum);
}

console.log(add());
```

## Argument/Parameters

To make functions more dynamic, we can pass in arguments to functions.
Arguments are values you pass in when you call the functions.

When defining the function, you need to specify a parameter (`name` in the example below). It's basically just a variable.

```javascript
const sayHi = (name) => {
  console.log("Hi " + name + "!");
};
```

When calling the function, you can pass in an argument by putting it inside the parentheses

```javascript
sayHi("Jayson");

const foo = "Tatum";
sayHi(foo);
```

You can have multiple parameters. The order of the arguments is important here.

```javascript
function sayHi(name1, name2) {
  console.log("Hi " + name1 + " and " + name2!);
}

sayHi("Jayson", "Tatum")
```

### Parameter vs. Argument

Many people will use the two interchangeably.

- The variables inside the parentheses (`(` and `)`) in the function definition are the parameters.
  - Before `name1` and `name2` are the parameters.
- What you pass in when you call the function are the arguments.
  - `"Jayson"` and `"Tatum"` are the arguments.

```javascript
function sayHi(name1, name2) {
  console.log("Hi " + name1 + " and " + name2!);
}

sayHi("Jayson", "Tatum")
```

### Default Parameters

When you don't supply arguments, `undefined` is passed in.

```javascript
function eat(food) {
  console.log(food);
}

eat();
```

However, you can have default parameters specified when you define the function.
If you pass in an argument, the function will ignore the default parameter.
But, if you do not pass an argument, it will use the default parameter.

```javascript
function eat(food = "apple") {
  console.log(food);
}

eat();
eat("orange");
```

You can do this for multiple parameters too. Notice that `food` has no default parameter, but `drink` and `isHungry` do.
`food` will be `undefined`.

```javascript
function eat(food, drink = "water", isHungry = false) {
  console.log(food, drink, isHungry);
}

eat();
```

## Returning a value

Functions can also return a value of any type.

```javascript
function add(num1, num2) {
  return num1 + num2;
}

const sum = add(1, 5);
console.log(sum);

console.log(add(2, 7));
```

Anything after `return` will not be run.

```javascript
function add(num1, num2) {
  return num1 + num2;
  console.log("After return!"); // This will never be run
}

console.log(add(2, 7));
```

### Returns undefined

If you don't return anything, your function will return `undefined` by default.

```javascript
const result = sayHi("Luna");

console.log(result);
```

## Scopes

Where variables can be accessed from is determined in part by the scope the variable is defined and referenced in.
`var` behaves differently than `let` and `const`. We will focus on `let` and `const` here.

## Block

A **block** is the code found inside a set of curly braces (`{}`). A block groups code together.
We saw this above with function definitions.

### Global Scope

- Outside of all blocks.
- These variables are considered _global variables_.
- They can be accessed from inside any block.

```javascript
const globalVariable = "bread";

const myFavoriteFood = () => {
  return globalVariable;
};

console.log(myFavoriteFood());
```

### Block Scope

- Variables defined inside a block can only be accessed inside the block it was defined in.
- These variables are considered _local variables_.
- Note: we will use the term _local scope_, _function scope_, and _block scope_ to mean mostly the same thing. There are some differences, but we can ignore them as long as we are using `let` and `const`.

```javascript
const myFavoriteFood = () => {
  const blockVariable = "bread";
  return blockVariable;
};

console.log(myFavoriteFood());
console.log(blockVariable); // Throws an error
```

### Variables with the Same Name in Different Scopes

We mentioned that variables names can only be used once in a given scope.
This means that if you want to define variables with the same name in different scopes, you can.

```javascript
const food = "tomato";

const myFavoriteFood = () => {
  const food = "potato";
  console.log(food); // potato

  return food;
};

console.log(food); // tomato

const result = myFavoriteFood();
console.log(result); // potato
```

#### Nested Blocks

In these examples, we have two functions. `Outer` function is called in the global scope, and the `Inner` function is called inside the `Outer` function.

```javascript
const food = "global string";

const Outer = () => {
  const foo = "outer string";
  console.log("Outer", foo); // outer string

  const Inner = () => {
    const foo = "inner string";
    console.log("Inner", foo); // inner string
  };
  Inner();
};

console.log("Global", foo); // global string
Outer();
```

If a variable is not defined in its own block, it will look outside to see if it's defined.
It will use the one that closest in scope.

```javascript
const foo = "global string";

const Outer = () => {
  const foo = "outer string";
  console.log("Outer", foo); // outer string

  const Inner = () => {
    console.log("Inner", foo); // outer string
  };
  Inner();
};

console.log("Global", foo); // global string
Outer();
```

It will never look inside a block from the outside.

```javascript
const foo = "global string";

const Outer = () => {
  console.log("Outer", foo); // global string

  const Inner = () => {
    const foo = "inner";
    console.log("Inner", foo); // inner string
  };
  Inner();
};

console.log("Global", foo); // global string
Outer();
```

### Scope Pollution

Generally, you want to keep your variables at the lowest scope possible. In other words, try not to have global variables.

It might seem nice to have variables easily accessible from anywhere, they will become hard to keep track.
For example, you might already have a variable called `user` in global scope that you had forgotten about. It has the ability to affect all of your code.
However, if a variable is block scoped, they can only affect those in that block.

Having variables tightly scoped helps make your code easy to understand.
Because global variables can affect all of your code, to figure out if a global variable is being used, you need to check all of your code.
A block-scoped varaible can only be used in that block, so you only need to look there to see if it's being used.

## Homework

**FreeCodeCamp**

- Go to freeCodeCamp's [**JavaScript Algorithms and Data Structures**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) course.
  - Make sure you're logged in!
- Start with **Write Reusable JavaScript with Functions** and do all exercise through **Assignment with a Returned Value**.
  - Before you leave, let us know which lesson you got to during standup!

**Codecademy**

Complete the [Learn JavaScript: Functions and Scope](https://www.codecademy.com/learn/learn-javascript-functions-and-scope) course on Codecademy.

## Resources

- [W3Schools - JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)
