/*
Clase AgendaDiaria con días como claves y actividades como valores.
Método para mostrar actividades por día.
Persistencia en localStorage. 
*/

class AgendaDiaria {
    constructor(dia, actividad) {
        this.dia = dia 
        this.actividad = actividad
    }

    mostrarActividades() {
        return `El dia: ${this.dia}, es de dia para: ${this.actividad} ` 
    }
}

let agendaDiaria = new AgendaDiaria('lunes', 'estudiar')
let agendaDiaria2 = new AgendaDiaria('martes', 'fulbito')

let agenda = agendaDiaria.mostrarActividades()
console.log(agenda)
localStorage.setItem('agenda', agenda)

let agenda2 = agendaDiaria2.mostrarActividades()
console.log(agenda2)
localStorage.setItem('agenda2', agenda2)