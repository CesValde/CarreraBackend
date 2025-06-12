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
```javascript
/* Funcion flechas */
const saludar = () => {
  console.log("Hola mundo");
};

/* Declaracion de funcion */
function saludar(nombre) {
  return `Hola, ${nombre}`;
}

/* Funcion anonima */
setTimeout(function() {
  console.log("Hola desde una función anónima");
}, 1000);

```

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

Clase:
```javascript
class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }

    describir() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Calle: ${this.calle}`;
    }
}
// Crear un nuevo objeto Persona
const persona1 = new Persona("Ana", 25, "Calle Falsa 123");
console.log(persona1.describir());
```

Local/Session Storage:
```javascript
/* local storage */
// Guardar datos
localStorage.setItem('usuario', 'JuanPerez');
// Obtener datos
let usuario = localStorage.getItem('usuario');
console.log(usuario); // 'JuanPerez'
// Eliminar datos
localStorage.removeItem('usuario');

/* Session Storage */
// Guardar datos
sessionStorage.setItem('detalleCompra', 'Libro de JavaScript');
// Obtener datos
let detalle = sessionStorage.getItem('detalleCompra');
console.log(detalle); // 'Libro de JavaScript'
// Eliminar datos al cerrar la pestaña
sessionStorage.removeItem('detalleCompra');

/* Para recuperar objeto en json */
let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
```

# Semana 6 
**Funciones de orden superior**

forEach, ejemplo de orden superior(porCadaUno):
```javascript
/* ForEach */
array.forEach((elem), index, array) {
    console.log(`Element at index ${index}: ${elem}`);
}

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
```

reduce, map, find:
```javascript
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

/* Util para convertir un array en otro nuevo */
map((x) => x * 2)

/* Util para encontrar el primer valor que cumpla una condicion de un array */
find((elem), elem.x > valor)
```

# Semana 7 
**Elementos del DOM**
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
let elemento = document.querySelector('selector-css')
let elemento = document.querySelectorAll('selector-css')
```

Modificar nodos existentes:
```javascript
/* innerHTML: Este método permite leer o modificar el contenido HTML interno de un elemento. Se utiliza para actualizar todo el contenido de un nodo de una sola vez. */
let contenedor = document.getElementById('contenedor')
contenedor.innerHTML = '<h2>Nuevo título</h2><p>Nuevo párrafo</p>'

/* innerText / textContent: Permiten modificar el texto dentro de un nodo. innerText considera el estilo y el renderizado actual, mientras que textContent devuelve el contenido textual sin tener en cuenta el estilo. */
let titulo = document.getElementById('titulo')
titulo.innerText = 'Texto actualizado'

/* setAttribute(): Se usa para modificar o establecer un nuevo atributo en un elemento. */
let enlace = document.querySelector('a')
enlace.setAttribute('href', 'https://www.example.com')
```

Añadir nodos:
```javascript
/* createElement(): Este método permite crear un nuevo elemento en el DOM. */
let nuevoDiv = document.createElement('div')
nuevoDiv.innerHTML = '<p>Este es un nuevo div</p>'
document.body.appendChild(nuevoDiv);

/* appendChild(): Añade un nodo como el último hijo de un nodo padre. */
let lista = document.getElementById('lista')
let nuevoItem = document.createElement('li')
nuevoItem.textContent = 'Nuevo ítem'
lista.appendChild(nuevoItem)

/* insertBefore(): Inserta un nodo antes de un nodo hijo específico. */
let primerItem = lista.firstChild
lista.insertBefore(nuevoItem, primerItem)
```

Eliminar nodos:
```javascript
/* removeChild(): Este método elimina un nodo hijo de un elemento. */
let itemAEliminar = document.getElementById('item')
lista.removeChild(itemAEliminar)

/* remove(): Elimina directamente el nodo seleccionado. */
let elemento = document.getElementById('elemento')
elemento.remove()
```

Inyección de Variables y Expresiones en el DOM:
```javascript
const nombre = "Juan";
const edad = 30;
const contenedor = document.getElementById('info');
contenedor.innerHTML = `
  <h2>Información del Usuario</h2>
  <p>Nombre: ${nombre}</p>
  <p>Edad: ${edad}</p>
`
```

Incluir Expresiones Complejas:
```javascript
const productos = [
  { nombre: "Arroz", precio: 125 },
  { nombre: "Fideos", precio: 70 },
  { nombre: "Pan", precio: 50 }
]

const contenedor = document.getElementById('productos');
contenedor.innerHTML = `
  <h2>Lista de Productos</h2>
  <ul>
    ${productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('')}
  </ul>
`
```