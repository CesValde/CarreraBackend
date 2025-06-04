/* 
    El usuario elige un país.
    Una función flecha retorna el costo estimado de envío.
    Ejemplo: Argentina → $500, Chile → $700, Otro → $1200.
*/

const calcCostoEnvio = (pais) => {  
    let costoEnvio 

    if(pais == "Argentina") {
        costoEnvio = 2000
    } else if(pais == "Venezuela") {
        costoEnvio = 99999999999
    } else {
        costoEnvio = 100
    }
    return costoEnvio
}

let pais = prompt("Elige un pais: ") 
let toalEnvio = calcCostoEnvio(pais)
alert("El costo del envio es de: " + toalEnvio)