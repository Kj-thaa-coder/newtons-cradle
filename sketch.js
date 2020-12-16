
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint

var bob1
var bob2
var bob3
var bob4
var bob5

var rope1
var rope2
var rope3


function preload()
{
	
}

function setup() {
	createCanvas(1440, 739);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(550,590,30)
	bob2 = new Bob(603,590,30)
	bob3 = new Bob(666 ,590,30)
	bob4 = new Bob(729,590,30)
	bob5 = new Bob(792,590,30)
	roof = new Roof(330,100,340,20)
	rope = new Rope(bob1.body, 550, 200)
	rope1 = new Rope(bob2.body, 613 ,200)
	rope2 = new Rope(bob3.body, 676 , 200)
	rope3 = new Rope(bob4.body, 739, 200)
	rope4 = new Rope(bob5.body, 802, 200)

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

Engine.update(engine)


  


 

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
 
}

function keyPressed(){
if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-700,y:-45})
	}
}



