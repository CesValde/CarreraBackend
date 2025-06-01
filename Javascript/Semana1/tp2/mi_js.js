/* Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado */
let resultado = 0
do {
    let numero = prompt("Ingrese un numero del 1 al 10 ")
    resultado = resultado + numero 
    console.log(resultado)
}
while(resultado < 50)

/* Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. */
let cadena = ""
let texto = ""
while(texto !== "ESC") {
    texto = prompt("ingrese un texto")
    cadena = cadena + texto
    console.log(cadena)
}

/* Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces */
let numero = prompt("Ingrese un numero")
for(let i = 1 ; i > numero ; i++) {
    console.log("hola")
}