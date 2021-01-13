class Tree{
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y);
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 400, 350);
        pop();
      }
}