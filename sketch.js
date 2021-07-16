const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

//Create multiple bobs, mulitple ropes varibale here

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	var bob_options = {
		restitution: 0.8,
		density:0.5
	  }

bob1 = Bodies.circle(320, 350, 20, bob_options);
World.add(world,bob1);
bob2 = Bodies.circle(360, 350, 20, bob_options);
World.add(world,bob2);
bob3 = Bodies.circle(400, 350, 20, bob_options);
World.add(world,bob3);
bob4 = Bodies.circle(440, 350, 20, bob_options);
World.add(world,bob4);
bob5 = Bodies.circle(480, 350, 20, bob_options);
World.add(world,bob5);

var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

rope1=new Rope(bob1,roof,-80, 0) 
rope2=new Rope(bob2,roof,-40, 0) 
rope3=new Rope(bob3,roof,0, 0) 
rope4=new Rope(bob4,roof,40, 0) 
rope5=new Rope(bob5,roof,80, 0)

}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  Engine.update(engine);
  
  //create ellipse shape for multiple bobs here
	ellipse(bob1.position.x, bob1.position.y, 20);
	ellipse(bob2.position.x, bob2.position.y, 20);
	ellipse(bob3.position.x, bob3.position.y, 20);
	ellipse(bob4.position.x, bob4.position.y, 20);
	ellipse(bob5.position.x, bob5.position.y, 20);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1, {x:0,y:0}, {x:-30, y:0});
	}
}