// FACTORIAL CALCULATION FUNCTION
function calculateFactorial() {
  const input = parseInt(document.getElementById("inputNumber").value);
  const outputDiv = document.getElementById("output");

  if (isNaN(input) || input < 0) {
    outputDiv.innerText = "Please enter a valid non-negative number.";
    return;
  }

  let fact = 1;
  for (let i = 1; i <= input; i++) {
    fact *= i;
  }

  outputDiv.innerText = `${input}! = ${fact}`;
}

// DARK & LIGHT MODE FUNCTIONALITY
const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");
const htmlTag = document.getElementById("htmlTag");

darkBtn.addEventListener("click", () => {
  htmlTag.setAttribute("data-bs-theme", "dark");
  document.body.classList.remove("bg-light", "text-dark");
  document.body.classList.add("bg-dark", "text-light");
});

lightBtn.addEventListener("click", () => {
  htmlTag.setAttribute("data-bs-theme", "light");
  document.body.classList.remove("bg-dark", "text-light");
  document.body.classList.add("bg-light", "text-dark");
});
