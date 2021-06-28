
var fixedRect, fixedRect1, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(800, 200, 50, 50);
  fixedRect1.shapeColor = "green";

  fixedRect2 = createSprite(1000, 200, 50, 50);
  fixedRect2.shapeColor = "orange";

  fixedRect3 = createSprite(400, 200, 50, 50);
  fixedRect3.shapeColor = "yellow";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect1)){
    movingRect.shapeColor = "blue";
    fixedRect1.shapeColor = "blue";
  }
  
  else if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
  
    fixedRect.shapeColor = "red"
  }
  else
  {
    movingRect.shapeColor = "green";
  
    fixedRect1.shapeColor = "green"

    fixedRect.shapeColor = "green"
  }

fixedRect3.visible = false;

if(isTouching(fixedRect2, movingRect)){
  fixedRect3.visible = true;
}
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(movingRect, fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  }
}


