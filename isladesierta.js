//VARIABLES DE ARRAY Y STRING
let boatAndIslandArray = ["⛵️", "🌊", "🌊","🌊","🌊","🌊", "🌊", "🏝"]
let boatAndIsland = ""

//DEFINO FLAG VARIABLE
let boatInSea = true;

let boatIndex = 0;
let forwardsOrBackwards = "";

//LOOP QUE CORRE MIENTRAS EL BARCO NO ESTÉ AL LADO DE LA ISLA
while (boatInSea) {
    //TRANSFORMO EL ARRAY EN STRING PARA MOSTRARLO EN EL PROMPT
    boatAndIsland = boatAndIslandArray.join("")

    forwardsOrBackwards = prompt (`${boatAndIsland} \n¿AVANZAR o RETROCEDER?`)
    boatIndex = boatAndIslandArray.indexOf("⛵️")

    //DECIDE AVANZAR
    if (forwardsOrBackwards === "AVANZAR"){
        boatAndIslandArray[boatIndex+1] = "⛵️";
        boatAndIslandArray[boatIndex] = "🌊";
    }

    //DECIDE RETROCEDER
    else if (forwardsOrBackwards === "RETROCEDER"){
        if (boatAndIslandArray[0] === "⛵️") {
            forwardsOrBackwards = prompt(`Estás en el inicio. No podés retroceder. Escribí "AVANZAR".`)
        } else {
            boatAndIslandArray[boatIndex-1] = "⛵️";
            boatAndIslandArray[boatIndex] = "🌊";
        }
    }

    //DEFINO CONDICION PARA QUE DEJE DE GIRAR EL LOOP
    if (boatAndIslandArray[boatAndIslandArray.length - 2] === "⛵️") {
        boatInSea = false;
    }
}

//ALERT QUE APARECE SOLO CUANDO EL BARCO ESTÁ AL LADO DE LA ISLA
alert(boatAndIsland + `\n¡Llegaste a la isla!`)
console.log(boatAndIsland)