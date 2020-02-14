

function read(){
var input = document.getElementById('demo').value;
console.log(input);
var utterance = new SpeechSynthesisUtterance(input);
window.speechSynthesis.speak(utterance);
}