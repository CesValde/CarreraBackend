/* 
    Crear una función que solicite los datos de entrada
    Crear una función que procese la información obtenida.
    Crear una función para mostrar el resultado final
*/

const pedirDatos = () => {
    let nombre= prompt("Ingrese su nombre: ")
    let apellido= prompt("Ingrese su apellido: ")
    saludo = armaDatos(nombre, apellido)
    return saludo
}

const armaDatos = (nombre, apellido) => {
    let saludo = `Hola ${nombre} ${apellido}`
    return saludo 
}

const mostrarSaludo = (saludo) => {
    alert(saludo)
}

let saludo = pedirDatos()
mostrarSaludo(saludo) 