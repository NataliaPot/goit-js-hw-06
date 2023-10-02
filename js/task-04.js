const spanValue = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
