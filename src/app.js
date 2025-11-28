



const choices = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

const eleccionComputador = () => {
    let eleccionNum = Math.floor(Math.random() * choices.length);
    return  Object.keys(rules)[eleccionNum]; 
    
};

const comparador = (eleccionJugador) => {

    if (!choices.includes(eleccionJugador)) {
      console.log("escoge alguna opción correcta: " + choices)
      return
    }
        
    let eleccionWord = eleccionComputador() ;
    console.log("has escogido: " + eleccionJugador);
    console.log("La máquina ha escogido: " + eleccionWord);    
    
    if (eleccionJugador === eleccionWord) console.log("empate");
    else if (rules[eleccionJugador].includes(eleccionWord)) console.log("ganaste");
    else console.log("perdiste");   
    
};

comparador("paper")

