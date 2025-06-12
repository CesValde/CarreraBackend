/* 
- Clase Tarea con nombre y completada: true/false.
- Clase ListaTareas con método todasCompletadas() usando every.
- Guarda tareas en localStorage.
*/

class Tarea {
    constructor(nombre, completada) {
        this.nombre = nombre
        this.completada = completada
    }
}

class ListaTareas {
    constructor(tareas) {
        this.tareas = tareas
    }

    todasCompletas() {
        return this.tareas.every((tarea) => tarea.completada === true)
    }
}

let tarea = new Tarea('estudiar', true)
let tarea2 = new Tarea('fulbito', false)

let tareas = [tarea, tarea2]
let listaTareas = new ListaTareas(tareas) 
let tareasListas = listaTareas.todasCompletas()
console.log(tareasListas)
localStorage.setItem('tareas', tareasListas)