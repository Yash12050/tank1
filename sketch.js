const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgimg,barrel1,ground,obstacle1;
let pea1;

function preload() {
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-100);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y = 0;

    barrel1 = new barrel();
    ground = new Ground(displayWidth/2,displayHeight,1,600);
}

function draw(){   
    background("white");
    if(frameCount%50===0){
        obstacle1 = new obstacle();
    }
    fill("green");
    rectMode(CENTER);
    rect(displayWidth/2,displayHeight/2,600,800);
    barrel1.display();
    


}

function keyPressed(){
    if (keyCode===32){
        pea1 = new pea();
    }
}