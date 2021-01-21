var ground,paper,paperObject;
var leftd,bottomd,rightd;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,700);


	engine = Engine.create();
	world = engine.world;


  ground = new Ground(600,height,1200,20)
  paper = new Paper(100,800,5)


  bottomd = new Dustbin(850,680,200,20)
  leftd = new Dustbin(750,640,20,100)
  rightd = new Dustbin(950,640,20,100)

 	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();
  paper.display();

  bottomd.display();
  leftd.display();
  rightd.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){

  if(keyCode===UP_ARROW){
    Mattter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
  }
}



