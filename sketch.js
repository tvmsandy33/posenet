let capture;
let posenet;
let noseX, noseY;
let singlepose;
let skeleton;

function setup() {
    createCanvas(800,500);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);

}

function receivedPoses(poses) {
    console.log(poses);

    if(poses.length > 0){
        singlepose = poses[0].pose;
        skeleton = poses[0].skeleton;

    }
}

function modelLoaded() {
    console.log('model has loaded');
}

function draw() {
    background(200);
    image(capture,0,0,);
    fill(0,0,255);
    
    if(singlepose) {
        for(let i=0; i<singlepose.keypoints.length; i++) {
            ellipse(singlepose.keypoints[i].position.x, singlepose.keypoints[i].position.y, 10);
        }

        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++) {
            p5.line(skeleton[j][0].x,skeleton[j][0].y,skeleton[j][1].x,skeleton[j][1].y);
        }
    }
    
}
