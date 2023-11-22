import Calculator from "./calculator.js";


const myCalculator = new Calculator();


function updateUi() {

  const calcResultBox = document.querySelector('.result .curInput')
  calcResultBox.textContent = myCalculator.result;
  const historySection = document.querySelector('.opHistory');
  const historry = myCalculator.history
  historySection.textContent=historry.join(" ")

}



//claculator operator
function doCalc(op) {

  switch (op) {
    case "del":
        myCalculator.resetInputNumber();
        break
    case '+':
    case '-':
    case 'x':
    case '/':
        myCalculator.doArithmathicOperator(op)
        break
    case 'reset':
      myCalculator.doReset();
        break
    case '=':
      myCalculator.finishOperation()
      break
    default:
      myCalculator.addCalcInput(op)


   
  }

  updateUi();
}
//event handlers
const buttons = document.querySelectorAll(".btn");

buttons.forEach((value) => {
  console.log("llop");
  value.addEventListener("click", (e) => {
    doCalc(e.target.dataset.value);
  });
});
