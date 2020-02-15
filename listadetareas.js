//CREO VARIABLES VACÍAS
let tasksList = [];
let arrayToString = "";
let task = [];
let actionToPerform = "";
let taskNumber = 0;

//FLAG VARIABLE
let keepGoing = true;

//WHILE LOOP QUE SE TERMINA SOLO ESCRIBIENDO "SALIR"
while (keepGoing) {
    actionToPerform = prompt(`¿Qué querés hacer? \n-Agregar una tarea (AGREGAR) \n-Modificar una tarea (MODIFICAR) \n-Eliminar una tarea (ELIMINAR) \n-Ver tareas (VER) \n-SALIR`);

    switch (actionToPerform) {
        //AGREGA TAREAS Y LAS VA SUMANDO A UN ARRAY DE TAREAS
        case "AGREGAR":
            task = prompt(`Agregue una tarea:`).split(" ")
            tasksList = tasksList.concat(task)
            break;
        //SE MODIFICA TAREA Y SE MODIFICA SU VALOR EN EL ARRAY DE TAREAS
        case "MODIFICAR":
            arrayToString = tasksList.join("\n")
            taskNumber = Number(prompt(arrayToString + `\nIngrese el número de la tarea a modificar:`));
            task = prompt(`Ingrese la nueva tarea:`);
            tasksList[taskNumber - 1] = task;
            break;
        //SE ELIMINA TAREA CON SPLICE
        case "ELIMINAR":
            arrayToString = tasksList.join("\n")
            taskNumber = Number(prompt(arrayToString + `\nIngrese el número de la tarea a eliminar:`));
            tasksList.splice(taskNumber-1, 1)
            break;
        //EL ARRAY DE TAREAS SE PASA A UN STRING Y SE MUESTRA
        case "VER":
            arrayToString = tasksList.join("\n")
            alert(arrayToString)
            break;
    }

    //CONDICION PARA TERMINAR EL PROGRAMA
    if (actionToPerform === "SALIR") {
        keepGoing = false;
    }
}