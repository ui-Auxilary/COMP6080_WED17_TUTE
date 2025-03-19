import { handleFetch } from "./api.js";

const links = document.getElementsByClassName("link");
let dashboardPage = document.querySelector('[page="dashboard"]');
let authenticationPage = document.querySelector('[page="authentication"]');
let registerSection = document.querySelector('[role="register"]');
let loginSection = document.querySelector('[role="login"]');
let authHeader = document.getElementById("auth-header");

let userData = new Map();

for (let link of links) {
  switch (link.role) {
    case "to-login":
      link.addEventListener("click", () => {
        let register = document.querySelector('[role="to-register"]');
        registerSection.style.display = "none";
        register.style.display = "unset";
        loginSection.style.display = "flex";
        link.style.display = "none";
        authHeader.textContent = "Log in";
      });
      break;
    case "to-register":
      link.addEventListener("click", () => {
        let login = document.querySelector('[role="to-login"]');
        authHeader.textContent = "Register";
        loginSection.style.display = "none";
        login.style.display = "unset";
        link.style.display = "none";
        registerSection.style.display = "flex";
      });
      break;
  }
}

// Submit buttons
let registerButton = document.getElementById("register-btn");
let loginButton = document.getElementById("login-btn");

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  let registerForm = document.forms[1];
  console.log("Form", registerForm);

  for (const element of registerForm) {
    if (element.tagName === "INPUT") {
      userData.set(element.name, element.value);
    }
  }

  console.log("posting userData", userData);
  // Fetch data
  const payload = {
    body: JSON.stringify({
      email: userData.get("email"),
      password: userData.get("password"),
      name: userData.get("username"),
    }),
  };

  let res = handleFetch("register", payload);

  res
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      // Fetch token
      console.log(data);
      let { token } = data;
      localStorage.setItem("token", token);

      dashboardPage.style.display = "block";
      authenticationPage.style.display = "none";
    });
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  let loginForm = document.forms[0];
  console.log("Form", loginForm);

  for (element of loginForm) {
    if (element.tagName === "INPUT") {
      userData.set(element.name, element.value);
    }
  }

  console.log("userData", userData);
});
