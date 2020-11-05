
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperobj;
var ground;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobj = new paper(100,250,30);
	ground = new Ground(400,470,1999,20);
	dustbin1 = new Dustbin(1000,450);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    
	paperobj.display();
	ground.display();
	dustbin1.display();
 
}

function keyPressed(){
 
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:45,y:-45});
}	



}



