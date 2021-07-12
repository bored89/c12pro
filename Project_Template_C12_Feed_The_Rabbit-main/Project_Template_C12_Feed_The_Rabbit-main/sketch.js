var garden,rabbit;
var gardenImg,rabbitImg;
var redImg;
var yellowImg;
var greenImg;
var appleImg;
var leaf;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  redImg = loadImage ("redImage.png");
  yellowImg = loadImage("orangeLeaf.png");
  greenImg = loadImage("leaf.png");
  appleImg = loadImage("apple.png");

}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);



rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}



function draw() {
  background(0);

  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round (random(1,2))
  if (frameCount %80==0)  {
   if (select_sprites == 1){
     createApples ();
   }
   else {
     createLeaves();
   }
  }
  if (keyDown ("up")){
    rabbit.velocityY=-3
  }
  if (keyDown ("down")){
  rabbit.velocityY=3
}
if (keyDown ("right")){
  rabbit.velocityX=3
}
if (keyDown ("left")){
  rabbit.velocityX=-3
}
  

drawSprites();
}


function createApples(){
  apple=createSprite (random (50,350),40,10,10);
  apple.scale=0.05
  apple.addImage (appleImg);
  apple.velocityY=4;
  apple.lifetime=300;
}

function createLeaves () {
  leaf=createSprite (random(50,350),40,10,10);
  leaf.scale=0.05
  leaf.velocityY=2
  leaf.lifetime=200
  var purple = Math.round (random(1,3));


  switch (purple){
    case 1:
    leaf.addImage (yellowImg)
    break;

    case 2:
      leaf.addImage (redImg);
      break;

      case 3:
      leaf.addImage (greenImg);
      break;
    }
  }