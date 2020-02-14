// SE ELIGE PALABRA RANDOM

const randomWords = ["LOVELACE", "JAVASCRIPT", "ADIVINANZA", "JUEGO", "VALIENTE", "VIOLETA", "TOMATE", "APOSTROFO", "JUGUETERIA", "CHOCOLATADA", "LONGITUD"]
const i = Math.round(Math.random() * (randomWords.length - 1))
const random = randomWords[i]


console.log(random)

//SEPARO PALABRA ELEGIDA AL AZAR EN SUS LETRAS PARA HALLAR SU LONGITUD
let randomWordsLetters = random.split("")

//PIDO A USUARIO QUE ADIVINE LA PALABRA
let userGuess = prompt(`Adivine la palabra (todo mayúsculas):`)

// CREO VARIABLE "VUELTA" PARA REGULAR HASTA CUANDO CORRE EL PROGRAMA
let vuelta = 0;

// CREO VARIABLE "PISTA" PARA IR INDICANDO LAS LETRAS DENTRO DEL LOOP
let pista = []


//NO ADIVINA LA PALABRA; NUEVAS CHANCES
while (userGuess !== random && vuelta < randomWordsLetters.length -1) {
    pista = random.slice(0, vuelta + 1)
    userGuess = prompt(`No adivinaste :( \nProbá de nuevo.\nPista: ${pista}`);
    vuelta++;
}

//NO ADIVINÓ NUNCA
if (userGuess !== random && vuelta === randomWordsLetters.length - 1) {
    alert(`Perdiste. La palabra era ${random}.`)
}

//ADIVINA LA PALABRA
if (userGuess === random) {
    alert(`¡Adivinaste! La palabra es ${random}.`)
}