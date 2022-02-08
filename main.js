//https://teachablemachine.withgoogle.com/models/2vTRMXfmG/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2vTRMXfmG/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML= 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML= 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+ " %";
        document.getElementById("result_confidence").style.color="rgb("+ random_number_r+","+random_number_g+ ","+random_number_b+")";
        document.getElementById("result_label").style.color="rgb("+ random_number_r+","+random_number_g+","+ random_number_b+")";

        img=  document.getElementById("animal_1");
        img1= document.getElementById("animal_2");
        img2= document.getElementById("animal_3");
        img3= document.getElementById("animal_4");

        if (results[0].label == "Barking"){
            img.src='animal-1.gif';
            img1.src='animal-2.png';
            img2.src='animal-3.png';
            img3.src='animal-4.png';
        }
        if (results[0].label == "Chirping"){
            img.src='animal-1.png';
            img1.src='animal-2.gif';
            img2.src='animal-3.png';
            img3.src='animal-4.png';
        }
        if (results[0].label == "Meow"){
            img.src='animal-1.png';
            img1.src='animal-2.png';
            img2.src='animal-3.gif';
            img3.src='animal-4.png';
        }
        if (results[0].label == "Background Noise"){
            img.src='animal-1.png';
            img1.src='animal-2.png';
            img2.src='animal-3.png';
            img3.src='animal-4.gif';
        }
        

    }

}