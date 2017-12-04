//variable para guardar la bola
var persona;
//variable para guardar la zanahoria
var comida;
//variable para guardar el aguacate 
var comidamala;
//puntaje
var puntos = 0;

function setup() {

  //crea un canvas del tamano de la ventana

  createCanvas(windowWidth, windowHeight);

  //crea un objeto de la funcion bola
  persona = new usuario();
  comida = new comida1();
  comidamala = new aguacate();

}

function draw() {

  //JUEGO
  background(325, 162, 157);
  //imprimo valores predererminados de rotación
  textSize(80);
  fill(255, 255, 255);
  text("Puntos: " + puntos, 80, 100);
  //text("Y: " + floor(rotationX), 20, 20);

  //Muestra y mueve el usuario
  persona.dibujarse();
  persona.mover();

  //muestra zanahoria
  comida.dibujarse();
  comidamala.dibujarse();

  //distancia entre el usuario y la zanahoria
  //¿La toca?
  print(dist(persona.x, persona.y, comidamala.x, comidamala.y));
  if (dist(persona.x, persona.y, comida.x, comida.y) < persona.tamano / 2 + comida.tamano / 2) {
    comida.morir();
    puntos = puntos + 1;

    //Crece con tamano comida
    //persona.crecer(comida.tamano);
  } else if (dist(persona.x, persona.y, comidamala.x, comidamala.y) < persona.tamano / 2 + comidamala.tamano / 2) {
    comidamala.morir();
    puntos = puntos - 1;

    //Disminuye con tamaño comida mala
    //persona.crecer(aguacate.tamano);
  }

}


function usuario() {
  //Posición respecto a la ventana 
  this.x = width / 2;
  this.y = height / 2;
  this.tamano = 80;
  //vel en 0
  this.velx = 0;
  this.vely = 0;
  // se dibuja el usuario
  noStroke();
  this.dibujarse = function() {
    fill(0, 0, 255);
    //ellipse(this.x, this.y, this.tamano, this.tamano);
    //Oreja izquierda
    fill(161, 161, 159);
    ellipse(this.x - 10, this.y - 80, this.tamano - 50, this.tamano + 120);
    fill(195, 198, 203);
    ellipse(this.x - 10, this.y - 45, this.tamano - 50, this.tamano + 100);
    //oreja derecha
    fill(161, 161, 159);
    ellipse(this.x + 30, this.y - 80, this.tamano - 50, this.tamano + 120);
    fill(195, 198, 203);
    ellipse(this.x + 30, this.y - 50, this.tamano - 50, this.tamano + 100);
    //cabeza
    fill(161, 161, 159);
    ellipse(this.x + 2, this.y + 3, this.tamano + 50, this.tamano + 50);
    //ojos izq
    strokeWeight(5);
    stroke(0, 0, 0);
    point(this.x, this.y);
    //ojos dere
    point(this.x + 8, this.y);


  }
  //se mueve el usuario 
  this.mover = function() {

    //movimiento, posición y velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //rotación
    this.vely = map(rotationX, -90, 90, -3, 3);
    this.velx = map(rotationY, -90, 50, -3, 3);

    //límites
    this.x = constrain(this.x, this.tamano / 2, width - this.tamano / 2);
    this.y = constrain(this.y, this.tamano / 2, height - this.tamano / 2);
  }


}

function comida1() {

  //tamaño y posicion de la ventana
  //this.tamano = random(10, windowWidth / 10);
  this.tamano = 50;
  this.x = random(this.tamano / 2, width - this.tamano / 2);
  this.y = random(this.tamano / 2, height - this.tamano / 2);
  //se dibuja la zanahoria
  this.dibujarse = function() {


    fill(255, 0, 0);
    //dibujo zanahoria 
    noStroke();
    //hojitas
    fill(102, 136, 34);
    ellipse(this.x - 15, this.y - 80, 26, 50);
    ellipse(this.x + 8, this.y - 80, 26, 50);
    //cuerpo
    fill(253, 139, 37);
    triangle(this.x, this.y + 20, this.x - 45, this.y - 70, this.x + 45, this.y - 70);
  }


  //funcion morir: 
  this.morir = function() {
    this.x = random(this.tamano / 2, width - this.tamano / 2);
    this.y = random(this.tamano / 2, height - this.tamano / 2);
  }

}


function aguacate() {
  //tamaño y posicion de la ventana
  this.tamano = 50;
  this.x = random(this.tamano / 2, width - this.tamano / 2);
  this.y = random(this.tamano / 2, height - this.tamano / 2);
  //se dibuja el aguacate
  this.dibujarse = function() {
    //aguacate cuerpo
    fill(201, 210, 97);
    ellipse(this.x, this.y, this.tamano, this.tamano);
    ellipse(this.x - 10, this.y - 10, this.tamano - 10, this.tamano - 10);
  }
  
  //funcion morir: 
  this.morir = function() {
    this.x = random(this.tamano / 2, width - this.tamano / 2);
    this.y = random(this.tamano / 2, height - this.tamano / 2);
  }
}