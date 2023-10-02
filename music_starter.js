
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  strokeWeight(1);
  

  let drumMap = map(drum, 0, 100, 5, 50);
  let posXofCircle = 480;
  let posYofCircle = 270;

  stroke(drumMap, 100, 100);
  for(let i = 1; i <= drumMap; i++){
    let sizeofCircle = i*10;
    fill(20);
    ellipse(posXofCircle, posYofCircle, sizeofCircle);
    ellipse(posXofCircle, posYofCircle, sizeofCircle/2);
  }
   
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);
}