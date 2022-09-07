
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hWvCkXFxX/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}