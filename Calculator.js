const prompt = require('prompt-sync')();

function calculator(val1, val2, operator) {
    let answer;
    switch(operator) {
        case "*":
            answer = val1 * val2;
            break;
          break;
        case "/":
            answer = val1 / val2;
            break;
        case "+":
            answer = val1 + val2;
            break;
        case "-":
            answer = val1 - val2;
          break;
        default:
          answer = 0;
      }
      return answer;
}

let num1 = parseFloat(prompt("What is the first number:"));
let num2 = parseFloat(prompt("What is the second number: "));
let op = prompt("What is the operator you would like to use: ")
console.log(num1 + op + num2 + "=" + calculator(num1, num2, op))
