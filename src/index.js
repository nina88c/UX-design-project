function apply() {
  let name = prompt("What is your first name?");
  let email = prompt("what is your email?");
  let age = prompt("How old are you?");
  let heading = document.querySelector("h1");
  if (age >= 18) {
    heading.innerHTML = "Hi, " + name + " Welcome to our UX course!👩‍💻";
  } else {
    heading.innerHTML =
      "Sorry " + name + ", you can't apply to our UX course😕.";
  }
}

let applyButton = document.querySelector("button");
applyButton.addEventListener("click", apply);
