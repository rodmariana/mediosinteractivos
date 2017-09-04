function setup() { 
  createCanvas(560, 130);
background(219,199,170);
  
  //sector verde
  noStroke();
  fill(157,170,148);
  rect(0,0,560,37);
  //IRQUIERDA
  //medios circulos izquierda linea 1 y 2

  for(var a=12; a<140; a=a+25)
      {
      fill(228,151,146);
      arc(a,18,28,30,PI,0,OPEN);
      }
  for(var a1=12; a1<140; a1=a1+25)
      {
      fill(225,103,76);
      arc(a1,35,28,30,PI,0,OPEN);
      }
  
   //linea 3 y 4 medios circulos
  noStroke();
  rect(0,35,152,15);
  fill(211,146,81);
  rect(0,48,152,15);
  for(var a2=12; a2<140; a2=a2+25)
      {
      fill(219,199,170);
      arc(a2,48,28,30,PI,0,OPEN);
      }
  for(var a3=12; a3<140; a3=a3+25)
      {
      fill(219,199,170);
      arc(a3,64,28,30,PI,0,OPEN);
      }
  //linea 5 
  fill(164,104,86,150);
  rect(0,60,152,5);
  fill(66,62,105);
  rect(0,64,152,15);
  for(var a4=12; a4<140; a4=a4+25)
      {
      fill(164,104,86);
      arc(a4,79,28,30,PI,0,OPEN);
      }
  //T izquierda
  //horizontales
  fill(34,23,33);
  rect(0,86,152,7);
  fill(189,85,57);
  rect(0,93,152,7);
  fill(144,127,145);
  rect(0,107,152,120);
  
  //verticales biege
  for(var a6=17; a6<130; a6=a6+50)
      {
      fill(219,199,170);
      rect(a6,80,10,120);
      }
  //verticales negras
  fill(34,23,33);
  for(var a7=42; a7<120; a7=a7+47)
      {
      rect(a7,78,10,152);
      }
  rect(142,78,10,152);
  fill(219,199,170);
  rect(0,98,152,9);
  


  
  
  
  
  
  //CENTRO
  //puntos linea 1
 
  fill(228,151,146);
  for(var b1=180; b1<280; b1=b1+50)
      {
      ellipse(b1,10,10,10);
      }
  for(var b2=275; b2<360; b2=b2+50)
      {
      ellipse(b2,10,10,10);
      }
   for(var b3=180; b3<280; b3=b3+50)
      {
      ellipse(b3,10,10,10);
      }
  for(var b4=275; b4<360; b4=b4+50)
      {
      ellipse(b4,10,10,10);
      }
  //puntos linea 2
  fill(205,77,52);

  for(var b5=180; b5<280; b5=b5+40)´
      {
      ellipse(b5,27,10,10);
      }
  for(var b6=275; b6<360; b6=b6+40)
      {
      ellipse(b6,27,10,10);
      }
   for(var b7=180; b7<280; b7=b7+40)
      {
      ellipse(b7,27,10,10);
      }
  for(var b8=8275; b8<360; b8=b8+40)
      {
      ellipse(b8,27,10,10);
      }


  //lineas rombos
  fill(225,103,76);
  rect(152,36,420,21);
  
  fill(180,141,131);
  rect(152,47,420,21);
  
  fill(164,104,86);
  rect(152,57,420,21);
  
  //primera linea rombos 
  noStroke();
  fill(211,146,81);
  var y = 47; 
  for( var x = 152; x < 420; x = x + 30 ) 
  {
  triangle ( x, y, x + 30, y, x + 15, y + 10 );
  }
  fill(219,199,170);
  var y = 47; 
  for( var x = 152; x < 420; x = x + 30 ) 
  {
  triangle ( x, y, x + 15, y - 10, x + 30, y);
  }

  
  //segunda linea rombos
  
  fill(66,62,105,200);
  var y = 67; 
  for( var x = 152; x < 420; x = x + 30 ) 
  {
  quad ( x, y, x + 15, y - 10, x + 30, y, x + 15, y + 10 );
  }
  

  
  //rectangulos morados
  rect(152,78,435,10);
  fill(192,122,118,150);
  rect(152,98,435,10);
  fill(66,62,105,100);
  rect(152,118,435,12);
  
  
  //rayas negras 
 stroke(34,23,33);
  var y = 95; 
  for( var x = 152; x < 420; x = x + 5 ) 
  {
  line(x,y,x+6,y-6);
  }
  //X rojas
 
stroke(143,50,48);
  var y=116;
  for( var x = 150; x < 420; x = x + 10 ) 
  {
  line(x,y,x+8,y-8);
  }
   for( var x = 157; x < 420; x = x + 10 ) 
  {
  line(x-8,y-8,x,y);
  }
  

  
    
  
    //DERECHA
 //medios circulos Linea 1 y 2
  noStroke();
  
  for(var c=435; c<570; c=c+25)
      {
      fill(228,151,146);
      arc(c,18,28,30,PI,0,OPEN);
      }
  for(var c1=435; c1<570; c1=c1+25)
      {
      fill(225,103,76);
      arc(c1,35,28,30,PI,0,OPEN);
      }
  rect(420,35,560,15);
  fill(211,146,81);
  rect(420,48,560,15);
  //linea 3 y 4
  for(var c2=435; c2<570; c2=c2+25)
      {
      fill(219,199,170);
      arc(c2,48,28,30,PI,0,OPEN);
      }
  for(var c3=435; c3<570; c3=c3+25)
      {
      fill(219,199,170);
      arc(c3,64,28,30,PI,0,OPEN);
      }
  
 //T derecha
  //horizontales
  fill(34,23,33);
  rect(420,86,560,7);
  fill(189,85,57);
  rect(420,93,560,7);
  fill(144,127,145);
  rect(420,107,560,120);
  
  //verticales biege
  for(var c5=445; c5<560; c5=c5+48)
      {
      fill(219,199,170);
      rect(c5,80,10,120);
      }
  //verticales negras
  fill(34,23,33);
  for(var c6=468; c6<560; c6=c6+47)
      {
      rect(c6,78,10,152);
      }
  rect(420,78,10,152);
  fill(219,199,170);
  rect(420,98,152,9);
 //linea 5 
  fill(164,104,86,150);
  rect(420,60,152,5);
  fill(66,62,105);
  rect(420,64,152,15);
  for(var c7=434; c7<560; c7=c7+25)
      {
      fill(164,104,86);
      arc(c7,79,28,30,PI,0,OPEN);
      }
  
  
  
  

  
  
}


 