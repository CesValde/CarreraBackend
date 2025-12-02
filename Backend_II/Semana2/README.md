## 2.1 Fundamentos de Cookies, Sesiones y Almacenamiento

### 🧩 Fundamentos de Cookies, Sesiones y Almacenamiento

### 🍪 Cookies, 🔐 Sesiones y 🗂️ Métodos de Almacenamiento en el Servidor

En el desarrollo backend, la gestión del estado del usuario es esencial para crear aplicaciones dinámicas y personalizadas. Tres conceptos clave en este ámbito son las **Cookies**, las **Sesiones** y los diferentes métodos de almacenamiento en el servidor. A continuación, se explican estos conceptos y sus aplicaciones.

---

## 🍪 Cookies

Las cookies son pequeños fragmentos de datos almacenados en el navegador del cliente que permiten al servidor recordar información específica entre solicitudes HTTP. Se utilizan principalmente para gestionar el estado del usuario, recordar preferencias y realizar un seguimiento de la actividad del usuario.

### ⭐ Características principales de las Cookies:

- **📍 Almacenamiento en el Cliente:** Las cookies se guardan en el navegador del usuario y se envían automáticamente al servidor con cada solicitud.
- **⏳ Duración Controlada:** Pueden configurarse con una fecha de expiración, definiendo si son:
  - Cookies de sesión (desaparecen al cerrar el navegador)
  - Cookies persistentes (se mantienen hasta su expiración)
- **🔐 Limitaciones de Seguridad:** Las cookies pueden ser vulnerables a ataques como XSS o CSRF. Se protegen con atributos como:
  - `HttpOnly`
  - `Secure`
  - `SameSite`
- **📌 Uso común:** Autenticación, seguimiento de sesiones, preferencias del usuario.

---

## 🔐 Sesiones

Las sesiones permiten almacenar datos relacionados con un usuario en el servidor, utilizando una cookie en el cliente para identificarlo. Esto permite mantener el estado del usuario mientras navega por la aplicación.

### ⭐ Características principales de las Sesiones:

- **🗄️ Almacenamiento en el Servidor:** Los datos viven en el servidor; el cliente sólo guarda un ID.
- **🛡️ Mayor Seguridad:** Son menos vulnerables a modificaciones desde el cliente.
- **⌛ Uso Temporal:** Las sesiones expiran tras un periodo de inactividad o al cerrar el navegador.
- **📌 Uso común:** Autenticación, carritos de compra, preferencias temporales.

---

## 🗂️ Métodos de Almacenamiento en el Servidor

Los datos de las sesiones pueden almacenarse de diferentes maneras. Los métodos más comunes son:

---

### 🧠 Memory Storage (Almacenamiento en Memoria)

- **Descripción:** Guarda las sesiones en la RAM del servidor.  
- **Ventajas:** Muy rápido y fácil de implementar.  
- **Desventajas:** No escalable ni persistente; se pierde al reiniciar.  
- **Uso Ideal:** Proyectos pequeños, desarrollo y pruebas.

---

### 📁 File Storage (Almacenamiento en Archivos)

- **Descripción:** Guarda las sesiones en archivos en el sistema de archivos.  
- **Ventajas:** Persistencia básica y configuración simple.  
- **Desventajas:** Escalabilidad limitada y rendimiento menor en grandes aplicaciones.  
- **Uso Ideal:** Aplicaciones pequeñas o medianas.

---

### 🗄️ Database Storage (Almacenamiento en Base de Datos)

- **Descripción:** Guarda las sesiones en bases de datos SQL o NoSQL.  
- **Ventajas:** Persistente, escalable y apto para sistemas distribuidos.  
- **Desventajas:** Requiere configuración y mantenimiento adicional.  
- **Uso Ideal:** Aplicaciones grandes o con alto tráfico.

---

## 2.2 🗄️ File Storage

### 💾 Soluciones de Almacenamiento para Sesiones

Al elegir cómo almacenar las sesiones en una aplicación backend, es importante considerar las características, ventajas y limitaciones de cada método. A continuación, se describen en detalle las opciones de almacenamiento de sesiones, comenzando con **File Storage** y luego abordando el uso de **MongoDB Atlas** para la gestión de sesiones.

---

## 📁 File Storage

File Storage es una forma de almacenar sesiones en archivos dentro del sistema de archivos del servidor. Este método guarda la información de la sesión en archivos, permitiendo una persistencia básica entre solicitudes.

### ✅ Ventajas de File Storage

- **🛠️ Fácil configuración:** No requiere bases de datos externas ni servicios adicionales.
- **💽 Persistencia básica:** Los archivos se mantienen incluso si se reinicia el servidor.
- **🧩 Ideal para proyectos pequeños:** Funciona bien con cargas bajas y pocas sesiones simultáneas.

### ⚠️ Limitaciones de File Storage

- **📉 Escalabilidad limitada:** No es adecuado para aplicaciones grandes o distribuidas.
- **🐢 Problemas de rendimiento:** Lectura/escritura en disco es más lenta que en memoria o bases NoSQL.
- **🔓 Riesgos de seguridad:** Los archivos pueden ser vulnerables si no se gestionan permisos y cifrado.
- **🚫 No funciona en clústeres:** No hay sincronización automática entre múltiples servidores.

---

## 🔧 Configuración de File Storage para Sesiones Persistentes

Para implementar sesiones persistentes con File Storage en Express, utilizamos `express-session` y `session-file-store`.

### 📦 1. Instalar dependencias

```bash
npm install express-session session-file-store
```

### 🧱 2. Configurar File Storage en la app

- Importar las dependencias necesarias (session y FileStore).

- Configurar express-session usando FileStore como método de almacenamiento.

- Definir la ubicación de los archivos y los parámetros de expiración y seguridad.

### 🔐 3. Seguridad recomendada

- Asegurar permisos correctos en la carpeta de sesiones.

- Implementar cifrado siempre que sea posible.

---

### 🍃 Sesiones con MongoDB Atlas

MongoDB Atlas es una base de datos NoSQL en la nube ideal para manejar sesiones de forma escalable, rápida y segura. Es una opción común en aplicaciones modernas con alta concurrencia.

- ⭐ Ventajas de usar MongoDB para sesiones
- ⚡ Escalable: Soporta grandes volúmenes de datos distribuidos en múltiples nodos.
- 📌 Persistente y consistente: Funciona perfectamente en entornos multi-servidor.
- 🚀 Alto rendimiento: Su arquitectura orientada a documentos permite accesos rápidos.
- 🤝 Fácil integración: Trabaja muy bien junto a Express.

---

## 🔧 Integración de Sesiones con MongoDB Atlas

Para integrar MongoDB como almacenamiento de sesiones se utiliza express-session junto con connect-mongo.

### 📦 1. Instalar dependencias
`npm install express-session connect-mongo`

### 🧱 2. Configurar MongoDB como almacén de sesiones

- Importar session y MongoStore desde connect-mongo.
- Configurar express-session usando MongoStore.create, indicando:
   - URL de conexión a MongoDB Atlas.
   - Tiempo de vida de la sesión.
   - Opciones adicionales de seguridad.

### 🔐 3. Seguridad recomendada
- Activar autenticación en MongoDB Atlas.
- Habilitar cifrado.
- Restringir accesos por IP o VPN.

---

## 🔐 2.3 Implementación y Seguridad en Sistemas de Login

### 🛠️ Implementación y Seguridad en Sistemas de Login

La implementación de un sistema de login basado en sesiones es fundamental para autenticar usuarios, proteger rutas y manejar permisos dentro de una aplicación web. A continuación, se detalla cómo crear un sistema de login con sesiones, middleware de autorización y control de roles, así como la implementación del logout.

---

## 🧩 1. Configuración del Sistema de Login con Sesiones

Para implementar un sistema de login con sesiones en Express, es necesario configurar el manejo de sesiones con **express-session** y utilizar herramientas adicionales como **bcrypt** para el cifrado de contraseñas.

### 📌 Pasos Básicos

- **📦 Instalar dependencias:**  
  Necesitas `express`, `express-session`, y alguna librería para gestionar contraseñas como `bcrypt`.

- **⚙️ Configuración de sesiones:**  
  Configura `express-session` asegurando el uso de un almacén persistente como MongoDB o Redis para mayor seguridad y escalabilidad.

- **📝 Formulario de login (frontend):**  
  Crea un formulario donde el usuario ingrese su usuario y contraseña.

- **🔐 Ruta de autenticación:**  
  Define una ruta **POST** que valide las credenciales y, si son correctas, cree una sesión activa para el usuario.

---

## 🛡️ 2. Creación de Rutas Protegidas con Middleware de Autorización

Para restringir acceso a rutas sensibles, se debe usar un middleware que verifique si el usuario está autenticado. Además, la gestión de roles permite limitar rutas según permisos.

---

### 🔑 Middleware de Autenticación

Este middleware verifica si el usuario ha iniciado sesión antes de permitir el acceso.

#### ✔️ Qué hace:
- Comprueba si existe un usuario en la sesión.
- Si no está autenticado, redirige al login o muestra un mensaje de error.

#### ✔️ Uso:
- Se agrega como primer parámetro en rutas que se desean proteger.

---

### 🧭 Middleware de Gestión de Roles

Permite restringir rutas según permisos (por ejemplo, admin).

#### ✔️ Qué hace:
- Verifica el rol almacenado en la sesión.
- Si el rol del usuario no coincide con el requerido, muestra error o redirige.

#### ✔️ Uso:
- Se aplica en rutas específicas, como paneles de administrador.

---

## 🚪 3. Implementación de la Función de Logout

El logout permite cerrar la sesión de forma segura.

### 📌 Pasos para configurarlo:
- **Crear una ruta GET o POST** destinada al logout.
- **Destruir la sesión** con `req.session.destroy`.
- **Redirigir al usuario** a login o inicio después del cierre.

### 🔄 Flujo del Logout:
1. El usuario activa el logout.
2. Se destruye la sesión activa.
3. El usuario es redirigido a una página específica.

---

## 🔒 4. Configuración de Middleware para Asegurar el Acceso

Los middleware permiten controlar qué usuarios pueden acceder a qué rutas.

### ✔️ Uso general:
- Se agregan los middleware de autenticación y roles a las rutas protegidas.
- Usuarios no autenticados se redirigen automáticamente al login.
- Usuarios con roles incorrectos reciben mensajes de acceso denegado.

---

## 🧠 Ejemplo de Flujo Completo

### 👉 Usuario intenta acceder a una ruta protegida:
- El middleware verifica su sesión.
- Si está autenticado y tiene el rol adecuado, se le permite el acceso.
- Si no cumple con alguno de los requisitos, se lo redirige o se muestra un error.

### 👉 Usuario realiza logout:
- La sesión se destruye.
- Se limpia la cookie asociada.
- Es redirigido a la página de login.

---
