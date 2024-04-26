//espec bola
let xBola = 50;
let yBola = 50;
let diametro = 20
let raio = diametro / 2;
let xVelocidade = 5;
let yVelocidade = 5;

//vel bola
function setup() {
  createCanvas(600, 400);
}

//espec raq
let xRaq = 5;
let yRaq = 150;
let dRaq = 8;
let aRaq = 70;

//espec raq op
let xRaqop = 585;
let yRaqop = 150;
let velRaqop

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

  function draw() {
  background(0);
  mostBola();
  movBola();
  vcb();
  raq();
  movRaq();
  vcr();
  raqop();
  movRaqop();
  cmr();
  incluiPlacar();
  marcaPonto();
}

  function mostBola (){
  circle(xBola, yBola, diametro)
}

  function movBola (){
  xBola += xVelocidade;
  yBola += yVelocidade;
}

  function vcb (){
    if (xBola + raio > width || xBola - raio < 1){
    xVelocidade *= -1;
    }
  
  if (yBola + raio > height || yBola - raio < 1){
    yVelocidade *= -1;
    }
}

  function cmr(){
    col = 
    collideRectCircle(xRaq, yRaq, dRaq, aRaq, xBola, yBola, raio);
    if (col){
      xVelocidade *= -1;
    }
  }

  function cmr(){
    col = 
    collideRectCircle(xRaqop, yRaqop, dRaq, aRaq, xBola, yBola, raio);
    if (col){
      xVelocidade *= -1;
    }
  }

  function raq(){
    rect(xRaq, yRaq, dRaq, aRaq);
  }

  function raqop(){
    rect(xRaqop, yRaqop, dRaq, aRaq);
  }


  function movRaq(){
    if (keyIsDown(87)){
      yRaq -= 10;
    }
    if (keyIsDown(83)){
      yRaq += 10;
    }
  }

  function vcr(){
    if (xBola - raio < xRaq + dRaq && yBola - raio < yRaq + aRaq && yBola + raio > yRaq){
      xVelocidade *= -1;
    }
  }

  function movRaqop(){
    if (keyIsDown(UP_ARROW)){
      yRaqop -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
      yRaqop += 10;
    }
}

function incluiPlacar(){
  textSize(16)
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

function marcaPonto() {
  if (xBola > 590){
    meusPontos += 1;
  }
  if (xBola < 15){
    pontosDoOponente += 1;
  }
}
