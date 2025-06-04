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

const{total, cantidad} = acumulador[alumno]     // desestructuración de objeto, acumulador y alumno son objetos

/* itera objetos */
for(const{alumno, nota} of alumnos)
```

# Semana 5
**Clases/Objetos - LocalStorage**