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

Enlaces y rutas:
**Enlaces Relativos**
```javascript
/* 
  Los enlaces relativos apuntan a recursos ubicados en la misma estructura o servidor que la página actual.
  Son útiles cuando se enlaza a otros documentos o recursos dentro del mismo sitio web 
*/
<a href="pagina2.html">Ir a la página 2</a>
/* 
  pagina2.html está en el mismo directorio que la página actual. El enlace llevará al usuario a pagina2.html cuando se haga clic. 
*/

/* Subdirectorio */
<a href="carpeta/pagina3.html">Ir a la página 3</a>
/* Este enlace apunta a pagina3.html dentro de la carpeta carpeta. */

/* Directorio Padre */
<a href="../pagina4.html">Ir a la página 4</a>
/* Este enlace navega un nivel hacia arriba en la estructura de directorios antes de buscar pagina4.html */
```

**Enlaces Absolutos**
```javascript
// Los enlaces absolutos especifican la ruta completa a un recurso, incluyendo el protocolo (como http:// o https://), el dominio, y la ruta completa del archivo.

<a href="https://www.ejemplo.com/pagina2.html">Visitar Ejemplo</a>
```

**Enlaces Internos**
```javascript
// Anclas en la misma pagina
<a href="#seccion1">Ir a la Sección 1</a>
...
<h2 id="seccion1">Sección 1</h2>
// En este ejemplo, el enlace lleva al usuario directamente a la sección etiquetada con id="seccion1" dentro de la misma página.

// Enlaces internos a otras páginas:
<a href="pagina2.html#seccion2">Ir a la Sección 2 en Página 2</a>
/* Este enlace lleva al usuario a seccion2 dentro de pagina2.html. */
```

# Semana 8 
**Asincronismo**

**Ejecucion sincronica**
se refiere a la ejecución de código de manera secuencial, donde cada línea de código se ejecuta una después de la otra. Esto significa que una operación debe completarse antes de que la siguiente comience. Si una de las operaciones toma mucho tiempo (por ejemplo, una solicitud a un servidor remoto), las demás deben esperar, lo que puede hacer que una aplicación sea lenta o no responda.
```javascript
console.log("Inicio");
let resultado = operacionLenta(); // Supongamos que esta función tarda 5 segundos en completarse
console.log("Resultado:", resultado);
console.log("Fin");
```
En este caso, hasta que `operacionLenta` no termine, el programa no continuará con la siguiente línea.

**Ejecución Asincrónica**
permite que el código siga ejecutándose sin necesidad de esperar a que una operación termine. Esto es especialmente útil cuando trabajamos con tareas que pueden tardar un tiempo en completarse, como solicitudes de red, operaciones de lectura/escritura en archivos, o temporizadores.
```javascript
console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Fin");
```
En este ejemplo, `setTimeout` permite que el mensaje dentro de su función se muestre después de 2 segundos, mientras que el programa continúa ejecutando las siguientes líneas sin esperar.

**Call Stack**
```javascript
function first() {
    console.log("Primera función");
    second();
    console.log("Primera función - Parte 2");
}

function second() {
    console.log("Segunda función");
}

first();
```
En este ejemplo, la función ```first()``` se apila primero, luego ```second()```, y después de que ```second()``` termina, se vuelve a ```first()``` hasta que todas las funciones son desapiladas.

**Event Loop**
Es el mecanismo que permite a JavaScript manejar operaciones asincrónicas, como temporizadores y solicitudes HTTP, a pesar de ser single-threaded. Mientras que el Call Stack maneja las funciones sincrónicas, el Event Loop supervisa la cola de tareas (también llamada Callback Queue), donde se colocan las operaciones asincrónicas una vez que están listas para ser ejecutadas.

Cómo funciona
Cuando el Call Stack está vacío, el Event Loop toma la primera tarea de la Callback Queue y la coloca en el Call Stack para su ejecución.
Este proceso continúa, asegurando que las tareas asincrónicas se ejecuten cuando el hilo principal esté libre.
```javascript
console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Fin");
```
En este ejemplo, setTimeout coloca la función en la Callback Queue, y el Event Loop la ejecuta después de 2 segundos, una vez que el Call Stack esté vacío.

**setTimeout**
setTimeout ejecuta una función después de un período de tiempo especificado, expresado en milisegundos. Este método es útil para programar una tarea que debe realizarse después de un retraso, como mostrar un mensaje emergente o realizar una actualización en la interfaz de usuario.

**setInterval**
La función setInterval es similar a setTimeout, pero en lugar de ejecutar una función solo una vez después de un retraso, la ejecuta repetidamente en intervalos regulares. Esto es útil para tareas que necesitan realizarse periódicamente, como actualizar un reloj en pantalla o verificar el estado de una solicitud de red.

```javascript
setInterval(function, intervaloEnMilisegundos);

console.log("Inicio");
setInterval(() => {
    console.log("Esto se ejecuta cada 1 segundo");
}, 1000);
```

**Cancelación de Temporizadores**
Tanto setTimeout como setInterval pueden ser cancelados si ya no es necesario ejecutar la tarea programada. Para ello, se utilizan los métodos clearTimeout y clearInterval, respectivamente.
```javascript
let temporizador = setTimeout(() => {
    console.log("Esto no se verá nunca");
}, 3000);
clearTimeout(temporizador); // Cancela la ejecución del setTimeout

let intervalo = setInterval(() => {
    console.log("Esto no se verá repetidamente");
}, 1000);
clearInterval(intervalo); // Cancela la ejecución del setInterval
```

# Semana 8 
**Manejo del asincronismo y errores**
**¿Qué es el Call Stack?**
El Call Stack (o pila de llamadas) es una estructura de datos en la que se registran las funciones que están siendo ejecutadas en un programa. Cada vez que se invoca una función, esta se apila en el Call Stack. Cuando una función termina de ejecutarse, se desapila, y el control se devuelve a la función anterior en la pila.
**Qué es el Event Loop**
El Event Loop es el mecanismo que permite a JavaScript manejar operaciones asincrónicas, como temporizadores y solicitudes HTTP, a pesar de ser single-threaded. Mientras que el Call Stack maneja las funciones sincrónicas, el Event Loop supervisa la cola de tareas (también llamada Callback Queue), donde se colocan las operaciones asincrónicas una vez que están listas para ser ejecutadas.
Cómo funciona:
- Cuando el Call Stack está vacío, el Event Loop toma la primera tarea de la Callback Queue y la coloca en el Call Stack para su ejecución.
- Este proceso continúa, asegurando que las tareas asincrónicas se ejecuten cuando el hilo principal esté libre.

```setTimeout()```
La función setTimeout ejecuta una función después de un período de tiempo especificado, expresado en milisegundos. Este método es útil para programar una tarea que debe realizarse después de un retraso, como mostrar un mensaje emergente o realizar una actualización en la interfaz de usuario.
```setTimeout(función, tiempoEnMilisegundos);```
```javascript
console.log("Inicio");
setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);
```

```setInterval```
La función setInterval es similar a setTimeout, pero en lugar de ejecutar una función solo una vez después de un retraso, la ejecuta repetidamente en intervalos regulares. Esto es útil para tareas que necesitan realizarse periódicamente, como actualizar un reloj en pantalla o verificar el estado de una solicitud de red.
```setInterval(función, intervaloEnMilisegundos);```
```javascript
console.log("Inicio");
setInterval(() => {
    console.log("Esto se ejecuta cada 1 segundo");
}, 1000);
```


Mejores Prácticas para el Manejo de Errores en JavaScript
1. Utilizar el Bloque try-catch-finally
- ```try```: Encierra el código que puede lanzar una excepción. Este bloque intenta ejecutar el código y, si se produce un error, el control pasa al bloque ```catch```.
- ```catch```: Captura y maneja las excepciones. Aquí puedes proporcionar mensajes de error claros, realizar acciones de recuperación, o simplemente registrar el error.
- ```finally```: Se ejecuta siempre, independientemente de si se capturó o no una excepción. Es ideal para liberar recursos o realizar tareas de limpieza.
```javascript
try {
    // Código que podría generar un error
} catch (error) {
    console.error("Error:", error.message);
} finally {
    // Código que se ejecuta siempre
}
```
2. Lanzar Errores Apropiadamente
- Utiliza throw para lanzar errores personalizados cuando detectes condiciones en las que el código no pueda continuar correctamente.
- Asegúrate de proporcionar mensajes de error informativos que ayuden a identificar y solucionar el problema.
```javascript
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return a / b;
}
```
3. Evitar Capturar Errores Silenciosamente
- Es tentador capturar todos los errores y no hacer nada con ellos, pero esto puede llevar a problemas más difíciles de depurar.
- Asegúrate de registrar los errores o de manejar adecuadamente las excepciones para no perder información importante.
Ejemplo INCORRECTO
```Javascript
try {
    // Código que podría generar un error
} catch (error) {
    // No hacer nada, no recomendado
}
```
4. Manejo de Errores Asincrónicos
- En funciones asíncronas, usa try-catch junto con async-await para manejar errores.
- Para promesas, utiliza catch para capturar errores que ocurran durante la ejecución de la promesa.
```Javascript
async function fetchData() {
    try {
        let response = await fetch('<https://api.example.com/data>');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// ejemplo con promesas
fetch('<https://api.example.com/data>')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```
5. Registrar Errores
- Mantén un registro de los errores en un sistema de logging o en un servicio externo. Esto es esencial para el mantenimiento y la depuración de aplicaciones en producción.
- Asegúrate de no exponer información sensible en los mensajes de error.
```Javascript
function logError(error) {
    // Implemente un sistema de logging aquí
    console.error("Logged Error:", error.message);
}

try {
    // Código que podría fallar
} catch (error) {
    logError(error);
}
```
6. Proveer Retroalimentación al Usuario
- Cuando sea apropiado, informa al usuario sobre los errores, especialmente si afectan su experiencia. Proporciona mensajes claros y, si es posible, soluciones o pasos a seguir.
```Javascript
try {
    // Operación que podría fallar
} catch (error) {
    alert("Algo salió mal. Por favor, intenta nuevamente.");
}
```
7. Pruebas de Manejo de Errores
- Escribe tests que simulen errores para asegurarte de que tu código maneja las excepciones correctamente.
- Las pruebas unitarias deben cubrir los casos en los que se lancen errores, asegurando que el código reaccione como se espera.
```Javascript
test('debería lanzar un error al dividir por cero', () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir por cero.");
});
```