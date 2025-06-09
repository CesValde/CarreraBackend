/* 
Usa un array de objetos con nombre, teléfono y correo.
*/

/**
 * busca un contacto por nombre
 */
function buscarContacto(nombre) {
    for(let i = 0; i<personas.length; i++) {
        if(nombre == personas[i].nombre) {
            return nombre
        }
    }
    return null
}

let personas = [
    {nombre: "Cesar", telefono: 299, correo: "cesar2002@"},
    {nombre: "Zoe", telefono: 298, correo: "zoe2004@"},
    {nombre: "David", telefono: 297, correo: "david2002@"}
]

let persona = buscarContacto("Zoe")
console.log(persona)