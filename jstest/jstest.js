function runHello() {
  alert("Hello User!");
}

function runOther() {
  runHello();
}

function runPrompt() {
  let response = prompt("What is your name?");
  console.log(response + " just entered their name");
}

function changeHtml(changeString) {
  document.getElementById("greeting").innerHTML = changeString;
}

function getNumber() {
  let numString = prompt("Enter a number:");

  let numInt = parseInt(numString);

  return numInt;
}
