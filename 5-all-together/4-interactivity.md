# Interacting with your pages

## Adding an event listener

Adding a button on a page will display a button, but it won't do anything unless you tell it what to do.

For example, you can tell the button to do something when the button is clicked by the user.

We can do this by adding an event listener using `addEventListener`. Event listeners wait for an "event" to happen. When that event happens, it triggers a function that you passed in. The event can be many different things like the user clicking on an element or the user scrolling the page.

Every element has a method (or function) called `addEventListener`. This method takes two arguments: the type of event, and the function that is triggered when the event happens.

```html
<html>
  <body>
    <p id="text"></p>

    <button>Click Me!</button>
  </body>
</html>
```

```javascript
const button = document.querySelector("button");

// A function that changes the text inside the <p>
function onClick() {
  const paragraph = document.querySelector("p#text");
  paragraph.innerText = "You clicked the button!";
}

// Adds an event listener to the button element
// Whenever there is a "click" event, the onClick function is triggered
button.addEventListener("click", onClick);
```

In the above example, we are assigning the function `onClick` to be triggered whenever there is a click event on the button.

### Multiple event listeners

One element can have more than one event listener.

```javascript
const button = document.querySelector("button");

function updateParagraph() {
  const paragraph = document.querySelector("p#text");
  paragraph.innerText = "You clicked the button!";
}

function log() {
  console.log("Button was clicked");
}

button.addEventListener("click", updateParagraph);
button.addEventListener("click", log);
```

## Other events

In the above examples we were using the click event, but there are many different [types of events](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing).

### Mouse Events

Here we demonstrate how to update the website when a mouse enters and leaves a `<div>`

```html
<html>
  <style>
    div {
      border: 1px solid black;
      height: 200px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: lawngreen;
      font-size: 30px;
    }
  </style>
  <body>
    <div></div>
  </body>
</html>
```

```javascript
const div = document.querySelector("div");

// Function for when mouse enters the div
function onMouseover() {
  const div = document.querySelector("div");
  div.innerText = "Inside!";
  div.style.backgroundColor = "darkgreen";
}

// Function for when mouse leaves the div
function onMouseout() {
  const div = document.querySelector("div");
  div.innerText = "";
  div.style.backgroundColor = "white";
}

div.addEventListener("mouseover", onMouseover);
div.addEventListener("mouseout", onMouseout);
```

## Removing an event listener

You can stop your website from listening for certain events by removing the event listener.

To do this you would call the `removeEventListener` method on the element you want to remove the event listener from. Make sure to pass in the event type and the event listener function you passed into the `addEventListener` method.

```javascript
const button = document.querySelector("button");
let counter = 0;

function onClick() {
  counter++;

  const paragraph = document.querySelector("p#text");
  paragraph.innerText = `You clicked the button ${counter} time(s)!`;

  if (counter === 10) {
    button.removeEventListener("click", onClick);
  }
}

button.addEventListener("click", onClick);
```

## Input

The `<input>` element is a way to get text input from the user.

```html
<input />
```

Using the `input` event listener, we can capture any changes made inside the `<input>`. Below, every time the user changes the text inside the input, the `onInputChange` function is triggered.

Notice that the `onInputChange` function takes an `event` argument, which contains information about the event. Because `onInputChange` is an "event listener" it makes sense that the function receives that information.

Using the `event` passed in, we can get the text inside the `<input>`: `event.target.value`

```javascript
const input = document.querySelector("input");
function onInputChange(event) {
  console.log(event.target.value);
}
input.addEventListener("input", onInputChange);
```

## Select
The `<select>` element is another way to get input from the user – by allowing them to select from a list of options, presented in a dropdown menu.
```html
<select id="colors">
  <option>Red</option>
  <option>Blue</option>
  <option>Green</option>
</select>
```
The `<select>` element defines the dropdown menu, while `<option>` elements represent each option the user can choose. By default, the `value` associated with each option is whatever content is between `<option>` tags. You can also give an explicit value with the `value` attribute.
```html
<select id="colors">
  <option value="red">Red, like a cherry</option>
  <option value="blue">Blue, like the sky</option>
  <option value="green">Green, like grass</option>
</select>
```
To set a default value, add the `selected` attribute to whichever option should be preselected when the page loads.
```html
<select id="colors">
  <option selected>Please choose a color:</option>
  <option>Red</option>
  <option>Blue</option>
  <option>Green</option>
</select>
```

### Change event
Similar to `input` events, a `<select>` element uses a `change` event to capture the user selection. In this example, every time a user chooses a different option, `onOptionChange` is called and the `value` of the selected option is logged to the console.

Just like with `input` event handlers, `change` event handlers are also called with the `event` object – giving us access to the same properties as previous examples.

```js
const select = document.querySelector("select");
function onOptionChange(event) {
  console.log(event.target.value);
}
select.addEventListener("change", onOptionChange);
```
