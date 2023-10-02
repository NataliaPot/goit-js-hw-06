const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => createBoxes(input.value));
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const divSize = 30;
  const divStep = 10;

  let boxesDiv = [];

  for (let i = 0; i < amount; i += 1) {
    const size = divSize + i * divStep;
    const color = getRandomHexColor();
    boxesDiv.push(
      `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    );
  }

  boxes.insertAdjacentHTML("beforeend", boxesDiv.join(""));
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
