/*
Array con votos (ej: "A", "B", "A", "C").
*/

/**
 * devuelve cuántos votos tuvo cada opción.
 */
function contarVotos(votos) {
    const resultado = {}

    // el voto es el valor de array ej: voto = 'a'
    for(const voto of votos) {
        // si el voto ya existe en el objeto se incrementa
        if(resultado[voto]) {
            resultado[voto]++   // {voto: numX}
        } else {
            resultado[voto] = 1
        }
    }
    return resultado
}

let votos = ['a', 'a', 'c', 'b', 'c', 'a']
let resultado = contarVotos(votos)
console.log(resultado)