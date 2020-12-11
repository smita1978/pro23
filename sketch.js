var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var boxleft,boxright,boxbtm,boxl,boxr,boxb;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 boxleft=createSprite(290,600,20,100);
	 boxleft.shapeColor="red";
	 boxl=Bodies.rectangle(290,600,30,80,{isStaic:true});


boxright=createSprite(470,600,20,100);
	 boxright.shapeColor="red";
	 boxr=Bodies.rectangle(470,600,30,80,{isStaic:true});
	 
	 boxbtm=createSprite(380,650,200,20);
	 boxbtm.shapeColor="red";
	 boxb=Bodies.rectangle(380,650,200,20,{isStatic:true});
	World.add(world,boxb);
	World.add(world,boxr);
	World.add(world,boxl);

	Engine.run(engine);
	 

  
}

  


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxbtm.x=boxb.position.x;
  boxbtm.y=boxb.position.y;
  boxright.x=boxr.position.x;
  boxright.y=boxr.position.y;
  boxleft.x=boxl.position.x;
  boxleft.y=boxl.position.y;
  

  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }



