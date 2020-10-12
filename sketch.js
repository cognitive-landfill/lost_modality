function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(0);
  strokeWeight(1.3);
  background(255);
  frameRate(12);
}

function draw() {
  if (frameCount % 120 == 0) {
    background(255);
  }
  var x = [random(width),random(width),random(width),random(width)];
  var y = [random(height),random(height),random(height),random(height)];
  
  bezier(x[0],y[0],x[1],y[1],x[2],y[2],x[3],y[3]);
}
