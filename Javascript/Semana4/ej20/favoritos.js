/*
Array de objetos con nombre y favorito: true/false.
*/

/**
 * devuelva los elementos marcados como favoritos.
 */
function marcarFavoritos(array) {
    return marcados = array.filter((elem) => elem.favorito == true)
}

let usuarios = [
    {nombre: 'Cesar', favorito: true},
    {nombre: 'David', favorito: false},
    {nombre: 'Zoe', favorito: true},
    {nombre: 'Zoe2', favorito: false},
]

let marcados = marcarFavoritos(usuarios)
console.log(marcados)