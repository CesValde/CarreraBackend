## 🏗️ 6.1 Fundamentos y Buenas Prácticas en la Arquitectura Backend

### 📌 Fundamentos y Buenas Prácticas en la Arquitectura Backend

### 🧱 Conceptos Clave de la Arquitectura de Capas

El modelo de capas es un enfoque fundamental en el desarrollo backend que organiza una aplicación en diferentes niveles, cada uno con responsabilidades específicas. Este modelo facilita la creación de sistemas robustos, escalables y fáciles de mantener al separar claramente las distintas funcionalidades de la aplicación.

---

### 📐 Explicación del Modelo de Capas en Proyectos Backend

El modelo de capas es un patrón de diseño que separa los módulos de una aplicación backend en capas, cada una con responsabilidades específicas. Esta separación mejora el mantenimiento, la escalabilidad y la calidad del código, al permitir una delegación clara de responsabilidades.

A continuación, se describen las capas base y las capas adicionales comúnmente utilizadas en proyectos Node.js.

---

### 🧩 ¿Qué es una Capa?

Una capa es un componente del sistema que cumple un rol específico dentro de la aplicación. Las capas permiten organizar el código de forma modular y desacoplada, asegurando que cada parte del sistema se enfoque en una función concreta.

Esta organización facilita:

- La localización de errores
- La implementación de cambios
- La evolución del sistema sin afectar otras partes del código

---

## 🏛️ Capas Base

### 💾 Capa de Persistencia

**Función:**  
Maneja la conexión y manipulación de datos en la base de datos u otros sistemas de almacenamiento (memoria, archivos, etc.).

**Responsabilidades:**

- Ejecutar operaciones CRUD (_Create, Read, Update, Delete_)
- No aplicar validaciones ni lógica de negocio
- Mantener separado el acceso a datos de la lógica de la aplicación

---

### 🧠 Capa de Negocio (o Controlador)

**Función:**  
Contiene la lógica central de la aplicación.

**Responsabilidades:**

- Procesar las solicitudes del cliente
- Realizar validaciones
- Orquestar el flujo entre las distintas capas
- Coordinar llamadas a la capa de persistencia y otras capas

---

### 🎨 Capa de Renderización (o Vista)

**Función:**  
Encargada de la presentación de los datos al usuario.

**Responsabilidades:**

- Mostrar la información sin procesarla ni modificarla
- En algunos casos, acceder directamente a la capa de persistencia si no se requiere lógica adicional

---

## ➕ Capas Adicionales en Node.js

### 🛣️ Capa de Routing

**Función:**  
Gestiona las rutas de la aplicación y dirige las solicitudes del cliente hacia el controlador adecuado.

**Importancia:**

- Evita centralizar todas las rutas en un solo archivo
- Mejora la legibilidad, organización y mantenimiento del código

---

### 🔧 Capa de Servicio

**Función:**  
Actúa como intermediario entre la capa de negocio y la capa de persistencia.

**Importancia:**

- Desacopla la lógica de acceso a datos
- Permite modificar la persistencia sin afectar a los controladores
- Facilita la reutilización y el testing

---

## 🔄 Flujo de Datos a Través de las Capas

El flujo de datos comienza cuando el cliente realiza una solicitud a través de una ruta específica (**Capa de Routing**), que redirige la petición al controlador correspondiente (**Capa de Negocio**).

El controlador procesa la solicitud y, si requiere datos, interactúa con la **Capa de Servicio**, la cual accede a la **Capa de Persistencia** para obtener o modificar la información necesaria. Finalmente, la respuesta es enviada al cliente mediante la **Capa de Renderización**.

---

## 🧩 Importancia del Desacoplamiento y la Modularidad

La arquitectura en capas promueve la separación de responsabilidades y el desacoplamiento del sistema, lo que permite:

- Escalar la aplicación sin impactos significativos
- Modificar una capa sin afectar al resto
- Mejorar la mantenibilidad del código
- Facilitar la realización de pruebas unitarias por capa

---

### 📝 Resumen

La arquitectura backend basada en capas es una práctica fundamental para construir aplicaciones robustas, escalables y mantenibles. Al separar claramente las responsabilidades en capas bien definidas, se logra un código más limpio, flexible y preparado para evolucionar con el tiempo.

---

## 🧩 6.2 Buenas Prácticas

### ✅ Buenas Prácticas y Patrones de Diseño en Backend

### 🏗️ Buenas Prácticas en la Arquitectura de Capas

La arquitectura de capas es una metodología clave en el desarrollo de aplicaciones backend, ya que promueve la separación de responsabilidades y la organización modular del código. A continuación, se detallan las principales buenas prácticas para implementarla de forma eficiente.

---

### 🔁 Reutilización de Código

La reutilización de código es fundamental para mantener un sistema limpio, consistente y eficiente. Al desarrollar funciones y módulos reutilizables:

- Se evitan redundancias innecesarias
- Se mejora la legibilidad del código
- Se reduce el esfuerzo de mantenimiento a largo plazo

Un código reutilizable facilita la evolución del sistema y disminuye la probabilidad de errores.

---

### 📈 Escalabilidad

Un diseño escalable permite que la aplicación crezca sin requerir reescrituras significativas del código existente. Para lograrlo:

- Se deben desarrollar métodos genéricos y desacoplados
- Se debe priorizar la modularidad
- Se deben anticipar posibles ampliaciones futuras

Esto evita reajustes complejos cuando cambian los requisitos del negocio.

---

### 🌍 Manejo de Entornos

Es esencial gestionar correctamente los distintos entornos en los que puede ejecutarse la aplicación:

- **Desarrollo**
- **Testing / Pruebas**
- **Producción**

Cada entorno debe contar con configuraciones y datos específicos. Esto reduce el riesgo de errores en producción y facilita la validación segura de nuevas funcionalidades antes de su despliegue.

---

### 🧪 Importancia del Testing

El testing es una práctica indispensable para garantizar la calidad del software. Mediante:

- **Pruebas unitarias**, se valida el funcionamiento de componentes individuales
- **Pruebas de integración**, se verifica la interacción entre distintos módulos

El enfoque **TDD (Test-Driven Development)** fomenta la escritura de código más robusto, predecible y confiable.

---

### 📝 Documentación y Registro de Logs

Una buena documentación:

- Facilita la comprensión del sistema
- Mejora el mantenimiento a largo plazo
- Permite que otros desarrolladores se integren rápidamente al proyecto

El uso de logs con distintos niveles (informativos, advertencias, errores) permite monitorear el comportamiento de la aplicación y detectar problemas de forma temprana.

---

## 🧠 Patrones de Diseño

Los patrones de diseño son soluciones conceptuales reutilizables para problemas comunes del desarrollo. No son fragmentos de código, sino guías que ayudan a estructurar soluciones de manera eficiente y estandarizada.

En aplicaciones backend con Express.js, se destacan los siguientes patrones:

---

### 🔗 Middleware (Cadena de Responsabilidades)

**Descripción:**  
Permite que una solicitud pase por una serie de funciones (_middlewares_), donde cada una puede procesar, transformar o validar la petición antes de llegar al endpoint final.

**Aplicación en Express:**  
Express implementa este patrón de forma nativa, encadenando middlewares para manejar autenticación, validaciones, logs y control de errores.

---

### 🎭 Decorador

**Descripción:**  
Permite extender o modificar el comportamiento de un objeto sin alterar su estructura original.

**Aplicación en Express:**  
Al utilizar middlewares como `multer`, el objeto `request` se enriquece con nuevas propiedades (por ejemplo, archivos subidos), siguiendo claramente el patrón decorador.

---

### 🛡️ Proxy

**Descripción:**  
Actúa como un intermediario que controla el acceso a otro objeto o recurso.

**Aplicación en Express:**  
Los routers funcionan como proxies al redirigir solicitudes hacia los controladores correspondientes mediante `app.use()`, gestionando el acceso y la organización de rutas.

---

## 🛠️ 6.3 Implementación Práctica y Aplicación de la Arquitectura de Capas

### ⚠️ Desafíos en la Arquitectura de Capas

La implementación de una arquitectura de capas introduce múltiples beneficios, pero también ciertos desafíos que deben considerarse:

- Mantener una correcta separación de responsabilidades entre capas
- Evitar dependencias circulares
- No sobrecargar los controladores con lógica de negocio
- Diseñar interfaces claras entre servicios y persistencia

Abordar estos desafíos correctamente permite aprovechar al máximo la modularidad y escalabilidad del sistema.

---

### 📘 Guía para el Desarrollo de Capas Adicionales: Servicios y Persistencia

En esta guía se describe cómo desarrollar capas adicionales dentro de una arquitectura por capas, integrando **routing**, **controladores**, **servicios** y **persistencia**, junto con la configuración de variables de entorno para mejorar la estructura general de una aplicación backend.

---

## 🏗️ 1. Arquitectura por Capas

La arquitectura por capas es un patrón de diseño que separa la aplicación en distintos niveles con responsabilidades específicas, mejorando la mantenibilidad, legibilidad y escalabilidad del código.

### 🧩 Capas Principales

#### 🛣️ Capa de Routing

Encargada de definir las rutas y endpoints de la aplicación.  
Redirige las peticiones HTTP hacia los controladores adecuados.

#### 🧠 Capa de Controlador

Gestiona la lógica de negocio básica.  
Procesa las solicitudes entrantes y devuelve las respuestas correspondientes.

#### 🔧 Capa de Servicios

Actúa como intermediario entre los controladores y la capa de persistencia.  
Encapsula la lógica de acceso a datos y la gestión de transacciones.

#### 💾 Capa de Persistencia

Interactúa directamente con la base de datos u otros sistemas de almacenamiento.  
Ejecuta operaciones CRUD (_Create, Read, Update, Delete_).

---

## 🔗 2. Integración de Capas

Para integrar correctamente estas capas dentro de una aplicación backend, se recomienda seguir los siguientes pasos:

---

### 🛣️ Definir Rutas (Capa de Routing)

Crear un archivo de rutas, por ejemplo `userRoutes.js`, donde se definan los endpoints y se enlacen con los controladores correspondientes.

```js
// routes/user.routes.js
import { Router } from "express"
import * as userController from "../controllers/userController.js"

const router = Router()

router.get("/users", userController.getAllUsers)
router.post("/users", userController.createUser)

export default router
```

---

### 🧠 Controladores (Capa de Controlador)

Los controladores manejan la lógica de la solicitud y delegan el acceso a datos a la capa de servicios.

```js
// controllers/userController.js
import * as userService from "../services/userService.js"

export const getAllUsers = async (req, res) => {
   try {
      const users = await userService.getUsers()
      res.json(users)
   } catch (error) {
      res.status(500).send(error.message)
   }
}

export const createUser = async (req, res) => {
   try {
      const user = await userService.createUser(req.body)
      res.status(201).json(user)
   } catch (error) {
      res.status(500).send(error.message)
   }
}
```

---

### 🔧 Servicios (Capa de Servicios)

Los servicios encapsulan la lógica de negocio reutilizable y actúan como puente entre los controladores y la persistencia.

```js
// services/userService.js
import * as userDao from "../persistence/userDao.js"

export const getUsers = async () => {
   return await userDao.getAllUsers()
}

export const createUser = async (userData) => {
   return await userDao.createUser(userData)
}
```

---

### 💾 Persistencia (Capa de Persistencia)

En esta capa se definen las interacciones directas con la base de datos.
Puede implementarse utilizando un ORM o consultas SQL directas.

```js
// persistence/userDao.js
import db from "./db.js"

export const getAllUsers = async () => {
   return db.query("SELECT * FROM users")
}

export const createUser = async (userData) => {
   const { name, email } = userData
   return db.query("INSERT INTO users (name, email) VALUES (?, ?)", [
      name,
      email
   ])
}
```

---

### 🌍 Configuración de Variables de Entorno

Separar la configuración sensible en variables de entorno es una buena práctica esencial para la seguridad y mantenibilidad de la aplicación.

```js
DB_HOST = localhost
DB_USER = root
DB_PASS = secret
PORT = 3000
```

---

### ⚙️ Archivo de Configuración (config.js)

Este archivo centraliza el acceso a las variables de entorno:

```js
import dotenv from "dotenv"
dotenv.config()

module.exports = {
   dbHost: process.env.DB_HOST,
   dbUser: process.env.DB_USER,
   dbPass: process.env.DB_PASS,
   port: process.env.PORT
}
```

---
