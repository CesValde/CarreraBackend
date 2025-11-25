# 1.1 Introducción a Backend y Herramientas Principales

# Introducción a Express y MongoDB

En el desarrollo backend, dos de las herramientas más populares son **Express** y **MongoDB**, las cuales se utilizan ampliamente en la creación de aplicaciones web modernas. A continuación se explica qué son, sus características principales y cómo se integran para desarrollar aplicaciones completas del lado servidor.

---

## 🚀 ¿Qué es Express?

**Express** es un framework web minimalista y flexible para **Node.js**, diseñado para simplificar la creación de APIs y aplicaciones web. Su enfoque modular permite añadir únicamente las funcionalidades necesarias mediante middleware, evitando estructuras rígidas o complejas.

### ⭐ Características Principales de Express

* **Minimalista y rápido:** No impone una estructura fija, permitiendo al desarrollador decidir cómo organizar la aplicación.
* **Manejo de rutas:** Facilita la creación de rutas HTTP simples o complejas para atender diferentes solicitudes del cliente.
* **Middleware:** Permite manipular las peticiones y respuestas HTTP agregando capas como autenticación, validación, logs, manejo de errores, entre otros.
* **Sistema de plantillas:** Compatible con motores como *EJS*, *Pug* y *Handlebars* para generar HTML dinámico.
* **Integración sencilla con bases de datos:** Puede trabajar con MongoDB, MySQL, PostgreSQL y otros motores mediante librerías externas.

---

## 🗄️ ¿Qué es MongoDB?

**MongoDB** es una base de datos NoSQL orientada a documentos que almacena información en un formato parecido a JSON llamado **BSON**. A diferencia de las bases de datos relacionales, no utiliza tablas ni esquemas estrictos, lo que aporta mayor flexibilidad y escalabilidad.

### ⭐ Características Principales de MongoDB

* **Modelo de documentos:** Los datos se organizan en documentos BSON que pueden contener estructuras complejas y anidadas.
* **Esquema flexible:** Permite modificar la estructura de los datos sin necesidad de actualizar un esquema rígido.
* **Alta escalabilidad:** Diseñada para escalar horizontalmente distribuyendo datos entre múltiples servidores.
* **Consultas potentes:** Permite realizar filtros, agregaciones y consultas avanzadas en tiempo real.
* **Integración natural con JavaScript:** Utiliza JavaScript en su interfaz de comandos, facilitando el aprendizaje a desarrolladores de Node.js.

---

## 🧩 Uso de Express y MongoDB en el Desarrollo Backend

La combinación de **Express + MongoDB** es ideal para construir aplicaciones backend gracias a:

* Simplicidad en el manejo del servidor y sus rutas (Express).
* Gestión flexible y eficiente de datos (MongoDB).
* Fácil integración mediante librerías como **Mongoose**.
* Curva de aprendizaje accesible para quienes ya manejan JavaScript.

Con estas herramientas es posible construir APIs RESTful, servidores completos y aplicaciones web modernas que cumplan con las necesidades actuales del desarrollo.

---

## 🌐 Parte del Stack MERN

Express y MongoDB son herramientas centrales del famoso stack **MERN**, compuesto por:

* **M**ongoDB
* **E**xpress
* **R**eact
* **N**ode.js

Un stack muy usado en la industria para crear aplicaciones modernas, escalables y de alto rendimiento.

---

## 1.2 Configuración y Desarrollo de APIs REST

### 📌 Introducción a las APIs REST

Las **APIs REST** (Representational State Transfer) son uno de los métodos más utilizados para permitir la comunicación entre aplicaciones, especialmente en el desarrollo backend. REST es un estilo arquitectónico que define principios y restricciones para crear servicios web escalables, eficientes y fáciles de mantener.

---

### 🔍 ¿Qué es una API REST?

Una **API REST** es una interfaz que permite la comunicación entre un **cliente** (como una aplicación web o móvil) y un **servidor** utilizando los métodos del protocolo HTTP para realizar operaciones sobre los recursos del sistema.

---

### ⭐ Características Principales de las APIs REST

* **Stateless (Sin estado):**
  Cada solicitud debe contener toda la información necesaria para procesarse; el servidor no mantiene el estado del cliente.

* **Basada en recursos:**
  Los recursos como usuarios, productos o artículos se identifican mediante URLs (por ejemplo: `/users`, `/products`, etc.).

* **Uso de métodos HTTP estándar:**

  * **GET:** Obtiene datos de un recurso
  * **POST:** Crea un recurso
  * **PUT/PATCH:** Actualiza un recurso existente
  * **DELETE:** Elimina un recurso

* **Representaciones estándar:**
  Los datos se envían normalmente en **JSON**, aunque también se pueden usar formatos como XML o HTML.

* **Soporte de caché:**
  Las respuestas pueden ser cacheadas para mejorar el rendimiento y reducir la carga del servidor.

---

### 🧱 Estructura de una API REST

Una API REST típica se organiza en torno a:

* **Rutas (Endpoints):**
  Definen los recursos, por ejemplo: `/users`, `/products`, `/articles`.

* **Métodos HTTP:**
  Indican la acción que se quiere realizar sobre el recurso.

* **Códigos de Estado HTTP:**
  Las respuestas del servidor incluyen códigos como:

  * `200 OK` → Éxito
  * `404 Not Found` → Recurso no encontrado
  * `500 Internal Server Error` → Error del servidor

---

### ⚙️ Funcionamiento en Express

Express facilita la creación de APIs REST gracias a su sistema de rutas y middleware. En un entorno backend, los pasos principales son:

#### ✔ Definición de rutas y controladores

Se definen las rutas para cada recurso y se asignan funciones que contienen la lógica del negocio:

* **Obtener todos los usuarios (GET):**
  La ruta `/users` responde con una lista de usuarios.

* **Crear un nuevo usuario (POST):**
  La ruta `/users` recibe información enviada por el cliente y crea un nuevo usuario.

#### ✔ Middleware

Son funciones que se ejecutan durante el ciclo de vida de una solicitud. Se utilizan para:

* Validación de datos
* Autenticación
* Logs
* Manejo de errores
* Parseo del cuerpo de la solicitud, etc.

#### ✔ Respuestas en JSON

Express envía respuestas en formato JSON, lo que facilita la comunicación con el cliente sin necesidad de plantillas HTML.

#### ✔ Manejo de errores

Express permite implementar un manejador centralizado de errores, lo que permite:

* Capturar excepciones
* Responder con mensajes claros
* Mejorar la estabilidad del sistema

---

### 🏁 Conclusión

Las **APIs REST** son fundamentales en el desarrollo de aplicaciones modernas, permitiendo una comunicación clara entre diferentes servicios y clientes. Express simplifica el proceso de construcción de estas APIs mediante:

* Rutas flexibles
* Middleware personalizable
* Manejo eficiente de solicitudes y respuestas

Todo dentro del entorno familiar y potente de **Node.js**.
