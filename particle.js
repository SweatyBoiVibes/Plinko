class Particle{
    constructor(x,y){

        var op={
            restitution:0.8,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,5,op)
        World.add(wo,this.body)
    }

    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,5)
    }
}