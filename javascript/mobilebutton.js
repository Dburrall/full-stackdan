const button = document.getElementById("my-button");
const nav = document.getElementsByClassName(".nav-list");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});