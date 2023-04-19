# JavaScript (Comments, Variables, Types)

## REPL

It allows you to write code and run it very quickly without having to create files. You can run it on your Terminal using Node, but for now let's use one online: [replit](https://replit.com/languages/javascript).

Throughout these lessons, try running the code by copying each example into the REPL.

## Console.log

Prints one or more values (text, number, objects, etc.) to the console.

```javascript
console.log("Hello world");
console.log("I am", 18, "years old");
```

## Semicolons

Many languages have semicolons (`;`) to indicate the end of a statement. It's similar to a period after a sentence.

In JavaScript, it's mostly optional, so don't worry too much about it.

## Comments

### Line Comments

```javascript
// This is a one line JavaScript comment
console.log("Hello world!");
```

### Block Comments (Multi-line Comments)

```javascript
/* This is a one line JavaScript comment */
console.log("Hello world!");

/*
  This is a multi-line line
  JavaScript comment
*/
```

## Variables

Variables allow computers store data dynamically ("dynamically" means the data can change). I like to think of them as boxes that can store different data.
For example, username is different for each user. We want to be able to handle different situations.

<img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png">

Variables are temporary (short-term) storage of data while your program runs.

Variables on their own cannot do too many things. They can:

- Declare (or create) a variable
- Set the value (or data) of a variable
- Update the value of a variable
- Get the value of a variables

Make sure you use a descriptive name for you variable. Just like a box, it's help if the variable is labeled. You wouldn't have to look inside to know what types of data is held by a variable.

### Declaring a variable

`var` and `let` each create a variable. No value (data) is assigned yet (it's an empty box).
Keep in mind that variable names have to be unique (in a given scope). In other words, you cannot use the same variable name more than once (in a given scope).

```javascript
let myVariable;
var yourVariable;
```

Notice that there are two way to declare a variable without assignign a value. Generally, you should use `let` over `var`.
`var` is older and works slightly differently.

### Assign (=)

You can use the assignment operator (`=`) to store a value in a variable.

```javascript
let myVariable;
var yourVariable;

myVariable = 5;
yourVariable = "hello";

// They can be reassigned later too
myVariable = "bye";
yourVariable = "100";
```

Keep in mind that you can't have two variables with the same name in the same scope!

### Initialize with value

If you already know the value you want to assign your variable, you can declare the variable and assign it a value in one step.

```javascript
let myVariable = 5;
var yourVariable = "hello";
```

### Constants (read-only variables)

Constants are variables that cannot be changed after they are defined.

```javascript
const myConstant = "hello!";

myConstant = "bye"; // This will throw an error!
```

### Variable Naming

There are rules on how to name your variable:

- A variable cannot start with a number. `myDog1` is okay, but `1myDog` is not allowed.
- Variables are case senstive. `myDog` and `MYDOG` are different variables.
- Reserved words cannot be used as variables. For example, `let` and `var` cannot be used as a reserved word. These words have special meaning in JavaScript and cannot be used for variable names.

#### Naming convention

Different languages have different naming conventions. A convention is how something is _usually_ done.
Your program will still work even if you don't follow the conventions, but conventions make it easier to work on a program with other people.

Examples of naming conventions in programming:

- `camelCase`
  - First letter is lowercase. The first letter in every subsequent word is uppercase. Nothing to separate each word.
- `snake_case`
  - All lower case with underscore (`_`) to separate each word.
- `PascalCase`
  - Camel case, but first letter is upper case.

JavaScript variables use `camelCase`.

Other conventions:

- Starting a variable with an underscore (`_`) can indicate a private field.
  - Don't worry about what that means for now, but try not to start varibles with an underscore for now.
- Make variables descriptive and clear.
  - It will help other people and you in the future understand the code.
- Generally, it's safest to stick to numbers (0-9) and letters of the alphabet (a-z and A-Z).

Checkout the MDN resource's ["An aside on variable naming rules" section](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#an_aside_on_variable_naming_rules).

### `const`

`const` stands for constant, so variables declared using `const` cannot be have their values changed later (kind of - objects can have their internal values changed).

```javascript
const myConstVariable = "const";
myConstVariable = "something else"; // This will throw an error!

let myLetVariable = "let";
myLetVariable = "something else"; // This is okay
myLetVariable = 123; // This is okay
```

`const` can be a bit safer, because it prevents accidental reassignment. It's also easier to read when you know that the value of that variable won't change throughout the code.

If you're not sure, start with `const` and change it to a `let` once you need to change the value of that variable.

### `let` vs. `var`

There are few differences between `let` and `var`. `var` is older and is the original way variables were defined.  
In 2015, a new version of JavaScript was released called ES6. This large revision introduced many changes including `const` and `let`.

We will not go into detail about the differences, but **we generally recommend using `const` and `let`**.

You can more about the differences on [Sentry.io's website](https://sentry.io/answers/difference-between-let-and-var-in-javascript) and do an exercise on [FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords).

## foobar, foo, bar, baz

You will see these used throughout example code. They are used as placeholders and have no real meaning.
Usually when you see these examples, it tells you that the name can be replace with something else.

For example, variables can be called whatever you want (with some exceptions) and can be assigned to any value.
In the example below, both `foo` and `bar` can be exchanged for something else.

Don't use this in real code. Only use this as an example (e.g., when asking a question or explaining something).

```javascript
const foo = "bar";
```

## Types (Primitives)

Primitives are immutable values that at the lowest level of the language.

### Number

Numbers between ±(2<sup>-1074</sup> to 2<sup>1024</sup>).

- Safe number: -(2<sup>53</sup> − 1) to 2<sup>53</sup> − 1

```javascript
const myFavoriteNumber = 28;
```

### BigInt

For numbers `number` can't handle.

You likely won't be using this during course.

There are two ways to define a `BitInt`:

```javascript
const myFavoriteLargeNumber = BigInt(9007199254740991);

const alsoMyFavoriteLargeNumber = 9007199254740991n; // notice the "n" at the end
```

### String

Strings are a sequence of characters (alphabet, numbers, punctuation, etc.). Strings can have numbers in them, but they are not considered a number.

- Strings are usually created using single quotes (`"`) or double quotes (`"`). They wrap the text like: `'I have 2 dogs'`. Just make sure you start and finish with the same one.

```javascript
const thisIsAString = "Hello world!";
const thisIsAlsoAString = "I live on 59th St.";
const thisIsAlsoAlsoAString = "1223"; // Not a number!
const evenEmojis = "😆🤔";

console.log(
  thisIsAString,
  thisIsAlsoAString,
  thisIsAlsoAlsoAString,
  evenEmojis
);
```

### Boolean

Booleans can only be two values: `true` or `false`. It's like saying "yes" or "no".

- Make sure not to use quotes, because that would turn into a string (example: `true` is a boolean and `"true"` is a string).

### Symbol

Symbols are used when you want a unique value.

You likely won't be using this during course.

### Undefined

It indicates that a variable is not defined.

```javascript
let myVariable;
myVariable; // returns undefined
```

You can also assign variables `undefined` explicitly. This is not very common, and it's usually better to assign `null` if you want a variable without a value.

```javascript
let myVariable = 1;
myVariable = undefined;
```

### Null

It indicates that there is no value.

Generally, `undefined` represents a lack of value because it has not been assigned yet. However, `null` signifies an intentional lack of value.

## Types (others)

All other types are based on the object type.

### Object

Unlike primitives objects can hold more than one value in the form of key-value pairs.

The brackets, `{` and `}`, represent the start and end of the object. Inside, you have your key-value pairs. Each key will have one value. For example, `yearLaunched`, the key, is assigned to `2017`, the value.

```javascript
{
  yearLaunched: 2017,
  name: "Boaty McBoatface",
  favorite_color: "yellow",
};
```

Objects can be assigned to variables just like primitives. Here we are assigning the above object to the variable `boat`.

```javascript
// This is the object
const boat = {
  yearLaunched: 2017,
  name: "Boaty McBoatface",
  favorite_color: "yellow"
};

// Here is how you can interact with the object
const numberYearsSinceLaunch = 2023 - boat.yearLaunched;

console.log("Boat's name:", boat.name);
console.log("Number of years in service:" numberYearsSinceLaunch);

boat.website = "https://en.wikipedia.org/wiki/Boaty_McBoatface";

console.log("Boat's website:" boat.website);
```

## Homework

**FreeCodeCamp**

- Create an account at [freeCodeCamp](https://www.freecodecamp.org).
- Go to freeCodeCamp's [**JavaScript Algorithms and Data Structures**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) course.
- Start with **Comment Your JavaScript Code** and do all exercise through **Declare a Read-Only Variable with the const Keyword**.
  - Before you leave, let us know which lesson you got to during standup!

**HTML webpage on what you've learned**

- Create a new page on your website and write a little about what you learned so far about JavaScript.
- Pick a few things from this lesson and try to explain it in your own words.
- Make sure to use HTML elements so that the website flows nicely (headings, paragraphs, and lists can help!).
- **Even if you don't finish, send us a link to your page so we can review it!**

## Resources

- [MDN - Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [MDN - Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [Loyola Marymount University - JavaScript Types](https://cs.lmu.edu/~ray/notes/javascripttypes/)
