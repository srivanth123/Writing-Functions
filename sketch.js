var fixedRect, movingRect;
var gameObject1, gameObject2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  gameObject1=createSprite(200,200,10,100)
  gameObject1.shapeColor="blue"

  gameObject2=createSprite(200,100,10,100)
  gameObject2.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,gameObject2)){

  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";

}

  
  drawSprites();
}

function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
return true;
}
else {
  return false;
}


}