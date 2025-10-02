function mostrarLista(array) {

    if(array.length == 0) {
        return "Lista vacia"
    } else {
        array.forEach(element => {
            console.log(element)
        });
        return `La longitud de la lista es: ${array.length}`
    }
}

const array1 = []
const array2 = ['Silksong', 'Lies of P', "Hollow Knight"] 

let resultado = mostrarLista(array1)
console.log(resultado)

resultado = mostrarLista(array2)
console.log(resultado)