/*
Crea un objeto con días como claves y actividades como valores.
*/

/**
 * muestre actividades por día.
 */
function mostrarActividades(dia) {
    return `El ${dia} es dia para: ${agenda[dia]}`
}

let agenda = {
    lunes: 'Estudiar',
    martes: 'fulbito',
    miercoles: 'Zoe',
    jueves: 'rendir cuentas',
    viernes: 'chambear',
    sabado: 'break',
    domingo: 'relax',
}

let actividad = mostrarActividades('martes')
console.log(actividad)