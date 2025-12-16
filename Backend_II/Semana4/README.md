## 4.1 🔐 Fundamentos y Configuración de Autenticación con JWT y Passport

---

## 🎯 Introducción a los Objetivos de la Clase: Integración de JWT con Passport

En esta unidad nos enfocaremos en la **integración de JWT (JSON Web Tokens)** con **Passport**, un middleware de autenticación para Node.js que facilita la implementación de múltiples estrategias de autenticación en aplicaciones Express.

El objetivo principal es aprender a utilizar **JWT junto con Passport** para manejar **autenticación sin estado**, proteger rutas de la aplicación y mantener la **seguridad** de las solicitudes.

---

## 📌 Objetivos de la Clase

-  **Comprender la integración de JWT con Passport**  
   Aprender cómo configurar y utilizar Passport para manejar autenticación basada en JWT, facilitando la gestión de usuarios y la protección de rutas.

-  **Explorar las formas de enviar JWT**  
   Analizar los métodos más comunes para enviar tokens JWT desde el cliente al servidor:

   -  Headers de autorización
   -  Cookies

-  **Comparar métodos de envío de JWT**  
   Evaluar ventajas, desventajas y consideraciones de seguridad de cada método para elegir el más adecuado según el contexto de la aplicación.

---

## 📦 Formas de Enviar JWT: Headers de Autorización vs Cookies

Los JWT pueden enviarse de distintas maneras. Las más utilizadas son **headers de autorización** y **cookies**, cada una con implicaciones distintas en seguridad y facilidad de implementación.

---

## 1️⃣ Envío de JWT a través de Headers de Autorización

En este enfoque, el JWT se envía en el header `Authorization` usando el esquema **Bearer**.

`Authorization: Bearer <token>`

### ✅ Ventajas

-  **Simplicidad y control**  
   El cliente envía el token explícitamente en cada solicitud.

-  **Desacoplamiento del estado de sesión**  
   Ideal para APIs RESTful que no mantienen estado en el servidor.

-  **Facilidad de integración**  
   Funciona muy bien con Passport y con clientes web y móviles.

### ❌ Desventajas

-  **Exposición a XSS (Cross-Site Scripting)**  
   Si el token se almacena en lugares inseguros, puede ser robado mediante JavaScript malicioso.

-  **Sin protección adicional por defecto**  
   No cuenta con mecanismos como `HttpOnly`, propios de las cookies.

### 🔒 Consideraciones de Seguridad

-  **Almacenamiento seguro**  
   Preferir memoria o almacenamiento seguro del navegador. Evitar `localStorage`.

-  **Uso obligatorio de HTTPS**  
   Protege la transmisión del token contra ataques de tipo man-in-the-middle.

---

## 2️⃣ Envío de JWT a través de Cookies

En este método, el JWT se guarda en una **cookie**, que se envía automáticamente con cada solicitud HTTP.

### ✅ Ventajas

-  **Protección contra XSS**  
   El flag `HttpOnly` impide el acceso al token desde JavaScript.

-  **Envío automático**  
   El navegador gestiona el envío del token sin intervención del cliente.

-  **Configuración de seguridad adicional**  
   Permite usar flags como:
   -  `HttpOnly`
   -  `Secure`
   -  `SameSite`

### ❌ Desventajas

-  **Exposición a CSRF (Cross-Site Request Forgery)**  
   Al enviarse automáticamente, puede ser explotado si no se configuran protecciones adecuadas.

-  **Mayor complejidad**  
   Requiere una configuración cuidadosa del servidor para evitar vulnerabilidades.

### 🔒 Consideraciones de Seguridad

-  **Configurar correctamente los flags**  
   Usar siempre `HttpOnly`, `Secure` y `SameSite`.

-  **Mitigar ataques CSRF**  
   Implementar tokens CSRF u otras estrategias que validen el origen de las solicitudes.

---

## 4.2 🧩 Middleware Personalizado

---

## 🛡️ Desarrollo de un Middleware Personalizado para la Gestión de Roles y Control de Accesos

En aplicaciones que manejan **diferentes niveles de permisos**, es fundamental contar con un sistema robusto de **gestión de roles y control de accesos**.  
Un middleware personalizado permite **restringir el acceso a rutas específicas** según el rol del usuario (por ejemplo: administrador, editor o usuario básico).

---

## ⚙️ Desarrollo del Middleware de Gestión de Roles

Este middleware se encarga de verificar si un usuario autenticado posee el **rol necesario** para acceder a una ruta determinada y decide si permite o deniega el acceso.

### 📌 Definición del Middleware

-  El middleware se define como una **función reutilizable**.
-  Recibe como parámetro un **array de roles permitidos**.
-  Evalúa si el rol del usuario coincide con alguno de los roles autorizados.

---

### 🧠 Lógica del Middleware

1. **Verificación de autenticación**

   -  Comprueba si el usuario está autenticado.
   -  Si no lo está, devuelve un error indicando que se requiere autenticación.

2. **Verificación de rol**

   -  Si el usuario está autenticado, se valida su rol.
   -  Se compara el rol del usuario con los roles permitidos.

3. **Control de acceso**
   -  ✅ Si el rol es válido, se permite el acceso a la ruta.
   -  ❌ Si el rol no coincide, se devuelve un mensaje de acceso denegado.

---

## 🔒 Uso del Middleware en Rutas Protegidas

El middleware de roles se aplica directamente en las rutas que requieren **control de acceso basado en permisos**, asegurando que solo los usuarios autorizados puedan acceder a determinadas funcionalidades.

---

### 🧪 Ejemplo de Implementación del Middleware de Roles

-  Se define un middleware que recibe un **array de roles permitidos**.
-  Dentro de la función:
   -  Se verifica si el usuario está autenticado.
   -  Se valida si su rol se encuentra dentro de los roles permitidos.
-  Si cumple los requisitos:
   -  Se ejecuta la siguiente función en la cadena de middlewares.
-  Si no cumple:
   -  Se responde con un mensaje de error o acceso denegado.

---

## 🎯 Creación de un Custom Callback en Passport para Manejar Errores y Mensajes Personalizados

Passport permite manejar el proceso de autenticación de forma más flexible mediante el uso de un **Custom Callback**.  
Este enfoque brinda un **control detallado** sobre los errores, mensajes y respuestas durante la autenticación.

---

## 🔧 Implementación del Custom Callback en Passport

### 📦 Configuración Previa

Antes de utilizar un Custom Callback, es necesario:

-  Tener configurada una **estrategia de Passport**, como:
   -  JWT
   -  Local

---

### 🧩 Definición del Custom Callback

-  El Custom Callback reemplaza el comportamiento predeterminado de Passport.
-  Se define como una función personalizada en la ruta de autenticación.
-  Recibe los siguientes parámetros:
   -  `req` → solicitud
   -  `res` → respuesta
   -  `next` → siguiente middleware
   -  `err` → error de autenticación
   -  `user` → usuario autenticado
   -  `info` → mensajes informativos

---

### 🧠 Lógica del Custom Callback

1. **Manejo de errores**

   -  Si ocurre un error durante la autenticación, se responde con un mensaje específico.

2. **Validación del usuario**

   -  Si el usuario no está autenticado (credenciales incorrectas, usuario inexistente, etc.), se envía un mensaje personalizado.

3. **Autenticación exitosa**
   -  Si el usuario es válido:
      -  Se guarda en la sesión **o**
      -  Se genera un JWT y se envía al cliente.

---

## 🧪 Ejemplo de Uso del Custom Callback en Passport

-  Se configura la ruta de autenticación utilizando Passport.
-  Se especifica un **Custom Callback** en lugar del método estándar.
-  Dentro del callback:
   -  Se manejan errores y respuestas de éxito de forma personalizada.
   -  Se envían mensajes claros y específicos según cada escenario.

---

## 🔄 Flujo del Custom Callback

-  ❌ **Error en la autenticación**  
   Se devuelve un mensaje de error específico.

-  ⚠️ **Usuario inexistente o autenticación fallida**  
   Se devuelve un mensaje personalizado como:

   -  “Usuario no encontrado”
   -  “Contraseña incorrecta”

-  ✅ **Autenticación exitosa**  
   El usuario es autenticado y se continúa con el flujo definido:
   -  Redirección al dashboard
   -  Envío de un JWT
   -  Acceso a rutas protegidas

---