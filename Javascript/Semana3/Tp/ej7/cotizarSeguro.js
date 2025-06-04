/* 
    El usuario elige tipo de vehículo.
    Una función flecha da el precio base.
    Otra función suma recargo por edad del conductor.
*/

const darPrecioBase = (vehiculo) => {
    let precioBase

    if(vehiculo == "auto") {
        precioBase = 50000
    } else {
        precioBase = 25000
    }
    return precioBase
}

function sumaRecargo(precioBase, edad) {
    let total

    total = precioBase + ((precioBase * edad) / 100)
    return total
}

let vehiculo = prompt("Ingrese un tipo de vehiculo: ") 
let precioBase = darPrecioBase(vehiculo)
let total = sumaRecargo(precioBase, 23)
alert("El total a pagar es de: " + total)