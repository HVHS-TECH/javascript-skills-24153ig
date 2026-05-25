/****************************
This is a block comment.
Introduction to JavaScript
****************************/
console.log("Running t15_for_loop.js")
console.log("Hello my name is Isla")

//variables
console.log("Starting Loop")
/****************************
Main code
****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

for (let i = 100; i>=0; i--){
console.log(i + "bottles of milk on the wall, ")
console.log(i + "bottles of milk;")
console.log("If one of those bottles should happen to fall.." )
console.log(i - 1 + "bottles of milk on the wall!")
OUTPUT.innerHTML = "<p>"+i+" bottles of milk on the wall</p>";
}







/****************************
Functions 
****************************/


// This is a single line comment

