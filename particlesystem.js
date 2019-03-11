let ants = [];
let antimg;

function setup(){
	createCanvas(800, 600, WEBGL);
	antimg = loadImage('assets/antpic.png');
	for(let i = 0; i < 20; i++){
      ants[i] = new Ant;
	}
	
}


function draw(){
	
	background(255);
	for(let i = 0; i < 20; i++){
		ants[i].move();
		ants[i].display();
		ants[i].follow();
	}
	
}

class Ant {

  constructor(){
    
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
    this.diameter = random(10, 50);
    this.speed = random(2, 5);
  }

  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    if(this.x > width/2){this.x = this.x - 2*this.speed}
    if(this.x < -width/2){this.x = this.x + 2*this.speed}
    if(this.y > height/2){this.y = this.y - 2*this.speed}
    if(this.y < -height/2){this.y = this.y + 2*this.speed}
  }

  display(){
  	texture(antimg);
  	ellipse(this.x, this.y, this.diameter);
  }

  follow(){
  	if(mouseIsPressed){
  	
      if(this.x > mouseX-width/2){
      	this.x = this.x -this.speed;
      }else if(this.x < mouseX-width/2){
      	this.x = this.x + this.speed;
      }
      if(this.y > mouseY-height/2){
      	this.y = this.y -this.speed;
      }else if(this.y < mouseY-height/2){
      	this.y = this.y + this.speed;
      }
  	}
  }



}