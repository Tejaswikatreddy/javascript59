const prompt=require('prompt')
var user = prompt.get("Enter your name, please:", "Bilbo Baggins");
if (user != null) {
    document.getElementById("greeting").innerHTML = "Greetings, " + user + "!";
}