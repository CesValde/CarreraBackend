/* 
    Función que recibe altura y peso.
    Calcula el IMC y retorna: Bajo peso, Normal, Sobrepeso.
*/

function calcularIMC(altura, peso) {
    altura = altura * altura
    calculo = peso / altura

    if(calculo < 18.5) {
        imc = "bajo peso"
    } else if(calculo >= 18.5 && calculo <= 24.9) {
        imc = "Peso saludable"
    } else {
        imc = "Sobrepeso"
    }
    return imc 
}

let imc = calcularIMC(1.66, 57)
alert(imc)