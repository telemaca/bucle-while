//CREO VARIABLES INICIALES
let playerLife = Math.round(Math.random() * 30) + 70;
let monsterLife = Math.round(Math.random() * 40) + 80;
let potionAmount = Math.round(Math.random() * 4) + 1;
const playerMaxAttack = 30;
let playerAttack = 0;
const monsterMaxAttack = 30;
let monsterAttack = 0;
const potionMaxHealing = 25;
let potionHealing = 0;
let potionSearch = 0;
let action = "";

//ESTABLEZCO LOOP WHILE QUE DURA MIENTRAS EL MONSTRUO Y LA JUGADORA TENGAN 1 O + DE VIDA
 while(playerLife > 0 && monsterLife > 0 && action !== "SALIR") {
    //MUESTRO AL USUARIO LOS VALORES DE JUEGO Y LAS OPCIONES
    action = prompt(`Vida de jugadora: ${playerLife} \nVida de monstruo: ${monsterLife} \nCantidad de pociones disponibles: ${potionAmount} \nAtaque máximo jugadora: ${playerMaxAttack} \nAtaque máximo del monstruo: ${monsterMaxAttack} \nCuración máxima de la poción: ${potionMaxHealing} \n¿Qué vas a hacer? //Atacar al monstruo (ATACAR) //Tomar una poción (TOMAR) //Buscar una poción (BUSCAR) //SALIR`)

    //ACCIONES DE LA JUGADORA
    switch (action) {
        case "ATACAR":
            playerAttack = Math.round(Math.random() * playerMaxAttack) + 1;
            monsterLife -= playerAttack;
            monsterLife > 0 ? alert(`Atacaste con ${playerAttack} de fuerza. Ahora el monstruo tiene ${monsterLife} de vida.`) : alert(`Atacaste con ${playerAttack} de fuerza. ¡¡Mataste al monstruo!! Quedaste con ${playerLife} de vida.`);
            break;
        case "TOMAR":
            potionHealing = Math.round(Math.random() * potionMaxHealing) + 1;
            playerLife += potionHealing;
            potionAmount--;
            alert(`Tomaste una poción que te dio ${potionHealing} puntos de salud. Ahora tenés ${playerLife} de vida y ${potionAmount} poción(es).`);
            break;
        case "BUSCAR":
            potionSearch = Math.ceil(Math.random() * 4);
            if (potionSearch === 1) {
                potionAmount++;
                alert(`¡Encontraste una poción! Ahora tenés ${potionAmount} poción(es).`);
            } else {
                alert(`No encontraste ninguna poción.`);
            }
            break;
        default:
            alert(`Vida de jugadora: ${playerLife} \nVida de monstruo: ${monsterLife} \nGracias por jugar. ¡Adiós!`)
    }

    //ATAQUE DEL MONSTRUO
    if (monsterLife > 0 && action !== "SALIR") {
        monsterAttack = Math.round(Math.random() * monsterMaxAttack) + 1;
        playerLife -= monsterAttack;
        if (playerLife <= 0) {
            alert(`¡Mala suerte! El monstruo te atacó con ${monsterAttack} de fuerza y te mató. El monstruo quedó con ${monsterLife} de vida.`)
        } else {
            alert(`El monstruo te atacó con ${monsterAttack} de fuerza. Te queda ${playerLife} de vida.`)
        }
    }
}