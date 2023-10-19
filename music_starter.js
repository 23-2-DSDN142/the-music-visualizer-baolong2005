// vocal, drum, bass, and other are volumes ranging from 0 to 100

let firstRun = true;
let testImg;
let fft;
let particles = [];
let firstxMove = 50;
let secondxMove = 50;
let thirdxMove = 50;


fft = new p5.FFT();

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textSize(24);
  stroke(255);
  angleMode(DEGREES);
  colorMode(RGB);
  let vocalMap = map(vocal, 0, 100, 200, 250);
  let drumMap = map(drum, 0, 100, 60, 90);
  let bassMap = map(bass, 0, 100, 50, 150);
  let blackColor = color(5, 5, 5);
  let purpleColor = color(87, 6, 64);
  console.log(song.currentTime());

  noFill();
  strokeWeight(3);

  // Background   
  let sizeofBlock = 600;
  for (let i = 0; i < sizeofBlock; i++) {
    let gradientAmount = map(i, 0, sizeofBlock, 0, 1);
    let strokeColor = lerpColor(blackColor, purpleColor, gradientAmount);
    stroke(strokeColor);
    line(0, i, width, i);
  }

  push()
  if (firstRun) {
    rectMode(CENTER);
    testImg = loadImage('spaceship.png');

    firstRun = false;
  }
  translate(width / 2, height / 2);

  pop()

  if (song.currentTime() < 59 || song.currentTime() > 89) {


    // Center circle
    colorMode(HSB, 100);
    stroke(bassMap, 150, 150);


    push();
    translate(width / 2, height / 2);
    fft.analyze()
    amp = fft.getEnergy(20, 200);
    let wave = fft.waveform();
    for (let t = -1; t <= 1; t += 2) {
      beginShape()
      for (let i = 0; i <= 180; i += 0.5) {
        let index = floor(map(i, 0, 180, 0, wave.length - 900));
        let r = map(wave[index], -1, 1, 150, 200)
        let x = r * sin(i) * t;
        let y = r * cos(i);
        vertex(x, y);

      }
      endShape()
    }
    pop()

    colorMode(RGB)

    // Particles

    var p = new Particle();
    particles.push(p)


    for (let i = particles.length - 1; i >= 0; i--) {
      if (!particles[i].edges()) {
        particles[i].update(amp > 100)
        particles[i].show()
      } else {
        particles.splice(i, 1)
      }

    }
  } else {

    colorMode(RGB);
    translate(0, 0);
    strokeWeight(0);
    
    fill(138, 107, 22);
    ellipse(1200 - firstxMove, 300, 200, 200);
    strokeWeight(2);
    stroke(138, 107, 22);
    noFill();
    ellipse(1200 - firstxMove, 300, vocalMap);

    firstxMove = firstxMove + 1;
    strokeWeight(0);

    if (song.currentTime() > 65) {
      fill(15, 26, 77);
      ellipse(1500 - secondxMove, 500, 500, 500);
      strokeWeight(2);
      stroke(15, 26, 77);
      noFill();
      ellipse(1500 - secondxMove, 500, vocalMap + 300);
      secondxMove = secondxMove + 1;
      strokeWeight(0);
    }


    if (song.currentTime() > 72) {
      fill(19, 158, 128);
      ellipse(1500 - thirdxMove, 100, 250, 250);
      strokeWeight(2);
      stroke(19, 158, 128);
      noFill();
      ellipse(1500 - thirdxMove, 100, vocalMap + 50);

      thirdxMove = thirdxMove + 1;

    }
    





    colorMode(HSB);
    stroke(bassMap, 150, 150);
    strokeWeight(5)
    line(width / 2 + 10, height / 2 - 20, drumMap, height / 2 - 20);
    line(width / 2, height / 2, bassMap, height / 2);
    translate(width / 2 - 150, height / 2 - 150);
    scale(0.5);
    image(testImg, 0, 0);

  }
}

class Particle {
  constructor() {
    this.pos = p5.Vector.random2D().mult(200);
    this.vel = createVector(0, 0);
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001));

    this.w = random(3, 5);
  }
  show() {
    push()
    noStroke();


    translate(width / 2 + this.pos.x, height / 2 + this.pos.y)

    scale(0.1);


    star(0, 0, 30, 70, 5);
    pop()
  }

  update(cond) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    if (cond) {
      this.pos.add(this.vel);
      this.pos.add(this.vel);
      this.pos.add(this.vel);
    }
  }
  edges() {
    if (this.posx < -width / 2 || this.pos.x > width / 2 ||
      this.pos.y < -height / 2 || this.pos.y > height / 2) {
      return true
    } else {
      return false
    }
  }

}



// Star
function star(x, y, radius1, radius2, npoints) {
  fill(207, 187, 19);
  angleMode(RADIANS)
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }

  endShape(CLOSE);



}