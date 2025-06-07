> Cada carpeta tendra los metodos utlizados (para tener en cuenta para una mayor facilidad de busqueda entre carpetas) 

# Semana 1 
**Intro - variables/tipos de datos**
```javascript
let variable
const PI 
let coleccion = []
```

# Semana 2
**Condicionales - Bucles**
```javascript
/* Muestra un cartel con el texto envuelto */
alert()

/* Caja de texto para el usuario */
prompt()

/* condional if */
if(x > 10) {
    alert(`${x} es mayor a 10`)
} else {
    alert(`${x} es menor a 10`)
}

while(seguir) {
    'escribe esto'
}

switch(opcion) {
    case opcionX: 
        alert(`esta opcion es la ${opcionX}`)
    break
    case opcionY:
        alert(`esta opcion es la ${opcionY}`)
    break
    default:
        alert(`esta opcion es la default`)
}
```

# Semana 3
**Funciones**

# Semana 4
**Arrays - Objetos**
```javascript

/* Metodos arrays */
push()      // añade uno o más elementos al final de un array. Este método modifica el array original y devuelve la nueva longitud del array.
pop()       // elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
shift()     // elimina el primer elemento del array y lo devuelve, desplazando todos los elementos restantes a una posición inferior.
unshift()   // añade uno o más elementos al inicio del array y devuelve la nueva longitud del array.
indexOf()   // devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente. es sensible a tipos de datos, es decir, diferencia entre números, strings, etc
includes()  // determina si un array contiene un determinado elemento, retornando true o false según corresponda
join()      // herramienta esencial para convertir un array en una cadena de texto, permitiendo especificar un separador entre los elementos del array.

/* se utiliza para encontrar el índice del primer elemento de un array que cumpla con una condición especificada en una función. Si ningún elemento cumple con la condición, devuelve -1. */
findIndex(elem => elem.nombre === nombre)

/* se usa para crear un nuevo array que contiene solo los elementos que cumplen una condición especificada por una función. */
filter((elem) => elem.nota < 6)

/* Ordena de mayor a menor */
sort((a,b) => a-b)

/* Elimina el/los elementos index del array */
splice(index, 1)

const{total, cantidad} = acumulador[alumno]     // desestructuración de objeto, acumulador y alumno son objetos

/* itera objetos */
for(const{alumno, nota} of alumnos)
```

# Semana 5
**Clases/Objetos - LocalStorage**

# Semana 6 
**Funciones de orden superior**
```javascript
/* ForEach */
array.forEach((elem), index, array) {
    console.log(`Element at index ${index}: ${elem}`);
}

/* Util para encontrar el primer valor que cumpla una condicion de un array */
find((elem), elem.x > valor)

/* Util para convertir un array en otro nuevo */
map((x) => x * 2)

/* Funciones de orden superior */
const numeros = [1, 2, 3, 4];

function porCadaUno(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);   // fn es console.log() en este ambito
    }
}
porCadaUno(numeros, console.log);
// 1
// 2
// 3
// 4

// Reduce() Este método ejecuta una función reductora en cada elemento del array (de izquierda a derecha), acumulando el resultado en un valor único */
/*  Sintaxis:
    indiceActual (opcional): El índice del elemento actual.
    array (opcional): El array original sobre el cual se está aplicando el método reduce.
*/
array.reduce(function(acumulador, valorActual, indiceActual, array) {
    // Código para combinar acumulador y valorActual
}, valorInicial);

/* Contar la cantidad de ocurrencias de elementos en un array: */
const frutas = ['manzana', 'banana', 'naranja', 'manzana', 'naranja', 'banana', 'banana'];

const conteoFrutas = frutas.reduce(function(conteo, fruta) {
    conteo[fruta] = (conteo[fruta] || 0) + 1;
    return conteo;
}, {});     // Ese {} es un objeto vacío, y ese objeto se convierte en el acumulador inicial llamado conteo.

console.log(conteoFrutas);
// { manzana: 2, banana: 3, naranja: 2 }
```

# Semana 7 
```javascript
/* getElementById() Se utiliza para acceder a un único elemento del DOM que tiene un atributo id específico */
// HTML de referencia
/* 
<div id="app">
  <p id="parrafo1">Hola Mundo</p>
</div> 
*/
let elemento = document.getElementById('parrafo1')

/* getElementByClassName() se usa para obtener todos los elementos que tienen una clase específica. */
// HTML de referencia
/* 
<ul>
  <li class="paises">AR</li><li class="paises">CL</li><li class="paises">UY</li>
</ul> 
*/
let paises = document.getElementById('paises')

/* getElementsByTagName() permite acceder a todos los elementos del DOM que tienen un nombre de etiqueta específico */
// HTML de referencia
/* 
<div>
  <div>CONTENEDOR 2</div><div>CONTENEDOR 3</div>
</div> 
*/
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML); // Muestra "CONTENEDOR 2"
console.log(contenedores[1].innerHTML); // Muestra "CONTENEDOR 3"

/* querySelectors permite seleccionar el primer elemento del DOM que coincida con uno o más selectores CSS especificados. Metodo útil cuando se necesita acceder rápidamente a un solo elemento que cumpla con ciertos criterios, utilizando la misma sintaxis que se usa en CSS */
let elemento = document.querySelector('selector-css');
let elemento = document.querySelectorAll('selector-css');

```