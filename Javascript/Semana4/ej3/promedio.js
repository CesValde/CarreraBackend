/* 
Array con notas numéricas.
Función que calcule y devuelva el promedio.
*/

/**
 * calcula el promedio del array y devuelve el promedio
 */
function calcularPromedio(notas) {
    let promedio = 0
    let acum = 0
    
    for(let i = 0; i<notas.length; i++) {
        acum += notas[i]
    }
    promedio = acum / notas.length
    return promedio;
}

let notas = [6, 7, 2, 1, 9]
let promedio = calcularPromedio(notas)
console.log(promedio)