# Calculator Project
To tie together some of the things we've worked on over the last couple months, your job is to complete a calculator app! Some of the basic HTML is already in place (in `index.html`), as well as styling (in `style.css`) – you're responsible for completing the `html` for the operator input, as well as all of the JavaScript (in `index.js`) to make the calculator function properly.

### A Note on Styling
While some styling is already provided to make it easier to focus on the functionality, feel free to modify or add to `style.css` as you see fit.

## Getting Started
There are a lot of pieces to this project, but here are a few ideas to help you get started:
- An empty `<select>` element has already been created for the operator (i.e. add, subtract, multiply, divide) dropdown. Remember that to add choices to the dropdown menu, you can create `<option>` elements between the `<select>` tags. They are formatted like
```html
  <option value="some value">Some name</option>
```
- There are a lot of buttons in this layout – one approach could be adding event listeners to each one, or on the other hand think about this: Click events travel up the DOM tree from child to parent nodes. To test this, see what happens when you attach a `click` event listener to `<div class="calculator-keys">` (this is the parent node of all of the calculator keys). In the click handler function, just try to `console.log` whatever the value of `event.target` is, and see what happens in the console when you click different keys. Think about which approach makes the most sense to you, and what extra logic might be required to check which button was clicked.

- Before you start doing any calculations, first just make sure the display correctly updates when each number key is clicked. Since the display is an `<input>` element, you can use its `value` property, instead of `innerText` like you've done before. You could do something like this
```js
  const display = document.querySelector('.calculator-screen');
  display.value = // set display value here
```

- There are a few different pieces of data that you'll need to be able to keep track of (and keep updated) as a user interacts with your app. You could handle this in various ways – one possible solution might be to create a `calculator` object to hold each piece of changing information. This would help keep everything in once place, and allow you to pass the whole object to functions if necessary. It might look something like this
```js
  const calculator = {
    displayValue: '0',
    firstOperand: 2,    // an 'operand' is one of the numbers in the equation
    secondOperand: 5,
    operator: '+',
    // other properties you might need
  }
```
- Think about how your app handles different types of data. For instance, the `value` associated with a number button might be represented by a `string` but to perform a mathematical operation, you'd need to be using a `number`.
## Requirements
The following features are required to complete a working calculator. While some features might depend on others, think about how you might add one at a time, starting with some simpler ones and working up in complexity.

- When app loads, the display should read "0" (zero)
- The dropdown menu should show the four basic arithmetic operators:
  - addition `+`
  - subtraction `-`
  - multiplication `×` (represented in HTML with `&times;`)
  - division `÷` (represented in HTML with `&divide;`)
- Clicking each number button should add a digit to the number in the display
- Clicking the AC button should clear the display back to "0" (zero)
  - It also deselects any arithmetic operators
- Selecting an operator updates the display with the correct symbol
- After an operator is selected the display should clear to be ready to start displaying the second operand
- Clicking the equals `=` button should update the display with the correct result of the operation
  - It should also reset the operator dropdown so no operator is selected
- Dividing by 0 (or any other invalid mathematical operation) should show `ERROR` in the display
- After a calculation is completed, if the user selects another operand without clearing they should be able to use the previous result as the first operand
  - e.g. after calculating `2 * 5` the display should read `10` – if a user then selects `+` a new calculation is started with `10 +` and it should accept a second number as the second operand
  