song = "";
leftWristX = 0;
leftWristY = 0

rightWristX = 0;
righttWristY = 0



function preload() {
    song = loadSound("musix.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    canvas.position(450, 300);

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop() {
    song.stop();
}
function pause() {
    song.pause();
}

function modelLoaded() {
    console.log("PoseNet is intialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY" + leftWristY)
 
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY)

 
 
 
    }
}