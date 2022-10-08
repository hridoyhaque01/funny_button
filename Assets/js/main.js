// manual database

const dbEmail = "example@gmail.com";
const dbPass = "demoPassword";

const form = document.getElementById("form"),
  email = document.querySelector(".email"),
  password = document.querySelector(".password"),
  button = document.querySelector(".loged");

const unvalid = (e) => {
  e.target.style.borderColor = "#fa3f67";
  form.classList.add("unvalid");
};

const valid = (e) => {
  e.target.style.borderColor = "#4239c5";
  form.classList.remove("unvalid");
  button.classList.remove("wrong");
};

email.addEventListener("keyup", (e) => {
  let inputValue = e.target.value;

  if (inputValue !== dbEmail) {
    unvalid(e);
  } else {
    valid(e);
  }
});

password.addEventListener("keyup", (e) => {
  let inputValue = e.target.value;
  if (inputValue !== dbPass) {
    unvalid(e);
  } else {
    valid(e);
  }
});

button.addEventListener("mouseover", (e) => {
  if (form.classList.contains("unvalid")) {
    e.target.classList.toggle("wrong");
  } else {
    e.target.classList.remove("wrong");
  }
});
