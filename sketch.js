
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bob1=createSprite(400,300);
bob2=createSprite(450,300);
bob3=createSprite(500,300);
bob4=createSprite(550,300);
bob5=createSprite(600,300);
rope1=new rope(bob1.body,roof.body,-bobDianeter*2,0)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1();
  bob2();
  bob3();
  bob4();
  bob5();
  rope1();
  drawSprites();
 
}



