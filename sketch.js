var tom1Img,tomWalkImg,tomStandImg;
var jerryImg1,jerryImg2,jerryImg3,jerryteasing;
var gardenImg
function preload() {
  tom1Img=loadImage("images/cat1.png")
  tomWalkImg=loadAnimation("images/cat2.png","images/cat3.png")
  tomStandImg= loadImage("images/cat4.png") 
  jerryImg1=loadImage("images/mouse1.png")
  jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
  jerryImg3=loadImage("images/mouse4.png")
  gardenImg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addImage("tomSleeping",tom1Img);
    tom.scale=0.2;
    jerry=createSprite(200,600)
    jerry.addImage("jerryStanding",jerryImg1);
    jerry.scale=0.2
    

   
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if (tom.x - jerry.x < (tom.width - jerry.width )/2){
  tom.velocityX=0;
  tom.addAnimation("tomstanding",tomStandImg)
  tom.changeAnimation("tomstanding");

  jerry.addAnimation("jerryhappy",jerryImg3)
  jerry.changeAnimation("jerryhappy")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
 
  jerry.addAnimation("jerryteasing",jerryImg2)
  jerry.changeAnimation("jerryteasing")
  jerry.frameDelay=5;
}
if (keyCode === RIGHT_ARROW){
  tom.velocityX=-5;
  tom.addAnimation("tomRunning",tomWalkImg)
  tom.changeAnimation("tomRunning")
}
}
