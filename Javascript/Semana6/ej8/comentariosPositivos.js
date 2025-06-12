/* 
Clase Comentario con texto y puntaje (1-5).
Método filtrarPositivos() usando filter (puntaje >= 4).
Guarda comentarios positivos en localStorage.
*/

class Comentario {
    constructor(texto, puntaje) {
        this.texto = texto
        this.puntaje = puntaje
    }

    filtrarPositivos(comentarios) {
        return comentarios.filter((comentario) => comentario.puntaje > 4).map(comentario => comentario.texto);
    }
}

let comentario = new Comentario('bueno', 3)
let comentario2 = new Comentario('excelente', 5)

let comentarios = [comentario, comentario2]
let comentariosPositivos = comentario.filtrarPositivos(comentarios)
console.log(comentariosPositivos)
localStorage.setItem('comentarios', comentariosPositivos)