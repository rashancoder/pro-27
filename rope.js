class rope{
    constructor(body1,body2,offsetX,offsetY){

    this.offsetX=offsetX
    this.offSetY 
    var options={
    bodyA: body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}
    }
    }
    this.rope=Constraint.create(options)
    world.add(world,this.rope)
}