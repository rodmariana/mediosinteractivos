function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255,253,75);


  //declaración de variables tiempo
  var segundo = second();
  var minuto = minute();
  var hora = hour();

  
  var segundero = map (segundo, 0,59,0,359);
  var minutero = map (minuto, 0, 59, 0,359);
  var horass = map (hora, 0,59, 0, 359);
  
  
  //segundos
  push ();
  translate (200,200);
  rotate (segundero);
  strokeWeight(30);
  fill(0,0,0);
  //ojos arribas
  point (100, 0);
  point (-60, 110);
  //ojos abajo
  point (50, -60);
  point (-110, 50);
  //boca
  noStroke();
  arc(20, 0, 200, 200, 1000, PI+QUARTER_PI, OPEN);
  pop();
  
  //minutos
  push ();
  if (segundero==60){
  fill(255,0,0);
  noStroke();
  ellipse(230, 260,50,50);
  ellipse(200, 260,50,50);
  }
  pop();
  
  //horas
  push();
  translate (200,200);
  rotate (horass);
  pop();
  


  
}