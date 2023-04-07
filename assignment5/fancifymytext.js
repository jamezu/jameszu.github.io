function makeBig()
{
    alert("Hello, World!")
    document.getElementById("userInput").style.fontSize = "24pt";
}
function makeFancy(){
document.getElementById("userInput").style.color = "blue";
document.getElementById("userInput").style.textDecoration = "underline";
document.getElementById("userInput").style.font = "bold";
}
function makeBoring(){
    document.getElementById("userInput").style.color = "black";
    document.getElementById("userInput").style.textDecoration = "none";
    document.getElementById("userInput").style.font = "normal";
}
function onChange(){
    alert("Radio button Changed");
}
function Mooify(){
const text = document.getElementById("userInput").value; // "How are you?"
const words = text.split(" "); //["How", "are", "you? "]
for(var i = 0; i < words.length; i++){
    const word = words[i].toUpperCase(); //[HOW, ARE, YOU?]
    words[i] = word; 
}
document.getElementById("userInput").value = words.join(" ") + " -Moo"; //"HOW ARE YOU? -MOO - M00"
}