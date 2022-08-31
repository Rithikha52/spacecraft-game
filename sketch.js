
var spacecraft1 , spacecraft2 , spacecraft3 , spacecraft4
var bg , issImage , iss , spacecraft 
var hasDocked = false 

function setup() {
  createCanvas(600,350);
  iss=createSprite(330,130);
  iss.addImage(issImage);
  iss.scale=0.25;

  spacecraft=createSprite(285,240);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale=0.15;
  
}

function draw() {
  background(bg);
  spacecraft.addImage(spacecraft1);
  
  if(!hasDocked){
    spacecraft.x+=random(-1,1);
    if(keyDown("UP_ARROW")){
      spacecraft.y-=2
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.X-=1
      spacecraft.addImage(spacecraft4)
      
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.x+=1
      spacecraft.addImage(spacecraft3)
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2)
    }

  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("dockingSuccessful",300,200)
  }
  drawSprites();

}

function preload() {
  spacecraft1=loadImage("spacecraft1.png");
  spacecraft2=loadImage("spacecraft2.png");
  spacecraft3=loadImage("spacecraft3.png");
  spacecraft4=loadImage("spacecraft4.png");

  issImage=loadImage("iss.png");
  bg=loadImage("spacebg.jpg");
}