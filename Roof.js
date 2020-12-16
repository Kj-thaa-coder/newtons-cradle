class Roof{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true
    
    }
this.x=x;
this.y=y;
this.width = width
this.height = height
this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
World.add(world, this.body);

}
display()
{
    var roofpos=this.body.position;

    push()
    translate(roofpos.x, roofpos.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(3);
    fill("darkgray")
    rect(roofpos.x,roofpos.y,this.width,this.height);
    pop()
    }


}