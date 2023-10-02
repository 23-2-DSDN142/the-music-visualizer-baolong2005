
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  noStroke();

   let vocalColor = vocal;
   let purpleColor = color(89, 1, 105);
   let pinkColor = color(217, 2, 156);
   let sizeofBlock = 100;
   for(let i = 0; i < width; i++){

   let gradientAmount = map(i, 0, sizeofBlock, 0, 1);
   let strokeColor = lerpColor(vocalColor, purpleColor, pinkColor, gradientAmount);
    
  
    stroke(strokeColor);
    ellipse(width/2, height/2, i);
    line(0, 100+i, width, 100+i);
   }
    stroke(purpleColor);

   let bassWave = map(bass, 0, height, 0, 1);
   let waveHeight = bassWave;
   let waveFreq = 8;

   let bassYLoki = height/2;
    beginShape();
   for(let i = 0; i < width; i++){
    vertex(i, bassYLoki - waveHeight*sin(waveFreq*2));
    }
    endShape();
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);
}