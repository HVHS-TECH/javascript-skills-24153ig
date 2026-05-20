/****************************
This is a block comment.
****************************/
console.log("Running t13_funtions_return.js")
console.log("Hello my name is Isla")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

//variables
let userName = "Isla"
let age = 15;
let year = "2026"
let pocketMoney = 20;
let Num1 = 10;
let num2 = 2;
let num3 = 3;
let Answer;
let price = 4;

function getFormInput(){
  const AGE_FIELD = document.getElementById("ageField");
  age = Number(AGE_FIELD.value);
  OUTPUT.innerHTML = "<p>You are "+age+" years old</p>";
  const MONEY_FIELD = document.getElementById("moneyField");
  pocketMoney = Number (MONEY_FIELD.value);
  OUTPUT.innerHTML += "<p>You have "+pocketMoney+" dollars</p>";

}

function start(){
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
/****************************
Functions 
****************************/
function welcome(){
  OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
}
welcome()

/****************************
Main code
****************************/
OUTPUT.innerHTML += "<p>Hi " + userName + "</p>";
OUTPUT.innerHTML += "<p>As of " + year + " you are "+ age + " years old</p>";
console.log("Hi "+ userName)
console.log("As of "+ year + " you are "+ age + " years old")

Answer = year - age
console.log("You were born in " + Answer)
OUTPUT.innerHTML += "<p>You were born in " + Answer +"</p>";

Answer = Num1 + age
console.log("In ten years you will be " + Answer + " years old")
OUTPUT.innerHTML += "<p>In ten years you will be " + Answer +" years old</p>";
console.log("You have " + pocketMoney + " dollars")
OUTPUT.innerHTML += "<p>You have " + pocketMoney +" dollars</p>";

Answer = pocketMoney / num2
console.log("You spend half of your money, now you have " + Answer + " dollars")
OUTPUT.innerHTML += "<p>You spend half of your money, now you have " + Answer +" dollars</p>";

Answer = pocketMoney / num2 + num3
console.log("Then you get $3, now you have " + Answer + " dollars" )
OUTPUT.innerHTML += "<p> Then you get $3, now you have " + Answer +" dollars</p>";

console.log (typeof(pocketMoney));
if (pocketMoney < 4) {
console.log("A chocolate bar costs $4 Sorry you CAN'T afford a chocolate bar");
OUTPUT.innerHTML += "<p>A chocolate bar costs $4 Sorry you CAN'T afford a chocolate bar</p>";
}
else {
console.log("A chocolate bar costs $4 You CAN afford a chocolate bar");
OUTPUT.innerHTML += "<p>A chocolate bar costs $4 You CAN afford a chocolate bar</p>";
}

function calculateChange(_price,_pocketMoney){
let change = (_pocketMoney - _price)
if (change >= 0) {
console.log("You will get $" +change+ "change");
OUTPUT.innerHTML += "<p>You will get $" +change+ "change</p>";
}
}
}
