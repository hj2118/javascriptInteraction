var heading;
var executeButton;
var outputParagraph;
var inputElement;
var fortunes = ["The love of your life is right in front of your eyes.", "The love of your life will appear in front of you unexpectedly!", "Follow what calls you.", "Do what you love. The rest will fall into place.", "You should definitely go for it.", "Everything that is was first a dream.", "Love yourself hard.", "Focus on the magic of things; yourself.", "Set yourself up to experience what you love."];
var fonts = ["Verdana", "Georgia", "Times New Roman", "Arial", "Tahoma", "Impact"];

document.addEventListener("DOMContentLoaded", function() {
  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");
  executeButton.addEventListener("click", function(){
    fortune();
    restyle();
  });
});

function fortune() {
  var currentInputText = inputElement.value;
  var randomFortuneIndex = Math.floor(Math.random()*fortunes.length);
  outputParagraph.innerText = currentInputText + ", " + fortunes[randomFortuneIndex];
  console.log(currentInputText);
}

function restyle() {
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;

  console.log("R: " + randomRed);
  console.log("G: " + randomGreen);
  console.log("B: " + randomBlue);

  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  outputParagraph.style.color = outputColorString;

  var randomRotation = -10 + (Math.random() * 20); // between -10 and 10
  outputParagraph.style.transform = "rotate(" + randomRotation + "deg)";

  var randomFontIndex = Math.floor(Math.random()*fonts.length);
  outputParagraph.style.fontFamily = fonts[randomFontIndex];
}
