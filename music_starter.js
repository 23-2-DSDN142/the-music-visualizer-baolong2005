
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

  let vocalMap = map(vocal, 0, 100, 60, 100);
  let blackColor = color(5, 5, 5);
  let grayColor = color(51, 51, 51);
    console.log(song.currentTime());

    noFill();
    strokeWeight(3);
  
  let sizeofBlock = 600;
  for(let i = 0; i < sizeofBlock; i++){
  let gradientAmount = map(i, 0, sizeofBlock, 0, 1);
  let strokeColor = lerpColor(blackColor, grayColor, gradientAmount);
    stroke(strokeColor);
    line(0, i, width, i);
  }
    
    colorMode(HSB, 100);
    stroke(vocalMap, 100, 100);
  
    translate(width/2, height/2);
  let wave = fft.waveform();

    beginShape()
  for(let i = 0; i <= 180; i++){
  let index = floor(map(i, 0, 180, 0, wave.length - 2));
  let r = map(wave[index], -1, 1, 100, 200)
  let x = r * sin(i);
  let y = r * cos(i); 
    vertex(x, y);
    endShape()
}
    beginShape()
  for(let i = 0; i <= 180; i++){
  let index = floor(map(i, 0, 180, 0, wave.length - 2));
  let r = map(wave[index], -1, 1, 100, 200)
  let x = r * -sin(i);
  let y = r * cos(i); 
      vertex(x, y);
      endShape()
  }
      translate(width, height);
  //if(firstRun){
    
    //testImg = loadImage('football_image.png');

    //firstRun = false
  //}
    //scale(0.4);
    //image(testImg, width, height);



}