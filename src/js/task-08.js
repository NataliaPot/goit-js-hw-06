const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    form.reset();
  }
});
