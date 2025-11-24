// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };



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
    let eleccionWord = Object.keys(rules)[eleccionNum];
    
    return eleccionWord
    
};

const comparador = (eleccionJugador) => {
    let eleccionWord = eleccionComputador() ;
    console.log("has escogido: " + eleccionJugador);
    console.log("La máquina ha escogido: " + eleccionWord);
    
    
    if (eleccionJugador === eleccionWord) console.log("empate");
    
    else if (rules[eleccionJugador].includes(eleccionWord)) console.log("ganaste");
    else console.log("perdiste");   
 
    
};

comparador("paper")

// console.log(rules["paper"]);

// console.log(Object.keys(rules));
//object.keys(rules)[]
// console.log(Object.values(rules)[1][0]);
//rules[].includes()//