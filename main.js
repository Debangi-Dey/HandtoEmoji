//https://teachablemachine.withgoogle.com/models/JuH0lcWbC/
predict1=""
predict2=""
Webcam.set({
    width:350,
    hieght: 350,
    image_format: 'png',
    png_quality:90
});

Webcam.attach("#camera");

function takeSnap(){
Webcam.snap(function(data_uri){
    document.getElementById("results").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
});
}
console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JuH0lcWbC/model.json',model_loaded)

function model_loaded(){
    console.log('model is loaded');
    speak()
}

function speak(){
    s=window.speechSynthesis;
    speak1="the first prediction is "+predict1;
    speak2="the second prediction is "+predict2;
    utter=new SpeechSynthesisUtterance(speak1+speak2);
    s.speak(utter);
}