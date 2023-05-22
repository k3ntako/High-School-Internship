# Updating elements

## `innerText`

`innerText` is a property on an HTML element. Calling `element.innerText` will return the text inside of that element.
You can also assign the text inside using an assignment operator (`=`).

```html
<h1 id="userName">User's name</h1>
```

```javascript
const h1 = querySelector("#userName");
console.log("h1.innerText"); // prints "User's name"

h1.innerText = "Hello Mark!"; // updates text inside <h1> on the webpage
```

## Styling

HTML elements have a `.style` property that you can edit. You can use this to get a style for an element and update them.
You can use the `querySelector` to get the element you want to style.

```javascript
const div = document.querySelector("#introduction");
console.log(div.width); // prints the width of the div

div.style.color = "white";
div.style.backgroundColor = "blue";
```

When you change an element's background color in CSS, you would set the `background-color` property. Notice above that `backgroundColor` is camelCase.
