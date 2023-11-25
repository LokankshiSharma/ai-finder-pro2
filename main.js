function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
function draw(){
    video (video, 0, 0, 600, 500)
    fill('white');
    stroke('white');
}
function start(){

}
function modelLoaded(){
    console.log('Model is loaded')
}
var cocossd=""