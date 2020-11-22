var bullet, speed, weight;
var wall,thickness;

function setup() {
  createCanvas(1300,400);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor="white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  thickness=random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;
}

function draw() {
  background(33,47,60);

  if (hasCollided(bullet,wall)) {
    var damage=0.5 *weight * speed * speed/(thickness * thickness * thickness);

if (damage>10) {
  wall.shapeColor=color(255,0,0);
}

if (damage<10) {
  wall.shapeColor=color(0,255,0);

}

  }
  stroke(50,229,229);
  fill(50,229,229);
  textSize(30);
  text("Press ctrl+r to get different colours",500,350);
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x +lbullet.width; 
wallLeftEdge=lwall.x;

if (bulletRightEdge >=wallLeftEdge) {
  return true;
}
return false;
}