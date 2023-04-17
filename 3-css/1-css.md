# CSS

Whereas HTML elements define the structure and layout of a webpage, **CSS (Cascading Style Sheets)** is what we use to style and change how HTML elements are displayed on screen.

Important to note that CSS only effects the visual appearance of elements, but does not change the underlying structure at all. Applying two different stylesheets to the same HTML can create dramatically different (looking) webistes.

[Demo - CSS Zen Garden](http://www.csszengarden.com/pages/alldesigns/)

## Rulesets vs. Inline styles
There are two ways we can define and apply styling to a website using CSS: by using **rulesets** or **inline styling.**
- Rulesets: Are defined either in the HTML document itself or in separate `.css` file(s), known as **stylesheets**
- Inline styles: are defined in the `style` attribute of an individual HTML element

Rulesets are used to apply multiple styles across multiple elements of a website, allowing you to make large changes easily – since you don't have to update individual HTML elements.

Inline styles on the other hand, can be used to apply unique styling to individual elements that won't be repeated anywhere else on the page. They can also be dynamically created, meaning that they can change based on some input or user behavior. 

### Anatomy
Here are some terms for the parts of a style declaration (notice that some are the same across both types):
#### Rulesets
- Selector - The first part of the ruleset definition, indicating the HTML element that will be styled
- Declaration Block - Everything between the curly braces `{ }` that contains one or several style **declarations**
- Declaration - The pair of a **property** and **value** that defines the style to be applied to the selected element
- Property - The first part of the **declaration** that identifies the visual characteristic of the element to be styled
- Value - The second part of the **declaration** that signifies the value of the **property**
#### Inline styles
- Opening Tag - The start of the specific HTML element to be styled
- Attribute - The `style` attribute is where each CSS style **declaration** is added
- Declaration - The pair of a **property** and **value** that defines the style to be applied to the selected element
- Property - The first part of the **declaration** that identifies the visual characteristic of the element to be styled
- Value - The second part of the **declaration** that signifies the value of the **property**

### Syntax
Although they can achieve the same visual results, the syntax for using rulesets vs. inline styling is a little different.
#### **Rulesets**
```css
p {                   /* p is the selector                 */
  color: blue;        /* each line is a unique declaration */
  font-size: 30px;    /* color, font-size are properties   */
}                     /* blue, 30px are values             */
```
In this example, `p` is the **selector**, indicating that any style declarations that follow will be applied to HTML `<p></p>` tags.

Everything between the curly braces – `{ color: blue; font-size: 50px; }` is the **declaration block**.

`color: blue;` and `font-size: 30px;` are both **declarations**. Note that a **declaration block** can contain one or many **declarations**.

A `.css` file will typically contain many **rulesets**
```css
/* e.g. ./style.css */

html {
  background-color: rgb(66, 133, 244);
}

div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
...
```
The important thing to remember when defining CSS styles with rulesets is that they will be applied to every HTML element of the specified type on the page. In the above example, every `<div>` will be styled the same.

#### **Inline styles**
```html
<p style='color:blue; font-size:30px;'>Hello world!</p>
```
When styling elements this way, the style will only be applied to this individual `<p>` element, all others will have the default style.

## Applying style sheets
As shown above, inline styles are written right inside the HTML tag of the element they'll be applied to. When using rulesets, there are two ways to apply them – with an **internal style sheet** or **external** one.
### External CSS
Using an external style sheet allows you to change the look of every page of your website by editing only one file. Having all of your rulesets in one place makes it easier to maintain styling as your site or app grows in size.

An external style sheet is a separate file, with a `.css` extension (e.g. `style.css`), where you define all of the rulesets for the site. Then each HTML page must include a `<link>` element inside the `<head>` section, with a reference to the CSS file. The `<link>` must include the `rel="stylesheet"` attribute as well as an `href` attribute with the filename of the CSS file.

For example, your project files might look like this:
```
├── src
│   ├── index.html
│   ├── style.css
├── README.md 
└── .gitignore
```
Then in `index.html` you can link to the external style sheet:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

</body>
</html>
```
In `style.css` you add the rulesets to be applied above
```css
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

### Internal CSS
On the other hand, an internal style sheet is one or several rulesets written directly in the HTML file where they'll be applied. These styles will be applied to every element in that particular page, but nowhere else on the site – useful pages that require unique styling.

The internal style sheet is defined inside the `<style>` element, in the `<head>` section of the HTML file. Between the opening and closing `<style>` tags, rulesets are defined the same way that they are inside of a separate external CSS file.

To achieve the same styling as the previous example, this time we add the internal style sheet directly to `index.html`
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
          background-color: lightblue;
        }

        h1 {
          color: navy;
          margin-left: 20px;
        }
    </style>
</head>
<body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

</body>
</html>
```

## Example properties
A few examples of properties that can be used to define styles on HTML pages
### Text properties
- `color` - change the color of text within an element
  - values can be names (like `"red"`), HEX values (like `#ff0000`), or RGB values (like `rgb(255,0,0)`)
- `text-align` - set the horizontal alignment of text
  - values can be `right`, `center`, or `left`
- `text-transform` - apply transformations to text, like capitalization, etc.
  - values can be `uppercase`, `lowercase`, or `capitalize`
### Background properties
- `background-color` - set the background color within an element
  - values can be the same type as the `color` property above
- `background-image` - specifies an image to use for the background of an element
  - value includes the location of an image file in the format `url("image_filename.jpg")`
### Border properties
- `border-style` - set the type of border for an HTML element
  - values can be one of several types, like `solid`, `dashed`, `dotted`, or `inset`
- `border-color` - change the color of the border
  - Can use same `color` values as above

# Homework

## Add styling to your website
Your homework is to add styling to the HTML page(s) you've already created. Choose any type of styling you'd like, but try to add some properties for each type of HTML element within the `<body>` section of your `index.html`. Make sure you include everything in the "Requirements" section.

### Requirements

- Create a file called `style.css` in the project folder (`[your username].github.io`) we created earlier.
- Define some rulesets in that CSS file, then link to it in the `<head>` section of `index.html`
- Find a property that we **didn't** talk about and try applying it to an element on the page – be prepared to talk about it with the group next time.
- Try adding inline styling to at least one element as well – what happens if you define a style in your external css but also set a different style inline? Which one is displayed? 
- Make sure to include at least these properties somewhere:
  - `color`
  - `background-color`
  - `text-align`
  - `text-transform`
  - `border-style`
  - `border-color`
- During the next class, let us know which new property you picked and how to use it.
- Ask for help if you get stuck!!

## Resources
- Check out the [documentation for each CSS property](https://www.w3schools.com/css/css_text.asp) for help on how to define them, and which values to use
- Review the [Learn CSS](https://www.codecademy.com/learn/learn-css) course on Codecademy
