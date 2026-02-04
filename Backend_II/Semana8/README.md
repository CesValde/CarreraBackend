## ✉️ 8.1 Fundamentos de Mensajería y Mailing

### 📌 Introducción y Conceptos Clave

**Objetivos de la Clase: Mailing y Mensajería en Backend**

En esta clase se aborda la integración de servicios de **mailing** y **mensajería** dentro de aplicaciones backend utilizando **Nodemailer** y **Twilio**. El objetivo principal es comprender los fundamentos de estas herramientas y cómo aplicarlas de forma práctica en proyectos reales para mejorar la comunicación con los usuarios.

---

## 📧 1. Uso de Nodemailer para Mailing

**Nodemailer** es una librería de Node.js que permite enviar correos electrónicos desde aplicaciones backend. Es ampliamente utilizada para:

- Notificaciones automáticas
- Confirmaciones de registro
- Recuperación de contraseñas
- Comunicaciones transaccionales en general

### 🔌 Protocolo SMTP

Nodemailer utiliza el protocolo **SMTP (Simple Mail Transfer Protocol)** para el envío de correos electrónicos.  
Este protocolo permite la transferencia de emails entre servidores utilizando puertos específicos, entre ellos:

- **25/TCP** → SMTP estándar
- **587/TCP** → SMTP con STARTTLS
- **465/TCP** → SMTPS (conexión segura)

---

### ⚙️ Configuración Básica

Para utilizar Nodemailer es necesario configurar un **transporte**, el cual define el servicio de correo que utilizará la aplicación, por ejemplo:

- Gmail
- Outlook
- SendGrid

La configuración incluye credenciales, host, puerto y opciones de seguridad propias del servicio elegido.

---

### 🔐 Autenticación con Gmail

Para mejorar la seguridad se recomienda:

- Activar la autenticación en dos pasos
- Utilizar contraseñas de aplicaciones en lugar de la contraseña principal

Esto reduce riesgos y evita bloqueos por políticas de seguridad del proveedor.

---

### 🛠️ Aplicaciones Prácticas con Nodemailer

- Implementación de un endpoint `/mail` en un servidor Express para probar envíos
- Uso de **plantillas HTML** para personalizar correos
- Envío de **attachments** (archivos adjuntos) junto al mensaje

---

## 📲 2. Introducción al Modelo de Mensajería de Twilio

**Twilio** es una plataforma de comunicaciones en la nube que permite integrar funcionalidades como:

- Envío de SMS
- Mensajes de WhatsApp
- Llamadas telefónicas
- Notificaciones en tiempo real

Todo directamente desde una aplicación backend.

---

### ⚙️ Configuración de Twilio

Para comenzar a utilizar Twilio se necesita crear una cuenta en la plataforma, la cual ofrece un **período de prueba gratuito** con saldo inicial para realizar pruebas de integración.

---

### 🧩 Componentes Clave de Twilio

- **Account SID**: Identificador único de la cuenta
- **Auth Token**: Clave de autenticación para garantizar la seguridad
- **Twilio Phone Number**: Número asignado para pruebas y envíos

Estos datos se utilizan para autenticar y autorizar cada envío de mensaje.

---

### 🚀 Aplicaciones Prácticas con Twilio

- Envío de **SMS automatizados** para notificaciones directas al usuario
- Integración de Twilio en endpoints que manejan comunicaciones críticas como:
   - Confirmaciones
   - Alertas
   - Avisos importantes

---

### 🏁 Cierre del Tema

El uso combinado de **Nodemailer** y **Twilio** permite implementar sistemas de comunicación robustos y profesionales en aplicaciones backend, mejorando la experiencia del usuario y facilitando notificaciones oportunas y confiables.

---

## 📧 8.2 Nodemailer

### Configuración y Uso de Nodemailer

### Instrucciones para Configurar Nodemailer en un Servidor Express

A continuación se detalla el proceso para configurar **Nodemailer** y enviar correos electrónicos desde un servidor **Express**, incluyendo la instalación, la autenticación con Gmail y el uso de **attachments** e imágenes incrustadas.

---

## 1️⃣ Instalación de Nodemailer

Primero, instala Nodemailer utilizando **npm**:

```bash
npm install nodemailer
```

Una vez instalado, importa Nodemailer en tu archivo principal (por ejemplo, `app.js`):

```js
const nodemailer = require("nodemailer")
```

---

## 2️⃣ Autenticación con Gmail 🔐

Para enviar correos desde una cuenta de Gmail, es obligatorio utilizar una contraseña de aplicación, ya que Google no permite autenticarse directamente con la contraseña personal.

**Pasos necesarios:**

1. Habilitar la autenticación en dos pasos en tu cuenta de Google.

2. Crear una contraseña de aplicación:

- Ir a la configuración de la cuenta de Google.

- Generar una nueva contraseña de aplicación específica para Nodemailer.

- Guardar esta contraseña, ya que no podrá recuperarse luego.

---

## 3️⃣ Configuración del Transporte

El transporte define cómo Nodemailer se conecta al servicio de correo.
Ejemplo utilizando Gmail:

```js
const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "tu-email@gmail.com",
      pass: "tu-contraseña-de-aplicación" // contraseña de aplicación
   }
})
```

Esta configuración permite a Express enviar correos a través de los servidores de Gmail.

---

## 4️⃣ Envío de un Correo Electrónico ✉️

Define las opciones del correo, como remitente, destinatario, asunto y contenido:

```js
const mailOptions = {
   from: "tu-email@gmail.com",
   to: "destinatario@example.com",
   subject: "Asunto del correo",
   html: `     <h1>Hola!</h1>
    <p>Este es un correo de prueba con Nodemailer.</p>
  `
}
```

Para enviar el correo:

```js
transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
      console.log("Error al enviar el correo:", error)
   } else {
      console.log("Correo enviado:", info.response)
   }
})
```

---

## 5️⃣ Uso de Attachments e Imágenes 🖼️

Nodemailer permite adjuntar archivos e incrustar imágenes utilizando la propiedad attachments:

```js
const mailOptions = {
   from: "tu-email@gmail.com",
   to: "destinatario@example.com",
   subject: "Correo con adjuntos",
   html: `     <p>Mira la imagen adjunta:</p>
      <img src="cid:imagen1" />
   `,
   attachments: [
      {
         filename: "documento.pdf",
         path: "./ruta/documento.pdf"
      },
      {
         filename: "imagen.png",
         path: "./ruta/imagen.png",
         cid: "imagen1"
      }
   ]
}
```

---

### 📌 Notas importantes:

- Los attachments permiten enviar archivos junto al correo.

- El atributo cid permite incrustar imágenes directamente dentro del HTML, evitando que aparezcan solo como adjuntos tradicionales.
