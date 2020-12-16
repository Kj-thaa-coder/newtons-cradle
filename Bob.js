class Bob{

    constructor(x,y,r)
    {
        var options={
            restitution:1.0,
            friction:0,
            density:1.8
    
    }

this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x, this.y, this.r, options)
World.add(world, this.body);

}
display()
{
    var bobpos=this.body.position;

    push()
    translate(bobpos.x, bobpos.y);
    // rotate(this.body.angle)
    ellipseMode(RADIUS)
    strokeWeight(3);
    fill("lightsilver")
    ellipse(0,0,this.r, this.r);
    pop()
    }


}