var wall, thickness;
var bullet,speed ,weight;
function setup() {
  createCanvas(1600,400);thickness=random(22,83)
  wall=createSprite(100, 200 thickness, height/2);
  speed=random(223,321)
  weight=random(30,52)
  function hasCollided(Lbullet, Lwall) {
    bulletRightEdge=1bullet.x +1bullet.width;
    wallLeftEdge=1wall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}