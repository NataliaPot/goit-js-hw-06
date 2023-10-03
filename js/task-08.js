const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }
  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  event.currentTarget.reset();
});
