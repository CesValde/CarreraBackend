## 🧩 7.1 Implementación de Patrones y Conexión en Arquitectura Backend

### 🚀 Introducción, Patrones de Persistencia y Conexión a la Lógica de Negocio

### 🏛️ Introducción a la Arquitectura del Servidor: Patrones de Persistencia
En la arquitectura de un servidor backend, la persistencia de datos es un componente fundamental para garantizar la integridad, consistencia y flexibilidad de una aplicación.  

Los patrones de persistencia como **DAO (Data Access Object)**, **Factory**, **DTO (Data Transfer Object)** y **Repository** permiten construir una arquitectura organizada y escalable. Estos patrones desacoplan la lógica de negocio del acceso a los datos, facilitando el mantenimiento, la evolución del sistema y la adaptación a diferentes fuentes de almacenamiento.

---

## 💾 Patrones de Persistencia

### 🗄️ DAO (Data Access Object)
**Propósito:**  
Abstrae y encapsula el acceso a la fuente de datos. Permite realizar operaciones CRUD (*Create, Read, Update, Delete*) sin que la lógica de negocio dependa de los detalles de implementación de la persistencia.

**Implementación:**  
Se crean DAOs específicos para cada fuente de datos, por ejemplo:
- `MongoDAO` para MongoDB  
- `MemoryDAO` para persistencia en memoria  

Cada DAO implementa la misma interfaz de métodos.

**Beneficios:**  
- Facilita el cambio de la fuente de datos  
- Desacopla la lógica de negocio de la persistencia  
- Mejora la flexibilidad y mantenibilidad del sistema  

---

### 🏭 Factory
**Propósito:**  
Dinamiza la selección de la persistencia adecuada según la configuración o el entorno de ejecución de la aplicación.

**Implementación:**  
Mediante un archivo `factory.js`, se retorna el DAO correspondiente en función de una variable de entorno, evitando cambios manuales en los imports del código.

**Beneficios:**  
- Cambio dinámico de persistencia  
- Ideal para diferenciar entornos (desarrollo, testing, producción)  
- Reduce el acoplamiento y la complejidad del código  

---

### 📦 DTO (Data Transfer Object)
**Propósito:**  
Gestiona y transforma los datos que se intercambian entre la lógica de negocio y la persistencia, especialmente cuando la estructura de datos no coincide exactamente.

**Implementación:**  
Un DTO puede:
- Modificar la estructura de los datos antes de enviarlos al DAO  
- Transformar datos antes de devolverlos al cliente  

Ejemplo: unir `first_name` y `last_name` en un campo `fullName` antes de almacenar o devolver la información.

**Beneficios:**  
- Asegura consistencia en los datos  
- Facilita cambios en la estructura sin afectar otras capas  
- Mejora la claridad del flujo de datos  

---

### 🧩 Repository
**Propósito:**  
Agrega una capa intermedia entre la lógica de negocio y los DAOs. Se encarga de invocar los métodos del DAO y aplicar lógica adicional si es necesario.

**Implementación:**  
El Repository encapsula el uso de los DAOs y puede integrar DTOs para garantizar que los datos estén correctamente formateados, sin que la lógica de negocio deba preocuparse por ello.

**Beneficios:**  
- Mejora la separación de responsabilidades  
- Centraliza el acceso a datos  
- Facilita la escalabilidad y el mantenimiento del código  

---

## ⚙️ Implementación del DAO

### 🛠️ Definir el DAO
Crear un archivo por cada fuente de datos, por ejemplo:
- `MongoDAO.js`
- `MemoryDAO.js`

Cada DAO debe exponer métodos homologados como:
- `get()`
- `save()`
- `update()`
- `delete()`

---

### 🔗 Integrar el DAO en la Lógica de Negocio
La lógica de negocio importa el DAO correspondiente y utiliza sus métodos para manipular los datos, sin conocer los detalles de la fuente de almacenamiento.

---

### 🔄 Cambiar de Fuente de Datos
Gracias al uso de patrones como **DAO** y **Factory**, cambiar la fuente de datos solo requiere intercambiar el DAO utilizado, sin modificar la lógica de negocio ni los controladores.

---

### 📝 Resumen
La implementación de patrones de persistencia como DAO, Factory, DTO y Repository permite construir una arquitectura backend robusta, flexible y escalable. Estos patrones garantizan un bajo acoplamiento entre capas, facilitan la evolución del sistema y mejoran significativamente la calidad del código.

---

## 7.2 Desarrollo de Rutas, Controladores y Frontend

### Desarrollo de Rutas, Controladores y Frontend

En una arquitectura backend basada en capas, el correcto desarrollo de **rutas**, **controladores** y su integración con un **frontend** es esencial para lograr un sistema ordenado, mantenible y escalable. Esta sección describe cómo estructurar y conectar estos componentes para gestionar **usuarios**, **negocios** y **órdenes**.

---

### 1. Creación de Rutas y Controladores

Los **routers** y **controladores** permiten organizar y distribuir la lógica de las peticiones HTTP de forma clara y desacoplada.

#### Responsabilidades por entidad

- **Usuarios**: Gestionan la información de los clientes que realizan pedidos.
- **Negocios**: Administran los datos de los comercios que ofrecen productos o servicios.
- **Órdenes**: Controlan la creación, consulta y actualización de los pedidos realizados por los usuarios.

#### Estructura general

- **Rutas**  
  Definen los endpoints del servidor (URLs y métodos HTTP) y delegan la ejecución al controlador correspondiente.

- **Controladores**  
  Contienen la lógica de negocio asociada a cada operación (validaciones, reglas, respuestas HTTP) y coordinan el acceso a los datos mediante los DAOs.

#### Implementación recomendada

- Crear un archivo de rutas por entidad:
  - `users.routes.js`
  - `business.routes.js`
  - `orders.routes.js`

- Crear un controlador por entidad:
  - `users.controller.js`
  - `business.controller.js`
  - `orders.controller.js`

- Asociar cada endpoint a un método del controlador (por ejemplo: `getUser`, `createBusiness`, `createOrder`).

Esta separación mejora la legibilidad del código y facilita su mantenimiento.

---

### 2. Conexión con DAOs (Data Access Objects)

Los **DAOs** permiten desacoplar la lógica de negocio del acceso a los datos, evitando dependencias directas con la base de datos o la tecnología utilizada.

#### Proceso de integración

- **Implementación de DAOs**  
  Crear una clase DAO por entidad:
  - `UserDAO`
  - `BusinessDAO`
  - `OrderDAO`

  Cada DAO debe exponer métodos CRUD como:
  - `get()`
  - `getById()`
  - `create()`
  - `update()`
  - `delete()`

- **Uso desde los controladores**  
  Los controladores importan el DAO correspondiente y utilizan sus métodos para acceder a los datos, manteniendo la lógica de negocio independiente del almacenamiento.

Este enfoque facilita futuras migraciones de base de datos o cambios en la fuente de datos sin afectar al resto del sistema.

---

### 3. Frontend Sencillo para Visualizar Órdenes

Para validar la comunicación entre frontend y backend, se implementa un frontend básico que permite visualizar las órdenes registradas.

#### Implementación

- **Archivos del frontend**
  - `index.html`: estructura básica de la interfaz.
  - `index.js`: lógica del cliente para consumir la API.

- **Comunicación con el backend**
  - Utilizar `fetch()` en `index.js` para realizar peticiones HTTP a los endpoints de órdenes.
  - Procesar la respuesta JSON y renderizar los datos en la vista.

- **Configuración del servidor**
  - Usar Express para servir los archivos estáticos del frontend.
  - Asegurar que las rutas de la API y del frontend estén correctamente definidas.

Este frontend simple permite comprobar el correcto funcionamiento de las rutas y controladores sin necesidad de frameworks adicionales.

---

### 4. Solución de Problemas de CORS

Los errores de **CORS (Cross-Origin Resource Sharing)** ocurren cuando el frontend intenta acceder a un backend que se encuentra en un origen distinto (dominio, puerto o protocolo).

#### Solución práctica

- **Instalación del middleware**
```bash
  npm install cors
```

- Verificación
   - Probar las peticiones desde el frontend.
   - Confirmar que no se bloquean las solicitudes por políticas del navegador.

Una configuración correcta de CORS es fundamental para permitir la comunicación segura entre frontend y backend durante el desarrollo y en producción.