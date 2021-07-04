const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
bg = loadImage("bg.jpg")
girlimg = loadImage("girl.png");
}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  

  girl = createSprite(400, 400, 50, 50);
  girl.addImage(girlimg);



  snow1 = new Snow(20,0,60);
  snow2 = new Snow(100,0,60)
  snow3 = new Snow(200,0,60)
  snow4 = new Snow(300,0,60)
snow5 = new Snow(400,0,60)
snow6 =new Snow(500,0,60)
snow7 = new Snow(600,0,60)
snow8 = new Snow(700,0,60)
snow9 = new Snow(50,50,60)
snow10 = new Snow(150,50,60)
snow11= new Snow(250,50,60)
snow12= new Snow(350,50,60)
snow13 = new Snow(450,50,60)
snow14= new Snow(550,50,60)
snow15 = new Snow(650,50,60)
snow15 = new Snow(650,50,60)
snow16 = new Snow(750,50,60)
snow17 = new Snow(20,100,60);
  snow18 = new Snow(100,100,60)
  snow19 = new Snow(200,100,60)
  snow20 = new Snow(300,100,60)
snow21 = new Snow(400,100,60)
snow22 =new Snow(500,100,60)
snow23 = new Snow(600,100,60)
snow24= new Snow(700,100,60)
snow25= new Snow(50,50,60)



  
  

}

function draw() {
  background(bg); 
  Engine.update(engine)
  
  if(keyCode===32){
    girl.x = girl.x+1;
  }
  if(keyCode===13){
    girl.x= girl.x-1
  }
  
  stroke(5)
  
  text("Press space and enter keys to see the girl skating🏃🏻‍♀️🏃🏻‍♀️",400,50)
  drawSprites();
  snow1.display();
  snow2.display();
  snow3.display();
snow4.display();
snow5.display();
snow6.display();
snow7.display();
snow8.display();
snow9.display();
snow10.display();
snow11.display();
snow12.display();
snow13.display();
snow14.display();
snow15.display();
snow16.display();
snow17.display();
snow18.display();
snow19.display();
snow20.display();
snow21.display();
snow22.display();
snow23.display();
snow24.display();
snow25.display();

}