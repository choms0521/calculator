let calcResult = 0;
let curInputNumber = '0';
let curOperator = null;

function makeComma(num) {
  let temp = num > 0 ? num : -num;

  let numString = num.toString();

  stack = [];

  let = countNumber = 0;
  for (let i = numString.length - 1; i >= 0; i -= 1) {
    if (stack.length > 0 && countNumber % 3 == 0) {
      stack.push(",");
      countNumber = 0;
    }
    stack.push(numString[i]);
    countNumber += 1;
  }

  if (num < 0) {
    stack.append("-");
  }
  const reversed = stack.reverse();

  return reversed.join("");
}


function calcOperator(){

}

function deleteInput() {

}

function doReset() {

}
function clickNum() {

}

function makeRealNumber() {

}

//claculator operator
function doCalc(op) {
  switch (op) {
    case "del":
        deleteInput();
        break
    case '+':
    case '-':
    case '*':
    case '/':
        calcOperator(op)
        break
    case 'reset':
        doReset();
        break
    case '.':
        makeRealNumber();
        break
    default:

   
  }
}

//event handlers
const buttons = document.querySelectorAll(".btn");

buttons.forEach((value) => {
  console.log("llop");
  value.addEventListener("click", (e) => {
    doCalc(e.target.dataset.value);
  });
});
