// Simulador de cajero automático (retiro simple)
// Define un saldo inicial, por ejemplo: `$1000`.
// Pide al usuario un monto para retirar.
// Si el monto es menor o igual al saldo, realiza el retiro y muestra el nuevo saldo.
// Si no, muestra "Fondos insuficientes".

let saldoIncial = 1000
let monto = prompt("Ingrese un monto a retirar")

if(monto > saldoIncial) {
    alert("Fondos insuficientes")
} else {
    saldoIncial = saldoIncial - monto  
    alert("Retiro compleado te quedan " + saldoIncial + '$')
}