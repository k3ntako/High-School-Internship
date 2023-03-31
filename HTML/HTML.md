# HTML

## Create a new repository

Create it in Github

1. Go to [Github](https://www.github.com)
1. Click "New" on the left-hand side
1. Set "Repository name" as `[your username].github.io`
   - Make sure you get the username exactly correct and don't include the brackets (`[` and `]`)
   - Example: `k3ntako.github.io`
1. Click "Create repository"

In your `Documents` folder, create a new folder called `Profile`.
Open the Terminal app and follow the instructions below (make sure to replace `[your username]` with your username):

```bash
$ cd ~/Documents
$ mkdir [your username].github.io
$ cd [your username].github.io
```

Initialize Git for this repo:

```bash
$ git init
```

Create a ReadMe file and add some text (`#` is not a comment here because it's inside quotes):

```bash
$ touch README.md
$ echo "# My Profile" > README.md
```

Commit your HTML file to Git:

```bash
$ git add README.md
$ git commit -m "First commit"
```

Connect this Git project to Github's repository (make sure to replace `[your username]` with your username):

```bash
$ git branch -M main
$ git remote add origin https://github.com/[your username]/[your username].github.io.git
```

Push (or upload) the newly created commit:

```bash
$ git push origin main
```

Go to Github to see if your files are there.

Create a new file called `index.html` in the same directory as `README.md`.

## Overview of HTML

### Three Languages

Different languages for different purposes:

- HTML (HyperText Markup Language)
  - Gives structure/shape
  - Tells browser where things go (examples: button, text)
  - Example: add a button here (<a href="Examples/ButtonExample1.html">code</a>, <a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/HTML/Examples/ButtonExample1.html">demo</a>)
- CSS (Cascading Style Sheets)
  - Design (examples: color, size)
  - Examples: make this button blue, make button 100px wide (<a href="Examples/ButtonExample2.html">code</a>, <a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/HTML/Examples/ButtonExample2.html">demo</a>)
- JavaScript
  - Makes your website do something
  - Example: when user clicks this button change the background color (<a href="Examples/ButtonExample3.html">code</a>, <a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/HTML/Examples/ButtonExample3.html">demo</a>)

Browsers like Chrome and Firefox will take these files and show you the website.

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

- Adds an image to the page.
- It is considered a [**void element**](https://developer.mozilla.org/en-US/docs/Glossary/Void_element) and should not be closed with `/>` in HTML.
  - However, you will see many people use a self-closing tag, which is a start tag that closes itself (see example below). They will still work just fine.
  - Note: Self-closing tags are required in XML, XHTML, and SVG (don't worry about those!).

```
<!-- Correct: start tag with no close tag -->
<img src="https://example.com/images/image_1.png">

<!-- Wrong (in HTML): self-closing tag -->
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

See below for a demo:

<hr />

<div>
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
<hr />

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

See below for a demo:

<hr />

<div>
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
<hr />

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

## View Source

Browsers come with an ability to view a page's HTML.

Right click a website and click on "View Page Source" (<kbd>⌥</kbd> + <kbd>⌘</kbd> + <kbd>U</kbd>).

<img src="https://raw.githubusercontent.com/k3ntako/High-School-Internship/main/HTML/Images/View_Source.png" />

## Homework

### Create a website

Your homework is to create a new website. You can choose any topic you are interested in (e.g., hobby or a country or something you learned at school) and you will present on them. Make sure you include everything in the "Requirements" section.

#### Requirements

- Create a file called `profile.html` in the project folder (`[your username].github.io`) we created earlier.
- Find an HTML tag we did **not** talk about today. See the "Resources" section below for a link to find more tags.
- Make sure to include at least these tags:

  - `<html>`
  - `<head>`
  - `<title>`
  - `<body>`
  - `<h1>`, `<h2>`, and `<h3>`
  - `<p>`
  - `<b>`
  - `<a>`
  - `<img>`
  - `<ul>` or `<ol>`
  - `<li>`

- During the next class, let us know which tag you picked and how to use it.
- Ask for help if you get stuck!

### Codecademy

If you finish the website early, continue working on the [HTML Fundamentals Course](https://www.codecademy.com/learn/learn-html-fundamentals). No need to finish all of it.

### Khan Academy

I think the assignments above should be enough to fill your time, but if you still have time try this [Khan Academy course](https://www.khanacademy.org/computing/computer-programming/html-css/intro-to-html/v/making-webpages-intro).
It will be a little repetitive, but repetition should help you retain the information better.

## Resources

- Find more HTML tags on [Codecademy](https://www.codecademy.com/resources/docs/html/elements) or on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
