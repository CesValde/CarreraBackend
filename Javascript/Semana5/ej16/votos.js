/*
Clase Votacion que almacena y cuenta votos.
Método que retorna cantidad por opción.
Guarda votos en localStorage. 
*/

class Votacion {
    constructor(votos) {
        this.votos = votos 
    }

    contarVotos() {
        const resultado = {}

        // el voto es el valor de array ej: voto = 'a'
        for(const voto of this.votos) {
            // si el voto ya existe en el objeto se incrementa
            if(resultado[voto]) {
                resultado[voto]++   // {voto: numX}
            } else {
                resultado[voto] = 1
            }
        }
        return resultado
    }
}


let votos = [2, 3, 2, 1, 1, 1, 2]
let votacion = new Votacion(votos)
let resultado = votacion.contarVotos()
console.log(resultado)
localStorage.setItem('votos', JSON.stringify(resultado))