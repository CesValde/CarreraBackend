/*
Array de objetos con usuario y puntaje (1–5)
*/

/**
 * devuelve el promedio y los usuarios que votaron 5.
 */
function calculaPuntaje(array) {
    return puntajeCinco = array.filter((user) => user.puntaje == 5)
}

let puntajes = [
    {user: 'Cesar', puntaje: 5},
    {user: 'David', puntaje: 1},
    {user: 'Zoe', puntaje: 4},
    {user: 'Zoe2', puntaje: 5},
    {user: 'Jes', puntaje: 2},
    {user: 'Majo', puntaje: 5}
]

let puntajeCinco = calculaPuntaje(puntajes)
