var ground,paper;
var leftd,bottomd,rightd;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;


  ground = new Ground(600,height,1200,20)
  paper = new Paper(50,300,10)


  bottomd = new Dustbin(650,382,150,15)
  leftd = new Dustbin(570,350,15,80)
  rightd = new Dustbin(730,350,15,80)

 	

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

  //eyPressed();

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x:  12,
      y: -11
    });
  }
}




