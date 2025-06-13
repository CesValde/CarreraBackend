/* Simulacion de Steam */
import {
  menu,
  /* validarOpcion, */
  desplegarJuegos,
  desplegarMisJuegos,
  buscarJuego,
  /* achicaNombre, */
  verificaSiTiene,
  videoJuegoMasCaro,
  videoJuegoMasJugado
} from './functions.js';

/* Constantes */
const userData = {
    name: "Cesar",
    password: 2904,
    saldo: 100
}

export const coleccJuegos = [
    {name: "Lies of P", price: 30},
    {name: "Elden Ring", price: 60},
    {name: "Hollow Knight", price: 10},
    {name: "Sekiro Die Twice", price: 35},
    {name: "Cuphead", price: 20}
]

// agregar juegos para hacer testeos
export const misJuegos = []

/* Login de la cuenta */
alert("Bienvenido!")
let user = prompt("Ingrese su usuario: ")
let pass = prompt("Ingrese su contraseña: ")

// userData.name userData.password
// let user = "Cesar" 
// let pass = 2904

if(user == userData.name && pass == userData.password) {
    
    let salir = false
    alert(`Bienvenido! ${user}`)
    do {
        /* Primer menu antes de escoger una opcion */
        let cadenaJuegos = ''
        let opcion
        opcion = menu()
        switch(opcion) {
            /* Comprar juego */
            case 1: 
            /* Declaracionde variables */
            let juegoComprado
            let respuesta 
            let juego 
            let juegoCompra = ''

            cadenaJuegos = desplegarJuegos(coleccJuegos) 
            juegoCompra = prompt('Que juego desea comprar ? \n' + cadenaJuegos)
            console.log(juegoCompra)
            juego = buscarJuego(juegoCompra)
            juegoComprado = verificaSiTiene(juego)
            console.log(juegoComprado)

            if(juego == null) {
                alert("No existe el juego")
                /* Verifico que el objeto tenga alguna clave y que no lo haya comprado antes */
            } else if(Object.keys(juego).length > 0 && juegoComprado == false) {
                respuesta = confirm(`Desea comprar ${juego.name} ?`)
                if(respuesta && userData.saldo > juego.price) {
                    alert("Gracias por comprar en Steam!")
                    misJuegos.push({ name: juego.name, price: juego.price, hs: (Math.floor(Math.random() * 9) + 1) *10 })
                    userData.saldo = userData.saldo - juego.price
                } else if(userData.saldo < juego.price) {
                    alert("Saldo insuficiente")
                    console.log(userData.saldo)
                } else {
                    alert("En otra ocasion sera!")
                }
            } else if(juegoComprado){
                alert("Ya tienes este juego")
            }
            
            break
            /* Ver lista de juegos */
            case 2:
            cadenaJuegos = desplegarJuegos(coleccJuegos) 
            alert('Juegos de Steam \n'+cadenaJuegos)
            break
            /* Ver mis juegos */
            case 3:
            cadenaJuegos = desplegarMisJuegos(misJuegos)
            if(cadenaJuegos == '') {
                alert("No tienes juegos en tu biblioteca")
            } else {
                alert('Tus juegos: \n'+ cadenaJuegos)
            }
            break
            /* Ver mi juego mas caro */
            case 4:
            let juegoMasCaro
            console.log(misJuegos[0])
            juegoMasCaro = videoJuegoMasCaro(misJuegos) 
            if(juegoMasCaro == null) {
                alert("No tienes juegos comprados")
            } else {
                alert(`Tu juego mas caro es: ${juegoMasCaro.name} \n`)
            }
            break
            /* Ver mi juego con mas hs jugadas */
            case 5:
            let juegoMasJugado
            console.log(misJuegos[0])
            juegoMasJugado = videoJuegoMasJugado(misJuegos)
            if(juegoMasJugado == null) {
                alert("No has jugado ningun juego aun")
            } else {
                alert(`Tu juego mas jugado es: ${juegoMasJugado.name} con: ${juegoMasJugado.hs}hs`)
            }
            break
            /* Cerrar sesion */
            case 6:
                alert(`Hasta luego! ${user}`)
                salir = true
            break
        }
    } while(!salir)
} else {
    alert("Usuario y/o contraseña incorrecta")
}