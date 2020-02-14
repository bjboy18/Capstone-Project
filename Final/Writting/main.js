const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


//event start handler
recognition.onstart = function(){
    console.log('You can speak now!!!');
}

//for result handler
recognition.onresult = function(event){
 var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
}
