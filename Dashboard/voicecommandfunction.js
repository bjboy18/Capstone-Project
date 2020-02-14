//const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// s


recognition.onstart = function(){
    console.log('You can speak now!!!');
       

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
    content.style.background = '#141414 url(img/wave.gif)';
    content.style.backgroundRepeat = 'repeat-x';
    content.style.backgroundSize = '100% 100%';
    if(text.includes('hi spy') || text.includes('hi'))
        speech.text = "hey";
    else if(text.includes('about you'))
        speech.text = detailsaboutself ;
    else if(text.includes('time'))
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    else if(text.includes('what do you offer') || text.includes("what can you do for me"))
        speech.text = 'what do you want?';
    // else if(text.includes('facebook.com') || text.includes('facebook'))
    // window.location = 'http://www.facebook.com';
    // else if(text.includes(''
    //     ) ||text.includes(''))
    //     speech.text = 'Go and do what you want to do';
    else if(text.includes('red'))
    document.body.style.backgroundColor = red;
    
    else if(text.includes('white')|| text.includes('no color'))
    document.body.style.backgroundColor = white;

 else if(text.includes('blue')|| text.includes('blue'))
    document.body.style.backgroundColor = blue;

 else if(text.includes('WHAT IS YOUR NAME')|| text.includes('WHAT IS YOUR NAME?') || text.includes('your name')|| text.includes("call you"))
    speech.text= yourname + " or you can call me M";

    else if (text.includes("what are the colors for background")||text.includes("colors for my background") || text.includes("colors"))
        speech.text = red+"," + blue+"and"+white  ;
else if(text.includes('close the browser')|| text.includes('close'))
    speech.text = "ok"+window.close();
else if(text.includes("meaning of M") || text.includes('meaning of m') || text.includes('meaning of'))
    speech.text = "its began when 3 idiots have meet, and they are all maniac and their leader is Phil echavesss";
else if(text.includes("mic check"))
    speech.text ="Mic is Running Good" ;
else if(text.includes("writing") || text.includes("writing session") || text.includes('write'))
    window.location = '../Writting/index.html';
else if(text.includes("reading") || text.includes("reading session") || text.includes('reading'))
    window.location = '../Writting/index.html';
else (speech.text = "I dont Recognize what you are saying");



   window.speechSynthesis.speak(speech);
   speech.onend = function(event){
      console.log('Done speaking...');
    content.style.background = 'none';
   }

}

function link(){
    window.location = '../Writting/index.html';
}

