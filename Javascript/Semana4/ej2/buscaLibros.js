/*
Crea un array con objetos de libros (título, autor).
*/

/**
 * recibe un autor y devuelve sus libros
 */
function buscarLibros(autor) {
    for(let i = 0; i<coleccLibros.length; i++) {
        if(coleccLibros[i].autor == autor) {
            coleccLibrosAutor.push(coleccLibros[i])
        }
    }
    return coleccLibrosAutor
}

let coleccLibrosAutor = []
let coleccLibros = [
    {titulo: "libro1", autor: "Cesar"},
    {titulo: "libro2", autor: "David"},
    {titulo: "libro3", autor: "Cesar"}
]

coleccLibrosAutor = buscarLibros("Cesar")
console.log(coleccLibrosAutor)