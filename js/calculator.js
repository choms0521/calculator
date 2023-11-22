import { makeComma } from "./utility.js";

const CalcState = {
  INPUT: "input",
  FINISH: "finish",
};

Object.freeze(CalcState);

class Calculator {
  constructor() {
    this.opHistory = [];
    this.calcStack = ["0"];
    this.state = CalcState.INPUT;
  }

  doArithmatic(num1, num2, operator) {
    let opResult = 0;

    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
      case "+":
        opResult = num1 + num2;
        break;

      case "-":
        opResult = num1 - num2;

        break;

      case "/":
        if (this.num2 == "0") {
          alert("0으로 나눌 수 없습니다.");
          return;
        }

        opResult = num1 / num2;

        break;
      case "x":
        opResult = num1 * num2;

        break;
    }

    return opResult;
  }

  //산술연산 기호가 눌림
  doArithmathicOperator(op) {
    const top = this.calcStack[this.calcStack.length - 1];

    if (this.state === CalcState.FINISH) {
      this.opHistory = [this.calcStack["0"], op];
      this.calcStack.push(op);
      this.state = CalcState.INPUT;
      return;
    }

    if (this.isOperator(top)) {
      this.calcOperator = op;
      this.opHistory.pop();
      this.opHistory.push(op);
      return;
    }

    //이미지 스택이 꽉 찼다면
    if (this.calcStack.length === 3) {
      const num2 = this.calcStack.pop();
      const operator = this.calcStack.pop();
      const num1 = this.calcStack.pop();

      const opResult = this.doArithmatic(num1, num2, operator);

      this.calcStack.push(opResult.toString());
      this.calcStack.push(op);
      this.opHistory.push(num2);
      this.opHistory.push(op);
    } else {
      this.calcStack.push(op);
      this.opHistory.push(this.calcStack["0"]);
      this.opHistory.push(op);
    }
  }
  get result() {
    let top = this.calcStack[this.calcStack.length - 1];

    if (this.isOperator(top)) {
      top = this.calcStack[this.calcStack.length - 2];
    }

    if (top.indexOf(".") === -1) {
      if (this.isOperator(top)) {
        return makeComma(this.calcStack["0"]);
      }

      return makeComma(top);
    } else {
      return top.slice(0,10);
    }
  }

  get history() {
    return this.opHistory;
  }

  resetInputNumber() {
    let top = this.calcStack[this.calcStack.length - 1];
    if (!this.isOperator(top)) {
      if (top / 10 < 1 && top / 10 > -1) {
        this.calcStack.pop();
        this.calcStack.push("0");
      } else {
        this.calcStack.pop();
        this.calcStack.push(top.slice(0, top.length - 1));
      }
    }
  }

  isOperator(character) {
    if (
      character === "+" ||
      character === "-" ||
      character === "/" ||
      character === "x"
    ) {
      return true;
    }

    return false;
  }

  addCalcInput(input) {
    let top = this.calcStack[this.calcStack.length - 1];

    //change string to number

    if (this.state === CalcState.FINISH) {
      this.calcStack = [input];
      this.state = CalcState.INPUT;
      this.opHistory = [];
      return;
    }

    if (this.isOperator(top)) {
      this.calcStack.push(input);
    } else {
      let newInput = top + input;
      if (newInput.indexOf(".") === -1 && newInput[0] === "0") {
        newInput = newInput.slice(1);
      }

      this.calcStack[this.calcStack.length - 1] = newInput;
    }
  }
  finishOperation() {
    if (this.calcStack.length == 2) {
    } else if (this.calcStack.length === 3) {
      const num2 = this.calcStack.pop();
      const operator = this.calcStack.pop();
      const num1 = this.calcStack.pop();

      const opResult = this.doArithmatic(num1, num2, operator);
      this.calcStack.push(opResult.toString());
      this.opHistory.push(num2);
      this.state = CalcState.FINISH;
    }
  }
  doReset() {
    this.calcOperator = null;
    this.opHistory = [];
    this.calcStack = ["0"];
    this.state = CalcState.INPUT;
  }
}

export default Calculator;
