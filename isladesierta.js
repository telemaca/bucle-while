//VARIABLES DE ARRAY Y STRING
let boatAndIslandArray = ["⛵️", "🌊", "🌊", "🌊", "🏝"]
let boatAndIsland = boatAndIslandArray.join("")

console.log(boatAndIslandArray)
console.log(boatAndIsland)

//VARIABLES PARA BARCO Y MAR
let boat = "⛵️"
let wave = "🌊"

//LOOP QUE CORRE MIENTRAS EL BARCO NO ESTÉ AL LADO DE LA ISLA
while (boatAndIslandArray[3] !== "⛵️") {
    let forwardsOrBackwards = prompt (`${boatAndIsland} \n¿AVANZAR o RETROCEDER?`)

    //DECIDE AVANZAR
    if (forwardsOrBackwards === "AVANZAR"){
                
        if (boatAndIslandArray[0] === boat) {
            boatAndIslandArray[1] = boat
            boatAndIslandArray[0] = wave
        } else if (boatAndIslandArray[1] === boat) {
            boatAndIslandArray[2] = boat
            boatAndIslandArray[1] = wave
        } else if (boatAndIslandArray[2] === boat) {
            boatAndIslandArray[3] = boat
            boatAndIslandArray[2] = wave
        } 

        boatAndIsland = boatAndIslandArray.join("")
        console.log(boatAndIsland)
    }

    //DECIDE RETROCEDER
    if (forwardsOrBackwards === "RETROCEDER"){
                
        if (boatAndIslandArray[0] === boat) {
            forwardsOrBackwards = prompt(`Estás en el inicio. No podés retroceder. Escribí "AVANZAR".`)
        } else if (boatAndIslandArray[1] === boat) {
            boatAndIslandArray[0] = boat
            boatAndIslandArray[1] = wave
        } else if (boatAndIslandArray[2] === boat) {
            boatAndIslandArray[1] = boat
            boatAndIslandArray[2] = wave
        } 

        boatAndIsland = boatAndIslandArray.join("")
        console.log(boatAndIsland)
    }
}

//ALERT QUE APARECE SOLO CUANDO EL BARCO ESTÁ AL LADO DE LA ISLA
alert(boatAndIsland + `\n¡Llegaste a la isla!`)
console.log(boatAndIsland)