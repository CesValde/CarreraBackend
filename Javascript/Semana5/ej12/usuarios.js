/* 
Clase Usuario que genera nombre.apellido como nombre de usuario.
Guarda usuarios generados en localStorage. 
*/

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    crearUsuario() {
        let usuario = this.nombre + this.apellido;
        return usuario
    }
}

let usuario = new Usuario('Cesar', 'Valderrama')
usuario = usuario.crearUsuario()
localStorage.setItem('user', usuario)
usuario = new Usuario('Zoe', 'Bascuñan')
usuario = usuario.crearUsuario()
localStorage.setItem('user2', usuario)