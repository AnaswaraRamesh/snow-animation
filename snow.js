class Snow {
    constructor(x, y, r) {
        var options={
			isStatic:false,
			friction:10,
			density:0.8,
            gravity: 0.01
			
			}
        
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.x =x ;
        this.y = y;
        this.image = loadImage("Snow.png");
       
        World.add(world, this.body);
    }
    display() {
       // var pos = this.body.position;
       
        ellipseMode(CENTER);
       imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y,this.r,this.r)
    }
};