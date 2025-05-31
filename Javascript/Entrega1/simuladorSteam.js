/* Simulacion de Steam */

/* Constantes */
const userData = {
    name: "Cesar",
    password: 2904,
    saldo: 100
}

const coleccJuegos = [
    {name: "Lies of P", price: 30},
    {name: "Elden Ring", price: 60},
    {name: "Hollow Knight", price: 10},
    {name: "Sekiro Die Twice", price: 35},
    {name: "Cuphead", price: 20}
]

// agregar juegos para hacer testeos
const misJuegos = []

/* Funciones */

/**
 * Despliega el menu de opciones
 * @returns {number}
 */
function menu() {
    let opcion = Number(prompt(
        'Que deseas hacer hoy ? \n'+
        '1: Comprar juego \n'+
        '2: Ver lista de juegos \n'+
        '3: Ver mis juegos \n'+
        '4: Ver mi juego mas caro \n'+
        '5: Ver mi juego mas barato \n'+
        '6: Cerrar sesion'
    ))
    opcion = validarOpcion(opcion)
    return opcion
}

/**
 * Valida que el usuario ingrese una opcion correcta
 * @param {number} opcion 
 * @returns {number}
 */
function validarOpcion(opcion) {
    while(opcion < 1 || opcion > 8) {
        alert("Ingrese una opcion correcta: ")
        opcion = Number(prompt(
            '1: Comprar juego \n'+
            '2: Ver lista de juegos \n'+
            '3: Ver mis juegos \n'+
            '4: Ver mi juego mas caro \n'+
            '5: Ver mi juego mas barato \n'+
            '6: Cerrar sesion \n'
        ))
    }
    return opcion
}

/**
 * Despliega la lista de juegos de Steam
 * @param {array}
 * @returns {string}
 */
function desplegarJuegos(array) {
    let cadena = ''
    for(let i=0; i<array.length; i++) {
        cadena += array[i].name+ ' - Precio: '+array[i].price + "$\n"
    }
    return cadena
}

/**
 * Despliega la lista de juegos de Steam
 * @param {array}
 * @returns {string}
 */
function desplegarMisJuegos(array) {
    let cadena = ''
    for(let i=0; i<array.length; i++) {
        cadena += array[i].name+ ' - Horas: '+array[i].hs + "\n"
    }
    return cadena
}

/**
 * Busca el juego que el usuario quiere comprar
 * @param {string}
 * @returns {object} 
 */
function buscarJuego(juegoCompra) {
    juegoCompra = achicaNombre(juegoCompra)
    let encuentra = false
    let i = 0

    while(encuentra == false && i<coleccJuegos.length) {
        let juegoI = achicaNombre(coleccJuegos[i].name);
        if(juegoCompra == juegoI) {
            return coleccJuegos[i]
        }
        i++
    }
    if(encuentra == false) {
        return null 
    }
}

/**
 * Convierto la cadena de texto a minus y las junto para una mejor comparacion
 * @param {string}
 * @returns {string}
 */
function achicaNombre(cadena) {
    cadena = cadena.toLowerCase();
    cadena = cadena.trim()
    return cadena
}

/**
 * Verifica si el usuario ya tiene este juego
 * @param {object}
 * @returns {object}
 */
function verificaSiTiene(juego) {
    let i = 0
    if(misJuegos.length > 0) {
        while(i<misJuegos.length) {
            if(achicaNombre(misJuegos[i].name) == achicaNombre(juego.name)) {
                return true
            }
            i++
        }
        return false
    } else {
        return false
    }
}

/**
 * Devuelve el juego mas caro de mi biblioteca de juegos
 * @return {object}
 */
function videoJuegoMasCaro(array) {
    let precioJuegoMasCaro = -1
    let juegoMasCaro

    if(array.length == 0) {
        return null
    } else {
        array.forEach(juego => {
            if(juego.price > precioJuegoMasCaro) {
                precioJuegoMasCaro = juego.price
                juegoMasCaro = juego
            }
        });
    }
    console.log(juegoMasCaro)
    return juegoMasCaro
}

/**
 * Devuelve el juego mas jugado de mi biblioteca de juegos
 * @returns {object}
 */
function videoJuegoMasJugado(array) {
    let hsJuegoMasJugado = -1
    let juegoMasJugado

    if(array.length == 0) {
        return null
    } else {
        array.forEach(juego => {
            if(juego.hs > hsJuegoMasJugado) {
                hsJuegoMasJugado = juego.hs
                juegoMasJugado = juego
            }
        });
    }
    return juegoMasJugado
}

/* Login de la cuenta */
alert("Bienvenido!")
let user = prompt("Ingrese su usuario: ")
let pass = prompt("Ingrese su contraseña: ")

// userData.name userData.password
// let user = "Cesar" 
// let pass = 2904

if(user == userData.name && pass == userData.password) {
    
    let salir = false
    alert(`Bienvenido! ${user}`)
    do {
        /* Primer menu antes de escoger una opcion */
        let cadenaJuegos = ''
        let opcion
        opcion = menu()
        switch(opcion) {
            /* Comprar juego */
            case 1: 
            /* Declaracionde variables */
            let juegoComprado
            let respuesta 
            let juego 
            let juegoCompra = ''

            cadenaJuegos = desplegarJuegos(coleccJuegos) 
            juegoCompra = prompt('Que juego desea comprar ? \n' + cadenaJuegos)
            console.log(juegoCompra)
            juego = buscarJuego(juegoCompra)
            juegoComprado = verificaSiTiene(juego)
            console.log(juegoComprado)

            if(juego == null) {
                alert("No existe el juego")
                /* Verifico que el objeto tenga alguna clave y que no lo haya comprado antes */
            } else if(Object.keys(juego).length > 0 && juegoComprado == false) {
                respuesta = confirm(`Desea comprar ${juego.name} ?`)
                if(respuesta && userData.saldo > juego.price) {
                    alert("Gracias por comprar en Steam!")
                    misJuegos.push({ name: juego.name, price: juego.price, hs: (Math.floor(Math.random() * 9) + 1) *10 })
                    userData.saldo = userData.saldo - juego.price
                } else if(userData.saldo < juego.price) {
                    alert("Saldo insuficiente")
                    console.log(userData.saldo)
                } else {
                    alert("En otra ocasion sera!")
                }
            } else if(juegoComprado){
                alert("Ya tienes este juego")
            }
            
            break
            /* Ver lista de juegos */
            case 2:
            cadenaJuegos = desplegarJuegos(coleccJuegos) 
            alert('Juegos de Steam \n'+cadenaJuegos)
            break
            /* Ver mis juegos */
            case 3:
            cadenaJuegos = desplegarMisJuegos(misJuegos)
            if(cadenaJuegos == '') {
                alert("No tienes juegos en tu biblioteca")
            } else {
                alert('Tus juegos: \n'+ cadenaJuegos)
            }
            break
            /* Ver mi juego mas caro */
            case 4:
            let juegoMasCaro
            console.log(misJuegos[0])
            juegoMasCaro = videoJuegoMasCaro(misJuegos) 
            if(juegoMasCaro == null) {
                alert("No tienes juegos comprados")
            } else {
                alert(`Tu juego mas caro es: ${juegoMasCaro.name} \n`)
            }
            break
            /* Ver mi juego con mas hs jugadas */
            case 5:
            let juegoMasJugado
            console.log(misJuegos[0])
            juegoMasJugado = videoJuegoMasJugado(misJuegos)
            if(juegoMasJugado == null) {
                alert("No has jugado ningun juego aun")
            } else {
                alert(`Tu juego mas jugado es: ${juegoMasJugado.name} con: ${juegoMasJugado.hs}hs`)
            }
            break
            /* Cerrar sesion */
            case 6:
                alert(`Hasta luego! ${user}`)
                salir = true
            break
        }
    } while(!salir)
} else {
    alert("Usuario y/o contraseña incorrecta")
}