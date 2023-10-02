
// vocal, drum, bass, and other are volumes ranging from 0 to 100
  
  let firstRun = true;
  let testImg;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  strokeWeight(1);
  
  let vocalMap = map(vocal, 0, 100, 60, 100);
  let posXofCircle = 480;
  let posYofCircle = 270;

  stroke(vocalMap, 100, 100);
  for(let i = 1; i <= vocalMap; i++){
    let sizeofCircle = i*3;
    fill(20);
    ellipse(posXofCircle, posYofCircle, sizeofCircle);
    ellipse(posXofCircle, posYofCircle, sizeofCircle-10);
  }
  if(firstRun){
    
    testImg = loadImage('football_image.png');

    firstRun = false
  }
    scale(0.4);
    image(testImg, 944, 419);
    
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);
}