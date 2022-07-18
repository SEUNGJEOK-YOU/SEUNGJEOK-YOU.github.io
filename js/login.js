const loginForm = document.querySelector("#loginForm");
const loginFormInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("#clock");

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";
const APPEAR_KEY = "appear";
const DISAPPEAR_KEY = "disappear";

function handleLoginFormSubmit(event) {
  event.preventDefault();
  const username = loginFormInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginFormInput.value = "";
  loginForm.style = "display:none";
  showGreeting(username);
}

function chooseGreetingText(username) {
  const date = new Date();
  const hour = date.getHours();
  let greetingText = "";
  if (hour >= 6 && hour < 12) {
    greetingText = "Good morning";
  } else if (hour >= 12 && hour < 17) {
    greetingText = "Good afternoon";
  } else if (hour >= 17 && hour < 21) {
    greetingText = "Good evening";
  } else {
    greetingText = "Good ninght";
  }
  greeting.innerText = `${greetingText}, ${username}`;
}

function showGreeting(username) {
  chooseGreetingText(username);
  clock.classList.remove(HIDDEN_KEY);
  clock.classList.add(APPEAR_KEY);
  greeting.classList.remove(HIDDEN_KEY);
  greeting.classList.add(APPEAR_KEY);
  toDoForm.classList.remove(HIDDEN_KEY);
  toDoForm.classList.add(APPEAR_KEY);
  quote.classList.remove(HIDDEN_KEY);
  quote.classList.add(APPEAR_KEY);
}

loginForm.addEventListener("submit", handleLoginFormSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_KEY);
} else {
  loginForm.classList.remove(APPEAR_KEY);
  loginForm.classList.add(HIDDEN_KEY);
  loginForm.style.display = "none";
  showGreeting(savedUsername);
}
