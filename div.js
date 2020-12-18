class Div{
    constructor(x,y){

        var op={
            restitution:0.8,
            friction:0.5,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,100,op)
        World.add(wo,this.body)
    }

    display(){
        var pos=this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,20,150)
    }
}