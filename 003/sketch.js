var x=0;
var y=0;
var x1=0;
var y1=0;
var x2=400;
var y2=0;
var y=3;
var tamx=30;
var tamy=30;
var dirx=1;
var diry=1;
var velx=5;
var vely=5;
var tiempo;
var velx1=2;
var dirx1=1;
var vely1=2;
var diry1=1;

function setup() { 
  createCanvas(400, 400);
  background(255,255,255);
  
} 

function draw() { 
  
  tiempo=millis();

  //círculos morados
  background(161,83,154);
  noStroke();
  fill(224,129,219);
  ellipse(200,200,x,y);
  x=x+(tamx*1);
  y=y+(tamy*1);
  //if(x==300 && y==300)
  //{
    //x=0;
    //y=0;
  //}
  
  
  //Diagonales verdes
  if((millis()>1000millis()==9000){
  fill(212,205,87);
  rect(x1, y1, tamx, tamy);
  x1 = x1 + (velx * dirx);
  y1= y1 + (vely * diry);
  tamx= tamx+5;
  tamy= tamy+5;
  
  fill(229,223,141);
  rect(x2, y2, tamx, tamy);
  x2 = x2 + (velx * -dirx);
  y2= y2 + (vely * diry);
  tamx= tamx+5;
  tamy= tamy+5;
  } 
  
  if(millis()<2000)
  {
   var cy1=200;
  for(var cx1=0; cx1<400; cx1=cx1+30){
 
    ellipse(cx1,cy1,20,20);
    
   }
  }
     
  
  //cuadricula

  //rombos
  if(millis()>2000&&millis()<8000)
  {
  fill(52,225,255);
  rect(0,20,400,50);
  var ry=45;
  for(var rx=0; rx<400; rx=rx+50){
   quad (rx,ry,rx+20,ry-20,rx+40,ry,rx+20,ry+20); 
    fill(255,226,93);
   }
  }
  //circulos
  if(millis()>2000&&millis()<8000)
  {
  fill(255,226,93);
  rect(0,100,400,50);
  var cy=100;
  for(var cx=0; cx<400; cx=cx+30){
    ellipse(cx,cy,20,20);
   }
  }
 



  
  

  

  
  
  
  
  
  
  
  
  
  
  
  
   
  
  //cuadros rojos 

  if(millis()>9000&&millis()<10000){
  for (var crx=0; crx<400; crx=crx+10)
  {
    for (var cry=0; cry<400; cry=cry+10)
    {
    noStroke();
    fill(248,88,68);
    rect(crx,cry,5,5);
    }
  }
  
  //cuadros blancos
  for (var cbx=0; cbx<450; cbx=cbx+40)
  {
    for (var cby=0; cby<450; cby=cby+40)
    {
    noStroke();
    fill(255,255,255);
    rect(cbx,cby,5,5);
    }
  }
  }
  
  if(millis()>10000&&millis()<12000){
    for (var cbx1=0; cbx1<450; cbx1=cbx1+40)
  {
    for (var cby1=0; cby1<450; cby1=cby1+40)
    {
    noStroke();
    fill(236,239,213);
    rect(cbx,cby,5,5);
    }
  }
  
  
  
  
  



  
}