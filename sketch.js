var database
var food
var foodImg
var foodStock
var dog,happyDog,dogImge

function preload()
{
  dogImage=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
  foodImg=loadImage("milk.png")
}

function setup() {
  canvas = createCanvas(500,500);
  database = firebase.database();


  dog=createSprite(300,300,10,10)
  dog.scale=0.2
  dog.addImage(dogImage)

  food=createSprite(150,20,30,30)
  food.addImage(foodImg)
  food.scale=0.1
  


  foodStock=database.ref('food')
   foodStock.on("value",readStock)
  
}


function draw() {  
  background("green")

  if(keyWentDown(UP_ARROW)){
    writeStock(food)
    dog.addImage(dogHappy)
  }

  drawSprites();
  
  fill("white")
  text("food="+food,200,20)

}

function readStock(data){ 
  food=data.val();
 }

 function writeStock(x){
    if(x<=0){ 
      x=0;
     }
     else{ 
       x=x-1;
       } 
    database.ref('/').update({ 
      Food:x 
    }
    ) 
  }



