var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  rabbit.x = mouseX;
  
}

function createApples() {

apple = createSprite(random(50, 350),40, 10, 10 );
apple.addImage(appleImg);
apple.scale = 0.07;
apple.velocityY = -3;
apple.lifetime = 150;

}
