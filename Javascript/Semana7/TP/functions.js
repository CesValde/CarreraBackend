/* Funciones */

import { coleccJuegos, misJuegos } from "./miSteam.js";

export {
  menu,
  validarOpcion,
  desplegarJuegos,
  desplegarMisJuegos,
  buscarJuego,
  achicaNombre,
  verificaSiTiene,
  videoJuegoMasCaro,
  videoJuegoMasJugado
};

/**
 * Despliega el menu de opciones
 * @returns {number}
 */
function menu() {
    let opcion = Number(prompt(
        'Que deseas hacer hoy ? \n'+
        '1: Comprar juego \n'+
        '2: Ver lista de juegos \n'+
        '3: Ver mis juegos \n'+
        '4: Ver mi juego mas caro \n'+
        '5: Ver mi juego mas jugado \n'+
        '6: Cerrar sesion'
    ))
    opcion = validarOpcion(opcion)
    return opcion
}

/**
 * Valida que el usuario ingrese una opcion correcta
 * @param {number} opcion 
 * @returns {number}
 */
function validarOpcion(opcion) {
    while(opcion < 1 || opcion > 6) {
        alert("Ingrese una opcion correcta: ")
        opcion = Number(prompt(
            '1: Comprar juego \n'+
            '2: Ver lista de juegos \n'+
            '3: Ver mis juegos \n'+
            '4: Ver mi juego mas caro \n'+
            '5: Ver mi juego mas jugado \n'+
            '6: Cerrar sesion \n'
        ))
    }
    return opcion
}

/**
 * Despliega la lista de juegos de Steam
 * @param {array}
 * @returns {string}
 */
function desplegarJuegos(array) {
    let cadena = ''
    for(let i=0; i<array.length; i++) {
        cadena += array[i].name+ ' - Precio: '+array[i].price + "$\n"
    }
    return cadena
}

/**
 * Despliega la lista de juegos de Steam
 * @param {array}
 * @returns {string}
 */
function desplegarMisJuegos(array) {
    let cadena = ''
    for(let i=0; i<array.length; i++) {
        cadena += array[i].name+ ' - Horas: '+array[i].hs + "\n"
    }
    return cadena
}

/**
 * Busca el juego que el usuario quiere comprar
 * @param {string}
 * @returns {object} 
 */
function buscarJuego(juegoCompra) {
    juegoCompra = achicaNombre(juegoCompra)
    let encuentra = false
    let i = 0

    while(encuentra == false && i<coleccJuegos.length) {
        let juegoI = achicaNombre(coleccJuegos[i].name);
        if(juegoCompra == juegoI) {
            return coleccJuegos[i]
        }
        i++
    }
    if(encuentra == false) {
        return null 
    }
}

/**
 * Convierto la cadena de texto a minus y las junto para una mejor comparacion
 * @param {string}
 * @returns {string}
 */
function achicaNombre(cadena) {
    cadena = cadena.toLowerCase();
    cadena = cadena.trim()
    return cadena
}

/**
 * Verifica si el usuario ya tiene este juego
 * @param {object}
 * @returns {object}
 */
function verificaSiTiene(juego) {
    let i = 0
    if(misJuegos.length > 0) {
        while(i<misJuegos.length) {
            if(achicaNombre(misJuegos[i].name) == achicaNombre(juego.name)) {
                return true
            }
            i++
        }
        return false
    } else {
        return false
    }
}

/**
 * Devuelve el juego mas caro de mi biblioteca de juegos
 * @return {object}
 */
function videoJuegoMasCaro(array) {
    let precioJuegoMasCaro = -1
    let juegoMasCaro

    if(array.length == 0) {
        return null
    } else {
        array.forEach(juego => {
            if(juego.price > precioJuegoMasCaro) {
                precioJuegoMasCaro = juego.price
                juegoMasCaro = juego
            }
        });
    }
    console.log(juegoMasCaro)
    return juegoMasCaro
}

/**
 * Devuelve el juego mas jugado de mi biblioteca de juegos
 * @returns {object}
 */
function videoJuegoMasJugado(array) {
    let hsJuegoMasJugado = -1
    let juegoMasJugado

    if(array.length == 0) {
        return null
    } else {
        array.forEach(juego => {
            if(juego.hs > hsJuegoMasJugado) {
                hsJuegoMasJugado = juego.hs
                juegoMasJugado = juego
            }
        });
    }
    return juegoMasJugado
}