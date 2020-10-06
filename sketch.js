const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon(200,200);

}

function draw() {

  background(255,255,255); 
  
  Engine.update(engine);

  polygon.display();

}