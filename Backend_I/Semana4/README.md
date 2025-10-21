# 🌐 4.1 Introducción a Servidores Web

## 💻 Introducción a los Servidores Web y el Protocolo HTTP

Un **servidor web** es una pieza clave en la arquitectura de aplicaciones web modernas.  
Su función principal es manejar las **peticiones de los clientes** (generalmente navegadores web) y devolver las **respuestas adecuadas**, como páginas HTML, archivos o datos.

Los servidores web son esenciales para la **comunicación entre el cliente y el servidor** en una red, utilizando el protocolo **HTTP (Hypertext Transfer Protocol)** para establecer esta comunicación.

---

## ⚙️ Protocolo HTTP: Estructura y Funcionamiento

El **protocolo HTTP** es el estándar que define cómo los mensajes se formatean y transmiten entre un cliente y un servidor en la web.

Cuando un usuario ingresa una URL en su navegador, este (cliente) envía una **petición HTTP** al servidor solicitando un recurso, como una página web o una imagen.  
El servidor procesa la solicitud y devuelve una **respuesta HTTP** con el contenido solicitado o con un mensaje de error si algo falla.

---

### 📨 Estructura de una Petición HTTP

Una petición HTTP se compone de varias partes:

- **Método HTTP:** Define la acción a realizar.  
  Ejemplos:
  - `GET` → Solicitar un recurso.  
  - `POST` → Enviar datos al servidor.  
  - `PUT` → Actualizar un recurso existente.  
  - `DELETE` → Eliminar un recurso.

- **URL:** La dirección del recurso solicitado. Puede incluir **parámetros (params)** y **consultas (query)**.

- **Encabezados (Headers):** Información adicional sobre la petición o el cliente, como el tipo de contenido aceptado o la autenticación.

- **Cuerpo (Body):** (Opcional) Contiene datos enviados al servidor, normalmente en peticiones **POST** o **PUT**.

---

### 📤 Estructura de una Respuesta HTTP

La **respuesta HTTP** del servidor también tiene varias partes:

- **Código de estado:** Indica el resultado de la petición.  
  Ejemplos:
  - `200 OK` → Éxito.  
  - `404 Not Found` → El recurso no se encuentra.  
  - `500 Internal Server Error` → Error interno del servidor.

- **Encabezados:** Información sobre la respuesta, como el tipo de contenido (`Content-Type`), fecha o configuración de caché.

- **Cuerpo:** El contenido del recurso solicitado, como HTML, JSON, imágenes, etc.

---

## 🧠 El Rol del Servidor en la Arquitectura Cliente-Servidor

En la **arquitectura cliente-servidor**, el **cliente** (por ejemplo, un navegador web) realiza las solicitudes  
(pedir una página HTML, iniciar sesión, ver productos, etc.), mientras que el **servidor** maneja esas solicitudes y devuelve las respuestas adecuadas.

El servidor no solo entrega los recursos solicitados, sino que también puede realizar tareas como:

- Autenticación de usuarios.  
- Procesamiento de datos.  
- Comunicación con bases de datos.  

Esta **interacción continua** es lo que permite la dinámica de las aplicaciones modernas, donde los usuarios pueden interactuar en tiempo real con los datos.

---

## 🧩 Conclusión

Entender el concepto de **servidores web** y el **protocolo HTTP** es fundamental para cualquier desarrollador backend.  
Los servidores son los responsables de manejar las peticiones de los clientes y devolver las respuestas necesarias para que las aplicaciones funcionen correctamente.

El protocolo **HTTP**, con su estructura bien definida de peticiones y respuestas, es la base sobre la cual se construyen la mayoría de las aplicaciones web modernas.

---

# ⚡ Introducción a Express.js: Un Framework Minimalista para Node.js

## 🚀 ¿Qué es Express.js?

**Express.js** es un **framework web minimalista y flexible** construido sobre **Node.js**, que facilita la creación de **servidores y aplicaciones web**.  
Mientras que Node.js proporciona las herramientas básicas para manejar solicitudes y respuestas HTTP, Express.js **simplifica y amplía** esas capacidades.

Esto permite a los desarrolladores construir servidores más complejos y escalables con menos esfuerzo.

---

## 🌟 Beneficios de Usar Express.js

Una de las principales ventajas de Express.js es su capacidad para **simplificar la gestión de rutas y middleware**.

Con Express.js puedes definir rutas para manejar diferentes tipos de solicitudes HTTP (`GET`, `POST`, `PUT`, `DELETE`) de manera más sencilla y organizada que con el módulo HTTP nativo de Node.js.

Además, Express.js permite el uso de **middleware**, funciones que se ejecutan durante el ciclo de vida de una solicitud y pueden realizar tareas como:

- Validación de datos.  
- Autenticación.  
- Manejo de errores.  

---

### 💡 Principales Beneficios

- 🧾 **Simplicidad:** Sintaxis clara y concisa, menos código para configurar un servidor.  
- 🔌 **Extensibilidad:** Permite añadir middleware fácilmente (autenticación, sesiones, etc.).  
- 🌍 **Ecosistema amplio:** Miles de paquetes que facilitan la integración de funcionalidades.  
- ⚙️ **Flexibilidad:** Ideal tanto para APIs sencillas como para aplicaciones web complejas.

---

## 🔄 Comparación con el Módulo HTTP Nativo de Node.js

Node.js permite crear servidores básicos con su módulo **HTTP nativo**, pero manejar rutas y solicitudes requiere **mucho más código**.

Por ejemplo:

- En Node.js puro, cada ruta y método HTTP se maneja manualmente.  
- En Express.js, las rutas se definen de forma **declarativa**, limpia y modular.  

Además:

- Node.js **no ofrece un sistema de middleware integrado**, mientras que **Express.js sí**, lo que facilita añadir autenticación, validación, o manejo de errores sin complicaciones.

---

### 🧾 Ejemplo Conceptual

```js
// 🧱 Servidor básico con Node.js
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hola desde Node.js puro!')
  }
})

server.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'))
```
```js
// ⚡ Servidor con Express.js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hola desde Express.js 🚀')
})

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'))
```

# 🌐 4.2 Código de Estado y Métodos de Petición

## 📊 Códigos de Estado HTTP: Interpretación y Uso en la Gestión de Peticiones

Los **códigos de estado HTTP** son respuestas estándar que un servidor web envía al cliente (generalmente un navegador) para indicar el **resultado de la solicitud realizada**.

Estos códigos son esenciales para entender si una petición ha sido exitosa, si se produjo un error o si se requiere alguna acción adicional.  
Cada código es un número de **tres dígitos** y se clasifica en **cinco categorías**, según el primer dígito.

---

## 🧩 Clasificación de los Códigos de Estado HTTP

### 🔹 **1xx: Informativos**
Indican que la solicitud ha sido recibida y está siendo procesada.  
- **100 Continue** → El cliente puede continuar con la solicitud.

---

### 🟢 **2xx: Éxito**
Indican que la solicitud se completó correctamente.  
- **200 OK** → Solicitud procesada exitosamente y recurso devuelto.  
- **201 Created** → Un nuevo recurso fue creado correctamente tras una solicitud `POST`.

---

### 🟠 **3xx: Redirección**
Indican que se requiere una acción adicional por parte del cliente.  
- **301 Moved Permanently** → El recurso se ha movido permanentemente a una nueva URL.  
- **302 Found** → El recurso solicitado está temporalmente en otra ubicación.

---

### 🔴 **4xx: Errores del Cliente**
Indican que hubo un problema con la solicitud enviada por el cliente.  
- **400 Bad Request** → Error en la solicitud (sintaxis incorrecta).  
- **401 Unauthorized** → Falta autenticación válida.  
- **403 Forbidden** → El servidor entiende la solicitud, pero deniega el acceso.  
- **404 Not Found** → El recurso solicitado no existe o fue eliminado.

---

### ⚫ **5xx: Errores del Servidor**
Indican que el servidor falló al procesar una solicitud válida.  
- **500 Internal Server Error** → Error genérico en el servidor.  
- **502 Bad Gateway** → El servidor actuando como proxy recibió una respuesta inválida.  
- **503 Service Unavailable** → El servidor está temporalmente no disponible (mantenimiento o sobrecarga).

---

## ⚙️ Importancia de los Códigos de Estado HTTP

Los códigos de estado son **fundamentales para la comunicación entre cliente y servidor**, ya que permiten:

- 🧠 **Diagnóstico:** Identificar y solucionar errores (como `404` o `500`).  
- 🔁 **Redirección y mantenimiento:** Usar códigos como `301` o `503` para gestionar rutas o mantenimiento.  
- 🔒 **Seguridad:** Códigos como `401` o `403` protegen recursos restringidos.

---

## 🧾 Conclusión

Entender y usar correctamente los **códigos de estado HTTP** es esencial para el desarrollo y mantenimiento de aplicaciones web.  
Estos códigos **facilitan la gestión de errores, mejoran la comunicación cliente-servidor** y aseguran una experiencia de usuario fluida y confiable.

---

# ⚡ Métodos de Petición HTTP

Los **métodos de petición HTTP** son las **acciones que un cliente puede solicitar** al servidor sobre un recurso.  
En desarrollo web, los más comunes son: `GET`, `POST`, `PUT` y `DELETE`.

Cada método tiene un propósito específico según la operación que se desea realizar.

---

## 🔍 GET

El método **GET** se utiliza para **solicitar datos del servidor**.  
Es de solo lectura: **no modifica ni altera** el estado del recurso.  
Los datos se envían en la **URL como parámetros**.

### 💡 Ejemplo de uso

- **Buscar información:**  
  Un usuario quiere ver productos → el navegador envía una solicitud `GET /productos` y el servidor responde con los datos.

- **Consulta de datos:**  
  `GET /productos` → Devuelve una lista de productos en formato JSON o HTML.

```js
// Ejemplo en Express.js
app.get('/productos', (req, res) => {
  res.json({ mensaje: 'Lista de productos' })
})
```

---

### ✉️ POST

El método **POST** se usa para enviar datos al servidor y crear un nuevo recurso.
Los datos van en el cuerpo de la solicitud, no en la URL.

💡 Ejemplo de uso

- Crear un nuevo recurso:
Al registrarse, un formulario envía los datos del usuario con `POST`.

- Envío de datos:
`POST /usuarios` → Crea un nuevo usuario en la base de datos.

```js
app.post('/usuarios', (req, res) => {
  res.status(201).json({ mensaje: 'Usuario creado correctamente' })
})
```

---

## 🛠️ PUT

El método PUT se utiliza para actualizar un **recurso existente** en el servidor.
A diferencia de `POST`, que crea, `PUT` reemplaza el recurso completo con los nuevos datos.

💡 Ejemplo de uso

- Actualizar un recurso:
`PUT /usuarios/123` → Actualiza la información del usuario con ID `123`.

```js
app.put('/usuarios/:id', (req, res) => {
  res.json({ mensaje: `Usuario ${req.params.id} actualizado correctamente` })
})
```

---

## 🗑️ DELETE

El método DELETE se utiliza para eliminar un recurso específico en el servidor.
Una vez ejecutado, el recurso deja de estar disponible.

💡 Ejemplo de uso

- Eliminar un recurso:
`DELETE /usuarios/123` → Elimina al usuario con ID `123`.

```js
app.delete('/usuarios/:id', (req, res) => {
  res.json({ mensaje: `Usuario ${req.params.id} eliminado correctamente` })
})
```

⚖️ Diferencias entre los Métodos HTTP

| Método | Descripción	| Modifica el servidor | Ejemplo de uso |
|--------|--------------|----------------------|----------------|
| **GET** | Obtiene o lee datos. | ❌ No | Consultar una lista de productos. |
| **POST** | Crea un nuevo recurso. | ✅ Sí | Crear una cuenta de usuario. |
| **PUT** | Actualiza un recurso existente. | ✅ Sí | Editar un perfil de usuario. |
| **DELETE** | Elimina un recurso. | ✅ Sí | Borrar un registro o cuenta. |

---

🏁 Conclusión

Los métodos HTTP definen cómo los clientes y servidores interactúan con los recursos.
Comprender su funcionamiento es clave para diseñar APIs RESTful efectivas y seguras.

En resumen:

- 🔍 **GET**: Lee datos.
- ✉️ **POST**: Crea recursos.
- 🛠️ **PUT**: Actualiza recursos.
- 🗑️ **DELETE**: Elimina recursos.

Estos cuatro métodos forman la base del desarrollo web moderno.

# 🌐 4.3 Introducción a las APIs REST

## 📚 Conceptos Básicos de una API REST

En el desarrollo de aplicaciones modernas, las **APIs** (Interfaces de Programación de Aplicaciones) permiten la comunicación entre diferentes sistemas, especialmente entre **frontend** y **backend**.  
Una de las arquitecturas más comunes para construir APIs es **REST (Representational State Transfer)**, que define principios y restricciones para crear servicios web escalables y eficientes.

---

## ❓ ¿Qué es una API?

Una **API** es un conjunto de reglas y definiciones que permite a diferentes aplicaciones comunicarse entre sí.  
En desarrollo web, las APIs permiten que el **frontend** envíe y reciba datos desde el **backend**.

**Ejemplo:**
Cuando un usuario ve su perfil en una app, el frontend hace una solicitud a la API del backend, que devuelve los datos para mostrar en la interfaz.

---

## 🛠️ ¿Qué es una API REST?

**REST** es un estilo de arquitectura que permite diseñar APIs mediante **HTTP**, siguiendo principios que las hacen **flexibles, escalables y fáciles de usar**.

### Principios Básicos de las APIs REST

1. **Cliente-Servidor:**  
   Separa el cliente (interfaz de usuario) del servidor (lógica y datos), permitiendo evolución independiente.

2. **Stateless (Sin Estado):**  
   Cada solicitud debe contener toda la información necesaria; el servidor no almacena estado de sesión.

3. **Uso de HTTP y sus Métodos:**  
   Métodos estándar como `GET`, `POST`, `PUT` y `DELETE` realizan operaciones CRUD sobre recursos.

4. **Recursos Identificables:**  
   Cada recurso tiene su propia URL única para facilitar acceso y manipulación.

5. **Representaciones de Recursos:**  
   Los recursos se representan en formatos como **JSON**, legibles por humanos y máquinas.

---

## 🔄 Cómo Funcionan las APIs REST

El cliente envía solicitudes HTTP a URLs que representan **recursos**, y el servidor responde con datos o mensajes de estado.

**Ejemplos de comunicación:**

- **GET:** Obtener lista de usuarios  
  `GET https://api.ejemplo.com/usuarios` → Devuelve un JSON con usuarios

- **POST:** Crear un nuevo usuario  
  `POST https://api.ejemplo.com/usuarios` → Envía datos en el cuerpo y devuelve confirmación

- **PUT:** Actualizar usuario existente  
  `PUT https://api.ejemplo.com/usuarios/1` → Actualiza el usuario con ID 1

- **DELETE:** Eliminar usuario  
  `DELETE https://api.ejemplo.com/usuarios/1` → Elimina el usuario con ID 1

---

## ✅ Conclusión

Las APIs REST son esenciales para aplicaciones modernas, permitiendo comunicación eficiente y escalable entre frontend y backend.  
Siguiendo los principios REST, las APIs son **fáciles de usar, flexibles y capaces de crecer con la aplicación**.

---

## 🏗️ Estructura y Características de una API REST

Para ser RESTful, una API debe cumplir ciertas características:

### 1. Arquitectura Cliente-Servidor

Separa responsabilidades entre **cliente** y **servidor**, permitiendo evolución independiente.

**Ejemplo:**  
El cliente solicita datos (lista de productos, perfil de usuario) y el servidor responde con JSON u otro formato adecuado.

---

### 2. Stateless (Sin Estado)

Cada solicitud debe contener toda la información necesaria; el servidor no almacena estado de sesión.

**Ejemplo:**  
Solicitud de detalles de un pedido debe incluir identificación de usuario y pedido sin depender de solicitudes previas.

---

### 3. Cacheable

Las respuestas deben indicar si se pueden almacenar en caché y por cuánto tiempo, mejorando eficiencia y velocidad.

**Ejemplo:**  
Una lista de productos puede almacenarse en caché para evitar procesamiento repetido.

---

### 4. Interfaz Uniforme

La API debe seguir reglas estándar que la hagan **predecible y fácil de usar**.

**Componentes de una Interfaz Uniforme:**

- **Identificación de Recursos:** Cada recurso tiene una URL única.  
- **Representaciones de Recursos:** Formatos como JSON o XML.  
- **Métodos HTTP:** `GET`, `POST`, `PUT`, `DELETE`.  
- **Mensajes Autodescriptivos:** Solicitudes y respuestas contienen toda la info necesaria.

---

### 📝 Ejemplos de Estructuración Correcta de una API REST

#### Rutas Claras y Descriptivas
- Rutas deben reflejar recursos y ser comprensibles.  
- Recomendación: en inglés, minúsculas y sin verbos.  
  - `/users` → lista de usuarios  
  - `/products/123` → usuario o producto específico

#### Uso Consistente de Métodos HTTP
- `GET` → leer recursos  
- `POST` → crear recursos  
- `PUT` → actualizar recursos  
- `DELETE` → eliminar recursos

#### Respuestas Estructuradas y Coherentes
- Todas las respuestas exitosas podrían incluir:  

```json
  {
    "status": "success",
    "data": { ... }
  }
```

# 🧰 4.4 Herramientas y Buenas Prácticas

## 🚀 Uso de Postman para Pruebas de API

**Postman** es una herramienta popular y poderosa que permite a los desarrolladores **probar y validar APIs** de manera eficiente.  
Es especialmente útil para trabajar con **APIs REST**, gracias a su interfaz gráfica intuitiva que facilita enviar peticiones HTTP, observar respuestas y realizar pruebas en diferentes entornos.

---

### 💡 ¿Qué es Postman?

Postman es una aplicación que facilita la **creación, prueba y documentación** de APIs.  
Permite enviar peticiones HTTP a un servidor y ver las respuestas sin necesidad de tener un **frontend** real definido.  
Esto ayuda a **identificar errores**, **verificar rutas** y **asegurar el correcto funcionamiento** de la API.

---

### ⚙️ Configuración de Peticiones HTTP en Postman

Pasos básicos para enviar una solicitud:

1. **Seleccionar el Método HTTP:**  
   En la parte superior de Postman, elige el método (GET, POST, PUT, DELETE, etc.).

2. **Ingresar la URL:**  
   Indica la URL del recurso (por ejemplo, `http://localhost:3000/usuarios`).

3. **Añadir Parámetros y Cuerpo:**  
   Agrega parámetros, encabezados o un cuerpo (por ejemplo, JSON) según el método.

4. **Enviar la Petición:**  
   Presiona **"Send"** para enviar la solicitud y ver la respuesta del servidor en la interfaz.

---

### 🌐 Usar Postman para Probar Métodos de una API REST

| Método | Descripción | Ejemplo en Postman |
|:--:|:--|:--|
| **GET** | Solicita datos del servidor | `GET /usuarios` → muestra lista en formato JSON |
| **POST** | Envía datos para crear un nuevo recurso | `POST /usuarios` → crea un usuario con los datos enviados |
| **PUT** | Actualiza un recurso existente | `PUT /usuarios/1` → actualiza el usuario con ID 1 |
| **DELETE** | Elimina un recurso | `DELETE /usuarios/1` → elimina el usuario con ID 1 |

---

### 🧩 Ventajas de Usar Postman

- **👀 Visualización de Respuestas:**  
  Muestra código de estado, encabezados y cuerpo de la respuesta de forma clara.

- **🤖 Pruebas Automatizadas:**  
  Permite crear colecciones de peticiones reutilizables para pruebas automáticas.

- **🌍 Manejo de Variables:**  
  Facilita cambiar configuraciones entre entornos (desarrollo, prueba, producción).

---

### ✅ Conclusión

**Postman** es una herramienta esencial para cualquier desarrollador que trabaje con APIs REST.  
Su facilidad para configurar y enviar peticiones, junto con su interfaz intuitiva, la convierten en una aliada perfecta para **probar, validar y depurar APIs**.

---

## 🧠 Buenas Prácticas en el Desarrollo de APIs

El desarrollo de APIs requiere **planificación cuidadosa** para garantizar aplicaciones **robustas, escalables y mantenibles**.  
Estas son algunas de las mejores prácticas a seguir 👇

---

### 1️⃣ Correcta Gestión de Errores

Una API debe manejar los errores de forma clara y coherente.

**Recomendaciones:**
- 🔍 **Mensajes Claros:** Explica qué salió mal y cómo solucionarlo.  
- 🚫 **No Exponer Detalles Internos:** Evita mostrar información sensible del servidor.  
- 🧱 **Estructura Consistente:** Usa un formato uniforme, por ejemplo:

```json
{
  "error": true,
  "code": 400,
  "message": "El campo 'email' es obligatorio"
}
```

---

### 2️⃣ Uso de Códigos de Estado HTTP Apropiados

Los códigos HTTP permiten que los clientes entiendan el resultado de sus solicitudes.

| Código |	Significado	| Uso |
|--------|--------------|-----|
| **200 OK** |	Solicitud exitosa |	Lectura o actualización correcta |
| **201 Created** |	Recurso creado |	Respuesta a POST exitoso |
| **400 Bad Request** |	Solicitud incorrecta |	Error de validación o formato |
| **401 Unauthorized** |	No autenticado |	Falta token o credenciales inválidas |
| **403 Forbidden** |	Acceso denegado |	El usuario no tiene permisos |
| **404 Not Found** |	Recurso no encontrado |	ID o ruta inexistente |
| **500 Internal Server Error** |	Error en el servidor |	Fallo inesperado en backend |

👉 El uso correcto de estos códigos mejora la comunicación entre cliente y servidor.

---

### 3️⃣ Importancia de una Documentación Clara y Detallada

Una API sin documentación es una API difícil de usar.
La documentación debe explicar cómo interactuar con cada endpoint y mostrar ejemplos reales.

Recomendaciones:

- 📘 Documentar Endpoints: Ruta, método HTTP, parámetros y ejemplos de respuesta.
- 💬 Ejemplos Claros: Incluye ejemplos de código listos para copiar y probar.
- ⚠️ Casos de Error: Explica posibles errores y cómo manejarlos.
- 🔄 Actualización Constante: Mantén la documentación al día con cada cambio.

---

```makefile
POST /api/usuarios
Descripción: Crea un nuevo usuario en el sistema.

Cuerpo:
{
  "nombre": "César",
  "email": "cesar@ejemplo.com"
}

Respuestas:
201 Created
{
  "status": "success",
  "message": "Usuario creado correctamente"
}

400 Bad Request
{
  "error": true,
  "message": "El email ya está registrado"
}

```