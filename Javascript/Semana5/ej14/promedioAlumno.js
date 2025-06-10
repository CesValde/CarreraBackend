/*
Clase Alumno con array de notas.
Método calcularPromedio().
Guarda alumnos y promedios en localStorage. 
*/

class Alumno {
    constructor(notas) {
        this.notas = notas
    }

    calcularPromedios() {
        return notas.map(alumno => {
            const total = alumno.nota.reduce((acc, nota) => acc + nota, 0);
            const promedio = total / alumno.nota.length;
            return {
                alumno: alumno.alumno,
                promedio: promedio
            };
        });
    }
}

let notas = [
    {alumno: 'Cesar', nota: [10, 9, 9,]},
    {alumno: 'Zoe', nota: [5, 5, 10,]},
]

let alumnos = new Alumno(notas)
let promedios = alumnos.calcularPromedios()
console.log(promedios)
localStorage.setItem('promedios', JSON.stringify(promedios))