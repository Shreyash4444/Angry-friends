class Modi {
    constructor(x,y,width,height){
        var options = {
            isStatic: true 
    }
  
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/modi.png");

}

modi_display(){
image(this.image,this.x,this.y);

}

  
  };
  