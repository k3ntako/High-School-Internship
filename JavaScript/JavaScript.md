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

## Comments

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments

Line Comments

```
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

Block Comments (Multi-line Comments)

```
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");

  /*
  This is a multi-line line
  JavaScript comment
  */

}
comment();
```

## Types

### Number

Numbers between ±(2<sup>-1074</sup> to 2<sup>1024</sup>).

- Safe number: -(25<sup>3</sup> − 1) to 25<sup>3</sup> − 1

```
const myFavoriteNumber = 28;
```

### BigInt

For numbers `number` can't handle.

You likely won't be using this during course.

```
const myFavoriteLargeNumber = BigInt(9007199254740991);

const alsoMyFavoriteLargeNumber = 9007199254740991n;
```

### String

`string`s are basically texts. `string`s can have numbers in them, but they are not considered a `number`.

```
const thisIsAString = "Hello world!"
const thisIsAlsoAString = "I live on 59th St."
const thisIsAlsoAlsoAString = "1223" // Not a number!
```

### Boolean

Booleans can only be two values: `true` or `false`. It's like saying "yes" or "no".

### Symbol

Symbols are used when you want a unique value.

You likely won't be using this during course.

### Object

Key-value pairs

### Undefined

It indicates that a variable is not defined.

```
let myVariable;
myVariable // returns undefined
```

### Null

It indicates that there is no value.

Generally, `undefined` represents a lack of value because of inaction. However, `null` signifies an intentional lack of value.

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
