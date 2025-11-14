# 8.1 Introducción a Mongoose y Configuración de MongoDB Atlas

## 🧩 Introducción a Mongoose

**Mongoose** es una herramienta esencial en el desarrollo de aplicaciones **Node.js** que interactúan con bases de datos **MongoDB**.  
Se trata de un **ODM (Object Document Mapping)**, lo que significa que permite mapear documentos de MongoDB a objetos en nuestra aplicación, facilitando la gestión de datos y simplificando las operaciones CRUD (**Create, Read, Update, Delete**).

---

### 📘 ¿Qué es Mongoose?

Mongoose actúa como una **capa intermedia** entre nuestra aplicación Node.js y la base de datos MongoDB.  
Nos permite definir **esquemas** que dictan la estructura de los documentos dentro de las colecciones, asegurando que los datos almacenados cumplan con un formato predefinido.  

Esto es especialmente útil en bases de datos NoSQL como MongoDB, donde los datos no están estrictamente tipados.

---

### 🧠 Importancia de Mongoose en la Gestión de Datos

La principal ventaja de Mongoose radica en la capacidad de definir **modelos** que representan las colecciones de la base de datos y sus respectivos documentos.  
Estos modelos nos permiten:

- ✅ **Validación de Datos:** Asegurar que los datos ingresados cumplan con ciertos criterios antes de ser almacenados.  
- 🔍 **Consultas Simples y Complejas:** Facilitar la creación de consultas para obtener, modificar o eliminar documentos.  
- ⚙️ **Middleware:** Ejecutar lógica adicional durante las operaciones (guardar, actualizar, eliminar).  
- 🔗 **Gestión de Relaciones:** Permite simular relaciones entre documentos usando referencias y poblaciones.

---

### 🧱 Conceptos Básicos

Para comenzar a trabajar con Mongoose, es importante entender algunos conceptos clave:

- **Schema:** Define la estructura de los documentos dentro de una colección, incluyendo tipos de datos, valores por defecto y validaciones.  
- **Model:** Es una clase que se crea a partir de un *schema* y representa una colección en la base de datos.  
- **Document:** Es una instancia de un modelo que representa un registro específico en la base de datos.

---

### 🏁 Conclusión

**Mongoose** es una herramienta poderosa que facilita la interacción con bases de datos **MongoDB** en aplicaciones **Node.js**, proporcionando una forma estructurada de definir y validar los datos.  
Su uso simplifica muchas tareas comunes al trabajar con bases de datos NoSQL, convirtiéndolo en una elección popular por su **eficiencia, flexibilidad y seguridad**.

---

## 🧮 Clientes de Base de Datos y DBaaS

### 💡 Concepto de Clientes de Base de Datos

Un **cliente de base de datos** es cualquier software o aplicación que se conecta a una base de datos para realizar operaciones **CRUD** (crear, leer, actualizar, eliminar).  
Cada vez que accedemos a una base de datos para realizar estas operaciones, actuamos como **clientes** de esa base.

---

### 🧰 Tipos de Clientes de Base de Datos

#### 🖥️ CLI (Command Line Interface)
Interfaz de línea de comandos que permite interactuar con la base de datos mediante comandos.  
Ideal para usuarios avanzados que desean control total sobre las operaciones.

#### 🪟 GUI (Graphical User Interface)
Proporciona una interfaz visual para interactuar con la base de datos mediante botones, menús y formularios.  
**Ejemplo:** *MongoDB Compass*, que permite visualizar y manejar bases de datos MongoDB de manera intuitiva.

#### 🌐 Web
Permite acceder y gestionar bases de datos desde el navegador.  
**Ejemplo:** *MongoDB Atlas*, una plataforma DBaaS con interfaz web para manejar bases de datos desde cualquier lugar.

#### 📱 App
Clientes diseñados para integrarse directamente con aplicaciones en lenguajes como **Node.js** o **Python**.  
Permiten realizar operaciones CRUD programáticamente, sin intervención manual.

---

### ☁️ Importancia de Utilizar un Servicio DBaaS como MongoDB Atlas

Un **DBaaS (Database as a Service)** es un servicio que permite gestionar bases de datos en la nube sin preocuparse por la infraestructura subyacente.  
**MongoDB Atlas** es un ejemplo destacado que ofrece múltiples ventajas:

- 📈 **Escalabilidad:** Escala horizontal o verticalmente según las necesidades de la aplicación, sin interrupciones.  
- 🧑‍💻 **Facilidad de Gestión:** El servicio se encarga del mantenimiento, seguridad y respaldos.  
- 🌍 **Accesibilidad:** Acceso remoto desde cualquier ubicación, ideal para colaboración entre equipos.  
- 🔒 **Seguridad:** Ofrece autenticación, cifrado y copias de seguridad automáticas, garantizando protección y disponibilidad.

---

### 🧭 Conclusión General

MongoDB Atlas y Mongoose conforman una combinación ideal para el desarrollo de aplicaciones modernas con **Node.js**.  
Mongoose facilita la estructuración y validación de datos, mientras que Atlas simplifica la administración de la base de datos en la nube, ofreciendo **escalabilidad, seguridad y rendimiento**.

---

# 📘 8.2 Instalación y Configuración de Mongoose en Node.js

## ⚙️ Instalación de Mongoose

### 🧩 Preparación del Entorno de Desarrollo

Antes de instalar **Mongoose** en un proyecto **Node.js**, es importante asegurarse de que el entorno de desarrollo esté correctamente configurado. A continuación, se detallan los pasos necesarios para preparar el entorno:

---

### ✅ Instalar Node.js y npm

**Node.js** es un entorno de ejecución para JavaScript en el servidor, y **npm (Node Package Manager)** es su gestor de paquetes. Ambos deben estar instalados en tu sistema.

📥 Puedes descargar Node.js desde su sitio oficial.  
La instalación de Node.js incluirá automáticamente npm.

Verifica que ambos estén correctamente instalados ejecutando en la terminal:

```bash
node -v   # Verificar la versión de Node.js
npm -v    # Verificar la versión de npm
```

--- 

### 📁 Crear un Proyecto Node.js

Crea un directorio para tu proyecto y accede a él desde la terminal.

Ejecuta el siguiente comando para inicializar un nuevo proyecto Node.js:

`npm init`

📦 Esto creará un archivo package.json que gestionará las dependencias del proyecto.

---

### 🚀 Instalar Express (opcional)

Si tu proyecto requiere un servidor web, puedes instalar Express, un framework muy utilizado en Node.js.

`npm install express --save`

---

### 🧠 Instalación de Mongoose

Mongoose es un ODM (Object Document Mapping) que facilita la interacción con bases de datos MongoDB desde Node.js.

**📥 Instalar Mongoose**

Ejecuta el siguiente comando dentro del directorio del proyecto:

`npm install mongoose --save`

Esto descargará e instalará Mongoose, agregándolo a las dependencias en el package.json.

---

### 🔍 Verificar la Instalación

Para confirmar la instalación:

- Verifica que Mongoose esté en la lista de dependencias del archivo package.json.
- Intenta requerirlo en el archivo principal (app.js o index.js):

```js
const mongoose = require('mongoose');
```

---

### 🧾 Resumen de Comandos

Comando	| Descripción
--------|------------
node -v	| Verifica versión de Node.js |
npm -v	| Verifica versión de npm |
npm init	| Inicializa un nuevo proyecto Node.js |
npm install express --save	| Instala Express (opcional) |
npm install mongoose --save	| Instala Mongoose en el proyecto |

---

### 🧩 Conclusión

Con estos pasos tendrás listo tu entorno para usar Mongoose con Node.js y conectar tu aplicación a MongoDB.

---

### 🧱 Creación y Configuración de Modelos con Mongoose
#### 📘 Introducción a los Modelos

En Mongoose, los modelos representan colecciones en MongoDB y permiten interactuar con los documentos dentro de ellas.
Cada modelo se basa en un schema, que define la estructura, los tipos de datos y las validaciones.

---

### 🧠 Pasos para Crear un Modelo de Usuario
#### 1️⃣ Definir el Schema 

Un schema describe la estructura de los documentos de una colección.

**Propiedades del Usuario:**

- `nombre:` tipo String

- `email:` tipo String (único)

- `edad:` tipo Number

- `fechaRegistro:` tipo Date con valor por defecto

---

### 2️⃣ Configurar Validaciones y Reglas

- Mongoose permite agregar reglas y validaciones directamente en el schema:

- Requerido (required) → obliga a que un campo esté presente.

- Valores por defecto (default) → define valores automáticos.

- Únicos (unique) → evita duplicados (como en el email).

---

### 3️⃣ Crear el Modelo a partir del Schema

Una vez definido el schema, se crea el modelo.
Este modelo es la clase que se usa para realizar operaciones CRUD.

Ejemplo:

```js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  edad: Number,
  fechaRegistro: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
```

### 4️⃣ Ejemplo Práctico

Estructura del Modelo de Usuario:

Campo |	Tipo |	Requerido |	Único |	Valor por Defecto
------|------|-----------|--------|-------------------|
nombre | String |	✅ |	❌ |	— |
email |	String |	✅ |	✅ |	— |
edad |	Number |	❌ |	❌ |	— |
fechaRegistro |	Date |	❌ |	❌ |	Fecha actual |

---

### 🧾 Resumen

Concepto |	Descripción
---------|-------------
Schema | 	Define la estructura del documento |
Validaciones |	Garantizan consistencia en los datos |
Modelo |	Representa la colección y gestiona operaciones CRUD | 

---

# 🧱 8.3 Implementación de CRUD con Mongoose

## ⚙️ Introducción

En el desarrollo backend, las operaciones **CRUD** (Create, Read, Update, Delete) son fundamentales para la gestión de datos en cualquier aplicación.  
Con **Mongoose**, estas operaciones se implementan fácilmente mediante métodos que interactúan con los **modelos** definidos en una aplicación **Node.js**.

A continuación, se explican los pasos para implementar cada operación con ejemplos prácticos.

---

### ✨ 1️⃣ Crear (Create)

La operación **Crear** se usa para agregar nuevos documentos a la base de datos.  
En Mongoose, puede hacerse con los métodos `save()` o `create()`.

### 🪜 Paso a paso

1. Crear una nueva instancia del modelo con los datos a guardar.  
2. Guardar la instancia en la base de datos usando `save()`.

### 🧩 Ruta de Ejemplo

**Ruta:** `POST /usuarios`  
**Función:** crear un nuevo usuario en la base de datos.

```js
// Ejemplo: Crear usuario
app.post('/usuarios', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
```

---

### 🔍 2️⃣ Leer (Read)

La operación Leer permite obtener datos de la base de datos.
Mongoose ofrece métodos como `find()`, `findById()` y `findOne()` para realizar consultas.

🪜 Paso a paso

- Usar `find()` para obtener múltiples documentos.

- Usar `findById()` para buscar un documento específico por su ID.

🧩 Rutas de Ejemplo

**Ruta:** `GET /usuarios` → Obtener todos los usuarios.
**Ruta:** `GET /usuarios/:id` → Obtener un usuario específico por ID.

```js
// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

// Obtener un usuario por ID
app.get('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
```

---

### 🔄 3️⃣ Actualizar (Update)

La operación Actualizar se usa para modificar datos existentes.
Mongoose provee métodos como updateOne(), updateMany(), y findByIdAndUpdate().

🪜 Paso a paso

1. Localizar el documento a actualizar.

2. Aplicar los nuevos datos con el método adecuado.

🧩 Ruta de Ejemplo

**Ruta:** `PUT /usuarios/:id` → Actualizar un usuario específico.

```js
// Actualizar usuario por ID
app.put('/usuarios/:id', async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Devuelve el documento actualizado
    );
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
```

---

### 🗑️ 4️⃣ Eliminar (Delete)

La operación Eliminar sirve para remover documentos de la base de datos.
Los métodos más comunes son deleteOne(), deleteMany(), y findByIdAndDelete().

🪜 Paso a paso

1. Identificar el documento a eliminar.

2. Ejecutar el método correspondiente.

🧩 Ruta de Ejemplo

**Ruta:** `DELETE /usuarios/:id` → Eliminar un usuario por su ID.

```js
// Eliminar usuario por ID
app.delete('/usuarios/:id', async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
```

### 🧱 Ejemplos de Implementación en Rutas Node.js

Operación |	Método HTTP	| Ruta |	Descripción
----------|-------------|------|----------|
Crear |	`POST` |	`/usuarios` |	Agrega un nuevo usuario |
Leer (todos) |	`GET` |	`/usuarios` |	Lista todos los usuarios |
Leer (por ID) |	`GET` |	`/usuarios/:id` |	Muestra un usuario específico |
Actualizar |	`PUT` |	`/usuarios/:id` |	Modifica un usuario existente |
Eliminar |	`DELETE` |	`/usuarios/:id` |	Elimina un usuario de la base de datos |