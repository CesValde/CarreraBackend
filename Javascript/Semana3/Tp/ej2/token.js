/* 
    Simula que un sistema genera un “token de sesión” al iniciar.
    Crea una función que verifique si el token ingresado por el usuario coincide con el generado.
*/

function validarToken(token) {
    let tokenReal = 292025
    let mensaje

    if(token == tokenReal) {
        mensaje = "El token es correcto"
    } else {
        mensaje = "El token es incorrecto"
    }

    return mensaje 
}

let token = prompt("Ingrese el token: ")
let mensaje = validarToken(token)
alert(mensaje)