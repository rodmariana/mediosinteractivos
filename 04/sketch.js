var boton1x = 0;
var boton1y = 0;
var boton1tam = 40;

var boton2x = 0;
var boton2y = 40;
var boton2tam = 40;

var boton3x = 0;
var boton3y = 80;
var boton3tam = 40;

var boton4x = 0;
var boton4y = 120;
var boton4tam = 40;

var boton5x = 0;
var boton5y = 160;
var boton5tam = 40;

var boton6x = 0;
var boton6y = 200;
var boton6tam = 40;

var boton7x = 0;
var boton7y = 240;
var boton7tam = 40;

var boton8x = 0;
var boton8y = 280;
var boton8tam = 40;

var boton9x = 0;
var boton9y = 320;
var boton9tam = 40;

var boton10x = 0;
var boton10y = 360;
var boton10tam = 40;

var boton11x = 40;
var boton11y = 0;
var boton11tam = 40;

var boton12x = 40;
var boton12y = 40;
var boton12tam = 40;

var boton13x = 40;
var boton13y = 80;
var boton13tam = 40;

var boton14x = 40;
var boton14y = 120;
var boton14tam = 40;

var boton15x = 40;
var boton15y = 160;
var boton15tam = 40;

var boton16x = 40;
var boton16y = 200;
var boton16tam = 40;

var boton17x = 40;
var boton17y = 240;
var boton17tam = 40;

var boton18x = 40;
var boton18y = 280;
var boton18tam = 40;

var boton19x = 40;
var boton19y = 320;
var boton19tam = 40;

var boton20x = 40;
var boton20y = 360;
var boton20tam = 40;

var boton21x = 0;
var boton21y = 410;
var boton21tam = 40;


var herramienta = 1;
var herramienta = 2;
var herramienta = 3;
var herramienta = 4;
var herramienta = 5;
var herramienta = 6;
var herramienta = 7;
var herramienta = 8;




var colorSelect = 11;
var colorSelect = 12;
var colorSelect = 13;
var colorSelect = 14;
var colorSelect = 15;
var colorSelect = 16;
var colorSelect = 17;
var colorSelect = 18;
var colorSelect = 19;
var colorSelect = 20;

var tamano = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

}

function draw() {
  rect(boton1x, boton1y, boton1tam, boton1tam);
  rect(boton2x, boton2y, boton2tam, boton2tam);
  rect(boton3x, boton3y, boton3tam, boton3tam);
  rect(boton4x, boton4y, boton4tam, boton4tam);
  rect(boton5x, boton5y, boton5tam, boton5tam);
  rect(boton6x, boton6y, boton6tam, boton6tam);
  rect(boton7x, boton7y, boton7tam, boton7tam);
  rect(boton8x, boton8y, boton8tam, boton8tam);
  rect(boton9x, boton9y, boton9tam, boton9tam);
  rect(boton10x, boton10y, boton10tam, boton10tam);
  fill(255, 255, 255);
  rect(boton11x, boton11y, boton11tam, boton11tam);
  fill(255, 50, 20);
  rect(boton12x, boton12y, boton12tam, boton12tam);
  fill(14, 201, 253);
  rect(boton13x, boton13y, boton13tam, boton13tam);
  fill(255, 90, 159);
  rect(boton14x, boton14y, boton14tam, boton14tam);
  fill(217,227,51);
  rect(boton15x, boton15y, boton15tam, boton15tam);
  fill(252, 192, 79);
  rect(boton16x, boton16y, boton16tam, boton16tam);
  fill(253, 107, 48);
  rect(boton17x, boton17y, boton17tam, boton17tam);
  fill(1, 242, 234);
  rect(boton18x, boton18y, boton18tam, boton18tam);
  fill(250, 78, 242);
  rect(boton19x, boton19y, boton19tam, boton19tam);
  fill(0, 136, 209);
  rect(boton20x, boton20y, boton20tam, boton20tam);
  fill(0, 0, 0);
  rect(boton21x, boton21y, boton21tam, boton21tam);
if (mouseIsPressed) {
//botones

 
    //HERRAMIENTAS
    //lineas
    if (mouseX > boton1x && mouseX < boton1x + boton1tam && mouseY > boton1y && mouseY < boton1y + boton1tam) {
      herramienta = 1;
      //triangulo
    } else if (mouseX > boton2x && mouseX < boton2x + boton2tam && mouseY > boton2y && mouseY < boton2y + boton2tam) {
      herramienta = 2;
    } else if (mouseX > boton3x && mouseX < boton3x + boton3tam && mouseY > boton3y && mouseY < boton3y + boton3tam) {
      herramienta = 3;
    } else if (mouseX > boton4x && mouseX < boton4x + boton4tam && mouseY > boton4y && mouseY < boton4y + boton4tam) {
      herramienta = 4;
    } else if (mouseX > boton5x && mouseX < boton5x + boton5tam && mouseY > boton5y && mouseY < boton5y + boton5tam) {
      herramienta = 5;
    } else if (mouseX > boton6x && mouseX < boton6x + boton6tam && mouseY > boton6y && mouseY < boton6y + boton6tam) {
      herramienta = 6;
    } else if (mouseX > boton7x && mouseX < boton7x + boton7tam && mouseY > boton7y && mouseY < boton7y + boton7tam) {
      herramienta = 7;
    } else if (mouseX > boton9x && mouseX < boton9x + boton9tam && mouseY > boton9y && mouseY < boton9y + boton9tam) {
      tamano++;
    } else if (mouseX > boton10x && mouseX < boton10x + boton10tam && mouseY > boton10y && mouseY < boton10y + boton10tam) {
      tamano--;

      //COLORES 
    } else if (mouseX > boton11x && mouseX < boton11x + boton11tam && mouseY > boton12y && mouseY < boton12y + boton12tam) {
      colorSelect = 11;
    } else if (mouseX > boton12x && mouseX < boton12x + boton12tam && mouseY > boton12y && mouseY < boton12y + boton12tam) {
      colorSelect = 12;
    } else if (mouseX > boton13x && mouseX < boton13x + boton13tam && mouseY > boton13y && mouseY < boton13y + boton13tam) {
      colorSelect = 13;
    } else if (mouseX > boton14x && mouseX < boton14x + boton14tam && mouseY > boton14y && mouseY < boton14y + boton14tam) {
      colorSelect = 14;
    } else if (mouseX > boton15x && mouseX < boton15x + boton15tam && mouseY > boton15y && mouseY < boton15y + boton15tam) {
      colorSelect = 15;
    } else if (mouseX > boton16x && mouseX < boton16x + boton16tam && mouseY > boton16y && mouseY < boton16y + boton16tam) {} else if (mouseX > boton17x && mouseX < boton17x + boton17tam && mouseY > boton17y && mouseY < boton17y + boton17tam) {
      colorSelect = 16;
    } else if (mouseX > boton17x && mouseX < boton17x + boton17tam && mouseY > boton17y && mouseY < boton17y + boton17tam) {
      colorSelect = 17;
    } else if (mouseX > boton18x && mouseX < boton18x + boton18tam && mouseY > boton18y && mouseY < boton18y + boton18tam) {
      colorSelect = 18;
    } else if (mouseX > boton19x && mouseX < boton19x + boton19tam && mouseY > boton19y && mouseY < boton19y + boton19tam) {
      colorSelect = 19;
    } else if (mouseX > boton20x && mouseX < boton20x + boton20tam && mouseY > boton20y && mouseY < boton20y + boton20tam) {
      colorSelect = 20;

      //BORRADOR
    } else if (mouseX > boton21x && mouseX < boton21x + boton21tam && mouseY > boton21y && mouseY < boton21y + boton21tam) {
      background(255, 255, 255);


    } else {

      if (herramienta == 1) {
        //rect(mouseX - 10, mouseY - 10, tamano, tamano);
        quad(mouseX + 10, mouseY, mouseX, mouseY - 10, tamano, tamano, mouseX - 10, mouseY);
      }
      if (herramienta == 2) {
        
      }
      if (herramienta == 3) {
        quad(mouseX + 10, mouseY, tamano, tamano, mouseX, mouseY - 10, mouseX - 10, mouseY);
      }
      if (herramienta == 4) {
        line(mouseX, mouseY, tamano, tamano);
        ellipse(mouseX - 10, mouseY - 10, tamano, tamano);
      }
      if (herramienta == 5) {
        quad(mouseX - 10, mouseY - 10, mouseX - 10, mouseY - 10, mouseX - 10, mouseY - 10, tamano, tamano);
      }
      if (herramienta == 6) {
        ellipse(mouseX - 10, mouseY - 10, tamano, tamano);
      }
      if (herramienta == 7) {
        quad(mouseX - 10, mouseY - 10, mouseX - 10, mouseY - 10, mouseX - 10, mouseY - 10, tamano, tamano);
      }
      if (herramienta == 8) {
        ellipse(mouseX - 10, mouseY - 10, tamano, tamano);
      }
    


      if (colorSelect == 11) {
        fill(255, 255, 255);
        stroke(255, 255, 255);
      }

      if (colorSelect == 12) {
        fill(255, 50, 20);
        stroke(255, 50, 20);
      }
      if (colorSelect == 13) {
        fill(14, 201, 253);
        stroke(14, 201, 253);
      }

      if (colorSelect == 14) {
        fill(255, 90, 159);
        stroke(255, 90, 159);
      }
      if (colorSelect == 15) {
        fill(217, 227, 51);
        stroke(217, 227, 51);
      }

      if (colorSelect == 16) {
        fill(252, 192, 79);
        stroke(252, 192, 79);
      }
      if (colorSelect == 17) {
        fill(253, 107, 48);
        stroke(253, 107, 48);
      }
      if (colorSelect == 18) {
        fill(1, 242, 234);
        stroke(1, 242, 234);
      }
      if (colorSelect == 19) {
        fill(250, 78, 242);
        stroke(250, 78, 242);
      }
      if (colorSelect == 20) {
        fill(0, 136, 209);
        stroke(0, 136, 209);
      }

      if (tamano < 0) {
        tamano = 0;
      }



    }

  }

}