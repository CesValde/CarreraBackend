/*
Array de puntajes (números).
*/

/**
 * devuelve los puntajes ordenados de mayor a menor.
 */
function ordenaPuntajes(puntajes) {
    /* Ordena de menor a mayor */
    return puntajes.sort((a,b) => a-b)
}

let puntajes = [10, 9, 4, 2, 1, 6]
let puntajesMenorMayor = ordenaPuntajes(puntajes)
console.log(puntajesMenorMayor)