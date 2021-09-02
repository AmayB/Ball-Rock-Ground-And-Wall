const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var rock;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restituition: 0.85,
    frictionAir: 0.01
  }

  var rock_options = {
    restituition: 0.85,

  }

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,380,100,100,ground_options);
  World.add(world,ground);
  wall = Bodies.rectangle(200,200,100,100,ground_options);
  World.add(world,wall);
  ball = Bodies.circle(50,50,10,ball_options);
  World.add(world,ball);
  rock = Bodies.circle(300,100,40,rock_options);
  World.add(world,rock);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background("white");

  Engine.update(engine);

  rect(ground.position.x,ground.position.y,400,20)
  rect(wall.position.x,wall.position.y,10,400)
  ellipse(ball.position.x,ball.position.y,20)
  ellipse(rock.position.x,rock.position.y,20)
}
 

