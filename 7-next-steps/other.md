The following is in rough order of how you might want to proceed. Running the code can be helpful in understanding each topic.

### Loops

Loops are a way to do something multiple times.

**`for` loop with numbers**

The following code will run `console.log` multiple times even though we only wrote it once in our code.

The first line specifies how many times the code should run. It has three parts:

- `let = 0` specifies what number to start with.
- `i <= 10` tells the loop under what condition it should keep running. Here it will run as long as `i` is less than or equal to (`<=`) `10`.
- `i = i + 1` is what the loop should do after each loop. Below we are adding `1` to `i` after each loop (which can be simplified to `i++`). If you don't add one, `i` will remain at 0, and it will never stop, causing an [infinite loop](https://en.wikipedia.org/wiki/Infinite_loop)!

```javascript
for (let i = 0; i <= 10; i = i + 1) {
  console.log("i is equal to:", i);
}
```

**`for` loop with arrays**

You can also go through each item in an array using `for` loops.

During the first loop, `item` below is set to the first value in your array. At the beginning of each loop after that `item` will be set to the next item in the list.

Note: `item` is a variable and you can name it whatever you'd like.

```javascript
const myArray = ["foo", 527, true];

for (const item of myArray) {
  console.log("item in array:", item);
}
```

**`forEach` method on arrays**

Arrays have methods built in including `.forEach`. You can use this to do exactly what we did above.

Note: there are small differences between `for` loops and `.forEach`, but don't worry about them for now.

```javascript
const myArray = ["foo", 527, true];

myArray.forEach((item) => {
  console.log("item in array:", item);
});
```

**Other Loops**

```javascript
// .map
const numbers = [1, 100, 1000];
const newNumbersArray = myArray.map((item) => {
  return numbers + 27;
});

console.log("newNumbersArray", newNumbersArray);
```

### Dates

```javascript
const date = new Date();

console.log(date.getTime());
```

### Classes

### Async/Await and Promises

### Try/Catch

### Local Storage

##
