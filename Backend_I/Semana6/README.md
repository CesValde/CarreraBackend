# 6.1 Fundamentos de Websockets

## Introducción a los Websockets

### Introducción a WebSockets: Comparación con HTTP y su Importancia en Aplicaciones en Tiempo Real

#### ¿Qué son los WebSockets?
WebSockets es un protocolo de comunicación que permite establecer una conexión bidireccional y persistente entre el cliente y el servidor sobre una única conexión TCP. A diferencia del protocolo HTTP, que sigue un modelo de solicitud-respuesta, WebSockets permite que ambos extremos (cliente y servidor) puedan enviar y recibir datos en cualquier momento, sin necesidad de hacer solicitudes adicionales.

---

### Diferencias entre WebSockets y HTTP

#### Modelo de Comunicación:
- **HTTP:** Basado en un modelo de solicitud-respuesta. El cliente siempre inicia la comunicación y el servidor responde. Una vez que la respuesta es enviada, la conexión se cierra.
- **WebSockets:** Utiliza un canal de comunicación abierto, donde tanto el cliente como el servidor pueden enviar datos en cualquier dirección sin necesidad de realizar nuevas solicitudes. La conexión permanece abierta hasta que cualquiera de las partes decida cerrarla.

#### Persistencia de la Conexión:
- **HTTP:** Cada interacción requiere abrir y cerrar una conexión. Esto puede ser ineficiente para aplicaciones que requieren comunicación continua.
- **WebSockets:** La conexión se establece una vez y se mantiene abierta, lo que permite una comunicación continua y eficiente.

#### Direccionalidad de la Comunicación:
- **HTTP:** Comunicación unidireccional, donde el cliente solicita y el servidor responde.
- **WebSockets:** Comunicación bidireccional, donde tanto el cliente como el servidor pueden iniciar la transmisión de datos.

---

### Importancia de WebSockets en Aplicaciones en Tiempo Real
WebSockets son cruciales para el desarrollo de aplicaciones que requieren actualizaciones en tiempo real, como chats, paneles de control en tiempo real, juegos en línea, y sistemas de subastas. Este protocolo es ideal cuando la aplicación necesita que el servidor pueda enviar datos al cliente en cualquier momento, sin esperar una solicitud específica, como ocurre con HTTP.

---

### Características Principales de WebSockets
- **Conexión Persistente:** La conexión se mantiene abierta, lo que permite una comunicación continua entre cliente y servidor.
- **Bajo Overhead:** Al mantener la conexión abierta, se reduce el overhead asociado con la apertura y cierre constante de conexiones que ocurre en HTTP.
- **Comunicación Bidireccional:** Ambos extremos pueden enviar y recibir datos de manera simultánea, lo que permite una experiencia de usuario más dinámica y reactiva.

---

### Comparación Directa entre HTTP y WebSockets

| Característica | HTTP | WebSockets |
|----------------|------|-------------|
| **Modelo** | Solicitud-Respuesta | Comunicación Bidireccional |
| **Persistencia** | No | Sí |
| **Conexión** | Se cierra después de cada respuesta | Se mantiene abierta |
| **Uso Ideal** | Cargar páginas web, APIs | Aplicaciones en tiempo real (chats, juegos, etc.) |

En resumen, mientras que HTTP es excelente para la mayoría de las interacciones web tradicionales, WebSockets ofrece una solución superior para aplicaciones que requieren una comunicación en tiempo real y continua, siendo así una herramienta indispensable en el desarrollo de aplicaciones modernas.

---

## Implementación de Websockets en Servidores Express - Parte I

## Implementación de Websockets en Servidores Express - Parte II

---

# Creación de un Chat con Websockets

## Creación de una Aplicación de Chat en Tiempo Real utilizando WebSockets

Desarrollar una aplicación de chat en tiempo real es un excelente ejercicio para comprender el uso de WebSockets en una aplicación práctica. A continuación, se describe el proceso completo, desde la creación de la interfaz de usuario hasta la integración con un servidor WebSocket.

### Configuración del Entorno
Antes de comenzar con el desarrollo, es esencial configurar un entorno adecuado. Se necesita un entorno de ejecución de JavaScript, como **Node.js**, y una biblioteca que facilite la implementación de WebSockets, como **socket.io**.  
El proyecto se inicia configurando un archivo base para gestionar las dependencias necesarias.

### Desarrollo de la Interfaz de Usuario (Frontend)
La interfaz de usuario es fundamental, ya que es donde los usuarios interactúan para enviar y recibir mensajes en tiempo real.  
La estructura básica incluye:

- Un formulario para que los usuarios ingresen su nombre o se identifiquen antes de unirse al chat.
- Un área de entrada de texto donde los usuarios pueden escribir sus mensajes.
- Un panel o contenedor donde se mostrarán los mensajes en tiempo real a medida que se envían y reciben.

Es recomendable añadir algunos estilos para mejorar la presentación y la experiencia del usuario.

---

### Configuración del Servidor WebSocket (Backend)
El servidor es la pieza clave que maneja la lógica de los mensajes y facilita la comunicación en tiempo real entre los usuarios.  
Se utiliza un servidor que actúa como intermediario, gestionando las conexiones de los clientes (los usuarios) y distribuyendo los mensajes enviados a todos los participantes del chat.  
Este servidor debe estar configurado para:

- Escuchar nuevas conexiones de los usuarios.
- Gestionar el envío y la recepción de mensajes entre los clientes.
- Desconectar usuarios cuando cierran la sesión o pierden la conexión.

---

### Integración del Cliente con el Servidor WebSocket
Una vez que la interfaz de usuario y el servidor están configurados, es necesario integrarlos para que la aplicación pueda funcionar correctamente.  
La integración implica que el cliente (es decir, la interfaz de usuario en el navegador) se conecte al servidor WebSocket y pueda enviar y recibir mensajes.

#### Flujo de Comunicación:
1. Cuando un usuario escribe un mensaje y lo envía, el cliente envía este mensaje al servidor.
2. El servidor recibe el mensaje y lo distribuye a todos los usuarios conectados, para que todos vean el mensaje en tiempo real.
3. La interfaz de usuario se actualiza automáticamente para mostrar los nuevos mensajes a medida que llegan.

---

### Pruebas y Mejora Continua
Después de completar la integración, es importante probar la aplicación para asegurarse de que todos los componentes funcionan correctamente.  
Las pruebas deberían incluir:

- Conexión y desconexión de usuarios.
- Envío y recepción de mensajes.
- Capacidad del servidor para manejar múltiples conexiones simultáneas.

Posteriormente, se pueden agregar características adicionales como:

- Gestión de usuarios.
- Notificaciones en tiempo real.
- Almacenamiento de mensajes en una base de datos para mejorar la funcionalidad y la experiencia del usuario.

---

# 6.2 Despliegue y Mejora de la Aplicación de Chat

## 🚀 Deploy de la Aplicación con Glitch.com

---

## 💬 Uso de Sweetalert para Autenticación en Websockets

### 🧭 Introducción

En este apartado se describen los pasos necesarios para integrar **Sweetalert2** en una aplicación de chat que utiliza **Websockets**, con el objetivo de crear un sistema de autenticación que bloquee el acceso al chat hasta que el usuario se identifique.  
**Sweetalert2** es una librería que permite mostrar alertas personalizadas en el frontend, mejorando la interfaz de usuario.

---

### ⚙️ Pasos para la Integración

#### 1️⃣ Instalación de Sweetalert2

Para empezar, es necesario instalar Sweetalert2 en el proyecto. Esto se puede hacer utilizando **npm** o incluyendo un **CDN** en el archivo HTML principal de la aplicación.

- **Usando npm:**
  ```bash
  npm install sweetalert2
  ```

- **Usando CDN (en el `<head>` de `index.handlebars` o archivo principal):**
  ```html
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  ```

---

#### 2️⃣ Modificación de la Vista Principal (`index.handlebars`)

Se debe modificar la vista principal del chat para **bloquear el acceso** hasta que el usuario se identifique.  
En lugar de mostrar el chat de inmediato, se configurará una alerta utilizando **Sweetalert2** para pedir el nombre del usuario.

- La alerta debe solicitar al usuario que **ingrese su nombre de usuario**.  
- El nombre ingresado se debe guardar en el **almacenamiento local del navegador**.  
- El nombre de usuario también puede ser **enviado al servidor** para registrar al usuario.

---

#### 3️⃣ Configuración del Archivo `index.js`

Después, se debe configurar el archivo `index.js` para manejar la autenticación y conectar al usuario al servidor de Websockets **solo si ha ingresado su nombre de usuario**.

- El archivo debe comprobar si el nombre de usuario está almacenado localmente.
- Si no está presente, se muestra una advertencia y se bloquea el acceso al chat.
- Si el nombre está disponible, se establece la conexión con el servidor y se emite un evento para registrar al usuario.

---

#### 4️⃣ Configuración del Servidor (`app.js`)

En el lado del servidor (`app.js`), se debe escuchar el evento de registro del usuario y gestionar la lista de usuarios conectados.

- El servidor debe recibir el nombre del usuario del cliente.  
- Puede registrar al usuario y emitir mensajes previos, o realizar acciones necesarias según la lógica de la aplicación.

---

### 🧩 Conclusión

Siguiendo estos pasos, se logrará integrar **Sweetalert2** en la aplicación de chat, estableciendo un sistema de autenticación que **bloqueará el acceso al chat hasta que el usuario se identifique**.  
Este sistema de autenticación básica mejorará la **experiencia del usuario** y permitirá **gestionar las sesiones** de manera más efectiva utilizando **Websockets**.

---

# 6.3 Conceptos Avanzados y Aplicaciones de Websockets

## Conceptos Avanzados de Websockets

### Introducción a los Websockets
Los **Websockets** son un protocolo de comunicación que permite una interacción bidireccional en tiempo real entre un cliente y un servidor.  
A diferencia de HTTP, que sigue un modelo de **petición-respuesta**, los Websockets permiten que los datos fluyan libremente entre el cliente y el servidor sin la necesidad de iniciar constantemente nuevas conexiones.  

Esta capacidad es crucial en aplicaciones que requieren actualización constante de datos en tiempo real, como chats, subastas en línea y juegos multijugador.

---

### Persistencia de Conexiones
Uno de los aspectos más avanzados de los Websockets es la **persistencia de conexiones**.  
A diferencia de otros protocolos que requieren el establecimiento y cierre de conexiones para cada intercambio de datos, los Websockets **mantienen una conexión abierta y persistente** durante toda la sesión de comunicación.

Esta persistencia permite que tanto el servidor como el cliente envíen y reciban datos en cualquier momento, lo que es esencial para aplicaciones que necesitan actualizaciones continuas sin interrupciones.

#### Beneficios de la Persistencia de Conexiones:
- **Reducción de la Latencia:** Al mantener una conexión abierta, se elimina el tiempo necesario para establecer nuevas conexiones repetidamente, lo que reduce significativamente la latencia.  
- **Eficiencia en el Uso de Recursos:** Los Websockets minimizan el uso de ancho de banda al evitar la sobrecarga de encabezados HTTP en cada intercambio de datos.  
- **Experiencia de Usuario Mejorada:** Esto se traduce en una experiencia más fluida y en tiempo real, crucial en aplicaciones como subastas o juegos en línea.

---

### Manejo de Múltiples Clientes
En escenarios complejos como juegos multijugador o plataformas de subastas, es esencial manejar múltiples clientes simultáneamente.  
Los Websockets están diseñados para **gestionar conexiones concurrentes de manera eficiente**, permitiendo que un solo servidor maneje cientos o incluso miles de clientes conectados al mismo tiempo.

#### Consideraciones Clave:
- **Identificación de Clientes:** Cada cliente conectado recibe una identificación única que permite al servidor diferenciar entre ellos y gestionar las comunicaciones individualmente.  
- **Broadcasting de Mensajes:** Permite enviar mensajes a todos los clientes conectados (por ejemplo, cuando un jugador realiza una acción visible por todos).  
- **Escalabilidad:** El servidor debe escalar eficientemente conforme crece el número de clientes, usando balanceadores de carga o arquitecturas distribuidas si es necesario.

---

### Uso de Websockets en Aplicaciones Complejas

#### Subastas en Línea
En una subasta en línea, los compradores compiten en tiempo real.  
El uso de Websockets permite que todas las ofertas se reflejen **inmediatamente** a todos los participantes.

- **Actualización en Tiempo Real:** Cada oferta se envía al instante a todos los clientes.  
- **Notificaciones:** Los Websockets permiten notificar al usuario cuando ha sido superado o cuando la subasta está por terminar.

#### Juegos Multijugador
En los juegos multijugador, la comunicación en tiempo real entre jugadores es fundamental.  
Los Websockets hacen posible que las acciones de un jugador se vean instantáneamente por los demás.

- **Sincronización de Estados:** La posición, acciones o eventos de cada jugador se actualizan en tiempo real.  
- **Manejo de Eventos:** Permite que eventos como ataques o interacciones sean visibles de inmediato por otros jugadores.

---

### Conclusión
Los **Websockets** son una tecnología potente y flexible para el manejo de aplicaciones que requieren interacciones en tiempo real.  
Desde la persistencia de conexiones hasta el manejo de múltiples clientes, los Websockets son fundamentales para desarrollar aplicaciones modernas que ofrecen experiencias dinámicas y eficientes.

---

## Aplicaciones Prácticas de Websockets

### Introducción
Los Websockets han revolucionado la forma en que las aplicaciones web manejan la comunicación en tiempo real.  
A diferencia de los métodos basados en HTTP, los Websockets permiten una **comunicación bidireccional continua**, esencial para aplicaciones que requieren actualizaciones instantáneas.

---

### Aplicaciones de Chat
Uno de los usos más comunes es en **aplicaciones de chat**, donde los mensajes deben entregarse de forma inmediata.

#### Características Clave:
- **Comunicación en Tiempo Real:** Los mensajes se transmiten instantáneamente sin recargar la página.  
- **Manejo de Múltiples Conexiones:** Permite que muchos usuarios estén conectados al mismo tiempo sin retrasos.  
- **Notificaciones y Estados:** Posibilita mostrar eventos como “usuario conectado”, “escribiendo…” o “usuario desconectado”.

#### Ejemplo Real: Slack
**Slack** utiliza Websockets para mantener una conexión constante con los servidores.  
Gracias a esto, los mensajes y notificaciones se sincronizan en tiempo real en todos los dispositivos de un equipo.

---

### Sistemas de Notificación en Tiempo Real
Los Websockets también son ideales para sistemas donde las notificaciones deben llegar instantáneamente al usuario.

#### Ventajas:
- **Entrega Instantánea:** Las alertas llegan al instante sin necesidad de refrescar la página.  
- **Escalabilidad:** Permite enviar notificaciones a miles de usuarios en milisegundos.  
- **Personalización:** Cada usuario puede recibir solo las notificaciones relevantes para su cuenta o rol.

#### Ejemplo Real: Servicios Financieros
En el sector financiero, los Websockets permiten enviar notificaciones inmediatas sobre cambios en el mercado, precios de acciones o alertas críticas, donde cada segundo cuenta.

---

### Herramientas Colaborativas en Línea
Los Websockets potencian la colaboración en tiempo real en herramientas como **Google Docs**, pizarras virtuales o plataformas de gestión de proyectos.

#### Ventajas:
- **Sincronización Instantánea:** Varios usuarios pueden editar el mismo documento y ver los cambios al instante.  
- **Reducción de Conflictos:** Evita errores al trabajar simultáneamente sobre los mismos datos.  
- **Mayor Interactividad:** Facilita la cooperación fluida y dinámica entre usuarios distribuidos.

#### Ejemplo Real: Google Docs
Google Docs utiliza Websockets para reflejar en tiempo real los cambios realizados por cada usuario, permitiendo una colaboración simultánea sin interrupciones.

---

### Conclusión
Los Websockets han transformado el desarrollo de aplicaciones web al ofrecer una comunicación **en tiempo real, eficiente y escalable**.  
Desde chats hasta herramientas colaborativas, esta tecnología es esencial para crear experiencias interactivas, dinámicas y conectadas.
