# 📘 7.1 Introducción a MongoDB

## 🧩 Qué es MongoDB y Bases de Datos No Relacionales
Introducción a las bases de datos no relacionales

Las bases de datos no relacionales, también conocidas como NoSQL, se caracterizan por una estructura más flexible en comparación con las bases de datos relacionales tradicionales.
Mientras que las bases de datos relacionales organizan los datos en tablas con filas y columnas, las bases de datos no relacionales emplean diferentes modelos de almacenamiento, como documentos, pares clave-valor, gráficos, o almacenamiento en memoria, lo que les permite adaptarse mejor a ciertas aplicaciones modernas.

---

### ⚖️ Diferencias clave entre bases de datos relacionales y no relacionales

**Estructura de los datos**

- Relacionales: Utilizan tablas con esquemas fijos, donde cada tabla define las columnas que los datos deben seguir. Esto asegura consistencia y estructura en los datos.

- No relacionales: No tienen un esquema fijo. Los datos pueden ser almacenados como documentos (como en JSON), y cada documento puede tener una estructura diferente, lo que ofrece mayor flexibilidad.

**Escalabilidad**

- Relacionales: Tradicionalmente escalan de manera vertical (añadiendo más recursos a un solo servidor).
- No relacionales: Están diseñadas para escalar horizontalmente (añadiendo más servidores), lo que permite manejar grandes volúmenes de datos y alta demanda.

**Consultas**

- Relacionales: Utilizan SQL (Structured Query Language) para realizar consultas complejas, uniendo tablas y aplicando diversas condiciones.
- No relacionales: Las consultas suelen ser más simples y se realizan directamente sobre los documentos o datos almacenados, lo que puede resultar en un rendimiento más rápido para ciertas operaciones.

---

## 🍃 ¿Qué es MongoDB?

MongoDB es una de las bases de datos no relacionales más populares, conocida por ser una base de datos orientada a documentos.
En lugar de almacenar los datos en tablas como en las bases de datos relacionales, MongoDB almacena los datos en documentos similares a JSON (JavaScript Object Notation), llamados BSON (Binary JSON), lo que permite una estructura más flexible y dinámica.

---

### 🌟 Características principales de MongoDB

- Modelo de documentos: Los datos se almacenan en documentos BSON que permiten una estructura flexible, ideal para datos que cambian con frecuencia o no siguen una estructura rígida.

- Escalabilidad horizontal: MongoDB está diseñado para escalar horizontalmente, permitiendo distribuir los datos a través de múltiples servidores para manejar grandes volúmenes de datos y aumentar la disponibilidad.

- Consultas ad-hoc y agregación: Ofrece potentes capacidades de consulta y funciones de agregación en tiempo real, lo que facilita el acceso y análisis de los datos.

- Alta disponibilidad y distribución geográfica: Soporta replicación automática y distribución de datos entre múltiples ubicaciones geográficas, asegurando disponibilidad y redundancia.

---

### 📊 Importancia de MongoDB en el manejo de grandes volúmenes de datos

En el contexto de aplicaciones modernas que manejan grandes volúmenes de datos —como aplicaciones web y móviles, redes sociales y sistemas de big data—, MongoDB se destaca por su capacidad para manejar datos de manera eficiente y flexible.

Su arquitectura distribuida y su modelo de datos no relacional permiten almacenar y acceder a grandes cantidades de información de manera ágil, respondiendo rápidamente a los cambios y demandas del mercado.

MongoDB es especialmente útil cuando:

- Los datos son semiestructurados o no estructurados.

- Se requiere alto rendimiento y escalabilidad.

- Las aplicaciones necesitan actualizarse rápidamente con nuevos tipos de datos sin modificar un esquema predefinido.

> En resumen, MongoDB y otras bases de datos no relacionales son herramientas esenciales en el desarrollo de aplicaciones modernas que requieren flexibilidad, escalabilidad y rendimiento al manejar grandes volúmenes de datos.

---

## ⚙️ Instalación y Configuración de MongoDB
### 🚀 Primeros Pasos con MongoDB

MongoDB es una base de datos no relacional orientada a documentos, diseñada para ser flexible y escalable.
A continuación se describen las operaciones básicas iniciales que permiten interactuar con MongoDB:
la creación de bases de datos, la creación de colecciones y la inserción de documentos.

---

### 🗄️ Creación de bases de datos en MongoDB

En MongoDB, las bases de datos se crean automáticamente cuando se hace referencia a ellas por primera vez.
No es necesario ejecutar un comando específico para crearlas; basta con seleccionar una base de datos para que se cree si aún no existe.

Por ejemplo, para trabajar con una base de datos llamada miBaseDeDatos, simplemente se selecciona este nombre, y MongoDB la crea automáticamente si aún no existe.

---

### 📚 Creación de colecciones en MongoDB

Una colección en MongoDB es similar a una tabla en una base de datos relacional.
Las colecciones se crean dentro de una base de datos y se utilizan para almacenar documentos.
Al igual que las bases de datos, las colecciones se crean automáticamente la primera vez que se insertan documentos en ellas.

Si se desea crear una colección de forma explícita, se puede utilizar una operación específica para este fin.
Por ejemplo, si necesitas crear una colección llamada usuarios, puedes hacerlo antes de comenzar a insertar documentos.

---

## ✏️ Inserción de documentos en MongoDB

Los documentos en MongoDB son las unidades básicas de datos, similares a las filas en una tabla relacional.
Cada documento está compuesto por pares clave-valor, donde las claves son los nombres de los campos y los valores son los datos correspondientes.

Para insertar un documento en una colección, se realiza una operación de inserción.
Esto permite agregar uno o más documentos a la colección, definiendo los valores que se desean almacenar.

Por ejemplo, para insertar un documento en la colección usuarios, simplemente se especifican los datos del documento y se ejecuta la inserción.

---

# 📗 7.2 Operaciones CRUD en MongoDB
## 🧩 Operaciones CRUD en MongoDB
Explicación detallada de las operaciones CRUD en MongoDB

MongoDB es una base de datos no relacional orientada a documentos que permite almacenar datos en un formato flexible y escalable.
Las operaciones CRUD son fundamentales para interactuar con cualquier base de datos, y en MongoDB se implementan de manera específica.
A continuación, se detalla cada una de estas operaciones con ejemplos prácticos utilizando la línea de comandos (CLI) de MongoDB.

---

### 🟢 1. Crear (Create)

La operación de Crear permite agregar nuevos documentos a una colección dentro de una base de datos.
Un documento en MongoDB es un conjunto de datos que se almacena en formato similar a JSON, lo que permite flexibilidad en la estructura.

Ejemplo práctico:
Imaginemos que tenemos una colección llamada estudiantes y queremos agregar un nuevo estudiante.
Utilizando la CLI, podemos ejecutar un comando para insertar un nuevo documento con los datos del estudiante, como su nombre, apellido y curso.

---

### 🔵 2. Leer (Read)

La operación de Leer se utiliza para recuperar documentos de una colección.
Puedes buscar un solo documento, varios documentos o todos los documentos que cumplan con ciertos criterios.

Ejemplo práctico:
Si deseas consultar los datos de todos los estudiantes que están inscritos en un curso específico, puedes realizar una consulta que devuelva solo aquellos documentos que coincidan con los criterios de búsqueda especificados.

---

### 🟠 3. Actualizar (Update)

La operación de Actualizar permite modificar los datos de uno o varios documentos en una colección.
Puedes cambiar valores existentes o añadir nuevos campos a un documento.

Ejemplo práctico:
Supongamos que necesitamos actualizar la información de un estudiante, cambiando su curso o añadiendo una nueva dirección de correo electrónico.
Con la CLI, se puede especificar qué documento actualizar y qué cambios realizar.

---

### 🔴 4. Eliminar (Delete)

La operación de Eliminar se utiliza para borrar documentos de una colección.
Puede eliminar un único documento o varios documentos que cumplan con ciertos criterios.

Ejemplo práctico:
Si un estudiante se ha dado de baja, podemos eliminar su registro de la colección estudiantes utilizando un comando que especifique el criterio de búsqueda del documento a eliminar.

---

### 🧾 Resumen

Las operaciones CRUD en MongoDB permiten gestionar de manera efectiva los datos dentro de las colecciones.
Cada operación se realiza a través de comandos simples en la CLI, lo que facilita la interacción con la base de datos.

Estas operaciones son esenciales para cualquier aplicación que necesite manipular datos en MongoDB, ofreciendo flexibilidad y control sobre cómo se almacenan y se recuperan los datos.

---

## ⚙️ Realización de Operaciones CRUD
### 🔍 Consulta y Manipulación de Documentos
Profundización en la manipulación de documentos en MongoDB

MongoDB es una base de datos no relacional que destaca por su flexibilidad al manejar grandes volúmenes de datos estructurados y no estructurados.
Una de sus capacidades más poderosas es la manipulación de documentos mediante consultas complejas y la modificación de múltiples documentos de manera simultánea.
A continuación, exploraremos estas capacidades en profundidad.

--- 

### 🧠 1. Consultas Complejas en MongoDB

Las consultas complejas en MongoDB permiten extraer datos específicos de una colección mediante el uso de filtros avanzados.
Estas consultas son fundamentales cuando se trabaja con grandes volúmenes de datos y se necesita obtener información precisa.

### 🔑 Conceptos Clave para Consultas Complejas:

- Filtros Avanzados:
MongoDB permite aplicar filtros utilizando operadores como
$gt (mayor que), $lt (menor que), $in (pertenencia a un conjunto), $or (operador lógico “o”), entre otros.
Estos operadores ayudan a refinar las búsquedas y obtener conjuntos de datos que cumplan con criterios específicos.

- Proyecciones:
Al realizar una consulta, es posible limitar los campos que se devuelven en el resultado.
Esto se logra especificando una proyección, lo cual es útil para reducir la cantidad de datos transferidos y simplificar la estructura de los resultados.

- Ordenamiento, Skips y Limits:
MongoDB permite ordenar los resultados, omitir documentos (skip) y limitar la cantidad de resultados devueltos (limit).
Esto es especialmente útil en paginación y visualización ordenada de datos.

Ejemplo práctico:
Imagina que quieres obtener una lista de productos en una tienda en línea que estén dentro de un rango de precios específico, ordenar los resultados por popularidad y limitar la salida a los 10 primeros resultados.
En MongoDB, puedes combinar filtros, proyecciones y ordenamientos para lograrlo.

---

### 🧩 2. Modificación de Múltiples Documentos Simultáneamente

En MongoDB, es común necesitar modificar varios documentos a la vez.
Esto puede ser necesario, por ejemplo, al realizar una actualización masiva de datos o al corregir errores en múltiples registros.

### 🔧 Conceptos Clave para Modificaciones Masivas:

- Actualización Masiva:
MongoDB permite actualizar múltiples documentos que cumplan con un criterio específico.
Esto se realiza utilizando comandos que permiten modificar solo ciertos campos de los documentos seleccionados, sin necesidad de reemplazar completamente los documentos.

- Operadores de Actualización:
Algunos operadores comunes son:

- $set: establece un valor específico en un campo.

- $inc: incrementa un valor numérico.

- $unset: elimina un campo de un documento.

- Opciones Avanzadas:
Al actualizar documentos, se puede usar la opción upsert, que inserta un nuevo documento si no se encuentra ninguno que cumpla con los criterios de búsqueda.

Ejemplo práctico:
Considera una base de datos de empleados donde se necesita incrementar el salario de todos aquellos que hayan cumplido 5 años en la empresa.
Con una sola operación, MongoDB permite aplicar esta modificación a todos los documentos que cumplan con esta condición.

---

# 📘 7.3 Optimización y Uso Avanzado de MongoDB
## ⚙️ Proyecciones, Ordenamiento y Paginación
### 🧠 Consultas Optimizadas en MongoDB

MongoDB ofrece diversas herramientas para optimizar las consultas y mejorar el rendimiento al trabajar con grandes volúmenes de datos.
Estas herramientas incluyen proyecciones, ordenamiento y paginación, que permiten refinar las consultas y gestionar los resultados de manera más eficiente.
A continuación, se explica cómo utilizar estas técnicas con ejemplos prácticos.

---

### 🟩 1. Proyecciones en MongoDB

Las proyecciones permiten seleccionar únicamente los campos necesarios de un documento al realizar una consulta.
Esto reduce la cantidad de datos transferidos desde la base de datos, mejorando significativamente el rendimiento, especialmente cuando los documentos tienen muchos campos o solo se requieren algunos.

### 🔑 Conceptos Clave:

- Selección de Campos:
Al realizar una consulta, puedes especificar qué campos incluir en los resultados.
Se utiliza una proyección donde se asigna el valor 1 para incluir un campo o 0 para excluirlo.

**Ejemplo práctico:**
Imagina que tienes una colección de productos y deseas obtener solo los nombres y precios, sin cargar descripciones o fechas de creación.
Mediante una proyección, puedes limitar los resultados a estos campos específicos, mejorando la velocidad de la consulta y reduciendo la carga del sistema.

---

### 🟦 2. Ordenamiento en MongoDB

El ordenamiento es esencial cuando necesitas presentar los resultados en un orden específico, por ejemplo, ordenar productos por precio o usuarios por fecha de registro.
MongoDB permite ordenar los resultados de una consulta en orden ascendente o descendente.

### 🔑 Conceptos Clave:

- Orden Ascendente y Descendente:
Se define el orden de los resultados usando:

- 1 → orden ascendente

- -1 → orden descendente
También se puede ordenar por varios campos simultáneamente.

**Ejemplo práctico:**
Supongamos que tienes una colección de artículos y necesitas mostrar los más recientes primero.
Puedes ordenar los resultados por el campo fechaCreacion en orden descendente, de modo que los artículos más recientes aparezcan primero.

---

### 🟨 3. Paginación en MongoDB

La paginación permite dividir los resultados de una consulta en partes más pequeñas o “páginas”, ideal para manejar grandes conjuntos de datos.
Esto mejora la experiencia del usuario al cargar solo una parte de los resultados en lugar de todo el conjunto.

### 🔑 Conceptos Clave:

- Skip y Limit:
MongoDB utiliza los parámetros `skip` y `limit` para implementar la paginación.

- `skip(n)` omite los primeros n documentos.

- `limit(m)` limita la cantidad de documentos devueltos a m.
Esto es útil, por ejemplo, para mostrar 10 resultados por página.

**Ejemplo práctico:**
En una aplicación de tienda en línea, la galería de productos muestra solo los primeros 10 elementos.
A medida que el usuario navega por las páginas, `skip` omite los productos ya vistos y `limit` asegura que solo se muestren 10 productos por página.

---

### 🧾 Resumen

Las técnicas de proyecciones, ordenamiento y paginación en MongoDB son herramientas fundamentales para optimizar el rendimiento de las consultas.
Estas permiten:

- Reducir la cantidad de datos transferidos.

- Presentar resultados ordenados según las necesidades del usuario.

- Dividir grandes volúmenes de información en partes manejables.

Implementarlas correctamente mejora la eficiencia y experiencia del usuario, aspectos clave en el desarrollo backend moderno.

---

### 🔄 Actualización y Eliminación Avanzada de Documentos

MongoDB permite realizar actualizaciones y eliminaciones avanzadas mediante operadores y filtros complejos.
Estas operaciones son especialmente útiles cuando se requiere modificar o eliminar múltiples documentos con precisión y eficiencia.

- Actualizaciones avanzadas: permiten modificar varios campos o documentos simultáneamente usando operadores como `$set`, `$inc`, `$push` o `$unset`.

- Eliminaciones avanzadas: se pueden aplicar filtros complejos para borrar grupos de documentos que cumplan con condiciones específicas, evitando operaciones manuales repetitivas.

---

### 🧩 Resumen de la Unidad: CRUD y MongoDB

En esta unidad se exploraron las operaciones fundamentales y técnicas avanzadas para la manipulación de datos en MongoDB.
Esta base de datos no relacional, orientada a documentos, destaca por su flexibilidad y escalabilidad, lo que la convierte en una herramienta poderosa para el desarrollo backend moderno.

🔹 1. Operaciones CRUD en MongoDB

Las operaciones CRUD (Create, Read, Update, Delete) son la base de toda interacción con una base de datos.

- Crear (Create): inserta nuevos documentos en una colección.

- Leer (Read): recupera información mediante consultas simples o complejas.

- Actualizar (Update): modifica los datos existentes en uno o varios documentos.

- Eliminar (Delete): borra documentos individuales o múltiples según criterios.

--- 

🔹 2. Técnicas Avanzadas de Consulta y Manipulación de Datos

Además de las operaciones CRUD, MongoDB ofrece herramientas avanzadas para optimizar el manejo de datos.

- Consultas Complejas: permiten usar operadores como `$gt`, `$lt`, `$in`, `$or`, entre otros, para filtrar información con precisión.

- Proyecciones: devuelven únicamente los campos necesarios, optimizando rendimiento.

- Ordenamiento: organiza los resultados en orden ascendente o descendente.

- Paginación: mejora la visualización de grandes volúmenes de datos mediante `skip` y `limit`.

- Modificación Masiva: facilita actualizaciones múltiples usando operadores como `$set` y `$inc`.