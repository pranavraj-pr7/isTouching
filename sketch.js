var fixedRect, movingRect;
var Rect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect = createSprite(200,200,40,69);
  Rect.shapeColor = "green";
  Rect.debug = true;


  
}

function draw() {
  background(0,0,0);
  movingRect.x= mouseX;
  movingRect.y= mouseY;

if(isTouching(Rect,movingRect)){
  movingRect.shapeColor = "grey"
  Rect.shapeColor = "grey"
}else {
  movingRect.shapeColor = "green"
  Rect.shapeColor = "green"
}

  
  
  drawSprites();
}


