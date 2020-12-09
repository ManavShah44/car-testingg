var car,wall
var speed,weight

function setup() {
  createCanvas(2000,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed  
}

function draw() {
  background("black");
  if(isTouching(car,wall))
  {
      
      deformation()
  }
  
  
  drawSprites();
} 
function isTouching(obj1,obj2)
{
  if(obj1.x-obj2.x < obj1.width/2+obj2.width/2 &&
    obj2.x - obj1.x < obj1.width/2+obj2.width/2 &&
    obj1.y-obj2.y<obj1.height/2+obj2.height/2 &&
    obj2.y-obj1.y<obj1.height/2+obj2.height/2)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
function deformation(){
    if(wall.x-car.x < (car.width+wall.width)/2)
    {
      car.velocityX=0;
      var deformation=0.5*weight*speed*speed/22509;
      if(deformation>180){
        car.shapeColor=color(255,0,0)
      }
      if(deformation<180 && deformation>100){
        car.shapeColor=color(230,230,0)
      }
      if(deformation<100){
        car.shapeColor=color(0,255,0)
      }
    }


  }








