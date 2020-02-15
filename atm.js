// 🏧 ATM II

// Crear un programa que tenga un dinero inicial
// El programa también deberá contar con un menú con las siguientes opciones:
// EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
// DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
// CONSULTAR SALDO: debe mostrar el saldo actual
// VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
// SALIR: debe terminar la ejecución del programa
// El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones. Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder consultarse luego, por ejemplo:
//  ULTIMOS MOVIMIENTOS
//  - Depositado: $550
//  - Extraido: $1000
//  - Consultado saldo: $3400
//  - Depositado: $100

let moneyInAccount = 10000;
let actionToPerform = "";
let moneyToWithdraw = 0;
let moneyToDeposit = 0;

while (actionToPerform !== "SALIR") {
    actionToPerform = prompt(`¿Qué desea hacer? \n-Extraer dinero (EXTRAER) \n-Depositar dinero (DEPOSITAR) \n-Consultar su saldo (CONSULTAR) \n-Ver últimos movimientos (VER) \n-SALIR`);
    
        switch (actionToPerform) {
            case "EXTRAER":
                moneyToWithdraw = prompt(`¿Cuánto dinero quiere extraer?`)
                if (moneyToWithdraw > moneyInAccount){
                    alert(`No tiene dinero para hacer esa extracción.`)
                } else {
                    moneyInAccount -= moneyToWithdraw
                }
                break;
            case "DEPOSITAR":
                moneyToDeposit = prompt(`¿Cuánto dinero quiere depositar?`)
                moneyInAccount += moneyToDeposit
                break;
            case "CONSULTAR":
                alert(`Su saldo actual es: $${moneyInAccount}`)
                break;
            case "VER":
                arrayToString = tasksList.join("\n")
                alert(arrayToString)
                break;
        }
    }