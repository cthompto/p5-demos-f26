let mySong;

async function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();

  mySong = await loadSound('./assets/bg1.mp3');

}

function draw() {
  background(144, 3, 252);
}

