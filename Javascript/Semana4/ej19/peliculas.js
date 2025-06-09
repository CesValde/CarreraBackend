/* 
Array con películas (título, año, género).
*/

/**
 * devuelve las de un género específico.
 */
function filtrarPeliculas(genero) {
    /* unido = genero.replace(/\s+/g, ""); */
    return peliculasGenero = peliculas.filter((pelicula) => pelicula.genero == genero)
}

let peliculas = [
    {nombre: 'abc', anio: 2000, genero: 'slice of life'},
    {nombre: 'Spiderman', anio: 2001, genero: 'accion'},
    {nombre: 'El origen', anio: 2002, genero: 'ciencia ficcion'},
    {nombre: 'Kimetsu', anio: 2003, genero: 'accion'},
    {nombre: 'Blue', anio: 2010, genero: 'slice of life'},
]

let peliculasGenero = filtrarPeliculas('slice of life')
console.log(peliculasGenero)