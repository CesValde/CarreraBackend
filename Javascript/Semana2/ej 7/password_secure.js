/* 
Verificación de contraseña segura
Pide una contraseña al usuario.
Verifica si cumple:
Al menos 8 caracteres
Contiene al menos un número (simulado, por ejemplo, buscando si hay un '0'–'9')
Muestra si es "Segura" o "Insegura". 
*/

function tieneNumero(cadena) {
    return /[\d]/.test(cadena); // [\d] representa cualquier dígito
}

let password = prompt("Ingrese una contraseña")
let verificaNum = tieneNumero(password)

if(password.length < 8 || !verificaNum) {
    alert("La contraseña debe tener al menos 8 caracteres y un numero")
} else {
    alert("La contraseña es segura")
}