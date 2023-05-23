const button = document.querySelector("button");
let counter = 0;

function onClick() {
  const paragraph = document.querySelector("p#text");
  counter++;
  paragraph.innerText = `You clicked the button ${counter} time(s)!`;

  if (counter === 10) {
    button.removeEventListener("click", onClick);
  }
}

button.addEventListener("click", onClick);
