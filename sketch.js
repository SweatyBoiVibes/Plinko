const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var en, wo
var plinkos=[]
var particles=[]
var divs=[]

function setup() {
  createCanvas(480 ,800 );
  
 en=Engine.create()
 wo=en.world

 var op={isStatic:true}
 g=Bodies.rectangle(240,770,480,20,op)
 World.add(wo,g)

 for(var i=50; i<750; i=i+50){
   plinkos.push(new Plinko(i,100))
 }

 for(var i=75; i<750; i=i+50){
  plinkos.push(new Plinko(i,200))
}

for(var i=50; i<750; i=i+50){
  plinkos.push(new Plinko(i,300))
}

for(var i=10;i<780;i=i+100){
divs.push(new Div(i,700))
}

}

function draw() {
  background("red"); 
  Engine.update(en) 

  if(frameCount%60===0){
    particles.push(new Particle(random(30,450),0))
  }


  for(var i=0;i<particles.length;i++){
    particles[i].display()
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display()
  }

  for(var i=0;i<divs.length;i++){
    divs[i].display()
  }
  rectMode(CENTER)
  rect(g.position.x,g.position.y,480,20)
  drawSprites();
}