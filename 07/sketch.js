//declaro todas las especies 
var losPollos = [];
var numPollos = 4;

var lasGallinas = [];
var numGallinas = 5;

var losMarranos = [];
var numMarranos = 30;

var lasVacas = [];
var numVacas = 30;

var elPasto = [];
var numPasto = 200;

var pollo;

function setup() {

  createCanvas(600, 600);


  pollo = new Pollo();

  for (var i = 0; i < numPollos; i = i + 1) {
    losPollos[i] = new Pollo();
  }
  for (var f = 0; f < numGallinas; f = f + 1) {
    lasGallinas[f] = new Gallina();
  }
  for (var g = 0; g < numMarranos; g = g + 1) {
    losMarranos[g] = new Marrano();
  }

  for (var h = 0; h < numVacas; h = h + 1) {
    lasVacas[h] = new Vaca();
  }
  for (var j = 0; j < numPasto; j = j + 1) {
    elPasto[j] = new Pasto();
  }

}

function draw() {
  background(255);

  //creo cada animal de cada familia
  for (var i = 0; i < numPollos; i = i + 1) {
    losPollos[i].dibujarse();
    losPollos[i].moverse();
  }
  for (var f = 0; f < numGallinas; f = f + 1) {
    lasGallinas[f].dibujarse();
    lasGallinas[f].moverse();
  }
  for (var g = 0; g < numMarranos; g = g + 1) {
    losMarranos[g].dibujarse();
    losMarranos[g].moverse();
  }
  for (var h = 0; h < numVacas; h = h + 1) {
    lasVacas[h].dibujarse();
    lasVacas[h].moverse();
  }
  for (var j = 0; j < numPasto; j = j + 1) {
    elPasto[j].dibujarse();
  }

  //Vaca come pasto
  //Mido la distancia de la vaca y el pasto para que la vaca se coma el pasto
  for (var j = 0; j < numVacas; j = j + 1) {
    for (var h = 0; h < numPasto; h = h + 1) {
      var distCentro = dist(lasVacas[j].x, lasVacas[j].y, elPasto[h].x, elPasto[h].y);
      if (distCentro < lasVacas[j].tamano / 2) {
        elPasto[h].morir();
      }
    }
  }

  //se unen pollo y gallina
  //se hace una nueva gallina negra
 
    for (var j = 0; j < numGallinas; j = j + 1) {
      for (var h = 0; h < numPollos; h = h + 1) {
        var distcentro = dist(losPollos[h].x, losPollos[h].y, lasGallinas[j].x, lasGallinas[j].y);
        if (distcentro < losPollos[h].tamano) {
          fill(0);
          numGallinas++;
          lasGallinas[lasGallinas.length] = new Gallina();
          print(numGallinas);
        }
      }
    
  }

}

//el pollo y la gallina se vuelven una gallina negra 

function Pollo() {

  //caracteristicas de los pollos
  this.x = random(0, width);
  this.y = random(0, height);
  this.morir = true;
  this.tamano = 30;

  //se dibuja cada pollo
  this.dibujarse = function() {
    fill(254, 243, 120);
    ellipse(this.x, this.y, this.tamano, this.tamano);
  }
  // se mueven las gallinas
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  //las gallinas amarillas se mueren cuando se encuentran con un pollo
  //hacen nueva gallina negra
  this.morir = function() {
    this.viva = false;
  }

}

function Gallina() {

  //caracteristicas de las gallinas
  this.x = random(0, width);
  this.y = random(0, height);
  this.morir = true;
  this.tamano = 10;

  //se dibujan las gallinas
  this.dibujarse = function() {

    fill(253, 177, 47);
    line(this.x, this.y - this.tamano, this.x, this.y + this.tamano);
    rect(this.x + 5, this.y - 5, this.tamano + 7, this.tamano);

  }
  //Se mueren para hacer gallinas nuevas
  this.morir = function() {
    this.viva = false;
  }
  //las gallinas de mueven  
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

//el marrano no hace nada
function Marrano() {
  //caracteristicas d elos marranos
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 60;
  //se dibujan los marranos
  this.dibujarse = function() {
    fill(253, 151, 154);
    ellipse(this.x, this.y, this.tamano, this.tamano);
  }
  //se mueven los marranos 
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

}

//la vaca come pasto
function Vaca() {
  //caracteristicas de la vaca 
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 80;
  //se dibujan las vacas 
  this.dibujarse = function() {
    fill(0);
    ellipse(this.x, this.y, this.tamano, this.tamano);
  }


  //predador del pasto
  //se mueven las vacas
  this.moverse = function() {
  this.x = this.x + random(-1, 1);
  this.y = this.y + random(-1, 1);
  }

}

//la vaca se come el pasto

function Pasto() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 5;
  this.viva = true;

  //el pasto solo se dibuja y no se mueve 
  this.dibujarse = function() {
    if (this.viva == true) {
      fill(102, 136, 34);
      ellipse(this.x, this.y, this.tamano, this.tamano);
    }
  }
  //el pasto es comido por la vaca 
  this.morir = function() {
    this.viva = false;
  }

}