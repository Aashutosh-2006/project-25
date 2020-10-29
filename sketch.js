
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImg,dustbin1,dustbin2,dustbin3;

function preload()
{
	dustbinImg=loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper (50,600,70);
ground=new Ground(400,height,800,20);
dustbin=createSprite(600,600,60,30);
dustbin.addImage(dustbinImg);
dustbin.scale=0.5;
dustbin1=createSprite(600,685,150,10);
dustbin1.shapeColor="white"
dustbin2=createSprite(525,600,10,160);
dustbin2.shapeColor="white"
dustbin3=createSprite(675,600,10,160);
dustbin3.shapeColor="white"


	Engine.run(engine);
  
}


function draw() {
    background("brown");
	rectMode(CENTER);

paper.display();
ground.display();

  
keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



