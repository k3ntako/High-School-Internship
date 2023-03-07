<style>
  .code-demo {
    display: block
    width: 100%;
    padding: 1em;
	  border: 5px double black;
  }
</style>

# HTML

## To start

- Create new folder in your folder: Portfolio

## Vocabulary

- Browsers
- Style/Styling

## Overview of HTML

### Three Languages

Different langauges for different purposes:

- HTML (HyperText Markup Language)
  - Gives structure/shape
  - Tells browser where things go (examples: button, text)
  - Example: add a button here
- CSS (Cascading Style Sheets)
  - Design (examples: color, size)
  - Examples: make this button blue, make button 100px wide
- JavaScript
  - Makes your website do something
  - Example: when user clicks this button change the background color to yellow

Browsers like Chrome and Firefox will take these files and show you the website.

TODO: add links to demo

## Parts of an HTML Tag

**HTML element** (or element) consists of a pair of HTML tags with content inside.

```
<button>Change Background</button>
```

**Opening Tag** tells the browser where the element starts. The element name is surrounded by angle brackets (`<` and `>`).

```
<button>
```

**Closing tag** indicates where the element ends. It looks like the opening tag but has a forward slash (`/`) in after the left angle bracket (`</`).

```
</button>
```

**Content** is what is inside the tags. It can be text or other elements.

```
Change Background
```

## Different HTML Tags

### `<html>`

- It is always the outermost tag.
- Only one per page.

### `<head>`

- Includes metadata (or information) about the page.
- `<title>`, `<link>`, `<style>`, `<script>`, and `<meta>` are common elements you might find inside `<head></head>`.
- Don't put content to be displayed (text or elements to be displayed) here.
- Only one per page.

### `<title>`

- The name of the page, which will show up in the browser tab.
- Only put text inside (no elements).
- Only one per page.

### `<body>`

- Content of the page. Place any elements or text you want displayed on the page inside the body.
- Only one per page.

### Headings (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`)

- Adds style to text and helps organize a page into sections. Helps the user understand the flow of the page.
- `<h1>` is largest and `<h6>` is smallest.

### `<p>`

- `<p>` stands for "paragraph".
- Use this to group texts together as a paragraph.
- Browsers will automatically add spacing between paragraphs.

### `<b>`

- Used to bold text.
- Bolding text can be done in CSS as well.

### `<a>`

- A link to another page or somewhere on the current page.

```
<a href="https://example.com/>Go to Example.com</a>
```

### `<img>`

- Adds an image to the page
- TODO: self closing open tag

```
<img src="https://example.com/images/image_1.png" />
```

## Attributes

- Added to opening tag.
- Additional information for the tag.
- An HTML attribute has two parts: a name and a value.
- Example: `src="https://example.com/images/image_1.png"`
  - `src` is the name.
  - `"https://example.com/images/image_1.png"` is the value.

## Lists

### `<ul>` (Unordered List)

- Creates unordered list of items.
- List can be nested.
- Use `<li>` for each item.

```
<b>Grocery List</b>
<ul>
    <li>Almond Milk</li>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Oranges</li>
        </ul>
    </li>
</ul>
```

<div class="code-demo">
  <b>Grocery List</b>

  <ul>
      <li>Almond Milk</li>
      <li>Fruits
          <ul>
              <li>Apples</li>
              <li>Oranges</li>
          </ul>
      </li>
  </ul>
</div>

### `<ol>` (Ordered List)

- Creates ordered list of items.
- List can be nested.
- Use `<li>` for each item.

```
  <b>Recipe</b>
  <ol>
      <li>In a bowl, mix the following cereals:
          <ul>
              <li>Frosted Flakes</li>
              <li>Honey Nut Cheerios</li>
          </ul>
      </li>
      <li>Add the almond milk</li>
      <li>Enjoy with a spoon!</li>
  </ol>
```

<div class="code-demo">
  <b>Recipe</b>

  <ol>
      <li>In a bowl, mix the following cereals:
          <ul>
              <li>Frosted Flakes</li>
              <li>Honey Nut Cheerios</li>
          </ul>
      </li>
      <li>Add the almond milk</li>
      <li>Enjoy with a spoon!</li>
  </ol>
</div>

## Nesting

### Indentation

**Indentation** is space at the beginning of a line. This helps the human reader understand how the elements are nested.

When HTML elements are nested, the inner element is indented. The more nested, the more indented the element should be.

The browser treats consecutive whitespace characters (space, new line, etc.) as one even if there is more than one. So the website will look the same even if you do not indent. However, make sure you indent correctly so others (and you) can understand it later!

## Styling Elements

### `<span>`

- A way to group text or elements.
- Can be helpful when styling the page.
- It is an inline element.

### `<div>`

- Short for “division”
- A way to group text or elements and helps organize the page.
- Can be helpful when styling the page.
- It is a block-level element.

## Homework

- Create a new folder call: TODO: figure out name
- Find an HTML tag we didn't talk about today. See the "Resources" section below for a link to find more tags.
- Create a website on any topic you choose. Tomorrow you will show the rest of us.
- Tomorrow, let us know which tag you picked and how to use it.

- TODO: View source on simple site
- TODO: cover these
  - `<center>`
  - `<kbd>`

## Resources

- Find more HTML tags on [Codecademy](https://www.codecademy.com/resources/docs/html/elements) or on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
