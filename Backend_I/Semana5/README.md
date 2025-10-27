# 📘 5.1. Implementación de Handlebars en Express

## 🧩 Introducción a los Motores de Plantillas

Un **motor de plantillas** es una herramienta utilizada en el desarrollo web para generar documentos **HTML dinámicos** basados en datos.  
Permiten inyectar contenido dinámico en páginas HTML estáticas, haciendo que los sitios web sean más interactivos y personalizables según la información disponible.  
Esto es especialmente útil en aplicaciones donde el contenido debe cambiar en función del usuario, las interacciones o los datos provenientes de una base de datos.

---

## 💡 Importancia de los Motores de Plantillas

En el desarrollo web, los motores de plantillas facilitan la creación de sitios web que parecen dinámicos y personalizados, aunque su estructura subyacente sea estática.  
Permiten **separar la lógica de negocio del código HTML**, mejorando la organización del código y la reutilización de componentes.

### 🛍️ Ejemplo de Uso

Imagina un sitio web de comercio electrónico donde se muestra una lista de productos.  
Con un motor de plantillas, puedes tener una plantilla HTML estándar para el diseño de la página, mientras que el motor se encarga de llenar esa plantilla con los detalles específicos de los productos —como **nombre, precio e imagen**— generando dinámicamente la página final que ve el usuario.

---

## ⚖️ Diferencias entre Motores de Plantillas y Frameworks Frontend

### 🔧 Motores de Plantillas

- **Funcionalidad:** Se utilizan en el **servidor** para generar HTML dinámico.  
  El servidor procesa la plantilla y los datos, y devuelve una página completamente renderizada al navegador.  
- **Ejemplos:** EJS, Pug (Jade), Handlebars.  
- **Uso principal:** Ideal para aplicaciones que deben generar contenido HTML dinámico en el servidor antes de enviarlo al cliente  
  (blogs, sitios de noticias, CMS, e-commerce).

### ⚙️ Frameworks Frontend

- **Funcionalidad:** Operan en el **navegador**, construyendo interfaces dinámicas directamente en el cliente.  
  Manejan el DOM y la interactividad sin recargar toda la página.  
- **Ejemplos:** React, Angular, Vue.js.  
- **Uso principal:** Perfectos para **Single Page Applications (SPA)** con alta interactividad y actualización dinámica.

---

## 🌐 Utilidad en Diferentes Contextos

### 🖥️ Contextos donde los Motores de Plantillas son Útiles

- Aplicaciones web tradicionales (blogs, foros, tiendas online).  
- Mejor rendimiento en SEO y accesibilidad.  
- Entornos con recursos limitados, donde la lógica se ejecuta del lado del servidor.

### ⚡ Contextos donde los Frameworks Frontend son Preferibles

- Aplicaciones SPA con actualizaciones rápidas.  
- Interfaces con alta interactividad o manejo complejo de estados.

---

## 🧠 Conclusión

Los **motores de plantillas** son esenciales para generar contenido dinámico desde el servidor.  
Aunque su propósito difiere del de los frameworks frontend, **ambos son complementarios** en el desarrollo moderno.  
Saber **cuándo usar cada uno** permite construir aplicaciones más **eficientes, accesibles y mantenibles**.

---

## 🛠️ Configuración de Handlebars en Express

### 🧱 Creación de Plantillas con Handlebars

**Handlebars** es un motor de plantillas popular que permite generar HTML dinámico mediante plantillas predefinidas.  
Facilita la separación entre **lógica y presentación**, mejorando la mantenibilidad del código.

---

## 🧩 Estructura de Plantillas en Handlebars

Se suelen utilizar varios archivos para definir las partes de la página.  
Los más comunes son:

### 1️⃣ `main.handlebars`

Actúa como **plantilla base o layout**.  
Define la estructura general (encabezado, pie de página, y cuerpo).

#### 🧠 Ejemplo Conceptual

- **Encabezado:** Logo, menú de navegación, estilos principales.  
- **Cuerpo:** Marcador de contenido `{{{body}}}` donde se insertará el contenido de cada vista.  
- **Pie de página:** Enlaces de contacto, términos, scripts generales.

---

### 2️⃣ `index.handlebars`

Es una plantilla **específica**, que hereda la estructura de `main.handlebars`.  
Aquí se define el contenido propio de cada página.

#### 🧠 Ejemplo Conceptual

- **Título de la página.**  
- **Contenido dinámico:** Listas de productos, artículos recientes, información institucional, etc.

---

## 🔄 Pasar Datos Dinámicos a las Plantillas

Una de las características más potentes de Handlebars es su capacidad de **inyectar datos dinámicos** en las plantillas.

### 🔹 Pasos para Pasar Datos Dinámicos

1. **Definir la plantilla:**  
   En `index.handlebars`, coloca expresiones Handlebars como `{{variable}}` donde se insertarán los datos.

2. **Configurar el servidor:**  
   En tu aplicación Express, establece Handlebars como motor de plantillas.

3. **Pasar los datos desde el servidor:**  
   Al manejar una ruta, pasa un objeto al método `render`.  
   Los valores se reemplazarán en la plantilla automáticamente.

#### 💻 Ejemplo Conceptual

```handlebars
<!-- index.handlebars -->
<h1>Hola {{nombre}}</h1>
```

```js
// En tu servidor Express
app.get("/", (req, res) => {
  res.render("index", { nombre: "Juan" });
});
```

➡️ **Resultado:** Handlebars inserta “Juan” en el lugar de `{{nombre}}`.

---

## 🧩 Consideraciones Adicionales

### 🧮 Helpers

Funciones personalizadas que permiten realizar lógica adicional dentro de las plantillas (formatear fechas, cálculos, condicionales, etc.).

### 🧱 Parciales

Plantillas **reutilizables** para componentes comunes (botones, tarjetas, encabezados) que pueden incluirse en múltiples vistas.

---

## 🏁 Conclusión

Handlebars es un **motor de plantillas poderoso y flexible** que permite crear páginas web dinámicas y organizadas.  
Al usar plantillas base (`main.handlebars`) y específicas (`index.handlebars`), puedes mantener un **código limpio, modular y reutilizable**.  
La combinación de **datos dinámicos, helpers y parciales** hace de Handlebars una herramienta ideal para construir aplicaciones **eficientes, mantenibles y escalables**.

---

# 🧩 5.2. Estructuras en Handlebars

## 🧠 Uso de Estructuras de Control en Handlebars: `{{#if}}` y `{{#each}}`

Handlebars es un motor de plantillas que permite crear páginas web dinámicas utilizando estructuras de control como `{{#if}}` y `{{#each}}`. Estas estructuras de control son fundamentales para manejar la lógica dentro de las plantillas, permitiendo que el contenido HTML se adapte según los datos proporcionados.

---

### 🔸 `{{#if}}`: Condicionales en Handlebars

La estructura `{{#if}}` se utiliza para evaluar condiciones dentro de una plantilla. Esto permite que ciertas partes del contenido solo se muestren si se cumple una determinada condición. Es similar a las sentencias **if** en otros lenguajes de programación.

#### 🧩 Cómo Funciona

- **Condición Verdadera:** Si la condición dentro de `{{#if}}` se evalúa como verdadera, el bloque de código dentro de la estructura se renderiza.  
- **Condición Falsa:** Si la condición es falsa, el contenido dentro de `{{#else}}` (si está presente) se renderiza en su lugar.

#### 💡 Ejemplo Conceptual

Puedes utilizar `{{#if}}` para mostrar un mensaje solo si un usuario está autenticado.  
Si la variable `usuarioAutenticado` es verdadera, se muestra un mensaje de bienvenida. Si es falsa, se podría mostrar un enlace para iniciar sesión.

---

### 🔸 `{{#each}}`: Iteración en Handlebars

La estructura `{{#each}}` se utiliza para iterar sobre listas o arrays de datos. Esto es útil para generar elementos repetitivos en una página, como una lista de productos, comentarios o usuarios.

#### 🧩 Cómo Funciona

- **Iteración sobre una Lista:** `{{#each}}` recorre cada elemento de un array, y por cada elemento, renderiza el contenido dentro del bloque de código.  
- **Acceso a los Datos:** Dentro del bloque de `{{#each}}`, se puede acceder a las propiedades de cada elemento y mostrarlas en la plantilla.

#### 💡 Ejemplo Conceptual

Imagina que tienes una lista de productos que quieres mostrar en una página.  
Usas `{{#each}}` para recorrer la lista y generar un bloque de HTML para cada producto.

#### 🔢 Uso de `@index`

Dentro de un bloque `{{#each}}`, también puedes acceder al **índice actual** de la iteración utilizando `@index`.  
Esto es útil si necesitas numerar los elementos o aplicar estilos condicionales basados en su posición en la lista.

---

### 🔹 Combinando `{{#if}}` y `{{#each}}`

Es común combinar `{{#if}}` y `{{#each}}` para crear plantillas más dinámicas y complejas.  
Por ejemplo, podrías verificar si una lista de elementos está vacía antes de intentar iterar sobre ella, mostrando un mensaje alternativo si no hay datos disponibles.

#### 💡 Ejemplo Conceptual

Si el array `productos` tiene elementos, se muestra la lista.  
Si no, se muestra un mensaje indicando que no hay productos disponibles.

---

## 🧾 Conclusión

Las estructuras de control `{{#if}}` y `{{#each}}` en Handlebars permiten manejar la lógica de presentación de manera efectiva dentro de las plantillas.  
Con `{{#if}}`, puedes mostrar u ocultar contenido basado en condiciones dinámicas, mientras que `{{#each}}` te permite iterar sobre listas y generar elementos repetitivos de manera eficiente.  
Esto te permite crear plantillas más **dinámicas y personalizadas** según los datos disponibles.

---

## 🧱 Ejercicio Práctico: Uso de Estructuras de Control en Handlebars

En este ejercicio, aplicarás las estructuras de control de Handlebars, como `{{#if}}` y `{{#each}}`, para crear una plantilla dinámica que muestra una lista de elementos y utiliza condicionales para gestionar su presentación.

### 🎯 Objetivo del Ejercicio

Aprender a manejar datos dinámicos dentro de una plantilla Handlebars, utilizando estructuras de control para personalizar la presentación de una lista de elementos según ciertas condiciones.

### 🛍️ Escenario

Imagina que estás creando una página web para una **tienda en línea**.  
Quieres mostrar una lista de productos disponibles, pero también mostrar un mensaje diferente si no hay productos en la lista.  
Además, deseas destacar algunos productos especiales en función de una condición específica, como si están en oferta.

### 🪜 Pasos del Ejercicio

1. **Crear la Lista de Productos:** Comienza con una lista de productos que incluye información como el nombre, el precio, y una indicación de si están en oferta.  
   Esta lista será pasada a la plantilla Handlebars.

2. **Usar `{{#each}}` para Mostrar la Lista:** Utiliza la estructura `{{#each}}` para iterar sobre la lista de productos y mostrar cada uno en la página web.  
   Dentro de este bloque, deberás mostrar el nombre y el precio de cada producto.

3. **Agregar un Condicional con `{{#if}}`:** Dentro del bloque `{{#each}}`, utiliza `{{#if}}` para verificar si un producto está en oferta.  
   Si lo está, muestra un mensaje especial o resalta el producto de alguna manera (por ejemplo, con una etiqueta "En oferta").

4. **Manejo de Listas Vacías:** Usa `{{#if}}` para comprobar si la lista de productos está vacía antes de intentar iterar sobre ella.  
   Si la lista está vacía, muestra un mensaje informando a los usuarios que no hay productos disponibles en este momento.

---

### ✅ Resultado Esperado

Al completar este ejercicio, habrás creado una plantilla Handlebars que muestra dinámicamente una lista de productos y utiliza estructuras de control para manejar tanto la **iteración** como las **condiciones**.  
Esto te permitirá gestionar eficazmente la presentación de datos dinámicos en una aplicación web, asegurando que la interfaz sea **informativa, dinámica y fácil de mantener**, independientemente de los datos que reciba.

---

# ⚙️ 5.3 Routers en Express y su Integración con Handlebars

## 🚀 Función y Uso de Routers en Express

En una aplicación web construida con **Express**, la organización y modularización de las rutas es crucial para mantener un código limpio, mantenible y escalable. Aquí es donde los **routers** juegan un papel fundamental. Los routers en Express permiten dividir y organizar las rutas de la aplicación en módulos separados, lo que facilita el manejo de rutas complejas y mejora la estructura general del proyecto.

---

## 🧭 ¿Qué es un Router en Express?

Un **router** en Express es una instancia separada que gestiona un conjunto de rutas relacionadas. Es similar a la aplicación principal de Express, pero se centra en un conjunto específico de rutas.  
Al utilizar routers, puedes agrupar rutas que están relacionadas por funcionalidad o por un área de la aplicación (por ejemplo, rutas de usuarios, rutas de productos), y luego integrar estos routers en la aplicación principal.

---

## 🧩 Ventajas de Usar Routers en Express

### ✅ Organización del Código
Los routers permiten agrupar rutas relacionadas en módulos separados, lo que facilita la organización del código.  
Por ejemplo, todas las rutas relacionadas con los usuarios pueden estar en un archivo `userRouter.js`, mientras que las rutas de productos pueden estar en `productRouter.js`.

### ✅ Modularidad
Con routers, puedes desarrollar diferentes partes de la aplicación de manera independiente. Esto significa que los desarrolladores pueden trabajar en diferentes áreas del proyecto sin interferir con las demás, lo que es especialmente útil en proyectos grandes.

### ✅ Mantenimiento
Al dividir las rutas en módulos, es más fácil mantener y actualizar la aplicación. Si necesitas modificar una ruta específica, sabes exactamente dónde encontrarla.

### ✅ Escalabilidad
Los routers hacen que la aplicación sea más escalable. A medida que la aplicación crece y se agregan más rutas, se pueden crear nuevos routers o expandir los existentes sin que la estructura general del código se vuelva inmanejable.

---

## 🛠️ Cómo Funcionan los Routers en Express

### 🔹 Creación de un Router
Para crear un router en Express, se utiliza el método `Router()` proporcionado por Express.  
Una vez creado, puedes definir las rutas específicas en este router de la misma manera que lo harías en la aplicación principal.

### 🔹 Integración del Router en la Aplicación Principal
Después de definir las rutas en un router, este se puede integrar en la aplicación principal usando `app.use()`.  
Esto monta el router en una ruta base, desde la cual todas las rutas definidas en ese router estarán disponibles.

---

## 💡 Ejemplo Conceptual

Imagina que tienes una aplicación que gestiona **usuarios** y **productos**. Puedes crear dos routers separados:

- Un router de usuarios (`userRouter.js`) que maneja rutas como:
  - `/users`
  - `/users/:id`
  - `/users/:id/edit`

- Un router de productos (`productRouter.js`) que maneja rutas como:
  - `/products`
  - `/products/:id`
  - `/products/:id/edit`

En la aplicación principal, montarías estos routers así:

```javascript
app.use('/users', userRouter)
app.use('/products', productRouter)
```

De esta forma, todas las rutas relacionadas con **usuarios** estarán bajo `/users`, y las de **productos** bajo `/products`.

---

## 🧱 Modularización

Cada router puede ser exportado como un módulo desde su archivo correspondiente y luego importado en la aplicación principal o en otros módulos según sea necesario.  
Esto refuerza la **modularización del código**, haciendo que cada parte de la aplicación sea fácil de localizar y mantener.

---

## 🏁 Conclusión

Los **routers en Express** son una herramienta poderosa para organizar y modularizar las rutas en una aplicación web.  
Al agrupar rutas relacionadas en módulos separados, los routers facilitan la **gestión**, **escalabilidad** y **mantenibilidad** del código, manteniendo la aplicación ordenada y fácil de expandir.

Utilizar routers de manera efectiva es una práctica esencial para cualquier desarrollador que trabaje con Express, especialmente en proyectos de mayor envergadura.

---

# 📂 5.4. Carga de Archivos con Multer

## 🚀 Carga de Archivos en Express con Multer

En el desarrollo de aplicaciones web, a menudo es necesario permitir que los usuarios suban archivos, como imágenes, documentos o cualquier otro tipo de datos. **Multer** es un *middleware* de **Node.js** para **Express** que facilita la gestión de la carga de archivos de manera eficiente y segura.  
Con Multer, puedes manejar la recepción, validación y almacenamiento de archivos en tu servidor.

---

## 📘 ¿Qué es Multer?

Multer es un *middleware* para **Express** que se utiliza para manejar la carga de archivos en aplicaciones Node.js.  
Se integra fácilmente con Express y permite recibir archivos enviados a través de solicitudes HTTP **POST** o **PUT**.  

Multer procesa estos archivos y los coloca en la memoria o en un directorio específico del servidor, listos para ser manipulados o almacenados permanentemente.

---

## ⚙️ Configuración de Multer en Express

### 🔧 Instalación

Para utilizar Multer en tu aplicación Express, primero debes instalarlo a través de **npm**:

```bash
npm install multer
```

# ⚙️ Configuración Básica

Una vez instalado, puedes configurar **Multer** en tu aplicación **Express**.  
La configuración básica implica crear una instancia de Multer y definir **dónde y cómo** se almacenarán los archivos subidos.

## Configurar el almacenamiento

Multer te permite definir cómo y dónde se guardarán los archivos. Puedes optar por:

- Guardarlos en la memoria como *buffer*.
- Guardarlos en un directorio específico del servidor (por ejemplo, `uploads/`).

## Crear un middleware

Luego de definir el almacenamiento, creas un middleware usando la instancia de Multer, que manejará las solicitudes que contengan archivos.

## Incorporar el middleware en las rutas

Finalmente, incorporas este middleware en las rutas donde esperas recibir archivos.  
Así, **Express** sabrá que debe usar Multer para procesar las cargas en esas rutas.

---

# 💾 Uso de Multer para la Carga de Archivos

## 🧩 Ejemplo Conceptual de Flujo

### Definir el almacenamiento

Configuras Multer para guardar los archivos en una carpeta llamada `uploads/`.  
Puedes personalizar el nombre y la ubicación según tus necesidades.

### Manejo de rutas para carga de archivos

Configuras una ruta como `/upload`, donde los usuarios pueden enviar archivos desde un formulario HTML.  
Esta ruta utiliza el *middleware* de Multer para procesar los archivos.

### Procesar el archivo subido

Una vez subido, puedes acceder a los detalles del archivo (nombre, tipo, tamaño) desde `req.file`.  
Esto te permite almacenarlo, validarlo o procesarlo como desees.

---

## 🧰 Validación y Control de Errores

Multer permite validar los archivos antes de aceptarlos. Puedes comprobar:

- El tipo de archivo (por ejemplo, solo imágenes `.jpg`, `.png`).
- El tamaño máximo permitido.

Si un archivo no cumple los criterios, Multer puede rechazarlo y devolver un error al cliente.

---

## 💡 Ejemplo Conceptual de Uso

Imagina una aplicación de galería de imágenes:

- Usarías Multer para manejar la carga de imágenes subidas por los usuarios.
- Guardarías las imágenes en una carpeta específica (`uploads/`).
- Validarías que los archivos sean imágenes.
- Registrarías su información en una base de datos.

---

## 🧭 Conclusión

**Multer** es una herramienta esencial para cualquier aplicación Express que necesite manejar la carga de archivos.  
Su integración sencilla, flexibilidad de configuración y capacidad de validación lo hacen ideal para manejar archivos de forma eficiente y segura.

Al comprender cómo configurar y utilizar Multer, puedes mejorar la funcionalidad y la experiencia de usuario en tus aplicaciones web.

---

## 🧪 Ejemplo Práctico con Multer

```javascript
import express from 'express';
import multer from 'multer';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('archivo'), (req, res) => {
  console.log(req.file);
  res.send('Archivo subido correctamente ✅');
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));
```

## 🧩 Resumen de la Unidad

En esta unidad, hemos explorado herramientas clave para el desarrollo de aplicaciones web robustas con Express:

🔹 Configuración de Handlebars

- Integración de Handlebars como motor de plantillas.
- Creación de vistas dinámicas con datos pasados desde el servidor.
- Uso de estructuras como {{#if}} y {{#each}} para control y repetición.

🔹 Implementación de Routers

- Creación de routers modulares (userRouter.js, productRouter.js).
- Organización y mantenimiento del código por módulos.
- Montaje en la aplicación principal mediante app.use().

🔹 Uso de Multer

- Configuración del almacenamiento en servidor o memoria.
- Manejo de rutas de carga de archivos (como /upload).
- Validación del tipo y tamaño de archivo.
- Control de errores durante la carga.