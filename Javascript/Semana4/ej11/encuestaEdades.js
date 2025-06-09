/* 
Recibe un array de edades.
*/

/**
 * devuelve cuántos son menores, adultos y mayores.
 */
function filtraEdades(arrayEdades) {
    let edades = {menores: 0, mayores: 0, adultos: 0}

    for(let i=0; i<arrayEdades.length; i++) {
        if(arrayEdades[i] < 18) {
            edades.menores++
        } else if(arrayEdades[i] > 18 && arrayEdades[i] <= 45) {
            edades.mayores++
        } else {
            edades.adultos++
        }
    }
    return edades
}

let arrayEdades = [5, 70, 17, 18, 50, 40, 35, 12]
let edadesContadas = filtraEdades(arrayEdades)
console.log(edadesContadas)