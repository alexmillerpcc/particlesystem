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
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 50);
    this.speed = random(2, 5);
  }

  move(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

  }

  display(){
  	texture(antimg);
  	ellipse(this.x, this.y, this.diameter);
  }

  follow(){
  	if(mouseIsPressed){
  	translate(-width/2, width/2, 0);
      if(this.x > mouseX){
      	this.x = this.x -this.speed;
      }else if(this.x < mouseX){
      	this.x = this.x + this.speed;
      }
      if(this.y > mouseY){
      	this.y = this.y -this.speed;
      }else if(this.y < mouseY){
      	this.y = this.y + this.speed;
      }
  	}
  }



}