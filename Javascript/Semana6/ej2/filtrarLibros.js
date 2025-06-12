/* 
Clase Libro con título, autor y género.
Clase Biblioteca con método filtrarPorGenero(genero) usando filter.
Persistencia en localStorage. 
*/

class Libro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
    }
}

class Biblioteca {
    constructor(libros) {
        this.libros = libros
    }

    filtrarPorGenero() {
        return this.libros.filter(function(libro) {
            return libro.genero == 'accion'
        })
    }
}

let libro = new Libro('abc', 'a', 'miedo')
let libro2 = new Libro('zsw', 'b', 'aventura')
let libro3 = new Libro('efh', 'c', 'drama')
let libro4 = new Libro('opk', 'd', 'accion')
let libros = [libro, libro2, libro3, libro4]

let biblioteca = new Biblioteca(libros)
let librosFiltrados = biblioteca.filtrarPorGenero()
console.log(librosFiltrados)
localStorage.setItem('libros', JSON.stringify(librosFiltrados))