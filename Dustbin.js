class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        this.image.scale = -5;
        //this.thickness = thickness;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        ///var angle = this.body.angle;
        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //rectMode(CENTER);
        fill("white");
        image(this.image,800, 250 , this.DustbinWidth, this.DustbinHeight);
        //pop();
    }
}