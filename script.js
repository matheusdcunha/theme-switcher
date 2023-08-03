const ball = document.querySelector(".ball");
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isDarkMode) {
  document.body.classList.add("dark");
}

ball.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
