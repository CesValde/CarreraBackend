/* 
    Registra respuestas a 3 preguntas con funciones separadas.
    Cada una devuelve la respuesta.
    Muestra todo al final.
*/

function registraPregunta1() {
    respuesta = prompt("Lenguaje de programacion favorito? ")
    return respuesta
}

function registraPregunta2() {
    respuesta = prompt("Crypto favorita? ")
    return respuesta
}

function registraPregunta3() {
    respuesta = prompt("Te bañas? ")
    return respuesta
}

/* alert(respuesta = registraPregunta1())
alert(respuesta = registraPregunta2())
alert(respuesta = registraPregunta3()) */

let cadena = ""

let respuesta = registraPregunta1()
cadena += respuesta 
respuesta = registraPregunta2()
cadena += respuesta 
respuesta = registraPregunta3()
cadena += respuesta 

alert(cadena)