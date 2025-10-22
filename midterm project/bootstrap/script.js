// runs when page loaded
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputNumber");
  const output = document.getElementById("output");
  const enterBtn = document.getElementById("enterBtn");
  const darkBtn = document.getElementById("darkBtn");
  const lightBtn = document.getElementById("lightBtn");

  enterBtn.addEventListener("click", function () {
    const num = parseInt(input.value);
    if (isNaN(num) || num < 0) {
      output.textContent = "Please enter a valid non-negative number.";
      return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    output.textContent = `${num}! = ${fact}`;
  });

  darkBtn.addEventListener("click", function () {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    document.body.classList.remove("bg-light", "text-dark");
    document.body.classList.add("bg-dark", "text-light");
    input.classList.remove("bg-light", "text-dark");
    input.classList.add("bg-dark", "text-light");
  });

  lightBtn.addEventListener("click", function () {
    document.documentElement.setAttribute("data-bs-theme", "light");
    document.body.classList.remove("bg-dark", "text-light");
    document.body.classList.add("bg-light", "text-dark");
    input.classList.remove("bg-dark", "text-light");
    input.classList.add("bg-light", "text-dark");
  });
});
