const controlInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

controlInput.addEventListener("input", () => {
  spanText.style.fontSize = `${controlInput.value}px`;
});
