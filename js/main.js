let input = document.querySelectorAll("input");
let span = document.querySelector("span");

function calc() {
      let no1 = input[0].value;
      let op = input[1].value;
      let no2 = input[2].value;

if (op == "+") {
      result = +no1 + +no2;
}
else if (op == "-") {
      result = +no1 - +no2;
}
else if (op == "*") {
      result = +no1 * +no2;
}
else if (op == "/") {
      result = +no1 / +no2;
}
else{
      result = "error";
}
      span.innerText =  result;
}

      input[2].addEventListener('keyup',calc);


