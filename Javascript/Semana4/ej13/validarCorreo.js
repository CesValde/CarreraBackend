/* 
Recibe un array de emails.
*/

/**
 * devuelve solo los correos válidos (contienen “@”).
 */
function validarCorreo(array) {
    let correos = []

    for(let i=0; i<array.length; i++) {
        if(array[i].includes('@')) {
            correos.push(array[i])
        }
    }
    return correos
}

let correos = ['cesar2002@', 'david45', 'valde@gmail', 'zoeW']
let correosValidos = validarCorreo(correos)
console.log(correosValidos)