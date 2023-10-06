
// vocal, drum, bass, and other are volumes ranging from 0 to 100
  
  let firstRun = true;
  let testImg;
  let fft;
  let particles = [];

  fft = new p5.FFT();

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)  
  textSize(24);
  stroke(255);
  angleMode(DEGREES);
  colorMode(RGB);
  let vocalMap = map(drum, 0, 100, 60, 90);
  let bassMap = map(bass, 0, 100, 50, 150);
  let blackColor = color(5, 5, 5);
  let grayColor = color(51, 51, 51);
    //console.log(song.currentTime());

    noFill();
    strokeWeight(3);
  
  // Background   
  let sizeofBlock = 600;
  for(let i = 0; i < sizeofBlock; i++){
  let gradientAmount = map(i, 0, sizeofBlock, 0, 1);
  let strokeColor = lerpColor(blackColor, grayColor, gradientAmount);
    stroke(strokeColor);
    line(0, i, width, i);
  }


  // Vocal circle
    colorMode(HSB, 100);
    stroke(bassMap, 150, 150);
  
    translate(width/2, height/2);
  //let wave = fft.waveform();
  //for(let t = -1; t <= 1; t += 2){
    //beginShape()
  //for(let i = 0; i <= 180; i += 0.5){
  //let index = floor(map(i, 0, 180, 0, wave.length - 950));
  //let r = map(wave[index], -1, 1, 150, 205)
  //let x = r * sin(i) * t;
  //let y = r * cos(i); 
    //vertex(x, y);
    //endShape()
//}
  //}
  //for(let t = -1; t <= 1; t += 2){
    //beginShape()
  //for(let i = 0; i <= 180; i += 0.5){
  //let index = floor(map(i, 0, 180, 0, wave.length - 1000));
  //let r = map(wave[index], -1, 1, 150, 200)
  //let x = r * sin(i) * t;
  //let y = r * cos(i); 
    //vertex(x, y);
    //endShape()
//}
  //}
  class Particle {
    constructor(){
      this.pos = p5.Vector.random2D().mult(250);
      this.vel = createVector(0, 0);
      this.acc = this.pos.copy().mult(random(0.0001, 0.00001));

      this.w = random(3, 5);
    }
    show(){
      noStroke();
      fill(bassMap, 150, 150);
      ellipse(this.pos.x, this.pos.y, 4);
      //scale(0.5);
  
      //star(this.pos.x, this.pos.y, 30, 70, 5);
      
    }
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
    edges(){
      if(this.posx < - width / 2 || this.pos.x > width / 2 ||
      this.pos.y < - height / 2 || this.pos.y > height / 2) {
        return true
      } else {
      return false
      }
    }
  }  
  var p = new Particle();
  particles.push(p)

  for(let i = particles.length - 1; i >= 0; i--){
    if(!particles[i].edges()) {
      particles[i].update()
      particles[i].show()
    } else {
      particles.splice(i, 1)
    }

  }
  


  //translate(width * 0.8, height * 0.5);
    //scale(vocalMap / 40)
    //rotate(frameCount / -100.0);
    //star(0, 0, 30, 70, 5);
  

function star(x, y, radius1, radius2, npoints) {
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
    




}