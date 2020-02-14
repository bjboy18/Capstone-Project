//const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// s


recognition.onstart = function(){
    console.log('You can speak now!!!');
        recognition.continuous = true;

  // read("I am now listening, please speak" );


}
// recognition.start();
// recognition.continuous = true;

recognition.onresult = function(event){

    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
   
    read(text);
}
 console.log('You can speak now!!!');
 var detailsaboutself = " i am an artificial intillegence that will be used for People with dis-abilities";
 var yourname = "my name is M"
 var red = "red";
 var blue = "blue"
 var white = "white";
function read(text){
    var speech = new SpeechSynthesisUtterance();
    // var array = ['sun','snow'];
    speech.text = text;
    if(text.includes('hi spy')|| text.includes('hi'))
        speech.text = "hello";
    if(text.includes('about you'))
        speech.text = detailsaboutself ;
    if(text.includes('time'))
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    else if(text.includes('1 + 1'))
    speech.text = 'Do you think you\'re famous! How the heck would I know your birthday!';
    else if(text.includes('love me'))
    speech.text = 'Of course, not! You piece of junk!';
    else if(text.includes('what do you offer'))
        speech.text = 'what do you want?';
    else if(text.includes('facebook.com') || text.includes('facebook'))
    window.location = 'http://www.facebook.com';
    else if(text.includes('do'
        ) ||text.includes('dead'))
        speech.text = 'Go and do what you want to'+text;
    else if(text.includes('red'))
    document.body.style.backgroundColor = red;
    
    else if(text.includes('white')|| text.includes('no color'))
    document.body.style.backgroundColor = white;

 else if(text.includes('blue')|| text.includes('blue'))
    document.body.style.backgroundColor = blue;

 else if(text.includes('WHAT IS YOUR NAME')|| text.includes('WHAT IS YOUR NAME?') || text.includes('your name'))
    speech.text= yourname;

    else if (text.includes("what are the colors for background")||text.includes("colors for my background") || text.includes("colors"))
        speech.text = red+"," + blue+"and"+white  ;
else if(text.includes('close the browser')|| text.includes('close'))
    speech.text = "ok"+window.close();




   window.speechSynthesis.speak(speech);
}
