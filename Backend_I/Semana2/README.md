# Introducción a las Funcionalidades Avanzadas de ECMAScript

## Principios Básicos de JavaScript y ECMAScript

JavaScript es un lenguaje de programación esencial en el desarrollo web, utilizado tanto en el **frontend** como en el **backend**. Desde su creación, ha evolucionado significativamente, y gran parte de esta evolución ha sido guiada por **ECMAScript**, que define los estándares del lenguaje.

**ECMAScript (ES)** es un conjunto de especificaciones que aseguran la consistencia y compatibilidad de JavaScript a lo largo del tiempo.

La llegada de **ES6 (ECMAScript 2015)** marcó un punto de inflexión, ya que a partir de esta versión se considera a JavaScript un lenguaje “moderno”.  
Entre las incorporaciones más importantes se encuentran:

- `const` y `let`  
- **Template Strings**  
- **Funciones Flecha**  
- **for...of**  
- **Clases**  
- **Promesas (Promises)**  
- Métodos de string: `includes()`, `startsWith()` y `endsWith()`  
- **Modules (import/export)**  

---

## Nuevas Funcionalidades de ES7 y ES8

Con el lanzamiento de **ES7 (ECMAScript 2016)** y **ES8 (ECMAScript 2017)**, JavaScript continuó su evolución con la incorporación de funcionalidades clave que permitieron desarrollar aplicaciones más limpias, eficientes y modernas.

### 🔹 ES7 — ECMAScript 2016

**1. Operador exponencial (`**`)**  
Proporciona una forma más directa y clara de realizar operaciones de exponenciación, reemplazando la necesidad de usar `Math.pow()`.

```js
// Ejemplo
console.log(3 ** 2); // 9
```


**2. Array.prototype.includes()**
Permite verificar si un array contiene un determinado elemento, mejorando la legibilidad al trabajar con colecciones.

```js
// Ejemplo
const frutas = ["manzana", "banana", "pera"];
console.log(frutas.includes("banana")); // true
```

### 🔹 ES8 — ECMAScript 2017

**1. Async/Await**
Transformó la forma de manejar operaciones asíncronas en JavaScript.
Permite escribir código que parece síncrono, pero funciona de manera asíncrona, facilitando la comprensión y reduciendo la complejidad del manejo de promesas.

```js
// Ejemplo
async function obtenerDatos() {
  const respuesta = await fetch("https://api.example.com/datos");
  const datos = await respuesta.json();
  console.log(datos);
}
```

**2. Object.entries() y Object.values()**
Facilitan la manipulación de objetos al permitir iterar sobre sus claves y valores de forma simple y eficiente.

```js
// Ejemplo
const usuario = { nombre: "Ana", edad: 25 };

console.log(Object.entries(usuario)); // [["nombre", "Ana"], ["edad", 25]]
console.log(Object.values(usuario));  // ["Ana", 25]
```

# ECMAScript Avanzado - ES9 a ES11 ⚙️

## 🚀 Introducción a ES9 (ECMAScript 2018)

**ECMAScript 9 (ES9)** introdujo nuevas funcionalidades que mejoraron la **eficiencia**, **claridad** y **mantenibilidad** del código JavaScript.  
Entre las más destacadas se encuentran el método `finally` para promesas y los operadores `rest` y `spread`, que facilitan la gestión de errores y la manipulación de datos.

---

### 🔸 Método `finally()` para Promesas

El método `finally()` permite ejecutar código después de que una promesa se haya **resuelto o rechazado**, sin importar el resultado.  
Es ideal para tareas de **limpieza**, como cerrar conexiones, detener animaciones o liberar recursos.

```js
fetch("https://api.example.com/datos")
  .then(res => res.json())
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Operación finalizada ✅"));
```

**✅ Ventajas:**

- Garantiza la ejecución de código sin importar el resultado.
- Mejora la legibilidad y el mantenimiento del código.

---

**🔹 Operadores rest (...) y spread (...)**

Estos operadores simplifican la manipulación de arrays y objetos, haciendo el código más limpio y flexible.
En ES9, se amplió su uso para trabajar también con objetos.

**🧩 Operador rest**

Agrupa varios argumentos en un solo array dentro de una función.

```js
function sumar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}

console.log(sumar(1, 2, 3)); // 6
```

**🪄 Operador spread**

Expande los elementos de un array o las propiedades de un objeto en otro contexto.

```js
const base = [1, 2];
const extendido = [...base, 3, 4];
console.log(extendido); // [1, 2, 3, 4]
```

🟢 Beneficios: código más limpio, sin duplicación y con mejor manejo de estructuras complejas.

---

### ⚡ ES10 (ECMAScript 2019) — Dinamicidad y Eficiencia

ES10 introdujo nuevas características enfocadas en optimizar la carga de módulos y mejorar la manipulación de datos.

---

### 🔸 Importación Dinámica (import())

Permite cargar módulos bajo demanda, solo cuando son necesarios, reduciendo el tiempo de carga inicial.

```js
import("./module.js")
  .then(module => module.funcion())
  .catch(err => console.error("Error al cargar módulo:", err));
```

**✨ Ventajas:**

- Mejora el rendimiento.
- Facilita el code splitting.
- Carga funcionalidad opcional solo cuando se necesita.

---

### 🔹 Método Array.flat()

Simplifica el aplanamiento de arrays anidados, convirtiéndolos en estructuras planas.

```js
const arr = [1, 2, [3, 4, [5, 6]]];
const plano = arr.flat(2);
console.log(plano); // [1, 2, 3, 4, 5, 6]
```

**✅ Ventajas:**

- Código más limpio y legible.
- Manipulación eficiente de datos anidados.

---

### 🧼 Métodos de Limpieza en Strings

- `trim()` → elimina espacios al inicio y final.

- `trimStart()` → elimina espacios al principio.

- `trimEnd()` → elimina espacios al final.

```js
const texto = "   Hola Mundo   ";
console.log(texto.trim()); // "Hola Mundo"
```

---

### 🧠 ES11 (ECMAScript 2020) — Precisión y Seguridad

ES11 introdujo dos grandes innovaciones que fortalecen la seguridad y la claridad del código:

---

### 🔸 Operador Nullish (??)

Permite asignar valores predeterminados solo cuando un valor es `null` o `undefined`.
A diferencia de `||`, no considera falsy valores como `0`, `""` o `false`.

```js
const cantidad = 0;
console.log(cantidad ?? 10); // 0 ✅
console.log(cantidad || 10); // 10 ❌
```

**🧩 Ventajas:**

- Evita reemplazos incorrectos.
- Mejora la precisión en asignaciones.

---

### 🔹 Variables Privadas en Clases (#)

Permiten declarar propiedades privadas dentro de una clase, mejorando la encapsulación y la seguridad del código.

```js
class Usuario {
  #password;

  constructor(nombre, password) {
    this.nombre = nombre;
    this.#password = password;
  }

  verificar(pass) {
    return this.#password === pass;
  }
}

const user = new Usuario("Ana", "1234");
console.log(user.verificar("1234")); // true
console.log(user.#password); // ❌ Error: propiedad privada
```


**🛡️ Ventajas:**

- Oculta datos sensibles.
- Refuerza la integridad del código.
- Fomenta buenas prácticas de OOP.

---

# Programación Sincrónica y Asincrónica en JavaScript
## Diferencias entre Programación Sincrónica y Asincrónica

En la programación, los conceptos de **sincronismo** y **asincronismo** son fundamentales para entender cómo se manejan las tareas y cómo se ejecuta el código. Estos enfoques determinan cómo se organizan y procesan las operaciones, y cada uno tiene características y aplicaciones particulares.

---

### 🕒 Sincronismo

El **sincronismo** se refiere a un modelo de ejecución donde las tareas se procesan en **secuencia**, una después de otra.  
Cada operación debe completarse antes de que la siguiente comience.

✅ **Ventajas:**
- Flujo lógico y predecible.  
- Fácil de entender y depurar.

⚠️ **Desventajas:**
- Si una tarea tarda mucho (por ejemplo, leer un archivo o hacer una solicitud a un servidor), **bloquea el programa completo** hasta terminar.

#### Ejemplo de Código Síncrono:
```js
console.log("Inicio");
console.log("Leyendo archivo...");
console.log("Fin");
```

➡️ El programa ejecuta cada línea de manera secuencial, sin pasar a la siguiente hasta terminar la anterior.

---

### ⚡ Asincronismo

El asincronismo permite que múltiples tareas se ejecuten al mismo tiempo, sin esperar que una termine antes de empezar otra.
Es ideal para operaciones que toman tiempo, como solicitudes a APIs o acceso a bases de datos.

Cuando una tarea asíncrona finaliza, se ejecuta una función que maneja el resultado (por ejemplo, un callback o una promesa), sin bloquear el flujo principal del programa.

Ejemplo de Código Asíncrono:
```js
console.log("Inicio");
setTimeout(() => console.log("Tarea asíncrona completada"), 2000);
console.log("Fin");
```

➡️ El mensaje “Fin” se muestra antes que el mensaje de la tarea asíncrona.

--- 

### Impacto en la Ejecución de Tareas en JavaScript

JavaScript está diseñado como un lenguaje asíncrono y no bloqueante.
Gracias a su Event Loop, puede ejecutar varias tareas sin detener la interfaz del usuario ni interrumpir otras operaciones.

Esto es esencial en aplicaciones web modernas, donde:

- Se cargan datos desde un servidor.
- Se actualiza la interfaz sin recargar la página.
- Se manejan múltiples eventos simultáneamente.

---

### Callbacks y su Uso en JavaScript

Un callback es una función pasada como argumento a otra función, que se ejecuta una vez que una tarea ha terminado.
Son fundamentales para manejar la asincronía en operaciones como peticiones HTTP o temporizadores.

Ejemplo de Callback:

```js
function obtenerDatos(callback) {
  setTimeout(() => {
    console.log("Datos cargados");
    callback();
  }, 2000);
}

obtenerDatos(() => console.log("Procesando datos..."));
```

✅ Ventajas de los Callbacks

- Mantienen la naturaleza no bloqueante de JavaScript.
- Permiten definir qué hacer cuando una tarea asíncrona termina.

⚠️ Limitaciones

- Pueden provocar el temido **"Callback Hell"**, cuando los callbacks se anidan dentro de otros, haciendo el código difícil de leer y mantener.

---

### Promesas: Solución al Callback Hell

Las promesas se introdujeron para resolver los problemas de anidación y mejorar la gestión de operaciones asíncronas.

Una promesa es un objeto que representa el resultado eventual de una operación asíncrona:

- `pending` → en espera

- `fulfilled` → completada con éxito

- `rejected` → falló

Ejemplo Básico:

```js
new Promise((resolve, reject) => {
  const exito = true;
  if (exito) resolve("Operación completada");
  else reject("Ocurrió un error");
})
.then(resultado => console.log(resultado))
.catch(error => console.error(error));
```

✅ Ventajas de las Promesas

- Facilitan el manejo de errores.
- Evitan la anidación excesiva.
- Permiten encadenar operaciones de forma limpia con `.then()` y `.catch()`.

---

### Async y Await: Código Asíncrono más Claro

Con la llegada de ES8, se introdujeron las palabras clave `async` y `await`, que simplifican aún más el manejo de promesas.
Permiten escribir código asíncrono con una sintaxis similar al código síncrono, mejorando la legibilidad.

Ejemplo:

```js
async function fetchData() {
  try {
    const respuesta = await fetch("https://api.example.com/data");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}
```

✅ Ventajas de async/await

- Código más limpio y legible.
- Evita el uso excesivo de .then().
- Manejo de errores más intuitivo con try/catch.