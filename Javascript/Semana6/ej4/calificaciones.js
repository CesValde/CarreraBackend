/* 
Clase Alumno con nombre y array de notas.
Método mostrarResumen() usa map para mostrar nombre y promedio. ??? 
Guarda resumen en localStorage. 
*/

class Alumno {
    constructor(nombre, arrayNotas) {
        this.nombre = nombre 
        this.arrayNotas = arrayNotas
    }

    mostrarResumen() {
        let sumaNotas = this.arrayNotas.reduce((acum, nota) => acum + nota, 0);
        let promedio = sumaNotas / this.arrayNotas.length;
        return {
            nombre: this.nombre,
            promedio: promedio
        };
    }
}

let alumno = new Alumno('Cesar', [10, 9, 9])
let alumno2 = new Alumno('Zoe', [6, 10, 8])

let resumenCesar = alumno.mostrarResumen()
console.log(resumenCesar)
let resumenZoe = alumno2.mostrarResumen()
console.log(resumenZoe)

let resumenes = [resumenCesar, resumenZoe]
localStorage.setItem('resumen', JSON.stringify(resumenes))