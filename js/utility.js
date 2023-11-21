export function makeComma(num) {
  let temp = num > 0 ? num : -num;

  let numString = num.toString();

  const stack = [];

  let countNumber = 0;
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
