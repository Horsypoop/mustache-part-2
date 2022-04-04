function preload(){

}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelloaded);
poseNet.on("pose", gotposes);
}

function draw(){
}

function take_snapshot(){
    save("myimage.png");
}

function modelloaded(){
    console.log("PoseNet has started");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("X position of nose is "+ results[0].pose.nose.x);
        console.log("Y position of nose is "+ results[0].pose.nose.y);
    }
}
