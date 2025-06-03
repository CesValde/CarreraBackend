// Simula un login con usuario y contraseña predefinidos.

// - Usuario correcto: `"admin"`
// - Contraseña correcta: `"1234"`

// Pide al usuario que los ingrese y muestra si el acceso es concedido o denegado.


let usuario = prompt("Ingrese el nombre de usuario")
let password = prompt("Ingrese la contraseña")

if(usuario == "admin" && password == 1234) {
    alert("Bienvenido Admin")
} else {
    alert("Acceso denegado")
}