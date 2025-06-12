/* 
Clase Contacto con nombre, teléfono.
Clase Agenda con método buscar(nombre) usando find.
Guarda contactos en localStorage. 
*/

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre 
        this.telefono = telefono
    }
}

class Agenda {
    constructor(contactos) {
        this.contactos = contactos
    }

    buscarContacto() {
        return this.contactos.find((contacto) => contacto.nombre == 'cesarito')
    }
}

let contacto = new Contacto('zoe', 299)
let contacto2 = new Contacto('cesarito', 299)
let contacto3 = new Contacto('david', 298)

let contactos = [contacto, contacto2, contacto3]
let agenda = new Agenda(contactos)
let contactoBuscado = agenda.buscarContacto()
console.log(contactoBuscado)
localStorage.setItem('contactos', JSON.stringify(contactoBuscado))