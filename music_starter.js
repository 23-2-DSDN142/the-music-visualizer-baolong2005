
// vocal, drum, bass, and other are volumes ranging from 0 to 100
  
  let firstRun = true;
  let testImg;
  let fft;
  
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
  let wave = fft.waveform();

    beginShape()
  for(let i = 0; i <= 180; i++){
  let index = floor(map(i, 0, 180, 0, wave.length - 950));
  let r = map(wave[index], -1, 1, 150, 205)
  let x = r * sin(i);
  let y = r * cos(i); 
    vertex(x, y);
    endShape()
}
    beginShape()
  for(let i = 0; i <= 180; i++){
  let index = floor(map(i, 0, 180, 0, wave.length - 950));
  let r = map(wave[index], -1, 1, 150, 205)
  let x = r * -sin(i);
  let y = r * cos(i); 
      vertex(x, y);
      endShape()
  }
  beginShape()
  for(let i = 0; i <= 180; i++){
  let index = floor(map(i, 0, 180, 0, wave.length - 1000));
  let r = map(wave[index], -1, 1, 150, 200)
  let x = r * sin(i);
  let y = r * cos(i); 
    vertex(x, y);
    endShape()
}
    beginShape()
  for(let i = 0; i <= 180; i++){
  let index = floor(map(i, 0, 180, 0, wave.length - 1000));
  let r = map(wave[index], -1, 1, 150, 200)
  let x = r * -sin(i);
  let y = r * cos(i); 
      vertex(x, y);
      endShape()
  }
  

angleMode(RADIANS)
  //translate(width * 0.8, height * 0.5);
  scale(vocalMap / 40)
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5);
  

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
    
  //if(firstRun){
    
    //testImg = loadImage('football_image.png');

    //firstRun = false
  //}
    //scale(0.5);
    //image(testImg, width-1212, height - 800);



}