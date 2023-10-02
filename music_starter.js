
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  strokeWeight(9);
  stroke(drum, 100, 100);

  let drumMap = map(drum, 0, 100, 30, 90);
  let lengthOfLine = 300;
  let LineStart = 100
  let LineEnd = LineStart + lengthOfLine;

  
  for(let i = 1; i <= drumMap; i++){
    let lineStep = i*20;
    line(LineStart, lineStep, LineEnd, lineStep);
  }
   
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);
}