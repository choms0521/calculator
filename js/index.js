import Calculator from "./calculator.js";

const myCalculator = new Calculator();

let themeState = 0; //0 dark 1 light 2 semi
updateUi();
function updateUi() {
  const calcResultBox = document.querySelector(".result .curInput");
  calcResultBox.textContent = myCalculator.result;
  const historySection = document.querySelector(".opHistory");
  const historry = myCalculator.history;
  historySection.textContent = historry.join(" ");

  // find theme button
  const themeButton = document.querySelector(".theme-toggle");
  const root = document.querySelector("#root");

  themeButton.classList.remove("move1");
  themeButton.classList.remove("move2");

  console.log(root);
  if (themeState === 1) {
    themeButton.classList.add("move1");
    document.documentElement.setAttribute("data-theme", "light");
  } else if (themeState === 2) {
    themeButton.classList.add("move2");
    document.documentElement.setAttribute("data-theme", "semi");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

//claculator operator
function doCalc(op) {
  switch (op) {
    case "del":
      myCalculator.resetInputNumber();
      break;
    case "+":
    case "-":
    case "x":
    case "/":
      myCalculator.doArithmathicOperator(op);
      break;
    case "reset":
      myCalculator.doReset();
      break;
    case "=":
      myCalculator.finishOperation();
      break;
    default:
      myCalculator.addCalcInput(op);
  }

  updateUi();
}
//event handlers
const buttons = document.querySelectorAll(".btn");

buttons.forEach((value) => {
  value.addEventListener("click", (e) => {
    doCalc(e.target.dataset.value);
  });
});

const themeButton = document.querySelector(".theme-toggle-box");

themeButton?.addEventListener("mouseup", (e) => {
  e.stopPropagation();

  const curX = e.offsetX;
  const sectWidth = e.target.getBoundingClientRect().width / 3;

  if (curX / sectWidth < 1) {
    themeState = 0;
  } else if (curX / sectWidth < 2) {
    themeState = 1;
  } else {
    themeState = 2;
  }

  updateUi();
});
