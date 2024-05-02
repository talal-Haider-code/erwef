function setup() {
        canvas = createCanvas(300, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        classifier=ml5.imageClassifier('MobileNet',modelLoaded);
        video.size(300,300);
      }
function draw(){
    image(video, 230, 150, 220, 200);

    
    }
    function take_snapshot(){
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML='<img id="selfie_image" src ="'+data_uri+'">';
        });
    }
    function save()
    {
        link = document.getElementById("link");
        image = document.getElementById("selfie_image").src;
        link.href=image;
        link.click();
    }