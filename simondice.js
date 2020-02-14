//ARRAY DE COLORES
const colors = ["amarillo", "azul", "rojo", "verde"]

//PREGUNTO CUANTAS RONDAS QUIERE JUGAR
const numberOfRounds = Number(prompt(`¿Cuántas rondas desea jugar?`))

//CREO VARIABLES PARA USAR EN EL LOOP
let round = 1;
let i = 0;
let random = ""
let randomColors = ""
let userColor = ""
let userColorsTogether = ""
let roundScore = 0;

//WHILE LOOP
while (round < numberOfRounds + 1) {
    //COLORES QUE DICE EL PROGRAMA
    i = Math.round(Math.random() * (colors.length - 1));
    random = colors[i];
    //SUMA COLORES DEL PROGRAMA
    randomColors += random + " "

    alert (`Simón dice: ${randomColors}`)
    
    //COLORES QUE INGRESA USUARIO
    for(x = 1; x <= round; x++) {
        userColor = prompt(`Ingrese el color ${x}:`)
    }
    //SUMA COLORES DE USUARIO
    userColorsTogether += userColor + " "

    //COMPARA COLORES INGRESADOS CON LOS ORIGINALES:

    //PASA A SIGUIENTE RONDA
    if (randomColors === userColorsTogether) {
        roundScore++
    } 
    //PIERDE Y SE TERMINA
    else {
        alert(`Perdiste. Cantidad máxima de rondas sin perder: ${roundScore}`)
        round += Infinity
    }

    round++

    //GANADOR
    if(randomColors === userColorsTogether && round === numberOfRounds + 1) {
        alert(`¡Ganaste! ${roundScore} rondas sin perder.`)
    }
}