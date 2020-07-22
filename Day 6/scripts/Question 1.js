//Question 1
//Write a program will iterate over an array of colure and change the backgroud of the page after 5 seconds
console.log("Question 1 Day 6");
let array = ["black", "blue", "yellowgreen", "wheat"];
var i = 0;
function changeColor(){
    let color = array[i++];
    document.body.style.backgroundColor = `${color}`;
}

setInterval(changeColor, 5000)