//Object.values(reglas)[1][1]
//object.keys(rules)[]
//object.value(rules){}
//rules[].includes()//


// console.log(rules["rock"]);


// comparador("lizard");

// eleccionComputador();
// comparador("lizard");

// const pruebaDeincludes = () => {

// console.log((Object.values(rules)[0]).includes("rock"));   <------------------//ESTO FUNCIONA para buscar los valores de las reglas
    
// }
// pruebaDeincludes();


// eleccionComputador();

// console.log(Object.keys(rules)[0]);
// console.log(Object.values(rules)[0][1]);
// comparador();

const choices = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

console.log(choices.includes("morrocoy"));