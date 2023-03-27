HTML practice?
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-introduction-to-front-end-engineer-career-path/modules/wdcp-22-the-internet-and-web-development-467c37c6-1d80-4daf-827a-5ba932c3cf9e/lessons/web-dev-lang/exercises/html-paragraph-tag

TODO: Ask Matt if any of these are useful.
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-introduction-to-front-end-engineer-career-path/modules/wdcp-22-the-internet-and-web-development-467c37c6-1d80-4daf-827a-5ba932c3cf9e/lessons/what-is-the-internet/exercises/browsers-and-servers

HTML HW:
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-fundamentals-of-html/modules/wdcp-22-learn-html-elements-35fee1ff-f512-4893-8e4a-b18e08b7a592/lessons/intro-to-html/exercises/intro
HTML Quiz
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-fundamentals-of-html/modules/wdcp-22-learn-html-elements-35fee1ff-f512-4893-8e4a-b18e08b7a592/quizzes/intro-to-html-quiz

Useful:
Exercise 1
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-introduction-to-front-end-engineer-career-path/modules/wdcp-22-the-internet-and-web-development-467c37c6-1d80-4daf-827a-5ba932c3cf9e/lessons/web-dev-lang/exercises/js-intro
Exercise 2
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-introduction-to-front-end-engineer-career-path/modules/wdcp-22-the-internet-and-web-development-467c37c6-1d80-4daf-827a-5ba932c3cf9e/lessons/web-dev-lang/exercises/js-functions

Articles/Videos
What is Programming?
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-introduction-to-front-end-engineer-career-path/modules/fecp-22-what-is-front-end-development-3d599115-d677-49aa-8051-7b125be3dace/articles/what-is-programming
What is Front-End?
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-introduction-to-front-end-engineer-career-path/modules/fecp-22-what-is-front-end-development-3d599115-d677-49aa-8051-7b125be3dace/videos/what-is-front-end
Front-End Frameworks (Maybe not needed? What does the above video cover?)
https://www.codecademy.com/journeys/front-end-engineer/paths/fecj-22-web-development-foundations/tracks/fecj-22-introduction-to-front-end-engineer-career-path/modules/fecp-22-what-is-front-end-development-3d599115-d677-49aa-8051-7b125be3dace/videos/front-end-frameworks

FreeCodeCamp
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures#basic-javascript

# JavaScript

## Comments

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments

Line Comments

```javascript
function myFunction() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
myFunction();
```

Block Comments (Multi-line Comments)

```javascript
function myFunction() {
  /* This is a one line JavaScript myFunction */
  console.log("Hello world!");

  /*
  This is a multi-line line
  JavaScript comment
  */
}
myFunction();
```

## Variables

Variables allow computers store data dynamically. I like to think of them as boxes that can store different data (e.g., username, message to another user).

<img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables/boxes.png">

They are temporary storage of data while your program runs. They cannot do a lot on their own.

You can:

- Declare (or create) a variable
- Set the value (or data) of a variable
- Update the value of a variable
- Get the value of a variables

Make sure you use a descriptive name for you variable. Just like a box, it's convienent if the variable is labeled. You wouldn't have to look inside to know what types of data is held by a variable.

https://www.codecademy.com/courses/introduction-to-javascript/lessons/variables/exercises/intro-variables

TODO: define "dynamically"

### Declaring a variable

Creates a variable. No value (data) is assigned yet (it's an empty box).

```javascript
let myVariable;
var yourVariable;
```

Notice that there are two way to declare a variable without assignign a value. Generally, you should use `let` over `var`.
`var` is older and behaves slightly differently.

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

const alsoMyFavoriteLargeNumber = 9007199254740991n;
```

### String

`string`s are basically texts. `string`s can have numbers in them, but they are not considered a `number`.

```javascript
const thisIsAString = "Hello world!";
const thisIsAlsoAString = "I live on 59th St.";
const thisIsAlsoAlsoAString = "1223"; // Not a number!
```

### Boolean

Booleans can only be two values: `true` or `false`. It's like saying "yes" or "no".

### Symbol

Symbols are used when you want a unique value.

You likely won't be using this during course.

### Undefined

It indicates that a variable is not defined.

```javascript
let myVariable;
myVariable; // returns undefined
```

### Null

It indicates that there is no value.

Generally, `undefined` represents a lack of value because of inaction. However, `null` signifies an intentional lack of value.

## Types (others)

All other types are based on the object type.

### Object

Unlike primitives objects can hold more than one value in the form of key-value pairs.

Here is an example of an object. The brackets, `{` and `}`, represent the start and end of the object. Inside, you have your key-value pairs. Each key will have one value. For example, `yearLaunched`, the key, is assigned to `2017`, the value.

Just like variables, the key is generally camelCase.

```javascript
{
  yearLaunched: 2017,
  name: "Boaty McBoatface",
  favoriteColor: "yellow",
};
```

Objects can be assigned to variables just like primitives. Here we are assigning the above object to the variable `boat`.

```javascript
// This is the object
const boat = {
  yearLaunched: 2017,
  name: "Boaty McBoatface",
  favoriteColor: "yellow"
};

// Here is how you can interact with the object
const numberYearsSinceLaunch = 2023 - boat.yearLaunched;

console.log("Boat's name:", boat.name);
console.log("Number of years in service:" numberYearsSinceLaunch);

boat.website = "https://en.wikipedia.org/wiki/Boaty_McBoatface";

console.log("Boat's website:" boat.website);
```

Concepts:

- Comments
- Types
  - undefined, null, boolean, string, symbol, bigint, number, and object
- Variables
  - Declare (var, let, const)
  - Assign (=)
  - Initialize with value (let a = "1")
  - Naming convention
- Math
  - +, -, \*, /
  - ++, --
  - Decimals
  - Remainder (%)
  - Math with variables
- String

  - Escaping literals
    - Quoting Strings with Single Quotes
    - `\'`, `\"`, `\\`, `\n`, `r`, `\t`, `\b`, `\f`
  - Concatenate strings
    - `+`, `+=`
    - With variables (`+` and `+=`)
  - Length
    - Save into variable
  - Bracket notation (`"hello"[0]`)
    - First, nth, last characters
  - Immutability

    - ```
      // Does not work
      let myStr = "Bob";
      myStr[0] = "J";

      // Works
      let myStr = "Bob";
      myStr = "Job";
      ```

## Resources

- [MDN - Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
  - Section on naming
- [MDN - Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

### `let` vs. `var`

There are few differences between `let` and `var`. `var` is older and is the original way variables were defined.  
In 2015, a new version of JavaScript was released called ES6. This large revision introduced many changes including `const` and `let`.

Two differences:

- Variables defined with `var` can be declared multiples times.
- Scoping

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords

https://sentry.io/answers/difference-between-let-and-var-in-javascript

```javascript

```

### Uninitialized variables

If you try to use a variable with no value, you might run into problems.

```javascript
let myVariable;
var yourVariable;

myVariable + yourVariable; // returns NaN
```
