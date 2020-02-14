//PIDO A USUARIO QUE INGRESE NÚMEROS
let numbersArray = prompt(`Ingrese números separados por espacios.`).split(" ")

let numeroMayor = 0;
let vuelta = 0;

//TRANSFORMO STRING A NUMBER; DEFINO NUMERO MAYOR PARA SABER CANTIDAD MAXIMA DE VUELTAS
for (let i = 0; i < numbersArray.length; i++) {
    numbersArray[i] = Number(numbersArray[i])

    if(Number(numbersArray[i])>numeroMayor){
        numeroMayor=Number(numbersArray[i]);
    }
}
console.log(numbersArray)

//DEFINO LOOP WHILE
while (vuelta <= numeroMayor) {
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            numbersArray[i]--;
        } else if (numbersArray[i] < 0) {
            numbersArray[i] = 0;
        }
        if (vuelta === numeroMayor) {
            numbersArray[i] = "💥"
        }
    }
    vuelta++;
    console.log(numbersArray)
}