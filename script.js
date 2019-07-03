var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");

var options = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
];

if(button){
  button.addEventListener("click", function(){
  if (input.value.length < 1) {
    alert("Please enter a question!");
  }
  else{
    eight.innerText = "";  
    var random = getRandomInt(options.length);
    //var num = random % options.length;
    answer.innerText = options[num];
  }
});
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
