function setup() { 
  createCanvas(300, 500);
  background(231,205,163);
  noStroke();
  fill(240,233,221,130);
  beginShape();
  vertex(0,60);
  vertex(10,0);
  vertex(60,200);
  vertex(0,270);
  endShape();
  stroke(37,32,33);
  line(10,0,0,60);
  fill(247,205,66,180);
  beginShape();
  noStroke();
  vertex(10,50);
  vertex(30,20);
  vertex(45,50);
  endShape();
  fill(231,205,163);
  stroke(76,77,70);
  ellipse(55,60,20,20);
  ellipse(55,60,18,18);
  ellipse(55,60,15,15);
  fill(95,130,160);
  ellipse(55,60,10,10);
  
  line(90,0,90,77);
  line(86,0,86,77);
  line(78,3,98,3);
  line(78,5,98,5);
  line(78,74,98,74);
  line(78,72,98,72);
  line(78,70,98,70);
  
  noFill();
  stroke(29,23,27);
  ellipse(95,30,27,27);
  fill(239,202,116);
  rect(185,20,10,10);
  noStroke();
  fill(231,205,163);
  rect(95,12,35,35);
  stroke(76,77,70);
  line(70,115,0,70);
  line(70,115,0,90);
  ellipse(17,115,20,20);
  
  //figuras sobre el ojo
   //nubes
  strokeWeight(2);
  ellipse(13,215,40,40);
  ellipse(39,192,32,32);
  ellipse(63,172,30,30);
  ellipse(80,154,20,20);
  stroke(182,28,40,150);
  strokeWeight(3);
  ellipse(13,215,40,40);
  ellipse(39,192,32,32);
  ellipse(63,172,30,30);
  ellipse(80,154,20,20);
  strokeWeight(26);
  stroke(231,205,163);
  line(0,245,100,150);
  strokeWeight(1);
  stroke(29,23,27);
  line(30,205,83,160);
  strokeWeight(2);
  stroke(247,205,66,150);
  line(30,205,83,160);

  stroke(29,23,27);
  strokeWeight(3);
  line(16,148,0,170);
  line(16,148,110,220);
  stroke(139,157,112);
  line(17,152,0,173);
  line(17,153,113,222);
  strokeWeight(1);
  stroke(29,23,27);
  line(30,152,0,170);
  line(33,155,0,173);
  line(70,142,0,182);
  stroke(202,36,53,160);
  line(70,141,0,181);
  stroke(29,23,27);

  line(98,120,20,190);
  line(100,121,0,218);
  

 
  
   //PESCADO

  //blanco y café
  noStroke();
  fill(234,240,231);
  beginShape();
  vertex(102,110);
  vertex(300,10);
	vertex(310,20);
  vertex(225,100);
  vertex(230,115);
  vertex(167,147);
  vertex(175,171);
  vertex(250,130);
  vertex(250,110);
  vertex(170,159);
  vertex(160,160);
  vertex(155,150);
  vertex(134,164);
  vertex(142,160);
  vertex(162,200);
  vertex(125,222);
  vertex(95,180);
  vertex(134,164);
  endShape();
  fill(169,110,63);
  beginShape();
  vertex(155,209);
  vertex(215,335);
  vertex(143,213);
  endShape();
  noStroke();
  beginShape();
  vertex(155,209);
  vertex(208,300);
  vertex(162,203);
  endShape();
  
  
  //boca pescado
  //verticales 
  stroke(29,23,27);
  line(134,164,215,335);
  line(118,172,215,335);
  line(95,180,300,480);
  //horizontales
  line(95,180,134,164);
  line(104,193,148,175);
  line(112,205,154,185);
  line(119,214,159,194);
  line(125,222,167,200);
  noStroke();
  fill(71,80,61,150);
  beginShape();
  vertex(142,160);
  vertex(150,175);
  vertex(142,178);
  vertex(135,164);
  endShape();
  beginShape();
  vertex(142,178);
  vertex(125,184);
  vertex(132,198);
  vertex(146,188);
  endShape();
  beginShape();
  vertex(146,188);
  vertex(152,198);
  vertex(159,194);
  vertex(152,185);
  endShape();
  beginShape();
  vertex(152,198);
  vertex(137,205);
  vertex(143,215);
  vertex(154,207);
  endShape();
  beginShape();
  vertex(125,184);
  vertex(119,170);
  vertex(94,180);
  vertex(106,194);
  endShape();
  
  fill(30,25,28);
  beginShape();
  vertex(137,205);
  vertex(120,215);
  vertex(112,205);
  vertex(132,195);
  endShape();
  

  //cabeza pescado
  stroke(29,23,27);
  //líneas horizontales
  line(102,110,300,10);
  line(110,122,310,20);
  line(117,135,320,30);
  line(124,150,250,87);
  line(133,163,256,101);
  
  //líneas verticales
  line(102,110,208,300);
  line(115,105,208,300);
  line(128,98,230,295);
  line(141,91,230,295);
  beginShape();
  fill(207,124,71);
  vertex(170,159);
  vertex(230,295);
  vertex(160,160);
  endShape();
  
  //diagonal
  line(154,84,180,121);
  line(168,77,200,112);
  //cuadritos de relleno
  //carril 1
    //cuadro gris
  fill(71,80,61,100);
  beginShape();
  vertex(218,53);
  vertex(200,62);
  vertex(207,73);
  vertex(224,64);
  endShape();
  line(224,64,218,53);
  beginShape();
  vertex(256,33);
  vertex(261,45);
  vertex(275,38);
  vertex(270,25);
  endShape();
  beginShape();
  vertex(154,84);
  vertex(168,77);
	vertex(178,89);
  vertex(161,96);
  endShape();
     //rojo
  fill(173,31,31);
  beginShape();
  vertex(102,110);
  vertex(115,105);
  vertex(122,118);
  vertex(110,124);
  endShape();
  //carril 2
  fill(71,80,61,100);
  beginShape();
  vertex(118,135);
  vertex(128,131);
  vertex(122,118);
  vertex(110,124);
  endShape();
  //carril 3
  beginShape();
  vertex(180,122);
  vertex(200,112);
  vertex(187,99);
  vertex(171,108);
  endShape();
  fill(37,31,33);
  beginShape();
  vertex(273,56);
  vertex(285,48);
  vertex(293,62);
  vertex(280,69);
  endShape();
  beginShape();
  vertex(128,131);
  vertex(141,124);
  vertex(148,138);
  vertex(135,145);
  endShape();
  //carril 4
  beginShape();
  vertex(250,87);
  vertex(256,101);
  vertex(230,115);
  vertex(223,102);
  endShape();
   beginShape();
  vertex(142,160);
  vertex(134,164);
  vertex(126,150);
  vertex(135,145);
  endShape();
  //linea 5
  beginShape();
  fill(207,124,71);
  vertex(167,147);
  vertex(285,90);
  vertex(170,159);
  endShape();
  //linea 6
  line(175,171,250,130);
  fill(76,77,70);
  beginShape();
  vertex(250,130);
  vertex(260,150);
  vertex(240,160);
  vertex(230,141);
  endShape(CLOSE);
 
  //circulo verde
  //amarillo
  fill(237,178,77,70);
  ellipse(147,90,60,60);
  //naranja
  noStroke();
  fill(191,112,59,90);
  ellipse(160,90,60,60);
  //verde
  fill(172,197,147,100);
  ellipse(154,90,45,60);
  //circulo azul
  stroke(61,45,22);
  fill(226,204,114,150);
  ellipse(242,83,45,45);
  noStroke();
  fill(115,182,198,150);
  ellipse(242,83,35,35);
  //circulo lila
  fill(193,40,51,180);
  ellipse(253,130,38,38);
  fill(187,171,171,150);
  ellipse(250,130,35,35);
  //cuadro rojo punta grande
  fill(220,150,160,100);
  rect(88,95,50,40);
  //circulo blanco
  stroke(76,77,70);
  fill(234,240,231);
  ellipse(285,110,20,20);
  //circulo azul
  noStroke();
  fill(81,149,170,140);
  ellipse(170,220,50,50);
  //triqui
  //colores
  noStroke();
  fill(234,240,231);
  beginShape();
  vertex(250,205);
  vertex(270,205);
  vertex(270,225);
  vertex(250,225);
  endShape();
  beginShape();
  vertex(270,225);
  vertex(290,225);
  vertex(290,245);
  vertex(270,245);
  endShape();
  fill(177,77,65);
  beginShape();
  vertex(270,205);
  vertex(290,205);
  vertex(290,225);
  vertex(270,225);
  endShape();
  fill(223,182,152);
  beginShape();
  vertex(250,225);
  vertex(270,225);
  vertex(270,245);
  vertex(250,245);
  endShape();
  stroke(76,77,70);
  //verticales
  line(250,185,247,270);
  line(270,185,267,270);
  line(290,185,287,270);
  //horizontales
  line(230,205,300,205);
  line(230,225,300,225);
  line(230,245,300,245);
  //arcosblancos
  noFill();
  ellipse(20,320,50,50);
  ellipse(120,320,50,50);
  strokeWeight(2);
  stroke(197,83,35);
  ellipse(70,320,50,50);
  strokeWeight(3);
  stroke(246,217,120,150);
  ellipse(20,320,50,50);
  
  strokeWeight(25);
  stroke(231,205,163);
  line(0,333,155,333);
  
  //arcos de arriba para abajo 
  stroke(17,16,19);
  strokeWeight(1);
  fill(231,205,163);
  ellipse(0,370,60,60);
  ellipse(30,400,60,60);
  noStroke();
  rect(0,410,80,60);
  stroke(76,77,70);
  ellipse(70,430,60,60);
  noStroke();
  rect(38,435,70,60);
  

  //líneas de 3
  stroke(30,25,28);
  line(0,425,70,345);
  line(0,427,70,347);
  line(0,430,70,350);
  
  line(0,380,70,290);
  line(0,383,70,293);
  line(0,386,70,296);
  
  strokeWeight(5);
  line(0,350,290,130);
  
  //ojo
  strokeWeight(2);
  stroke(231,198,70);
  fill(227,227,233,130);
  ellipse(96,238,40,40);
  noFill();
  stroke(197,114,74);
  ellipse(96,238,50,50);
  
  
  //triangulo
  
  fill(174,120,61);
  noStroke();
  beginShape();
  vertex(0,250);
  vertex(66,210);
  vertex(84,275);
  vertex(0,275);
  endShape();
  fill(94,131,90);
  beginShape();
  vertex(66,210);
  vertex(80,201);
  vertex(110,275);
  vertex(84,275);
  endShape();
  //ojo
  strokeWeight(1);
  stroke(41,40,24);
  fill(231,222,207);
  ellipse(55,240,40,40);
  ellipse(55,240,30,30);
  fill(41,40,24);
  ellipse(59,238,6,6);
  ellipse(96,238,15,15);
  
  strokeWeight(10);
  stroke(94,131,90);
  line(82,222,93,250);
  //noStroke();
  //fill(231,222,207);
  //ellipse(96,238,15,15);

  
  //punta abajo
  strokeWeight(1);
  noStroke();
  fill(179,58,58);
  beginShape();
  vertex(62,243);
  vertex(71,253);
  vertex(68,255);
  endShape();
  fill(216,225,201);
  beginShape();
  vertex(71,254);
  vertex(80,267);
  vertex(75,270);
  vertex(68,255);
  endShape();
  fill(228,200,93);
  beginShape();
  vertex(80,267);
  vertex(100,300);
  vertex(96,310);
  vertex(75,270);
  endShape();
  
  //punta derecha
  fill(179,58,58);
  beginShape();
  vertex(60,233);
  vertex(66,222);
  vertex(68,226);
  endShape();
  fill(216,225,201);
  beginShape();
  vertex(66,222);
  vertex(71,216);
  vertex(76,217);
  vertex(68,226);
  endShape();
  fill(179,58,58);
  beginShape();
  vertex(71,216);
  vertex(79,208);
  vertex(82,210);
  vertex(76,217);
  endShape();
  fill(22,16,28);
  beginShape();
  vertex(81,204);
  vertex(95,184);
  vertex(98,187);
  vertex(84,206);
  endShape();
  
  //punta izquierda
  fill(179,58,58);
  beginShape();
  vertex(55,235);
  vertex(40,227);
  vertex(35,230);
  endShape();
  fill(59,53,50,200);
  beginShape();
  vertex(40,227);
  vertex(33,222);
  vertex(30,225);
  vertex(37,230);
  endShape();
  fill(179,58,58);
  beginShape();
  vertex(33,222);
  vertex(28,219);
  vertex(26,222);
  vertex(30,225);
  endShape();
  fill(59,53,50,200);
  beginShape();
  vertex(27,217);
  vertex(15,208);
  vertex(12,210);
  vertex(25,220);
  endShape();
 
  //del 300 al 500 (parte de abajo) de derecha a izq
  //circulomorado
  noStroke();
  fill(135,106,145,200);
  ellipse(110,370,40,40);
  fill(218,170,80,150);
  //triangulo
  noStroke();
  beginShape();
  vertex(180,320);
  vertex(190,380);
  vertex(140,370);
  endShape(CLOSE);
  //circulo verde
  fill(164,171,131,150);
  ellipse(190,400,60,60);
  stroke(76,77,70);
  fill(126,40,34);
  rect(215,415,30,30);
  line(230,430,260,430);
  line(230,435,260,435);
  line(100,415,180,415);
  line(60,370,165,370);
  line(130,450,10,0);
  line(0,320,179,320);
  
  stroke(30,25,28);
  strokeWeight(3);
  line(117,250,270,300);
  strokeWeight(2);
  line(60,280,200,400);
  
} 

function draw() { 
  background();
}