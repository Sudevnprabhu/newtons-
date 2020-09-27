class Bob {
    constructor(x,y, radius){    
    var options ={
        isStatic: false,
        restitution: 0.9,
        friction: 1.0,
        density: 1.2
     }
     this.x =x;
     this.y=y;
     this.radius=radius;
     this.body = Bodies.circle(this.x,this.y,(this.radius)/2, options);
     World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4)
    stroke("yellow");
    fill("purple");
    ellipse(0,0, this.radius,this.radius);
    pop();
  }
};



/*class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.9,
			friction:1.0,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
    
	}
	display()
	{
			
			var pos=this.body.position;		

			push();
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(3);
			stroke("red");
            //fill(255,0,255)
            fill("purple");
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop();
			
	}

}*/









