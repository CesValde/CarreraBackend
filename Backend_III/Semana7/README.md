## 7.1 Introducción y Configuración de NestJS 🚀

### Frameworks de Desarrollo y su Rol en el Backend

Los **frameworks de desarrollo** son herramientas fundamentales en la creación de aplicaciones y sistemas web complejos. Proporcionan una base estructurada sobre la cual los desarrolladores pueden construir aplicaciones de forma más rápida, ordenada y mantenible. A diferencia de soluciones improvisadas, los frameworks establecen convenciones claras que facilitan el trabajo en equipo y la escalabilidad del software.

### ¿Qué es un Framework de Desarrollo?

Un framework de desarrollo es un conjunto predefinido de herramientas, componentes y buenas prácticas que impone una **estructura clara** para el desarrollo de aplicaciones. No solo ofrece código reutilizable, sino que también define **cómo debe organizarse el proyecto**, cómo fluye la ejecución de la aplicación y cómo se gestionan aspectos clave como dependencias, configuración y arquitectura.

### Funcionalidad de los Frameworks de Desarrollo

**Estructura y Organización del Código**  
Los frameworks imponen una estructura de proyecto estándar que facilita la mantenibilidad del código. Esto incluye la separación de responsabilidades (por ejemplo, controladores, servicios y modelos) y una organización clara de archivos y carpetas.

**Abstracción de Tareas Comunes**  
Ofrecen soluciones integradas para tareas frecuentes como:

- Enrutamiento de peticiones
- Manejo de sesiones
- Autenticación y autorización
- Validación de datos
- Acceso a bases de datos

Esto permite que el desarrollador se enfoque en la lógica de negocio sin reinventar funcionalidades básicas.

**Gestión de Configuración y Entornos**  
Los frameworks permiten manejar configuraciones distintas para entornos como desarrollo, testing y producción, facilitando el despliegue y reduciendo errores de configuración.

**Mantenimiento y Escalabilidad**  
Gracias a su enfoque modular y al uso de buenas prácticas, los frameworks hacen que las aplicaciones sean más fáciles de mantener, escalar y evolucionar a largo plazo 📈.

### Diferencias entre Frameworks y Librerías

Aunque ambos proporcionan código reutilizable, su forma de uso es muy distinta.

**Inversión del Control (IoC)**

- **Frameworks**: El framework controla el flujo de la aplicación y llama al código del desarrollador cuando es necesario.
- **Librerías**: El desarrollador decide cuándo y cómo utilizar la librería.

**Estructura y Flujo**

- **Frameworks**: Imponen reglas, convenciones y una arquitectura definida.
- **Librerías**: Son flexibles y no condicionan la estructura del proyecto.

**Alcance**

- **Frameworks**: Cubren gran parte del desarrollo de la aplicación y actúan como la columna vertebral del sistema.
- **Librerías**: Resuelven problemas específicos y puntuales.

### Ejemplos de Frameworks Populares

- **Python**: Framework de alto nivel basado en el patrón MVC, conocido por su enfoque “baterías incluidas”.
- **Ruby**: Promueve la convención sobre configuración para acelerar el desarrollo.
- **Node.js**: Framework minimalista y flexible para crear APIs y aplicaciones web.
- **PHP**: Destaca por su sintaxis elegante y facilidad para tareas comunes.

### NestJS en este Contexto

**NestJS** se posiciona como un framework moderno para Node.js que combina lo mejor de frameworks robustos con la flexibilidad del ecosistema JavaScript. Está diseñado para construir aplicaciones backend **escalables, mantenibles y altamente estructuradas**, utilizando conceptos como módulos, controladores, servicios e inyección de dependencias 🧩.

Este enfoque lo convierte en una excelente opción para proyectos backend profesionales y de gran tamaño.

---

## 7.2 Arquitectura y Componentes Principales de NestJS

### Introducción

 NestJs es un framework progresivo de **Node.js** utilizado para construir aplicaciones backend **eficientes, escalables y mantenibles**. Está basado en **TypeScript** y adopta principios de:

- Programación Orientada a Objetos (OOP)
- Programación Funcional (FP)
- Arquitectura Modular

La arquitectura de NestJS se apoya en cuatro componentes principales:

- `main.ts`
- **Módulos**
- **Controladores**
- **Servicios**

---

### 1. `main.ts`

#### Descripción

`main.ts` es el archivo de entrada principal de una aplicación NestJS. Desde aquí se arranca la aplicación y se configuran los aspectos globales del sistema.

#### Rol en la estructura de la aplicación

- **Bootstrap de la aplicación**  
  Inicializa la aplicación mediante `NestFactory.create(AppModule)`.

- **Configuración global**  
  Permite configurar elementos globales como:
   - CORS
   - Pipes de validación
   - Interceptores
   - Filtros de excepciones

- **Servidor HTTP**  
  Levanta el servidor y comienza a escuchar peticiones en el puerto configurado.

---

### 2. Módulos (`modules`)

#### Descripción

Los módulos son los bloques fundamentales de NestJS. Organizan la aplicación en **unidades cohesivas**, agrupando componentes relacionados.

#### Rol en la estructura de la aplicación

- **Encapsulación de funcionalidades**  
  Cada módulo representa una funcionalidad específica (usuarios, autenticación, base de datos, etc.).

- **Organización del código**  
  Facilitan una estructura modular, reutilizable y mantenible.

- **Decorador `@Module`**  
  Define:
   - `controllers`
   - `providers` (servicios)
   - `imports`
   - `exports`

- **Módulo raíz**  
  Normalmente `AppModule`, actúa como punto de entrada del sistema.

---

### 3. Controladores (`controllers`)

#### Descripción

Los controladores manejan las **solicitudes HTTP entrantes** y devuelven las respuestas al cliente.

#### Rol en la estructura de la aplicación

- **Definición de rutas (endpoints)**  
  Manejan métodos HTTP como:
   - `GET`
   - `POST`
   - `PUT`
   - `DELETE`

- **Decoradores de rutas**  
  Utilizan decoradores como:
   - `@Get()`
   - `@Post()`
   - `@Put()`
   - `@Delete()`

- **Delegación de lógica**  
  El controlador valida la solicitud y delega la lógica de negocio a los servicios.

- **Respuesta al cliente**  
  Retorna datos, mensajes o códigos de estado HTTP.

---

### 4. Servicios (`services`)

#### Descripción

Los servicios encapsulan la **lógica de negocio** de la aplicación. Son responsables de ejecutar las operaciones principales del sistema.

#### Rol en la estructura de la aplicación

- **Lógica de negocio**  
  Implementan procesos como:
   - Creación y gestión de usuarios
   - Autenticación
   - Reglas de negocio

- **Inyección de dependencias**  
  Permite desacoplar componentes y mejorar:
   - Reutilización
   - Testeo
   - Escalabilidad

- **Decorador `@Injectable`**  
  Habilita a NestJS para gestionar el ciclo de vida del servicio.

- **Interacción con bases de datos**  
  Ejecutan operaciones CRUD y consultas a través de repositorios o modelos.

---

### Conclusión

La arquitectura de NestJS se basa en una separación clara de responsabilidades:

- `main.ts` inicializa la aplicación y define configuraciones globales.
- Los **módulos** organizan la aplicación en unidades cohesivas.
- Los **controladores** gestionan las solicitudes HTTP.
- Los **servicios** contienen la lógica de negocio y el acceso a datos.

Esta estructura modular y bien definida es clave para construir aplicaciones backend **robustas, escalables y fáciles de mantener**.

---

## 7.3 Autenticación y Seguridad en NestJS

### Introducción a la Autenticación con JWT

La autenticación es un componente crucial en la mayoría de las aplicaciones web, ya que permite **identificar y verificar a los usuarios** antes de conceder acceso a recursos protegidos.  
Una de las formas más comunes y seguras de implementar autenticación en aplicaciones modernas es mediante **JWT (JSON Web Token)**.

NestJs facilita la integración de JWT gracias a su arquitectura modular y a su compatibilidad nativa con **Passport**, permitiendo manejar la autenticación de forma eficiente, escalable y segura.

---

### ¿Qué es JWT (JSON Web Token)?

JWT es un estándar abierto que define una forma **compacta y autónoma** de transmitir información de manera segura entre un cliente y un servidor mediante un objeto JSON.

Un token JWT se compone de tres partes, codificadas en Base64 y concatenadas entre sí:

- **Header (Encabezado)**  
  Contiene el tipo de token y el algoritmo de cifrado utilizado.

- **Payload (Carga útil)**  
  Incluye las _claims_, que son declaraciones sobre una entidad (normalmente el usuario) y datos adicionales como identificadores o roles.

- **Signature (Firma)**  
  Se genera firmando el encabezado y el payload con una clave secreta. Garantiza la **integridad** y autenticidad del token.

---

### Cómo Funciona la Autenticación con JWT

#### Proceso de autenticación

1. El usuario inicia sesión enviando sus credenciales.
2. El servidor valida dichas credenciales.
3. Si son correctas, el servidor genera un JWT firmado con una clave secreta.
4. El token se devuelve al cliente.

El cliente suele almacenar el JWT en:

- `localStorage`
- `sessionStorage`
- Cookies (preferiblemente con la opción `HttpOnly`)

---

#### Protección de rutas

- Para acceder a rutas protegidas, el cliente debe incluir el JWT en el encabezado `Authorization`:

- El servidor valida el token en cada solicitud.
- Si el token es válido, se concede acceso.
- Si el token no es válido o no existe, la solicitud es rechazada.

---

### Configuración de JWT en NestJS

#### 1. Instalación de paquetes necesarios

Para implementar JWT en NestJS es necesario instalar los siguientes paquetes:

- **@nestjs/jwt**  
  Proporciona utilidades para generar y verificar tokens JWT.

- **@nestjs/passport**  
  Integra Passport como middleware de autenticación en NestJS.

- **passport-jwt**  
  Estrategia de Passport específica para autenticación mediante JWT.

   `npm install @nestjs/jwt @nestjs/passport passport passport-jwt`

---

#### 2. Configuración del Módulo de Autenticación

Se crea un módulo de autenticación (`AuthModule`) que centraliza toda la lógica relacionada con seguridad.

Componentes clave:

- **Servicio de Autenticación (AuthService)**  
  Maneja la validación de credenciales y la generación de tokens JWT.

- **Estrategia JWT**  
  Define:
- Cómo se extrae el token de la solicitud
- Cómo se valida el token y su payload

---

#### 3. Protección de Rutas con Guards

NestJS utiliza **Guards** para controlar el acceso a recursos protegidos.

- **JWT Guard**  
  Extiende `AuthGuard('jwt')` de Passport y se encarga de:
- Interceptar la solicitud
- Verificar la validez del JWT
- Autorizar o denegar el acceso a la ruta

---

#### 4. Aplicación de Guards a las Rutas

Los guards pueden aplicarse de distintas formas:

- **A nivel de controlador**  
  Protege todas las rutas del controlador.

- **A nivel de método**  
  Protege únicamente endpoints específicos.

---

### Ejemplo de Flujo de Autenticación con JWT en NestJS

1. **Inicio de sesión**  
   El usuario envía sus credenciales a `/auth/login`.

2. **Generación del token**  
   El servidor valida las credenciales y genera un JWT con información relevante (por ejemplo, el ID del usuario).

3. **Acceso a rutas protegidas**  
   El cliente incluye el JWT en el header `Authorization` al realizar nuevas solicitudes.

4. **Validación del token**  
   El guard JWT valida el token.

- Si es válido, la solicitud continúa.
- Si no lo es, se devuelve un error de autenticación.

---

## Uso de Middlewares en NestJS

### ¿Qué es un Middleware?

Un middleware en NestJS es una función que se ejecuta **antes de que la solicitud llegue al controlador**. Puede:

- Modificar la request o response
- Finalizar el ciclo de petición-respuesta
- Delegar el control al siguiente middleware o al controlador

---

### Creación de un Middleware

Para crear un middleware se define una clase que encapsula la lógica que debe ejecutarse antes del controlador.

Casos de uso comunes:

- Registro de solicitudes (logging)
- Validación de tokens
- Medición de tiempos de respuesta
- Auditoría y trazabilidad

---

### Configuración del Middleware

Los middlewares se configuran dentro de un módulo de NestJS, normalmente:

- En el módulo raíz
- En un módulo específico relacionado con la funcionalidad

Se puede definir:

- Qué rutas se ven afectadas
- Qué métodos HTTP deben interceptarse

---

### Aplicación de Middlewares a Rutas

NestJS permite aplicar middlewares en distintos niveles:

- **A nivel de aplicación**  
  Se ejecuta para todas las solicitudes.

- **A nivel de módulo**  
  Afecta solo a las rutas gestionadas por ese módulo.

- **A nivel de ruta**  
  Se aplica únicamente a rutas específicas.

Ejemplos comunes:

- Middleware de autenticación para rutas sensibles
- Middleware de logging para módulos administrativos

---

## 7.4 Testing y Escalabilidad

### Introducción

El **testing** es una parte fundamental del desarrollo de software, ya que permite garantizar que el código funcione correctamente y que los cambios no introduzcan errores inesperados.  
En aplicaciones backend desarrolladas con NestJs, el testing se ve reforzado por su arquitectura modular y su fuerte integración con herramientas modernas de pruebas.

En NestJS, las estrategias de testing se dividen principalmente en:

- Pruebas unitarias
- Pruebas de integración
- Pruebas funcionales (E2E)

Cada nivel cumple un propósito específico y, en conjunto, contribuyen a la **calidad, mantenibilidad y escalabilidad** del sistema.

---

### 1. Pruebas Unitarias

#### Descripción

Las pruebas unitarias se centran en verificar el comportamiento de **unidades individuales de código**, como funciones, métodos o clases.  
En NestJS, normalmente se prueban de forma aislada:

- Servicios
- Controladores
- Pipes
- Guards

---

#### Objetivo

El objetivo principal es asegurar que cada unidad funcione correctamente **de manera aislada**, simulando sus dependencias.  
Esto permite detectar errores de lógica tempranamente y facilita el refactor sin romper funcionalidades existentes.

---

#### Herramientas

NestJS se integra de forma nativa con Supertest, un framework de testing que proporciona:

- Mocks
- Spies
- Aserciones
- Cobertura de código

---

#### Ejemplo

Un servicio que realiza operaciones matemáticas puede ser probado verificando que métodos como suma, resta o multiplicación devuelvan los resultados correctos para distintos valores de entrada.

---

### 2. Pruebas de Integración

#### Descripción

Las pruebas de integración verifican que **múltiples componentes funcionen correctamente en conjunto**.  
En NestJS, esto puede implicar probar:

- Un servicio junto con su repositorio
- Un controlador interactuando con un servicio
- Módulos completos trabajando entre sí

---

#### Objetivo

El objetivo es detectar errores que no son evidentes en pruebas unitarias, como problemas en la comunicación entre capas o en la configuración de dependencias.

Estas pruebas suelen ejecutarse en un entorno más cercano al real, incluyendo dependencias externas controladas.

---

#### Herramientas

- Jest (como framework principal)
- Bases de datos en memoria (por ejemplo, SQLite)
- Simulación de APIs externas o servicios mediante mocks

---

#### Ejemplo

Probar un módulo de usuarios que interactúa con una base de datos para realizar operaciones CRUD.  
La prueba valida que la combinación de servicio y repositorio funcione correctamente en conjunto.

---

### 3. Pruebas Funcionales (E2E)

#### Descripción

Las pruebas funcionales, también conocidas como **end-to-end (E2E)**, validan el comportamiento del sistema completo desde la perspectiva del usuario final.

En NestJS, esto implica probar:

- Rutas HTTP
- Controladores
- Servicios
- Middlewares
- Guards

Todo dentro del flujo real de la aplicación.

---

#### Objetivo

El objetivo es garantizar que la aplicación funcione correctamente en escenarios reales de uso, verificando que todas las capas trabajen juntas como se espera.

---

#### Herramientas

Para este tipo de pruebas se utiliza comúnmente :contentReference[oaicite:2]{index=2}, que permite:

- Simular peticiones HTTP
- Validar códigos de estado
- Verificar el contenido de las respuestas

---

#### Ejemplo

Probar un endpoint de autenticación:

- Enviar credenciales válidas y verificar que se reciba un token JWT.
- Enviar credenciales inválidas y comprobar que se devuelva un error de autenticación.

---

### Introducción a Supertest para Pruebas Funcionales

Supertest es una biblioteca diseñada para facilitar la realización de **peticiones HTTP en pruebas automatizadas**.  
Permite interactuar con una aplicación NestJS como si fuera un cliente real, sin necesidad de levantar un servidor externo.

Casos de uso comunes:

- Pruebas de endpoints REST
- Validación de flujos completos de autenticación
- Verificación de middlewares y guards

---

### Conclusión

La combinación de pruebas unitarias, de integración y funcionales en NestJS permite construir aplicaciones:

- Más confiables
- Más fáciles de mantener
- Más escalables

Un enfoque de testing bien estructurado reduce errores en producción, facilita el crecimiento del sistema y mejora significativamente la calidad del software a largo plazo.

---

### Pasos para Usar Supertest en NestJS

A continuación se describen los pasos básicos para implementar **pruebas funcionales (E2E)** en una aplicación NestJS utilizando :contentReference[oaicite:0]{index=0} junto con Jest.

---

### 1. Instalación:

Primero, instala Supertest y Jest (si aún no lo has hecho):
`bash bash Copiar código npm install --save-dev supertest jest`

---

### 2. Configuración de Pruebas

El primer paso consiste en configurar un archivo de pruebas donde se inicialice el entorno de la aplicación NestJS.

En este archivo se debe:

- Crear un módulo de testing usando las utilidades de NestJS.
- Inicializar la aplicación completa (`INestApplication`).
- Preparar Supertest para realizar peticiones HTTP contra la instancia de la aplicación.

Esta configuración permite simular el comportamiento real de la API sin necesidad de desplegarla en un servidor externo.

---

### 3. Escritura de Pruebas Funcionales

Una vez configurado el entorno, se escriben las pruebas funcionales que simulan el comportamiento de un cliente real.

En estas pruebas se pueden validar:

- **Códigos de estado HTTP** (200, 201, 400, 401, etc.).
- **Encabezados de la respuesta**.
- **Cuerpo de la respuesta** (datos devueltos por la API).
- Flujos completos como autenticación, creación de recursos o acceso a rutas protegidas.

Cada prueba debe cubrir un escenario específico, incluyendo casos exitosos y casos de error.

---

### 4. Ejecución de Pruebas

Finalmente, las pruebas se ejecutan utilizando **Jest**, el framework de testing integrado en NestJS.

Durante la ejecución:

- Jest levanta el entorno de pruebas.
- Supertest realiza las peticiones HTTP simuladas.
- Se valida que la aplicación responda correctamente ante distintos tipos de solicitudes.

Este proceso permite detectar errores antes de llegar a producción y asegurar que los endpoints funcionen según lo esperado.
