# JavaScript (Conditional Logic)

## Conditional Logic
As our code gets more complex, we might encounter a situation where we will want to execute different pieces of code depending on certain conditions. For instance, if a user is logged into a website they'll see different information than a user that is visiting the site for the first time. This decision-making process is done in JavaScript with the help of things like **if statements, comparison operators, and switch statements,** among others.

## If Statements
Whenever we need to make a decision in our code, we can use an `if` statement. The `if` keyword tells JavaScript to execute the code in the curly braces only if the condition in parentheses is true. This condition must be a `boolean` value – either `true` or `false.`

Note: This might be the first time you've seen functions with multiple `return` statements – when using `if` statements (and other conditional logic), we'll have a different `return` value based on whether or not the condition is true.
 
```js
function check(someCondition) {
  if (someCondition) {          // if keyword, followed by condition
    return "The condition was true!";
  }
  return "The condition was false.";
}
```
In this example, the string `"The condition was true"` will only be returned if `someCondition` evaluates to `true` – otherwise this function will return the second string `"The condition was false."`

```js
function startsWithLetterM(name) {
  if (name[0] === "M") {
    return "This name starts with the letter M!";
  }
  return "This name doesn't start with M.";
}
```
Note: We'll talk about that `===` operator next in this lesson. For now just know that the condition is checking whether or not the first letter in `name` is "M."

## Comparison Operators
In JavaScript, we have many **comparison operators** to compare different values and return either a `true` or `false` value. We can use these in our `if` statements to make decisions in our code.

### Equality Operator
The **equality operator** `==` compares two values and returns `true` if they are equivalent, and `false` if they are not. Note that the equality operator is different from `=` which we use to assign a value to a variable.
```js
function checkEquality(value) {
  if (value == 100) {
    return "Equal!";
  }
  return "Not equal.";
}

checkEquality(10)     // Not equal
checkEquality(100)    // Equal!
```
In this example, if the `value` passed in is `100` the condition `value == 100` will evaluate to `true` – meaning that this function will return the string `"Equal!"` When any other value is passed in, the function will return `"Not equal."`

If JavaScript encounters different data types when using the equality operator, it will attempt to convert one to the other – for instance, a `string` to a `number.` This can lead to some potentially unexpected behavior. In the above example, if we pass in the `string` value `"100"` JavaScript will convert the `string` to a `number,` which will then evaluate the condition to `true.`

```js
100 == 10       // false
100 == 100      // true
100 == "abc"    // false
100 == "100"    // true 🤔
```

### Strict Equality Operator
The **strict equality operator** `===` is just like the equality operator - it compares two values and returns `true` or `false` - however, it will not convert data types, and only returns `true` if they are exactly the same.
```js
function checkStrictEquality(value) {
  if (value === 100) {
    return "Equal!";
  }
  return "Not equal.";
}

checkStrictEquality(10)     // Not equal
checkStrictEquality(100)    // Equal!
```
So far, this looks the same as in the previous example, but we'll see the difference when we try comparing `string` and `number` values. What do you think will be returned from `checkStrictEquality("100")`?

```js
100 === 10       // false
100 === 100      // true
100 === "abc"    // false
100 === "100"    // false
```
In general, it's a good idea to use `===` rather than `==` but remember the difference!

### Greater Than Operator
The **greater than operator** `>` compares two `numbers` – if the value on the left is greater than the value on the right, it returns `true`, otherwise it returns `false`
```js
function greaterThanTen(value) {
  if (value > 10) {
    return "Greater than ten!";
  }
  return "Not greater than ten.";
}

greaterThanTen(100)    // Greater than ten!
greaterThanTen(5)      // Not greater than ten.
greaterThanTen(10)     // Not greater than ten.
```
Note: The greater than operator will also attempt to convert data types, just like the equality operator.
```js
10 > 3         // true
10 > "3"       // true
2 > 3          // false
"5" > 9        // false
```

### Greater Than or Equal Operator
The **greater than or equal operator** `>=` is very similar to the greater than operator. It compares two `numbers` – if the value on the left is greater than the value on the right, **or equal to the number on the right,** it returns `true`, otherwise it returns `false`
```js
function greaterThanOrEqualToTen(value) {
  if (value >= 10) {
    return "Greater than or equal to ten!";
  }
  return "Less than ten.";
}

greaterThanOrEqualToTen(100)    // Greater than or equal to ten!
greaterThanOrEqualToTen(5)      // Less than ten.
greaterThanOrEqualToTen(10)     // Greater than or equal to ten.
```
Note: The greater than or equal to operator will also attempt to convert data types.
```js
10 >= 10         // true
10 >= "10"       // true
2 >= 3           // false
"5" >= 9         // false
```

### Less Than Operator
The **less than operator** `<` compares two `numbers` – if the value on the left is less than the value on the right, it returns `true`, otherwise it returns `false`
```js
function lessThanTen(value) {
  if (value < 10) {
    return "Less than ten!";
  }
  return "Not less than ten.";
}

lessThanTen(8)      // Less than ten!
lessThanTen(15)     // Not less than ten.
lessThanTen(10)     // Not less than ten.
```
Note: Just like the previous few, the less than operator will attempt to convert data types.
```js
1 < 3          // true
1 < "3"        // true
3 < 2          // false
"5" < 9        // true
```

### Less Than or Equal Operator
The **less than or equal operator** `<=` is very similar to the less than operator. It compares two `numbers` – if the value on the left is less than the value on the right, **or equal to the number on the right,** it returns `true`, otherwise it returns `false`
```js
function lessThanOrEqualToTen(value) {
  if (value <= 10) {
    return "Less than or equal to ten!";
  }
  return "Greater than ten.";
}

lessThanOrEqualToTen(1)       // Less than or equal to ten!
lessThanOrEqualToTen(15)      // Greater than ten.
lessThanOrEqualToTen(10)      // Less than or equal to ten.
```
Note: The less than or equal to operator will also attempt to convert data types.
```js
10 <= 10         // true
10 <= "10"       // true
3 <= 1           // false
"9" <= 5         // false
```

### Logical And Operator
JavaScript has the ability to check for more than one condition at a time. The ****logical and operator**** `&&` checks two conditions and returns `true` if the condition to the left and right both return true, and `false` otherwise.

We can do the same comparisons by nesting `if` statements, but using `&&` allows us to write much simpler code that is easier to read.
```js
if (value > 10) {
  if (value < 20) {
    return "Between 10 and 20!";
  }
}
return "Outside range.";
```
By nesting the `if` statements, we can check if `value` falls between the numbers 10 and 20. However, we can rewrite this using the logical and operator like this:
```js
if (value > 10 && value < 20) {
  return "Between 10 and 20!";
}
return "Outside range.";
```

### Logical Or Operator
Similar to the logical and operator, the **logical or operator** `||` checks two conditions and returns `true` if *either of them* are true (even if one of them is false).

Again, using the `||` allows us to simplify some complex chains of `if` statements
```js
if (value < 10) {
  return "Outside range.";
}

if (value > 20) {
  return "Outside range.";
}

return "Between 10 and 20!";
```
This is another way to check if a number falls between 10 and 20 – this time checking each outer range in sequence. We can similarly rewrite this with the logical or operator:
```js
if (value > 20 || value < 10) {
  return "Outside range.";
}
return "Between 10 and 20!";
```
Remember that when using the logical and operator `&&` both sides must be true for the statement to evaluate to `true` – but with the logical or operator `||` only one side needs to be true for the statement to evaluate to `true`
```js
true  &&  true    // true
true  &&  false   // false
false &&  false   // false

true  ||  true    // true
true  ||  false   // true
false ||  false   // false
```
## Homework

**FreeCodeCamp**

- Go to freeCodeCamp's [**JavaScript Algorithms and Data Structures**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) course.
  - Make sure you're logged in!
- Start with **Understanding Boolean Values** through **Comparisons with the Logical Or Operator**.
  - Before you leave, let us know which lesson you got to during standup!

# Part 2
## Else Statements
When the condition in an `if` statement is true, the code in the block that follows is executed – however, when it is false nothing happens and our code continues executing outside of the `if` statement. If we want something to happen when the condition is false, we can use an `else` statement:
```js
if (something) {
  // do one thing
} else {
  // do something else
}
// code continues
```
An `else` statement looks similar to an `if` statement, just without the parentheses and condition, since it's understood to handle the case where the original condition is false.

All of the examples in the previous section simply have a `return` after the `if` statement to capture the alternate case, but we can rewrite them like this:
```js
// previous example
if (value > 10 && value < 20) {
  return "Between 10 and 20!";
}
return "Outside range.";

// with else statement
if (value > 10 && value < 20) {
  return "Between 10 and 20!";
} else {
  return "Outside range.";
}
```
These are simple examples, but the use is easier to see when we want to perform one action if the condition is true, and another action when the condition is false – then continue executing (without `return` statements in our conditional)
```js
function greetUser(name) {
  if (name === "Alex") {
    console.log("Hi again, Alex!")
  } else {
    console.log("Hello new user!")
  }
  console.log("Welcome to the app!")
}
```
The additional `else` block lets us capture both execution paths and perform different actions for both cases, before continuing on with executing code.

## Else If Statements
If we have more than two cases to account for, we can chain several `if` statements together by using `else if` blocks.
```js
if (oneCondition) {
  // do one thing
} else if (anotherCondition) {
  // do a different thing
} else {
  // do a third thing
}
```
Only one of those blocks of code will be executed, and we can account for as many cases as we want by adding `else if` statements.
```js
// don't do this! lol
function whichCharacter(char) {
  if (char === "A") {
    console.log("The letter is A")
  } else if (char === "B") {
    console.log("The letter is B")
  } else if (char === "C") {
    console.log("The letter is C")
  } else if (char === "D") {
    ...
  } else {
    console.log("The letter is z")
  }
  return char
}
```
It's important to think about the order of our `if` and `else if` statements. Since functions are executed from top to bottom, be careful about which statements come before others. Consider these two similar functions:
```js
function checkNumberA(number) {
  if (number < 5) {
    return "Less than five";
  } else if (number < 10) {
    return "Less than ten";
  } else {
    return "Greater than or equal to ten";
  }
}
```
This one has the same conditions, just in a different order:
```js
function checkNumberB(number) {
  if (number < 10) {
    return "Less than ten";
  } else if (number < 5) {
    return "Less than five";
  } else {
    return "Greater than or equal to ten";
  }
}
```
When calling these with the same value, we get different results:
```js
console.log(checkNumberA(4))    // Less than five
console.log(checkNumberB(4))    // Less than ten
```

## Homework

**FreeCodeCamp**

- Go to freeCodeCamp's [**JavaScript Algorithms and Data Structures**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) course.
  - Make sure you're logged in!
- Start with **Introducing Else Statements** through **Golf Code**.
  - Before you leave, let us know which lesson you got to during standup!