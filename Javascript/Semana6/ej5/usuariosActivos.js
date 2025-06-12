/* 
Clase Usuario con nombre y estado (activo/inactivo).
Clase GestorUsuarios con método hayInactivos() usando some.
Persistencia en localStorage. 
*/

class Usuario {
    constructor(nombre, estado) {
        this.nombre = nombre
        this.estado = estado
    }
}

class GestorUsuarios {
    constructor(usuarios) {
        this.usuarios = usuarios
    }

    hayInactivos() {
        return this.usuarios.some((usuario) => usuario.estado === 'inactivo')
    }
}

let usuario = new Usuario('Cesar', 'activo')
let usuario2 = new Usuario('Zoe', 'inactivo')

let usuarios = [usuario, usuario2]
let gestorUsuarios = new GestorUsuarios(usuarios) 
let inactivo = gestorUsuarios.hayInactivos()
console.log(inactivo)
localStorage.setItem('inactivos', inactivo)