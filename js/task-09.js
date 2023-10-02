const colorBody = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", () => {
  const colorRandom = getRandomHexColor();
  body.style.backgroundColor = colorRandom;
  colorBody.innerHTML = colorRandom;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
