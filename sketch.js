const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



var engine,world

var box1
var box2
var Ground

function setup() {
  var canvas=createCanvas(800,400);
  
  
  engine = Engine.create()
  world = engine.world
  box1 = new box(200, 200, 60, 50)
  box2 = new box(300, 300, 50, 60)
  Ground = new ground(400, 390, 800, 20)
}

function draw() {
  background(0); 

  Engine.update(engine)

  box1.display()
  box2.display()
  Ground.display()
}
