var fruit1, fruit2, fruit3, fruit4;
var fruit1Image, fruit2Image, frut3Image, fruit4Image;
var sword, swordImage
var fruitsGroup;
var knifeSound
var scoreBoard=0
function preload(){
  fruit1Image=loadImage("fruit1.png")
  fruit2Image=loadImage("fruit2.png")
  fruit3Image=loadImage("fruit3.png")
  fruit4Image=loadImage("fruit4.png")
  swordImage=loadImage("sword.png")
  knifeSound=loadSound("knifeSwooshSound.mp3")
}
  function setup() {
  createCanvas(400, 400);
 sword=createSprite(40, 200, 20, 20);
 sword.addImage(swordImage);
 sword.scale=0.7;
fruitsGroup=new Group()
}

function draw(){
  background("brown")
  sword.x=mouseX
  sword.y=mouseY
  spwn()
  if(sword.isTouching(fruitsGroup))
    {
      fruitsGroup.destroyEach()
      knifeSound.play()
      scoreBoard=scoreBoard+1
    }
  if(scoreBoard>5)
    {
      fruitsGroup.setVelocityXEach(-5)
    }
  if(scoreBoard>10)
    {
      fruitsGroup.setVelocityXEach(-8)
    }
drawSprites();
  textSize(25)
  text("score-"+scoreBoard,300,30)
  
}
function spwn(){
  if(frameCount%20==0){
  fruit1=createSprite(390, 100, 20, 20);
  fruit1.y= Math.round(random(50,350)) 
  fruit1.velocityX=-2
  var fruitrand=Math.round(random(1,4))
  switch(fruitrand){
    case 1:fruit1.addImage(fruit1Image)
    break;
    case 2:fruit1.addImage(fruit2Image)
    break;
    case 3:fruit1.addImage(fruit3Image)
    break;
    case 4:fruit1.addImage(fruit4Image)
    break;
  }
   fruit1.scale=0.3;
    fruitsGroup.add(fruit1)
  } 
}