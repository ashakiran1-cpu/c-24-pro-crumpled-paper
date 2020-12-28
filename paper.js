class Paper{
    constructor(){
        this.body=Bodies.circle(70,360,20,{isStatic:false,restitution:0.3,density:1.2,friction:0.5});
        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        fill("white")
        ellipse(this.body.position.x, this.body.position.y,20,20)
    }
}