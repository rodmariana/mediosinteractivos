//variables imagenes
var img;
var img1;

x=0;
y=0;

//variables botones

var boton1x = 0;
var boton1y = 0;
var boton1tam = 40;

var boton2x = 0;
var boton2y = 40;
var boton2tam = 40;

var boton3x = 0;
var boton3y = 80;
var boton3tam = 40;

var filtro = 1;
var filtro = 2;
var filtro = 3;

//cargar imagenes
function preload() {
  img = loadImage("imagen/flores.jpg");
  //marcoMask = loadImage("imagen/marco.png");
  img1 = loadImage("imagen/azul.png");
}


function setup() {
  createCanvas(400, 500);


}



function draw() {

  background(220);

  rect(boton1x, boton1y, boton1tam, boton1tam);
  rect(boton2x, boton2y, boton2tam, boton2tam);
  rect(boton3x, boton3y, boton3tam, boton3tam);

  //seleccion de filtro
  if (mouseIsPressed) {

    if (mouseX > boton1x && mouseX < boton1x + boton1tam && mouseY > boton1y && mouseY < boton1y + boton1tam) {
      filtro = 1;
    } else if (mouseX > boton2x && mouseX < boton2x + boton2tam && mouseY > boton2y && mouseY < boton2y + boton2tam) {
      filtro = 2;
    } else if (mouseX > boton3x && mouseX < boton3x + boton3tam && mouseY > boton3y && mouseY < boton3y + boton3tam) {
      filtro = 3;
    }
  } else {
    //filtro 1: Marco
    if (filtro == 1) {
     img.mask(img1);
      image(img, 0,0);
    }
    //filtro 2: Nitidez
    if (filtro == 2) {
      image(img, 0, 0);
      filter(BLUR, 3);
    }
    //filtro 3: 
    if (filtro == 3) {
      //obtencion de cada pixel 
      img.loadPixels();
      var pix = img.get(mouseX, mouseY);
      print(pix);
      var miRojo = pix[0];
      var miVerde = pix[1];
      var miAzul = pix[2];
      var miTrans = pix[3];
      pix[0] = 0;
      img.set(mouseX,mouseY,pix);
  img.updatePixels();
  
  x=x+1;
  if( x>1000){
    x=0;
    y=y+1;
  }
    

    }
  }


}