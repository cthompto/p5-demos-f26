let canvas;
let leftEyeX;
let leftEyeY;
let rightEyeX;
let rightEyeY;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(144, 3, 252);
  eyeRender();
  mouthRender();
}

function mouthRender() {
  stroke(0);
  strokeWeight(10);
  arc(width/2, 300, 150, 50, 20, 160, OPEN);
  if(mouseX > 175 && mouseX < 225) {
    if(mouseY > 305 && mouseY < 350) {
      fill(252, 45, 214);
    arc(width/2, 320, 50, 80, 20, 160, OPEN);
    }
  }

}

function eyeRender() {
  //update pupil related to mouse position
  leftEyeX = map(mouseX, 0, width/2, 110, 140,true);
  leftEyeY = map(mouseY, 0, height, 150, 200, true);
  rightEyeX = map(mouseX, width/2, width, 260, 290,true);
  rightEyeY = map(mouseY, 0, height, 150, 200, true);

  //draw eyeballs
  noStroke();
  fill(255);
  ellipse(125, 175, 50, 100);
  ellipse(275, 175, 50, 100);

  // draw pupil
  fill(0);
  ellipse(leftEyeX, leftEyeY, 25,50);
  ellipse(rightEyeX, rightEyeY, 25,50);

  // draw ring around eye to clean up look
  stroke(144, 30, 252);
  strokeWeight(12);
  noFill();
  ellipse(125, 175, 55, 110);
  ellipse(275, 175, 55, 110);
}