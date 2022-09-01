//https://teachablemachine.withgoogle.com/models/08zN9rK-v/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/08zN9rK-v/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
    
var amor = 0;
var dancando = 0;
var felicidade = 0;

function gotResults(error, results){
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = 'Som detectado de - '+ results[0].label;
        document.getElementById("resul_count").innerHTML = 'Amor detectado - '+amor+ ' Dançando detectado - '+dancando+ ' Felicidade detectado - '+felicidade;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal_image');

        //https://c.tenor.com/MNS8EeEfVAIAAAAC/happiness-feliz.gif
        //https://c.tenor.com/PQhYXs7lLmsAAAAC/switch_dayz-dayz.gif
        //https://c.tenor.com/WmefaP0mX8AAAAAC/happy-hearts.gif

    }
}