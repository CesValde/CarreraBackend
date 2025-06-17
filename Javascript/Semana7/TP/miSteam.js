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

import { Juego } from './clases.js';

/* Constantes */
const userData = {
    name: "Cesar",
    password: 2904,
    saldo: 100
}

export const coleccJuegos = [
    {name: "Lies of P", price: 30, logros: 62},
    {name: "Elden Ring", price: 60, logros: 70},
    {name: "Hollow Knight", price: 10, logros: 56},
    {name: "Sekiro Die Twice", price: 35, logros: 52},
    {name: "Cuphead", price: 20, logros: 30}
]

// agregar juegos para hacer testeos
export const misJuegos = []

/* Login de la cuenta */
alert("Bienvenido!")
let user = prompt("Ingrese su usuario: ")
let pass = prompt("Ingrese su contraseña: ")

// Manejo de DOM
let bienvenida = document.getElementById('bienvenida')
bienvenida = bienvenida.innerText = (`Bienvenido a Steam ${user}!`)

// userData.name userData.password
// let user = "Cesar" 
// let pass = 2904

if(user == userData.name && pass == userData.password) {
    
    let salir = false
    alert(bienvenida)
    do {
        /* Primer menu antes de escoger una opcion */
        let cadenaJuegos = ''
        let opcion
        opcion = menu()
        switch(opcion) {
            /* Comprar juego */
            case 1: 
            /* Declaracionde variables */
            let comprado
            let respuesta 
            let juego 
            let juegoCompra = ''

            cadenaJuegos = desplegarJuegos(coleccJuegos)
            juegoCompra = prompt('Que juego desea comprar ? \n' + cadenaJuegos)
            console.log(juegoCompra)
            juego = buscarJuego(juegoCompra)
            comprado = verificaSiTiene(juego)
            console.log(comprado)

            if(juego == null) {
                alert("No existe el juego")
                /* Verifico que el objeto tenga alguna clave (si existe en Steam) y que no lo haya comprado antes */
            } else if(Object.keys(juego).length > 0 && comprado == false) {
                respuesta = confirm(`Desea comprar ${juego.name} ?`)
                if(respuesta && userData.saldo > juego.price) {
                    alert("Gracias por comprar en Steam!")
                    misJuegos.push(new Juego({name: juego.name, price: juego.price, hs: ((Math.floor(Math.random() * 9) + 1) *10), logros: juego.logros}))
                    userData.saldo = userData.saldo - juego.price
                    // DOM 
                    let filaJuego = document.createElement('main')
                    filaJuego.innerHTML = `<p> ${juego.name} se a añadido a tu biblioteca </p>`
                    const main = document.querySelector('main');
                    main.appendChild(filaJuego);
                } else if(userData.saldo < juego.price) {
                    alert("Saldo insuficiente")
                    console.log(userData.saldo)
                } else {
                    alert("En otra ocasion sera!")
                }
            } else if(comprado){
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