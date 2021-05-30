var bg,bg2,form,system,code,security;
var treasure;
var score=0;

function preload() {
 
  bg = loadImage("doctor.jpg");
  

  //load image for the treasure background
  
}

function setup() {
  createCanvas(1500,1000);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}