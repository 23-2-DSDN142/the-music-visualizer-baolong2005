
// vocal, drum, bass, and other are volumes ranging from 0 to 100
  
  let firstRun = true;
  let testImg;


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)  
  textSize(24);

    
  let vocalMap = map(vocal, 0, 100, 60, 100);
  let posXofCircle = 480;
  let posYofCircle = 270;
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
    strokeWeight(1);
  for(let i = 1; i <= vocalMap; i++){
  let sizeofCircle = i*3;
    fill(20);
    ellipse(posXofCircle, posYofCircle, sizeofCircle);
  }
  if(firstRun){
    
    testImg = loadImage('football_image.png');

    firstRun = false
  }
    scale(0.4);
    image(testImg, 944, 419);



}