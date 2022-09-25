function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/hUfcke3yu/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {

        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"; 
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('Jisoo');
        img1 = document.getElementById('Jisoo2');
        img2 = document.getElementById('Jisoo3');
        img3 = document.getElementById('Jisoo4');

        if (results[0].label == "HYLT") {
            img.src = 'https://images6.fanpop.com/image/photos/41800000/-MissKoreaJisooDay-950103-jisoo-blackpink-41849664-268-350.gif';
            img1.src = 'https://thebiaslistcom.files.wordpress.com/2020/06/blackpink-how-you-like-that.jpgs';
            img2.src = 'https://thebiaslistcom.files.wordpress.com/2019/04/blackpink-kill-this-love.jpg';
            img3.src = 'https://i0.wp.com/ulzza.com/wp-content/uploads/2021/10/Pretty-savage.jpg?fit=1024%2C660';
        } else if (results[0].label == "DDU4") {
            img.src = 'https://i.pinimg.com/originals/4a/a0/af/4aa0afd4fb161e7d53b23a19ee4f7d66.jpg';
            img1.src = 'https://i.pinimg.com/originals/af/3e/35/af3e35ff8667195516ad0b46d4dec819.gif';
            img2.src = 'https://thebiaslistcom.files.wordpress.com/2019/04/blackpink-kill-this-love.jpg';
            img3.src = 'https://i0.wp.com/ulzza.com/wp-content/uploads/2021/10/Pretty-savage.jpg?fit=1024%2C660';
        } else if (results[0].label == "KTL") {
            img.src = 'https://i.pinimg.com/originals/4a/a0/af/4aa0afd4fb161e7d53b23a19ee4f7d66.jpg';
            img1.src = 'https://thebiaslistcom.files.wordpress.com/2020/06/blackpink-how-you-like-that.jpg';
            img2.src = 'https://data.whicdn.com/images/328756671/original.gif';
            img3.src = 'https://i0.wp.com/ulzza.com/wp-content/uploads/2021/10/Pretty-savage.jpg?fit=1024%2C660';
    }else if (results[0].label == "PS"){
        img.src = 'https://i.pinimg.com/originals/4a/a0/af/4aa0afd4fb161e7d53b23a19ee4f7d66.jpg';
        img1.src = 'https://thebiaslistcom.files.wordpress.com/2020/06/blackpink-how-you-like-that.jpg';
        img2.src = 'https://thebiaslistcom.files.wordpress.com/2019/04/blackpink-kill-this-love.jpg';
        img3.src = 'https://c.tenor.com/hbXXUp9xQ7EAAAAC/pretty-savage.gif';
    }
    }
    
}