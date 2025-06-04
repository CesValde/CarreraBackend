/* 
    Convierte pesos a otra moneda (USD, EUR, CLP) según tasa fija.
    El usuario elige la moneda.
    Función devuelve el monto convertido.
*/

let coin = prompt("ingrese la moneda que desea convertir")
let usd = 100000
let eur = 20000
let clp = 2342742837

switch(coin) {
    case "usd":     
        montoConvertido = usd / 1200
    break
    case "eur": 
        montoConvertido = eur / 1300
    break
    case "clp": 
        montoConvertido = clp / 7
    break
}

alert(montoConvertido)