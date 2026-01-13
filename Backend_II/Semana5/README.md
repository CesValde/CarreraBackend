## 5.1 ⚙️ Configuración Avanzada de Routers y Variables de Entorno

---

## 🧭 Ruteo Avanzado, Routers Personalizados y Manejo de Políticas

### 🚀 Estrategias Avanzadas de Ruteo en Express y Creación de Routers Personalizados

En esta sección se abordan **estrategias avanzadas de ruteo en Express** y la creación de **routers personalizados**, con foco en la modularización del código, el uso eficiente de middlewares, respuestas estandarizadas y el manejo de **políticas de autorización mediante JWT**.

---

## 1️⃣ Estrategias Avanzadas de Ruteo en Express

Express permite organizar y escalar aplicaciones backend mediante la creación de **routers personalizados**, lo que facilita el mantenimiento y la gestión de rutas complejas.

### 📦 Routers Personalizados

-  Un router personalizado permite **encapsular rutas y middlewares específicos**.
-  Mejora la **organización del código**.
-  Facilita la **escalabilidad** de la aplicación.

### 🧩 Gestión de Middlewares

-  Los middlewares pueden aplicarse **a nivel de router**.
-  Solo afectan a las rutas definidas dentro de ese router.
-  Permiten manejar:
   -  Autenticación
   -  Validaciones
   -  Manejo de errores
   -  Control de acceso

### 📤 Respuestas Estandarizadas

-  Se pueden extender los métodos del objeto `res`.
-  Ejemplos:
   -  `res.sendSuccess()`
   -  `res.sendError()`
-  Beneficios:
   -  Respuestas consistentes
   -  Mejor comunicación con el frontend
   -  Código más limpio y reutilizable

---

## 2️⃣ 🔐 Manejo de Políticas de Autorización con JWT

La autorización controla **qué puede hacer cada usuario** dentro de la aplicación.  
JWT permite validar roles y permisos directamente a nivel de rutas.

### 🏷️ Roles y Niveles de Acceso

-  **PUBLIC** 🟢  
   Acceso libre, no requiere autenticación.

-  **AUTHENTICATED** 🔑  
   Requiere un token JWT válido.

-  **USER** 👤  
   Acceso exclusivo para usuarios estándar.

-  **USER_PREMIUM** ⭐  
   Acceso para usuarios con membresía premium.

-  **ADMIN** 👑  
   Acceso reservado para administradores del sistema.

---

### 🛡️ Middleware de Autorización

-  El middleware `handlePolicies`:
   -  Procesa el JWT recibido.
   -  Extrae el rol del usuario.
   -  Compara el rol con las políticas definidas para la ruta.
-  Permite definir rutas:
   -  Públicas
   -  Privadas
   -  Restringidas por rol

---

## 3️⃣ 🧪 Implementación Práctica

### 🧱 Crear un Router Personalizado

-  Definir una clase que extienda de `Router` de Express.
-  Agregar:
   -  Middlewares personalizados
   -  Métodos de respuesta estandarizados

---

### 🔒 Aplicar Políticas de Autorización

-  Definir el middleware `handlePolicies`.
-  Recibe como parámetro un array de políticas permitidas.
-  Verifica el rol del usuario obtenido desde el JWT.
-  Permite o deniega el acceso según corresponda.

---

### 🧾 Ejemplo de Uso

```js
const express = require("express")
const { handlePolicies } = require("./middlewares/auth")

const router = express.Router()

router.get("/admin", handlePolicies(["ADMIN"]), (req, res) => {
   res.sendSuccess("Welcome Admin")
})

module.exports = router
```

```js
import express from "express"
import { handlePolicies } from "./middlewares/auth.js"

const router = express.Router()

router.get("/admin", handlePolicies(["ADMIN"]), (req, res) => {
   res.sendSuccess("Welcome Admin")
})

export default router
```

---

## 5.2 ⚙️ Process y Manejo de Variables

### 📌 Objeto `process` y Manejo de Variables de Entorno en Node.js

El objeto **`process`** en Node.js es un objeto global que provee una interfaz para interactuar con el sistema operativo y el entorno de ejecución. 
Permite acceder a información del proceso actual, manejar eventos del sistema y trabajar con variables de entorno.

---

### 🧩 1. Principales Funciones del Objeto `process`

-  **📁 `process.cwd()`**  
   Devuelve el directorio de trabajo actual del proceso.  
   Es útil para:

   -  Obtener la ruta desde donde se ejecuta la aplicación
   -  Manejar rutas relativas de archivos y carpetas

-  **🌍 `process.env`**  
   Permite acceder a las variables de entorno del sistema.  
   Se utiliza para manejar:

   -  Credenciales
   -  Configuración de bases de datos
   -  Claves secretas
   -  Configuración por entorno (dev, prod, test)

-  **🧠 `process.on(event, callback)`**  
   Permite escuchar eventos del proceso principal.

   Eventos comunes:

   -  **`exit`** → Se ejecuta antes de que el proceso finalice
   -  **`uncaughtException`** → Captura errores no manejados
   -  **`message`** → Comunicación entre procesos (child processes)

---

### 🌱 2. Manejo de Variables de Entorno con `dotenv`

**dotenv** es una librería que carga variables de entorno desde un archivo `.env` al objeto `process.env`.  
Es fundamental para separar configuración del código y proteger información sensible.

---

#### ⚙️ Configuración Básica

1. Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
DB_HOST=localhost
SECRET_KEY=mysecretkey
```

2. Importar y configurar dotenv en el archivo principal:
```js
import dotenv from "dotenv"

dotenv.config()
```

### 🌎 Configuración de Múltiples Entornos

Para manejar distintos entornos se pueden usar múltiples archivos:

- .env.development

- .env.production

- .env.test

Carga según el entorno:
```js
import dotenv from "dotenv"

dotenv.config({ path: "./.env.development" })
```

Esto permite:

- Cambiar configuraciones sin modificar el código

- Adaptar la app a distintos contextos de despliegue

---

### 🔐 Protección de Configuraciones Sensibles

El uso de variables de entorno permite:

- Ocultar contraseñas y tokens

- Evitar subir datos sensibles al repositorio

- Mantener un código más seguro y profesional

- Facilitar el deploy en servidores y servicios cloud

### ⚠️ Buenas prácticas:

- No subir el archivo .env al repositorio

- Agregar .env al .gitignore

--- 

## 5.3 🔐 Manejo de Políticas de Autorización y Reflexiones Finales

---

### 🧭 1. Ruteo Avanzado y Creación de Routers Personalizados

Se desarrollaron técnicas avanzadas de **ruteo en Express**, incorporando la creación de **routers personalizados** para mejorar la modularidad y organización del código.

Estos routers permiten:

- 📂 Gestionar rutas de forma ordenada
- 🧩 Aplicar middlewares específicos por router
- 📡 Definir respuestas estandarizadas para el frontend
- 🚀 Facilitar la escalabilidad de la aplicación

Esta estructura promueve un manejo claro y controlado de los endpoints, favoreciendo aplicaciones más mantenibles y fáciles de extender a futuro.

---

### 🪪 2. Manejo de Políticas de Autorización con JWT

El manejo de **políticas de autorización** mediante **JSON Web Tokens (JWT)** fue un eje central del desarrollo.

Se implementó un **sistema de roles** que permite:

- 🌐 Acceso a rutas públicas
- 👤 Acceso restringido a usuarios autenticados
- 👑 Acceso exclusivo para administradores

Mediante **middlewares de autorización**, se valida el rol del usuario antes de procesar cada solicitud, garantizando que solo usuarios autorizados accedan a determinadas funcionalidades.

🔐 Esta técnica es fundamental para preservar la **seguridad**, **integridad** y **control de acceso** dentro de la aplicación.

---

### ⚙️ 3. Gestión del Objeto `process` en Node.js

El objeto **`process`** en Node.js proporciona herramientas clave para gestionar el entorno de ejecución de la aplicación.

Se trabajó con funciones como:

- 📁 **`process.cwd()`** → Obtiene el directorio actual de ejecución
- 🌍 **`process.env`** → Manejo de variables de entorno
- 🧠 **`process.on()`** → Captura y gestión de eventos del sistema

Estas capacidades permiten adaptar la aplicación a distintos contextos operativos y gestionar eventos y errores de forma controlada y eficiente.

---

### 🌱 4. Manejo de Variables de Entorno con `dotenv`

La librería **dotenv** facilita la gestión de variables de entorno para los distintos escenarios de ejecución:

- 🛠️ Desarrollo
- 🚀 Producción
- 🧪 Pruebas

Este enfoque permite que una misma aplicación se adapte a múltiples entornos **sin modificar el código fuente**, además de:

- 🔐 Proteger credenciales y claves API
- 📦 Centralizar la configuración
- ✅ Mejorar la seguridad general del proyecto

---

### 🏁 Conclusión Final

La correcta implementación de ruteo avanzado, políticas de autorización, gestión del objeto `process` y variables de entorno constituye una base sólida para aplicaciones **backend profesionales**, **seguras** y **escalables** desarrolladas con Node.js y Express.
