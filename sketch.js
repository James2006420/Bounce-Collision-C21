var fixedRect, movingRect, rect1, rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(400, 400, 40, 60);
  rect2 = createSprite(600, 600, 20, 100);
  rect3 = createSprite(200, 200, 50, 50);
  rect1.shapeColor = "blue";
  rect2.shapeColor = "blue";
  rect3.shapeColor = "blue";

  movingRect.velocityX = -5;
  fixedRect.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;

  // if(touching(movingRect, rect3))
  // {
  //   movingRect.shapeColor = "red";
  //   rect3.shapeColor = "red";
  // }
  // else
  // {
  //   movingRect.shapeColor = "green";
  //   rect3.shapeColor = "blue";
  // }

  bounce(movingRect, fixedRect);

  drawSprites();
}
