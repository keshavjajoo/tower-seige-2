
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var slingshot

var engine, world;

function preload(){
    polygonimage=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    polygon= Bodies.circle(100,150,20)
    World.add(world,polygon)
    ground = new Ground(390,300,250,10);
    
    slingshot=new SlingShot(this.polygon,{x:150, y:150});

    box8=new Box(330,235,30,40)
     box9=new Box(360,235,30,40)
    box10=new Box(390,235,30,40)
    box11=new Box(420,235,30,40)
     box12=new Box(450,235,30,40)
    box13=new Box(360,195,30,40)
    box14=new Box(390,195,30,40)
    box15=new Box(420,195,30,40)
      box16=new Box(390,155,30,40)
}
function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    box8.display();
    box9.display();
    ground.display();
    box10.display();
    box11.display();

    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
  
    

     
    slingshot.display();   
    image(polygonimage,polygon.position.x,polygon.position.y,40,40) 
}


function mouseDragged(){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}




