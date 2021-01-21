class Dustbin {
        constructor(x,y,width,height) {
          var options = {
              isStatic: true
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("blue");
          rect(pos.x, pos.y, this.width, this.height);
        }
      };

    /*boxPosition=width/2-100
 	boxY=610;


    boxleftSprite=createSprite(boxPosition+300, boxY+30, 20,100);
 	boxleftSprite.shapeColor=color("blue");

 	boxLeftBody = Bodies.rectangle(boxPosition+200, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+400, boxY+70, 200,20);
 	boxBase.shapeColor=color("blue");

 	boxBottomBody = Bodies.rectangle(boxPosition+300, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+500 , boxY+30, 20,100);
 	boxleftSprite.shapeColor=color("blue");

 	boxRightBody = Bodies.rectangle(boxPosition+400-20 , boxY, 20,100 , {isStatic:true} );
     World.add(world, boxRightBody);*/