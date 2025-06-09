/* 
Array de tareas (objeto: nombre, completada: true/false).
Función que filtre solo las tareas completadas.
*/

/**
 * filtra las tareas completadas
 */
function filtrarTareas(listaTareas) {
    return listaTareas.filter(tarea => tarea.completada === true)
}

let listaTareas = [
    {tarea: 'coderJs', completada: true},
    {tarea: 'uni', completada: false},
    {tarea: 'coderQA', completada: true},
]

let tareasCompletas = filtrarTareas(listaTareas)
console.log(tareasCompletas)