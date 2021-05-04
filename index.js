//from decimal to binary or from decimal to hexadecimal
const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
let userNumber = 0;
const result = document.querySelector(".result");
console.log(result);
const userInput = document.querySelector("#userInput");
const numbi = document.querySelector("#numbi");
//to get what the user gives
function registerUserValue(e) {
  console.log(e.target.value);
  userNumber = e.target.value;
}

function convert() {
  let converter = 0;

  if (numbi.value == "decinal") {
    result.innerHTML = "..";
  } else if (numbi.value == "binary") {
    result.innerHTML = "im binary";
  } else result.innerHTML = "im a hex";
}

numbi.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
