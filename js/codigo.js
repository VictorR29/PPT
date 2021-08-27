const piedraBtn = document.querySelector(".piedra");
const papelBtn = document.querySelector(".papel");
const tijeraBtn = document.querySelector(".tijera");

const piedraPc = document.getElementById("piedraPc");
const papelPc = document.getElementById("papelPc");
const tijeraPc = document.getElementById("tijeraPc");

const miJugada = document.querySelector(".partida");
const jugadaPc = document.querySelector(".partidaPc");

let misPuntos = document.querySelector(".puntos");
let puntosPc = document.querySelector(".puntosPc");

const rock = 0;
const paper = 1;
const scissors = 2;

alert("Gana el primero en conseguir 5 puntos");

piedraBtn.addEventListener("click",()=>{
  jugada(rock);
});
papelBtn.addEventListener("click",()=>{
  jugada(paper);
});
tijeraBtn.addEventListener("click",()=>{
  jugada(scissors);
});

function jugada(eleccion) {
  const pc = aleatorio(0,2);
  const resultado = posibilidades(eleccion,pc);
};

function posibilidades(eleccion, pc) {
  if(eleccion === pc) {
    ;
    miJugada.innerHTML = "Empate";
    jugadaPc.innerHTML = "Empate";
    if(eleccion == rock && pc == rock){
      añadirClase(piedraPc);
      removerClase(papelPc);
      removerClase(tijeraPc);
    }
    else if(eleccion == paper && pc == paper) {
      añadirClase(papelPc);
      removerClase(tijeraPc);
      removerClase(piedraPc);
    }
    else if(eleccion == scissors && pc == scissors) {
      añadirClase(tijeraPc);
      removerClase(piedraPc);
      removerClase(papelPc);
    }
  }

  else if(eleccion == rock) {
    removerClase(piedraPc);
    if(pc == scissors) {
      miJugada.innerHTML = "Ganas";
      jugadaPc.innerHTML = "Pierdes";
      añadirClase(tijeraPc);
      removerClase(papelPc);
      sumarPuntosPlayer();
      restarPuntosPc();
    }
    else if(pc == paper) {
      miJugada.innerHTML = "Pierdes";
      jugadaPc.innerHTML = "Ganas";
      añadirClase(papelPc);
      removerClase(tijeraPc);
      sumarPuntosPc();
      restarPuntosPlayer();
    };
  }

  else if(eleccion == paper) {
    removerClase(papelPc);
    if(pc == rock) {
      miJugada.innerHTML = "Ganas";
      jugadaPc.innerHTML = "Pierdes";
      añadirClase(piedraPc);
      removerClase(tijeraPc);
      sumarPuntosPlayer();
      restarPuntosPc();
    }
    else if(pc == scissors) {
      miJugada.innerHTML = "Pierdes";
      jugadaPc.innerHTML = "Ganas";
      añadirClase(tijeraPc),
      removerClase(piedraPc);
      sumarPuntosPc();
      restarPuntosPlayer();
    };
  }

  else if(eleccion == scissors) {
    removerClase(tijeraPc);
    if(pc == paper) {
      miJugada.innerHTML = "Ganas";
      jugadaPc.innerHTML = "Pierdes";
      añadirClase(papelPc);
      removerClase(piedraPc);
      sumarPuntosPlayer();
      restarPuntosPc();
    }
    else if(pc == rock) {
      miJugada.innerHTML = "Pierdes";
      jugadaPc.innerHTML = "Ganas";
      añadirClase(piedraPc);
      removerClase(papelPc);
      sumarPuntosPc();
      restarPuntosPlayer();
    };
  };
};

function añadirClase(pcOption) {
   pcOption.setAttribute("class","seleccionado");
};

function removerClase(pcOption) {
  pcOption.removeAttribute("class","seleccionado");
};

function sumarPuntosPlayer() {
  for(let i=0; i<1; i++) {
    misPuntos.innerHTML = parseInt(misPuntos.textContent) + 1;
  };
  if(parseInt(misPuntos.textContent) >= 5) {
    miJugada.innerHTML = "GANASTE LA PARTIDA!!!";
  };
};

function restarPuntosPlayer() {
  for(let i=0; i<1; i++) {
    misPuntos.innerHTML = parseInt(misPuntos.textContent) - 1;
  };
  if(parseInt(misPuntos.textContent) <= -5) {
    miJugada.innerHTML = "PIERDES LA PARTIDA";
  };
};

function sumarPuntosPc() {
   for(let i=0; i<1; i++) {
    puntosPc.innerHTML = parseInt(puntosPc.textContent) + 1;
  };
  if(parseInt(puntosPc.textContent) >= 5) {
    jugadaPc.innerHTML = "GANASTE LA PARTIDA!!!";
  };
};

function restarPuntosPc() {
   for(let i=0; i<1; i++) {
    puntosPc.innerHTML = parseInt(puntosPc.textContent) - 1;
  };
  if(parseInt(puntosPc.textContent) <= -5) {
    jugadaPc.innerHTML = "PIERDES LA PARTIDA";
  };
};


let aleatorio = (min,max)=>{
  let numero = Math.floor( Math.random() * (max - min + 1) + min );
  return numero;
};