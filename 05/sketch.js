function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255,253,75);


  //declaración de variables tiempo
  var segundo = second();
  var minuto = minute();

  
  var segundero = map (segundo, 0,59,0,359);
  var minutero = map (minuto, 0, 59, 0,359);

  
  //segundos
  push ();
  translate (200,200);
  rotate (segundero);
  strokeWeight(30);
  fill(0,0,0);
  //ojos felices
  point (100, 0);
  point (-60, 110);
  //ojos tristes
  point (50, -60);
  point (-110, 50);
  //boca
  noStroke();
  arc(20, 0, 200, 200, 1000, PI+QUARTER_PI, OPEN);
  pop();
  
  //minutos
  push ();
  if (segundero==59){
  fill(255,0,0);
  noStroke();
  ellipse(230, 260,50,50);
  ellipse(200, 260,50,50);
  }
  pop();
  
  
  //horas
  push();
  if(minutero==59){
  translate (200,200);
  rotate (horass);
  noFill();
  ellipse(-10, -10,300,300); 
  }
  pop();
  


  
}