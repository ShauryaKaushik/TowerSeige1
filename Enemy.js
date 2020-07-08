class Enemy {
    constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,100,100,options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("lavaBall.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      image(this.image,0,0,this.width,this.height); 
      pop();
    }
  };                                                                 
