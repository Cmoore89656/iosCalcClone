// Variables
let input = "";
let operator = "";
let calc = [];
let result = '';
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equals");
let output = document.querySelector(".output");
const plusMinus = document.querySelector('#plusMinus');

clear.addEventListener("click", () => {
  input = "";
  while (calc.length) {
    calc.pop();
  }
  output.innerHTML = 0;
  clear.innerHTML = "AC";
});

plusMinus.addEventListener('click', () => {
    input = '-';
    output.innerHTML = input;
})

let buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let buttonPressed = event.target.value;
    if (output != 0) {
      clear.innerHTML = "C";
    }

    if (buttonPressed == "+" || buttonPressed == "-" || buttonPressed == "/" || buttonPressed == "*" || buttonPressed =="%") {
      console.log(input);
      operator = buttonPressed;
      let firstInput = input;
      calc.push(firstInput);
      calc.push(operator);
      console.log(calc);
      input = "";
    } else {
      input += buttonPressed;
      output.innerHTML = input;
    }
  });
});

const equals = () => {
    calc.push(input);
    result = eval(calc.join(" "));
    console.log(result);
    output.innerHTML = result;
    cleanVars();
}

equal.addEventListener("click", () => {
  equals();
});

const cleanVars = () => {
  input = "";
  while (calc.length) {
    calc.pop();
  }
  console.log("Variables cleaned");
};
