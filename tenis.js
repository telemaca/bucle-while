//PIDO NOMBRES DE JUGADORAS; LAS METO EN UN ARRAY, Y ASIGNO CADA NOMBRE A UNA VARIABLE
const players = prompt(`Ingrese los nombres de las dos jugadoras (separados por un espacio).`).split(" ")
const player1 = players[0]
const player2 = players[1]

//CREO VARIABLES EN 0 PARA LOS PUNTAJES INICIALES DE CADA UNA; LUEGO SE IRÁN SUMANDO EN EL LOOP.
let player1Score = 0;
let player2Score = 0;

//CREO VARIABLE PARA IR CONTANDO LOS SETS
let setNumber = 1;

//CREO VARIABLE VACÍA PARA LA GANADORA DE CADA SET
let setWinner = "";

//CREO FLAG VARIABLE
let weDontHaveAWinner = true;

let scoreMessage = "";

//LOOP WHILE PARA IR INGRESANDO LOS RESULTADOS
while (weDontHaveAWinner) {
    setWinner = prompt(`¿Quién ganó el set ${setNumber}: ${player1} o ${player2}?`);
    setNumber++;
    setWinner === player1 ? player1Score++ : player2Score++;
    scoreMessage = `${player1} (${player1Score}) / ${player2} (${player2Score})`

    //SE DEFINE SI HAY GANADORA
    if (player1Score === 3) {
        alert(`¡Ganó ${player1}! \nResultado final: ` + scoreMessage)
    } else if (player2Score === 3) {
        alert(`¡Ganó ${player2}! \nResultado final: ` + scoreMessage)
    } else {
        alert(`El puntaje está en: ` + scoreMessage)
    }

    if (player1Score === 3 || player2Score === 3) {
        weDontHaveAWinner = false;
    }
}