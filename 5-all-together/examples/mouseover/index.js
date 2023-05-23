const div = document.querySelector("div");

function onMouseover() {
  const div = document.querySelector("div");
  div.innerText = "Inside!";
  div.style.backgroundColor = "darkgreen";
}

function onMouseout() {
  const div = document.querySelector("div");
  div.innerText = "";
  div.style.backgroundColor = "white";
}

div.addEventListener("mouseover", onMouseover);
div.addEventListener("mouseout", onMouseout);
