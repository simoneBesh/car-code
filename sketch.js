var car1, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400, 1500);
  console.log(speed);

  car1=createSprite(50,200,50,50);
  car1.shapeColor="black";
  wall=createSprite(1100, 200, 60, height/2);
  //wall.shapeColor=color(80,80,80);

  car1.velocityX=speed;
}

function draw() {
  background(255,255,255);  
//car1.collide(wall);


  if (car1.collide(wall)){
    car1.velocityX=0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    console.log (deformation);

    if (deformation>180) {
      car1.shapeColor="red";
    }

    if (deformation<180 && deformation>100){
      car1.shapeColor="yellow";
    }

    if (deformation<100){
      car1.shapeColor="green";
    }
  
  }
  
 


  drawSprites();
}


  