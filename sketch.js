var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var ball;
var score=0;
var divisionHeight=300;
var count =0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+count,20,30);
 text("500",5,550);
 text("500",100,550);
 text("500",180,550);
 text("500",260,550);
 text("100",340,550);
 text("100",420,550);
 text("100",500,550);
 text("200",580,550);
 text("200",680,550);
 text("200",740,550);
  Engine.update(engine);
 
  if(gameState === "end")
  { 
    text("Game Ended",150, 120);
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
if(ball!=null)
{
  ball.display();
  if(ball.body.position.y>760)
  {
   if(ball.body.position.x<300){
     count=count+500;
     ball=null;
     if(score>=5)
     {
       gameState="end";
     }
   }
   else if(ball.body.position.x<580 && ball.body.position.x>301){
    count=count+100;
    ball=null;
    if(score>=5)
    {
      gameState="end";
    }
  }
  else if(ball.body.position.x<900 && ball.body.position.x>581){
    count=count+200;
    ball=null;
    if(score>=5)
    {
      gameState="end";
    }
  }
  }
}

}

function mousePressed()
{

  if(gameState !== "end")
  {
    score = score+1;
    ball = new Ball(mouseX,10,10,10);
  }
}