## 🔑 3.1 Fundamentos de Autenticación y Métodos Esenciales

### 🧠 Fundamentos de Autenticación y Métodos Esenciales

Comprender la diferencia entre **autenticación** y **autorización** es fundamental en el desarrollo de aplicaciones modernas. Ambos conceptos trabajan juntos para proteger recursos, pero cumplen funciones distintas.

---

## 🔐 Diferencia entre Autenticación y Autorización

### 👤 Autenticación — *"¿Quién eres?"*
La **autenticación** es el proceso mediante el cual una aplicación verifica la identidad de un usuario.

- **🎯 Objetivo:** Confirmar la identidad del usuario antes de otorgar acceso.
- **🛠️ Métodos comunes:**  
  Usuario y contraseña, passwordless, redes sociales, datos biométricos, JWT.
- **📌 Uso típico:**  
  Proceso de login, validación antes de cambiar datos sensibles.

---

### 🔓 Autorización — *"¿Qué estás autorizado a hacer?"*
La **autorización** determina qué acciones o recursos puede acceder un usuario ya autenticado.

- **🎯 Objetivo:** Controlar accesos dentro de la aplicación según permisos o roles.
- **🛠️ Métodos comunes:**  
  Roles (admin, editor, usuario), permisos por acción.
- **📌 Uso típico:**  
  Restringir rutas, funciones o datos según el perfil del usuario.

---

## 🧬 Principales Métodos de Autenticación en Aplicaciones Modernas

A continuación, los métodos más utilizados hoy en día, junto con sus ventajas, desventajas y usos frecuentes.

---

### 🔹 1. Usuario y Contraseña
El método tradicional donde el usuario ingresa sus credenciales.

- **👍 Ventajas:** Fácil de implementar, familiar para todos.
- **👎 Desventajas:** Expuesto a phishing, fuerza bruta, contraseñas débiles.
- **📌 Uso:** Aplicaciones básicas o tradicionales.  
  *Recomendado:* Siempre usar hash de contraseñas y 2FA.

---

### 🔹 2. Autenticación Passwordless
Permite iniciar sesión sin contraseña usando códigos de un solo uso, enlaces mágicos, SMS o email.

- **👍 Ventajas:** Elimina la necesidad de recordar contraseñas; mejora seguridad.
- **👎 Desventajas:** Depende del correo o teléfono del usuario.
- **📌 Uso:** Aplicaciones donde se busca simplicidad y reducir fricción.

---

### 🔹 3. Autenticación con Redes Sociales (OAuth)
El usuario inicia sesión con Google, Facebook, Twitter, etc.

- **👍 Ventajas:** Rápido, reduce el abandono del registro.
- **👎 Desventajas:** Dependencia de servicios externos, posibles problemas de privacidad.
- **📌 Uso:** Apps que buscan conversión rápida de usuarios.

---

### 🔹 4. Autenticación con Datos Biométricos
Reconocimiento facial, huella, retina, etc.

- **👍 Ventajas:** Muy segura y conveniente.
- **👎 Desventajas:** Requiere hardware especial; puede afectar accesibilidad.
- **📌 Uso:** Banca móvil, apps de alta seguridad.

---

### 🔹 5. Autenticación con JWT (JSON Web Tokens)
Método basado en tokens firmados digitalmente, ideales para APIs y apps distribuidas.

- **👍 Ventajas:** Escalable, sin estado; no requiere almacenar sesiones.
- **👎 Desventajas:** Riesgos si un token es robado; difícil manejar revocación.
- **📌 Uso:** APIs, microservicios, aplicaciones SPA modernas.

---

## 🏁 Conclusión

La elección del método de autenticación depende de la seguridad y experiencia que la aplicación requiera.  
Métodos clásicos como **usuario y contraseña** siguen siendo válidos, pero alternativas modernas como **passwordless**, **OAuth** y **JWT** ofrecen mejores niveles de seguridad y comodidad.

💡 **Recordá:** Autenticación = identidad. Autorización = permisos.  
Ambas trabajan juntas para proteger datos, funcionalidades y garantizar accesos adecuados.

--- 

## 🔧 3.2 Aplicación de JWT en el Desarrollo de Aplicaciones

### 🔐 Introducción a JWT (JSON Web Tokens)

**JWT (JSON Web Tokens)** es un estándar abierto (RFC 7519) utilizado para compartir información de forma **segura**, **compacta** y **firmada digitalmente** entre un cliente (navegador o app móvil) y un servidor.

Se ha vuelto uno de los métodos más populares para autenticación **sin estado (stateless)** en aplicaciones web modernas.

---

## 🧩 ¿Cómo Funcionan los JWT?

Un JWT es un **token autodescriptivo** dividido en 3 partes:

### 1️⃣ **Header (Encabezado)**
Define:
- Tipo de token (JWT)
- Algoritmo de firma (HMAC, SHA256, RSA)

### 2️⃣ **Payload (Carga Útil)**
Contiene los **claims**:  
Datos como:
- ID del usuario  
- Roles  
- Fecha de expiración  
- Información adicional que quiera enviar el servidor  

### 3️⃣ **Signature (Firma)**
Garantiza la **integridad** del token y confirma que no fue alterado.

---

### 📦 Formato de un JWT

Un JWT típico tiene un formato similar a esto:

xxxxx.yyyyy.zzzzz

Cada parte está codificada en **Base64URL**.

---

## 🚀 Aplicación de JWT en la Autenticación Sin Estado (Stateless)

Los JWT se usan para evitar sesiones en el servidor.  
El cliente almacena el token y lo envía en cada solicitud.

### 🔁 **Flujo de Autenticación con JWT**

1. 👤 El usuario envía credenciales al servidor.  
2. ✔️ Si son válidas, el servidor genera un JWT.  
3. 💾 El cliente guarda el token (localStorage, sessionStorage, memoria, etc.).  
4. 📡 Para rutas protegidas, el cliente envía: Authorization: Bearer <token>
5. 🔎 El servidor **verifica** el token:  
   - Si es válido → acceso permitido  
   - Si es inválido o expirado → acceso denegado  

---

## ⚙️ Configuración del Servidor con Express y JWT

### 1️⃣ Instalación de Dependencias

```bash
npm install express jsonwebtoken bcrypt
```

Incluye:

- **express** → servidor web

- **jsonwebtoken** → creación y verificación de JWT

- **bcrypt** → cifrado seguro de contraseñas

---

### 2️⃣ Configuración de Rutas con Express

Debés implementar:

📍 **Ruta de Registro (Signup)**

- Recibe los datos del usuario

- Cifra la contraseña con bcrypt

- Guarda el usuario en la DB

📍 **Ruta de Login**

- Verifica usuario + contraseña

- Genera un JWT con información del usuario

- Envía el token al cliente

📍 **Ruta Protegida**

Solo accesible si el cliente envía un token válido.

---

### 🛡️ 3. Gestión de Tokens y Protección de Solicitudes

Para proteger rutas se usa un middleware de verificación de JWT.

### 🔎 Middleware de Verificación: Pasos

1. Extraer el token del header:

`Authorization: Bearer <token>`


2. Verificarlo con jsonwebtoken.verify y tu clave secreta.

3. Si es válido → continuar.

4. Si no lo es → devolver error de autenticación.

---

### 🧱 Flujo del Middleware

1. El cliente envía la solicitud con el token.

2. El middleware:
   - 🟢 Valida token → acceso permitido
   - 🔴 Token inválido/ausente → error 401

Esto asegura que solo usuarios autenticados accedan a rutas protegidas.

---

### 🏁 Conclusión

Los JWT son una solución moderna, ligera y eficiente para manejar autenticación sin estado.

Permiten:

- Autenticación distribuida

- Escalabilidad

- Interoperabilidad entre servicios

Son ideales para APIs, SPAs, microservicios y cualquier entorno donde mantener sesiones en servidor no sea práctico.

---

## 3.3 🚀 Guía para Integrar JWT en una Aplicación Express

La integración de **JWT (JSON Web Tokens)** en una aplicación Express permite manejar la autenticación **sin estado**, de manera **segura** y **eficiente**.  
A continuación, se detalla cómo **crear tokens**, **verificarlos** y **usarlos** en rutas de **registro** y **login**, paso a paso.

---

## 🔧 Paso 1: Configuración Inicial y Dependencias

Para comenzar:

1. Asegúrate de tener **Node.js** y **npm** instalados.
2. Crea un nuevo proyecto Express e instala las dependencias:

```
npm init -y
npm install express jsonwebtoken bcryptjs body-parser
```
---

Estas librerías permiten:
- ⚙️ Crear el servidor (**express**)  
- 🔑 Manejar tokens (**jsonwebtoken**)  
- 🔒 Cifrar contraseñas (**bcryptjs**)  
- 📦 Procesar datos de solicitudes (**body-parser**)  

Luego, crea un archivo **server.js** con:
- La configuración del servidor  
- Una **clave secreta** para firmar los JWT  
- Una estructura simple para almacenar usuarios (en memoria → en producción usar DB).

---

## 📝 Paso 2: Creación de la Ruta de Registro

La ruta de registro permite crear cuentas nuevas. En este paso:

- Se recibe la info del usuario  
- Se verifica si ya existe  
- Se cifra la contraseña con **bcrypt**  
- Se almacena al nuevo usuario  

➡️ **Explicación:**  
Primero evitamos duplicados. Luego la contraseña se cifra para protegerla antes de guardarla.

---

## 🔐 Paso 3: Ruta de Login y Generación de Tokens JWT

En el login:

- Se reciben credenciales  
- Se valida usuario y contraseña  
- Si todo está bien → se genera un **JWT** firmado  
- El token se envía al cliente  

El token incluye info del usuario y una expiración (por ejemplo, 1h).

➡️ **Explicación:**  
El JWT se genera solo cuando las credenciales son correctas. Es la llave que permitirá acceder a rutas protegidas.

---

## 🛡️ Paso 4: Verificación de Tokens y Protección de Rutas

Para proteger rutas sensibles, se usa un **middleware de verificación**.

El middleware:

- Extrae el token desde los **headers** (`Authorization`)
- Lo verifica con la clave secreta  
- Si es válido → continúa  
- Si es inválido o falta → devuelve error “Acceso denegado”  

Después, aplicás este middleware a las rutas protegidas.

➡️ **Explicación:**  
Esto asegura que **solo** usuarios autenticados puedan acceder a recursos privados.

---

## 🧪 Paso 5: Prueba del Sistema

1. **Registro:**  
   - Envía los datos del usuario a la ruta de registro  
   - Verifica que se cifre la contraseña  

2. **Login:**  
   - Inicia sesión  
   - Asegúrate de recibir un **JWT** en la respuesta  

3. **Acceso a rutas protegidas:**  
   - Usa el token en los headers  
   - Formato recomendado:  
     ```
     Authorization: Bearer <tu_token>
     ```

Si todo funciona, tu sistema JWT está correctamente integrado. 🎉

---