const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
let userNumber = 0;
//from decimal to binary or from decimal to hexadecimal
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");

const numbi = document.querySelector("#numbi");
// function to get what the user gives us
function registerUserValue(e) {
  // console.log(e.target.value);
  userNumber = e.target.value;
}
//function to calculate the binary
const decimalToBinary = (num) => {
  let result = "";

  while (num > 0) {
    result += num % 2;
    num = Math.floor(num / 2);
  }

  return result.split("").reverse().join("");
};
//function to calculate the Hexadecimal
const decimaltoHexadecimal = (num) => {
  let number = num;
  let hexStr = number.toString(16);
  return hexStr;
};
//console.log(decimaltoHexadecimal(1000));
//function to convert them and give the result to the user
function convert() {
  let converter = 0;

  if (numbi.value == "decimal") {
    result.innerHTML = "..";
  } else if (numbi.value == "binary") {
    //console.log(decimalToBinary(userNumber));

    result.innerHTML = decimalToBinary(userNumber);
  } else {
    result.innerHTML = decimaltoHexadecimal(parseInt(userNumber));
  }
}

numbi.addEventListener("change", convert);
userInput.addEventListener("keyup", registerUserValue);
