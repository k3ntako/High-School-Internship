# CSS Classes and IDs

## Class Selectors

You may want to style the same HTML element differently. To do that we need a way to indentify specific HTML elements.
Classes and IDs allow you to specify which elements you want to apply styles to.

For example, we have a list of elements below. We may want to style each `<li>` element with the color written inside.
If we tried to style the the `<li>`, they will all turn the same color.

```html
<ul>
  <li>Blue</li>
  <li>Green</li>
  <li>Purple</li>
  <li>Red</li>
  <li>Yellow</li>
</ul>
```

However, we can add classes to handle that. Like every other HTML element attributes, the `class` goes inside the opening tag.
Specify the name of class you want to assign to the element (`blue`, `green` and `red` in the example below).

```html
<ul>
  <li class="blue">Blue</li>
  <li class="green">Green</li>
  <li class="red">Red</li>
</ul>
```

Now we can specify CSS for each class. In CSS, you can specify a class with a period (`.`) followed by the class name (<a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/3-css/examples/colorful-lists.html">demo</a>).

```css
.blue {
  color: blue;
}

.green {
  color: green;
}

.red {
  color: red;
}
```

## Multiple Classes

HTML elements can have multiple classes assigned to then. **Just add a space between each class name**.

```html
<p class="class1 class2"></p>
```

For example, let's say you have a list of places you enjoy throughout NYC,
and you want to do the following with your designs:

1. each location has its own box
1. parks have a green background and restaurants have a purple background

Since each location should be styled as a box, we can have one class that does that. We will call this class `location`.
For each type of location, parks and restaurants, we can create a class: `park` and `restaurant`.
It should look something like the following.

```html
<h1>My Favorite Places in NYC</h1>
<div>
  <div class="location restaurant">
    <h3>Bagel Pub</h3>
  </div>
  <div class="location park">
    <h3>Central Park</h3>
  </div>
  <div class="location park">
    <h3>Flushing Meadows Corona Park</h3>
  </div>
  <div class="location park">
    <h3>Prospect Park</h3>
  </div>
  <div class="location restaurant">
    <h3>Yafa Cafe</h3>
  </div>
  <div class="location restaurant">
    <h3>You Garden</h3>
  </div>
</div>
```

Here is the accompanying CSS (<a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/3-css/examples/locations.html">demo</a>).

```css
.location {
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}

.park {
  background-color: green;
}

.restaurant {
  background-color: rebeccapurple;
}
```

Thanks to the `location` class, we only need to specify the `border`, `margin`, and `padding` once.
This would make adding more location types easier!

## ID Selectors

IDs work pretty similarly with a couple exceptions. Few differences:

- Classes can be reused on the same page, but **IDs should only be used once per page**.
- An HTML element can only have one ID.
- IDs are more _specific_ than classes. More on this later.

```html
<p id="id1">Hello World!</p>
```

HTML elements can have an ID and classes.

```html
<p id="id1" class="class1 class2">Hello World!</p>
```

Use `#` to identify an ID in CSS (<a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/3-css/examples/id.html">demo</a>).

```css
#id1 {
  color: skyblue;
}

.class1 {
  color: lightgreen;
  background-color: black;
}
```

Notice in the example above that the `id1` and `class1` have conflicting styles. They both set a font color. So what happens?
Above we mentioned that ID is more specific. This means that when there is a conflict, the style defined by the ID will override those in the class.

In this case, the font color will be skyblue. However, the background color will be black, because the ID does not specify a background color.

## CSS Specificity

Specificity is the algorithm (algorithm is a set of steps) used by the browser to determine which styles should be applied when there is a conflict.

### Selectors

Here is the order of specificity for selectors:

1. ID
1. Class
1. Type
   - Type refers to the HTML element type such as `div` or `p`.

Here's an example of a "type" selector for a `<p>` tag:

```css
p {
  color: red;
}
```

### Classes

What happens if you have two classes?

```html
<p id="id1" class="class1 class2">Hello World!</p>
```

```css
#id1 {
  color: skyblue;
}

.class1 {
  color: lightgreen;
  background-color: black;
}

.class2 {
  color: pink;
  background-color: purple;
}
```

The class defined later will be more specific. Here, the background color will be purple (<a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/3-css/examples/conflicting-classes.html">demo</a>).

### Descendant combinator

When you want to style anything that is a descendant of an HTML element, you can use the descendant combninator.
If you have a `<div>`, for example, any HTML element inside that `<div>` is a descendant of that `<div>`.

```html
<div><p>Foobar</p></div>

<div class="message">
  <p>Hello!</p>
  <div>
    <p>I am a robot!</p>
  </div>
</div>
```

The descendant combinator is a space (` `). In the below example, `.message` is followed by a space and `p`.
The parent (outer element) always goes first.

The following CSS will apply ths style to any `<p>` tag inside elements with the `.message` class.
Both the `Hello!` and `I am a robot!` will be blue, but the `Foobar` will not be blue (<a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/3-css/examples/descendant-combinator.html">demo</a>).

```css
.message p {
  color: blue;
}
```

This saves us time by not having to add the class to every `p` tag inside the `.message` class.

Using a descendant combinator will increase your specificity. In this example, `.message p` is more specific than `p`.

### Child combinator (`>`)

Child combinator is similar to the descendant combinator. The difference is that child combinator only applies to it's immediate descendants.

```html
<div><p>Foobar</p></div>

<div class="message">
  <p>Hello!</p>
  <div>
    <p>I am a robot!</p>
  </div>
</div>
```

Here instead of the space, we use a greater than sign (`>`). The parent (outer element) always goes first.

This time, the stule is only applied to the `Hello!`, because `I am a robot!` is more than one level down <a href="https://htmlpreview.github.io/?https://github.com/k3ntako/High-School-Internship/blob/main/3-css/examples/child-combinator.html">demo</a>.

```css
.message > p {
  color: blue;
}
```

Using a child combinator will increase your specificity as well. It is just as specific as the descendant combinator.

### !important

We've avoided mentioning `!important`, because **you should not use it**.
`!important` will make a style more specific than anything else.

While this might make your life easier in the short-term, it's a shortcut that might make your code harder to work with.
Once you use `!important`, you might need to start using it elsewhere to override the original `!important`.
Your website might start to behave in unexpected ways, and it might become harder to debug issues.

As someone learning CSS, you should force yourself not to use it because you should first learn how specificity works.
As an interviewer for a job, if I see `!important` in your your projects' CSS, I might be a bit concerned.

### Summary

Specificity is really complicated. You can read the articles in the Resources section. As you work with CSS more, you'll understand it better.

## Resources

- [MDN - Descendant Combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)
- [MDN - Child Combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)
- [W3Schools - CSS Specificity](https://www.w3schools.com/css/css_specificity.asp)
- [web.dev - Specificity](https://web.dev/learn/css/specificity/)
- [MDN - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
  - This one is dense, so consider this one last.
