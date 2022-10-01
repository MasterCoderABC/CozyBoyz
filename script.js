function speakMsg(){
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById("text").value;
    window.speechSynthesis.speak(msg);
}

function play1(){
   
}