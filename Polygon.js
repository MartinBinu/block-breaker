class Polygon{

   constructor(x,y){

      var options = {
          'friction': 0.6,
          'restitution': 1,
          'density': 0.6 
      }
   
      this.body = Bodies.polygon(x,y,5,20,options);
      this.sides = 5;
      this.radius = 20;

      World.add(world,this.body);

   }

   display(){
       
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(this.body.angle);
       fill("yellow");
       polygon(0,0,20,3);
       pop();

   }

}