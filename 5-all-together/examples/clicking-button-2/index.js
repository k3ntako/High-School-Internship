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
