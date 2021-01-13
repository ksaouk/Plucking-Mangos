const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var ground;
var stone;
var tree;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(400, 250);
	boy.addImage("boy.png", boyImage);

	//Create the Bodies Here.
	ground = new Ground(600, height, 1200, 20);

	stone = new Stone(200, 200, 5, 5);

	mango1 = new Mango(1000, 200, 7, 7);
	mango1 = new Mango(1020, 220, 8, 8);
	mango1 = new Mango(1020, 180, 5, 5);
	mango1 = new Mango(1020, 220, 10, 10);
	mango1 = new Mango(1020, 208, 7, 5);

	tree = new Tree(950, 25, 50, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  stone.display();
  
  ground.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

}



