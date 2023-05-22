# Parent and Child Nodes

## Getting Parent and Child Nodes

An element can only have one parent, but multiple children.

```html
<body>
  <div id="parent">
    <div id="child1"></div>
    <div id="child2"></div>
  </div>
</body>
```

For `div` with ID of `parent`:

- Parent: `<body></body>`
- Children:

  - `<div id="child1"></div>`
  - `<div id="child2"></div>`

For `div` with ID of `child1` (same for `child2`):

- Parent: `<div id="parent">`
- Children: `null`

### Example of `children`

```javascript
const parent = document.querySelector("#parent");
const child1 = parent.children[0];
const child2 = parent.children[1];

child1.innerText = "I am child 1";
child2.innerText = "I am child 2";
```

### Example of `parentNode`

```javascript
const child1 = document.querySelector("#child1");
const parent = child1.parentNode;
parent.style.backgroundColor = "lightgreen";
parent.style.height = "100px";
parent.style.width = "100px";
```

## Create and Insert Elements

We have used `innerText` to change the text inside an element.
What if we want to add HTML elements?

We can use `createElement` to create an element in JavaScript and add it to your page using `appendChild`.

```javascript
// Create an element in JS
// This element only exists in JS and is not yet on your page
const h2 = document.createElement("h2");

// Make changes to your element
h2.id = "myId";
h2.style.color = "lightgreen";
h2.innerText = "This text will be inside the h2";

// Add the element to you rpage
document.body.appendChild(h2);
```

You can also append to an element you found using `querySelector`.

```javascript
const parent = document.querySelector(".introduction");
const child = document.createElement("h2");
h2.innerText = "Introduction";

parent.appendChild(h2);
```

## Topics not covered

- Removing elements
