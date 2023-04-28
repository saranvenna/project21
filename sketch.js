var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    
    ball = Bodies.circle(200,100,20,ball_options)
    World.add(world,ball)
	

	ellipseMode(RADIUS);
   
	//Create the Bodies Here.
	groundobj=new Ground(width/2,580,width,20)
	leftobj=new Ground(800,480,20,190)
	rightobj=new Ground(1100,480,20,190)
}


function draw() {
  background(0)
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
  groundobj.display()
  leftobj.display()
  rightobj.display()
  Engine.update(engine);
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:55,y:-55})
}

}









