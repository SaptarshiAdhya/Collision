var FR,MR
var go1,go2,go3,go4
function setup() {
  createCanvas(1200,800) 
  FR=createSprite(200,200,50,80)
  MR=createSprite(400,200,80,30)
  FR.shapeColor="green"
  MR.shapeColor="green"
  FR.debug=true
  MR.debug=true
  go1=createSprite(100,100,50,50)
  go1.shapeColor="green"
  go2=createSprite(200,100,50,50)
  go2.shapeColor="green"
  go3=createSprite(300,100,50,50)
  go3.shapeColor="green"
  go4=createSprite(400,100,50,50)
  go4.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  MR.x=World.mouseX
  MR.y=World.mouseY
  if(isTouching(MR,go1)){
    MR.shapeColor="red"
    go1.shapeColor="red"
  }
  else{
    MR.shapeColor="green"
    go1.shapeColor="green"
  }
  drawSprites();
}
