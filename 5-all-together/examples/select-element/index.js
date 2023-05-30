const selectElement = document.querySelector("#petSelect");
const result = document.querySelector("#result");
const onSelectChange = ({ target: { value } }) => {
  result.innerText = `You have a ${value}`;
};

selectElement.addEventListener("change", onSelectChange);
