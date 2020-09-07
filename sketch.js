var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,800);
 car = createSprite(50, 200, 50, 50);
 car.shapeColor="blue";
 car.setCollider("rectangle",0,0,30,30);
 wall = createSprite(1400,300,60,height);
 wall.shapeColor="Golden";
 
 speed=random(50,80);
 weight=random(500,1800);
}

function draw() {
  background(0); 
  car.velocityX=speed;
   if(wall.x-car.x<(1.2*(car.width+wall.width))/2
    &&car.x-wall.x<car.width/2+wall.width/2){
  
      car.velocityX=0;
    
      var dForm=0.5*weight*speed*speed/22509;
        if(dForm>180){
          car.shapeColor="yellow";
        }
        if(dForm<180 && dForm>100){
          car.shapeColor="red";
        }
        if(dForm<100){
          car.shapeColor="pink";
        }
      }
      
      
    
  drawSprites();
}