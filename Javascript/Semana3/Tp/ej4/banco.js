/* 
    Crea funciones para consultar saldo, depositar y retirar.
    Simula una sesión de operaciones bancarias básicas.
*/

let saldo = 0

function retirarSaldo(monto) {
    if(saldo > monto) {
        alert("Se han retirado: " + monto + " de la cuenta")
        saldo -= monto
        return monto
    } else {
        alert("Monto insuciciente")
        return 0
    }
} 

function depositarSaldo(monto) {
    saldo += monto 
    alert("Se ha depositado con exito el monto de: " + monto)
}

function consularSaldo() {
    return alert("Su saldo es de: " + saldo)
}

depositarSaldo(5000) 
retirarSaldo(3000) 
consularSaldo()