import { makeComma } from "./utility.js";

class Calculator {
  constructor() {
    this.calcInput = 0;
    this.calcOperator = null;
    this.opHistory = [];
    this.calcResult = 0;
  }

  doArithmathicOperator(op) {
    if (this.calcOperator) {
      this.calcOperator = op;
      this.opHistory.pop();
      this.opHistory.push(op);
      return;
    }

    switch (op) {
      case "+":
        this.calcResult += this.calcInput;
        break;

      case "-":
        this.calcResult -= this.calcInput;

        break;

      case "/":
        if (this.calcInput !== 0) {
          this.calcResult /= this.calcInput;
        }

        break;
      case "x":
        this.calcResult *= this.calcInput;

        break;
    }

    this.opHistory.push(this.calcInput);
    this.opHistory.push(op);
    this.calcOperator = op;
  }
  get result() {
    return makeComma(this.calcResult);
  }

  get history() {
    return this.opHistory;
  }

  resetInputNumber() {
    if (this.calcInput) {
      if (this.calcInput / 10 < 1 && this.calcInput / 10 > -1) {
        this.calcInput = 0;
      } else {
        this.calcInput -= this.calcInput % 10;
        this.calcInput /= 10;
      }
    }
  }

  addCalcInput(input) {
    if (typeof input === "string") {
      input = Number(input);
    }

    console.log(input)

    if (this.calcInput !== 0) {
      this.calcInput *= 10;
      this.calcInput += input;
    } else {
      this.calcInput = input;
    }
  }

  doReset() {
    this.calcResult = 0;

    this.calcInput = 0;
    this.calcOperator = null;
    this.opHistory = [];
  }
}

export default Calculator;
