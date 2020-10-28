
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground, paperObject;
var dustbin1,dustbin2,dustbin3;
var world;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	Ground = new ground(600,height,1200,20);
	paperObject = new paper(200,580,20);

	//Create the Bodies Here.
	dustbin1 = new Dustbin(960,540,20,100);
	dustbin2 = new Dustbin(1030,580,120,20);
	dustbin3 = new Dustbin(1100,540,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		//Matter.Body.setStatic(paperObject,false);
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:25,y:-13});
	}
}



