/*
Recibe un array con palabras.
*/

/**
 * devuelva cuántas veces aparece cada una (objeto con frecuencia).
 */
function contarPalabras(palabras) {
    const palabrasContadas = {}

    for(const palabra of palabras) {
        if(!palabrasContadas[palabra]) {
            palabrasContadas[palabra] = 1
        } else {
            palabrasContadas[palabra]++
        }
    }
    return palabrasContadas
}

let palabras = ['hola', 'fulbito', 'pelota', 'golazo', 'hola']
let palabrasContadas = contarPalabras(palabras)
console.log(palabrasContadas)