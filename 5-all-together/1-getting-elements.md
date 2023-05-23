# HTML with JavaScript

You've learned to write JavaScript,

## `<script>` Tag

## Inline Script

Like CSS, there are a couple ways to add JavaScript to HTML files. The `<script>` tag is a way to add inline JavaScript code like the `<style>` tag for CSS.

They are usually placed inside the `<head></head>` or `<body></body>` tags. `alert()` is a function that shows the alert box with the message provided.

The code inside the `<script>` tags runs automatically (TODO: demo).

```html
<html>
  <body>
    <h1>My Website</h1>

    <script>
      alert("hello");
    </script>
  </body>
</html>
```

### Importing a Script

You can also import the JavaScript file using the `<script>` tag.
This is preferable because it keeps JavaScript and HTML separated and easier to understand. It's just less messy.

```html
<html>
  <head>
    <script src="./name_of_your_file_here.js"></script>
  </head>
  <body>
    <h1>My Website</h1>
  </body>
</html>
```

## DOM (Document Object Model)

DOM is a way to represent the HTML page as a tree.

```html
<html>
  <head>
    <title>My Title</title>
  </head>
  <body>
    <h1>A heading</h1>
    <a href="">Link text</a>
  </body>
</html>
```

The above code would look like this:

<img src="https://raw.githubusercontent.com/k3ntako/High-School-Internship/96cb265dc293660c76c55840f9b2b9cf336c8c92/5-all-together/images/DOM-model.svg" />

<a href="https://commons.wikimedia.org/wiki/File:DOM-model.svg">Diagram</a> created by Birger Eriksson.

## Document

The Document is the very top of the DOM. It has many methods and properties that you will find useful.

An easy way to get the `<body>` for you webpage is `document.body`.

## `querySelector`

Returns the first element that matches the selector passed in. The argument passed in is a CSS selector string.
Returns `null` if nothing matched the selector.

```javascript
const elementWithClass = document.querySelector(".myClass");
const elementWithID = document.querySelector("#myId");
const divElement = document.querySelector("div");

console.log("Element retrieved using class:", elementWithClass);
console.log("Element retrieved using ID:", elementWithID);
console.log("Element retrieved using tag:", divElement);
```

## `querySelectorAll`

Same as `querySelector` but returns a list of elements that match the selector passed in. Returns an empty list if there are no matches.

Note: The list acts like an array, but technically is not an array.

```javascript
const elementWithClass = document.querySelector(".myClass");
const divElement = document.querySelector("div");
```

## Topics not covered

- Where you import the JavaScript file matters. If a JavaScript file takes a long time to load, it can block the loading of any HTML elements after that.
- `defer` and `async` attributes alter how JavaScript files are imported.
- Alternatives to `querySelector` and `querySelectorAll`. These are older and I would recommend you use `querySelector` and `querySelectorAll`.

  - `document.getElementById`
  - `document.getElementsByTagName`
