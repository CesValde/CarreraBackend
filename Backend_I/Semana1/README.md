# Introducción a la Programación de Backend

## ¿Qué es la programación de Backend?
La programación de **Backend** se refiere a todo lo que ocurre "detrás de escena" en una aplicación web.  
Mientras que el **Frontend** se ocupa de las interacciones de los usuarios en sus pantallas, el **Backend** es responsable de:

- Lógica del servidor  
- Gestión de bases de datos  
- Autenticación de usuarios  
- Implementación de reglas de negocio  
- Procesamiento de solicitudes y envío de respuestas al frontend  
- Seguridad y coherencia de datos  

En resumen: el Backend es el **cerebro** de la aplicación.

---

## Diferencia entre Frontend y Backend

### Frontend
- Parte visible para el usuario.  
- Incluye diseño, estructura, menús, botones, imágenes, etc.  
- Lenguajes principales: **HTML, CSS, JavaScript**.  
- Frameworks y librerías: **React, Angular, Vue.js**.  
- Enfoque en **UX (experiencia)** y **UI (interfaz)**.

### Backend
- Maneja la **lógica del negocio**.  
- Gestiona bases de datos, autenticación y almacenamiento.  
- Lenguajes y tecnologías: **Node.js, Python, Java, PHP**.  
- Bases de datos: **MySQL, PostgreSQL, MongoDB**.  
- Servidores: **Apache, Nginx**.  

👉 En resumen:  
- **Frontend** = lógica de renderizado (interfaz).  
- **Backend** = lógica funcional (procesamiento).

---

## Stack MERN

### ¿Qué es un stack?
Un *stack de tecnologías* es un conjunto de herramientas, lenguajes y frameworks que se utilizan en conjunto para desarrollar aplicaciones completas.

Un stack suele incluir:  
- **Frontend** (interfaz del usuario).  
- **Backend** (lógica del servidor).  
- **Base de datos** (almacenamiento de datos).  

---

### MERN
El stack **MERN** está formado por:

- **MongoDB** → Base de datos NoSQL que almacena documentos tipo JSON.  
- **ExpressJS** → Framework para Node.js que facilita la creación de APIs y lógica de negocio.  
- **ReactJS** → Biblioteca de JavaScript para construir interfaces de usuario dinámicas.  
- **NodeJS** → Entorno de ejecución para JavaScript en el servidor.  

---

### ¿Cómo trabajan juntas?
1. **Frontend (ReactJS)** → Renderiza la interfaz e interactúa con el usuario.  
2. **Servidor (ExpressJS + NodeJS)** → Procesa solicitudes enviadas desde el frontend.  
3. **Base de Datos (MongoDB)** → Guarda y recupera información.  
4. **Respuesta al Frontend** → Se devuelve la información al usuario (ejemplo: lista de productos).  

---

### Beneficios del Stack MERN
- **Unificación de JavaScript**: Todo el stack usa el mismo lenguaje.  
- **Componentización**: React permite reutilizar componentes.  
- **Escalabilidad y Flexibilidad**: MongoDB maneja grandes volúmenes de datos fácilmente.  
- **Desarrollo Full-Stack**: Posibilidad de crear aplicaciones modernas completas.  

---

## Tipos de Datos en JavaScript

### Tipos primitivos
- **String** → Cadenas de texto. Ejemplo: `"Hola"`  
- **Number** → Números enteros y decimales. Ejemplo: `30`, `36.5`  
- **Boolean** → Valores lógicos: `true` o `false`.  
- **Null** → Ausencia intencional de valor.  
- **Undefined** → Variable declarada pero no inicializada.  

### Tipos de objeto
- **Object** → Pares clave-valor. Ejemplo:  
```js
  const persona = { nombre: "Juan", edad: 25, estudiante: true };
```

---

# Declaración y Uso de Variables en JavaScript

En JavaScript, las **variables** son fundamentales para almacenar y manipular datos en el código.  
Existen tres formas principales de declararlas: **let**, **const** y **var**.  
Cada una tiene un comportamiento distinto en cuanto a **alcance (scope)** y uso recomendado.

---

## Alcance (Scope)

El alcance define **dónde se puede acceder a una variable** dentro del código.  

- **Global** → Accesible desde cualquier parte del programa.  
- **Función** → Accesible solo dentro de la función en la que fue declarada.  
- **Bloque** → Accesible solo dentro del bloque `{}` en el que se declaró (ejemplo: en un `if` o `for`).  

👉 En la práctica, se recomienda usar **let** y **const** en lugar de **var** para evitar errores y mejorar la legibilidad.

---

## Palabras clave para declarar variables

### 🔹 `let`
- Tiene **alcance de bloque**.  
- Su valor puede **cambiar** después de la declaración.  
- Se recomienda usarlo cuando el valor **necesite actualizarse**.  

```js
let edad = 25;
edad = 26; // ✅ permitido
```

---

### 🔹 const

- Tiene alcance de bloque.
- Su valor no puede ser reasignado después de inicializarse.
- Debe inicializarse obligatoriamente en la declaración.
- Si es un objeto o array, sus propiedades o elementos pueden cambiar, pero no se puede reasignar toda la variable.

```js
const nombre = "Juan";
// nombre = "Pedro"; ❌ Error

const numeros = [1, 2, 3];
numeros.push(4); // ✅ permitido
```

---

### 🔹 var

- Forma más antigua de declarar variables.
- Tiene alcance de función o global (ignora el bloque {}).
- Es propensa a errores por el hoisting: las declaraciones se "elevan" al inicio del código.
- No se recomienda en aplicaciones modernas.

```js
var x = 10;
if (true) {
  var x = 20; // ❗ También afecta fuera del bloque
}
console.log(x); // 20
```

---

## Introducción a ECMAScript (ES)

ECMAScript (ES) es el estándar que define cómo funciona JavaScript.
Cada nueva versión trae mejoras de sintaxis y funcionalidad.
Una de las más importantes fue ES6 (2015).

---

## Novedades de ES6

🔹 `let` y `const`

Introducidas para reemplazar el uso de var.

- `let` → alcance de bloque, valor reasignable.
- `const` → alcance de bloque, valor fijo.

---

### 🔹 Funciones Flecha (Arrow Functions)

Sintaxis más concisa y sin su propio this.
Muy útiles en callbacks y métodos de objetos.

```js
// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Función flecha
const sumar = (a, b) => a + b;
```

---

## Beneficios de ES6
- Código más legible y mantenible.
- Mejor control del scope de variables.
- Menos errores relacionados con variables redefinidas o fuera de contexto.
- Funciones flecha simplifican la sintaxis y evitan problemas con this.

---

## Resumen
- Usa let para variables que cambian.
- Usa const para valores que no deben reasignarse.
- Evita var en proyectos modernos.
- ES6 introdujo mejoras clave como let, const y funciones flecha, que hacen el código más limpio y confiable.

---

# Funciones y Scopes en JavaScript

## Funciones en JavaScript
Las **funciones** son bloques de código reutilizables que permiten ejecutar tareas específicas.  
Son esenciales para organizar el código de manera **modular y eficiente**.  

Una función puede:  
- Aceptar **entradas** (parámetros).  
- Devolver un **resultado**.  

---

## Funciones Tradicionales
Se declaran con la palabra clave **`function`**.  
Características:
- Pueden declararse en cualquier parte del código.  
- Son **"hoisted"**, es decir, pueden ser invocadas antes de su definición.  

```js
// Declaración tradicional
function sumar(a, b) {
  return a + b;
}

console.log(sumar(3, 4)); // 7
```

---

## Uso en Desarrollo

- Funciones tradicionales → útiles cuando se requiere controlar el valor de this.
- Funciones flecha → preferibles en callbacks o cuando no se necesita un this propio.
- El uso adecuado de ambas permite escribir un código más limpio, modular y mantenible.

---

## Scopes en JavaScript

El scope (alcance) es el contexto en el cual las variables y funciones pueden ser accedidas.
Define la visibilidad de una variable dentro del código.

---

### Scope Global

- Variables declaradas fuera de funciones o bloques.
- Accesibles desde cualquier parte del programa.
- Permanecen en memoria durante toda la ejecución.
- Pueden causar conflictos si se reutilizan nombres.

```js
let globalVar = "Soy global";

function mostrar() {
  console.log(globalVar); // ✅ accesible
}
mostrar();
```

---

## Scope Local

- Variables declaradas dentro de funciones o bloques.
- Solo accesibles en ese contexto.

### Tipos de scope local:

- De función → válidas solo dentro de la función.
- De bloque → introducido con `let` y `const` en ES6, válidas solo en `{}`.

```js
function prueba() {
  let localVar = "Soy local";
  console.log(localVar); // ✅ accesible dentro
}
console.log(localVar); // ❌ Error: no definida
```

Ejemplo con bloque:

```js 
if (true) {
  let bloqueVar = "Dentro del bloque";
  console.log(bloqueVar); // ✅
}
console.log(bloqueVar); // ❌ Error
```

---

## Importancia del Scope

- Controla qué variables están disponibles en cada parte del programa.
- Ayuda a evitar sobrescrituras accidentales.
- Mejora la seguridad, modularidad y mantenibilidad del código.

👉 Entender el scope es clave para escribir JavaScript limpio y sin errores.

---

# Template Strings, Clases y Objetos en JavaScript

## Template Strings en JavaScript

Las **template strings** (cadenas de plantilla) fueron introducidas en **ES6** y permiten crear cadenas de texto de forma más sencilla y flexible en JavaScript.  
A diferencia de las cadenas tradicionales que usan comillas simples o dobles, las template strings se definen con **acentos graves** (`` ` ``).

### Uso de Template Strings
Las template strings permiten **insertar variables y expresiones directamente** en la cadena, sin necesidad de concatenar manualmente.  
Para esto se utiliza la sintaxis:

```js
`Texto con una variable: ${variable}`
```

---

## Ventajas sobre la concatenación tradicional

- Legibilidad: el código es más claro y fácil de mantener.
- Inserción directa: se evitan errores al no usar + para concatenar.
- Expresiones complejas: dentro de ${} se pueden incluir operaciones, funciones o expresiones más avanzadas.

✅ En resumen, las template strings simplifican el manejo de cadenas en JavaScript y ofrecen mayor potencia y flexibilidad que la concatenación tradicional.

---

## Clases y Objetos en JavaScript

En JavaScript, una clase es un molde para crear objetos que comparten propiedades y métodos comunes.
Forman parte de la programación orientada a objetos (OOP), lo que permite organizar el código de manera más modular y mantenible.

### Definición de una Clase

Para definir una clase se utiliza la palabra clave class y dentro de ella se suele incluir un constructor, que inicializa las propiedades del objeto.

```js
class Coche {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  arrancar() {
    return `${this.marca} ${this.modelo} está arrancando...`;
  }
}
```

### Propiedades

Son las características de un objeto (ejemplo: marca, modelo, año).
Se definen dentro del constructor y se asignan con this.

### Métodos

Son funciones dentro de una clase que describen el comportamiento del objeto.
En el ejemplo anterior, arrancar() es un método de la clase Coche.

### Creación de Instancias

Una instancia es un objeto creado a partir de una clase, usando la palabra clave new.

```js
const coche1 = new Coche("Toyota", "Corolla", 2020);
const coche2 = new Coche("Ford", "Mustang", 2021);

console.log(coche1.arrancar()); // Toyota Corolla está arrancando...
console.log(coche2.arrancar()); // Ford Mustang está arrancando...
```

Cada instancia tiene sus propios valores de propiedades, pero comparte los mismos métodos definidos en la clase.

---

## Conclusión

- Las template strings permiten un manejo más limpio y flexible de cadenas en JavaScript.
- Las clases proporcionan una forma clara de crear objetos organizados con propiedades y métodos.
- El uso conjunto de estas características de ES6 ayuda a escribir aplicaciones más estructuradas, reutilizables y fáciles de mantener.