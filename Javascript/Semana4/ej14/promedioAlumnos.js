/*
Array de objetos con nombre y array de notas.
*/

/**
 * retorna el promedio por alumno
 */
function promedioNotas(alumnos) {
    const acumulador = {};

    // Acumulamos notas por alumno
    // se itera cada objeto del array
    for(const{alumno, nota} of alumnos) {
        if(!acumulador[alumno]) {
            acumulador[alumno] = { total: 0, cantidad: 0 };         // {alumno: {total: 0, cantidad: 0}}
        }
        acumulador[alumno].total += nota;
        acumulador[alumno].cantidad++;
    }

    // Creamos el arreglo de promedios
    const promedio = [];
    for(const alumno in acumulador) {
        const{total, cantidad} = acumulador[alumno];       // desestructuración de objeto
        promedio.push({ alumno, nota: total / cantidad });
    }

    return promedio;
}

let alumnos = [
    { alumno: 'Cesar', nota: 10 },
    { alumno: 'Cesar', nota: 9 },
    { alumno: 'Cesar', nota: 8 },
    { alumno: 'Zoe', nota: 7 },
    { alumno: 'Zoe', nota: 9 },
    { alumno: 'Zoe', nota: 7 }
];

console.log(promedioNotas(alumnos));