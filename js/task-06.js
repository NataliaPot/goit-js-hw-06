const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const dataLength = Number(textInput.dataset.length);
  const textLength = textInput.value.length === dataLength;
  textInput.classList.toggle("valid", textLength);
  textInput.classList.toggle("invalid", !textLength);
});
