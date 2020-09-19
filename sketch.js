const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    

    var ball_options ={
        restitution: 2
    }
    ball = Bodies.circle(100,100,20,ball_options);
    World.add(world,ball);
    
    console.log(ground);
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("cyan");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);


}