# Introducción a Node.js y NPM

## ¿Qué es Node.js?

**Node.js** es un entorno de ejecución que permite utilizar **JavaScript del lado del servidor**, ampliando las capacidades del lenguaje más allá del navegador web.  
Antes de su aparición, JavaScript se utilizaba casi exclusivamente para el **frontend**, manipulando el DOM y mejorando la experiencia del usuario.  
Con la llegada de Node.js en **2009**, creado por **Ryan Dahl**, se abrió la posibilidad de usar JavaScript también en el **backend**.

---

## 🔧 Características Principales de Node.js

### 1. Modelo Asíncrono y No Bloqueante
Node.js utiliza un **modelo basado en eventos** que permite manejar **múltiples conexiones simultáneamente** sin bloquear el hilo principal.  
Esto lo hace ideal para:
- Servidores web de alto tráfico.  
- Chats en tiempo real.  
- Aplicaciones de streaming o APIs concurrentes.

### 2. Motor V8 de Google
Node.js está construido sobre **V8**, el motor de JavaScript de **Google Chrome**, que:
- Compila JavaScript a **código máquina nativo**.  
- Aumenta el **rendimiento** y la **eficiencia**.  
- Gestiona la **memoria y ejecución** de manera optimizada.

### 3. Un Solo Lenguaje para Todo
Con Node.js, los desarrolladores pueden usar **JavaScript tanto en el frontend como en el backend**, lo que facilita:
- El desarrollo de aplicaciones completas (“full stack”).  
- La reutilización de código.  
- La reducción de la curva de aprendizaje.

---

### 🚀 Ventajas de Node.js

| Ventaja | Descripción |
|----------|-------------|
| **Alto rendimiento** | Su motor V8 ejecuta el código JavaScript de forma rápida y eficiente. |
| **Escalabilidad** | Permite manejar miles de conexiones concurrentes con bajo consumo de recursos. |
| **Ecosistema amplio** | Posee una de las comunidades más grandes y activas del desarrollo web. |
| **Código unificado** | Uso de JavaScript en cliente y servidor. |
| **Gran soporte para I/O** | Ideal para tareas de red, APIs y operaciones con bases de datos. |

---

### ⚙️ Instalación de Node.js

1. Dirígete a la página oficial:  
   👉 [https://nodejs.org](https://nodejs.org)
2. Descarga la versión **LTS (Long Term Support)** para mayor estabilidad.
3. Instálalo siguiendo los pasos del instalador.
4. Verifica la instalación desde la terminal:

```bash
node -v
npm -v
```

---

## 📦 Introducción a NPM (Node Package Manager)

NPM es el administrador de paquetes incluido con Node.js.
Permite instalar, actualizar y gestionar librerías y dependencias que otros desarrolladores publican.

Un paquete es un conjunto de archivos de código reutilizable que agrega una funcionalidad específica a tu proyecto (por ejemplo: Express, React, Lodash, etc.).

### 📁 package.json

Cuando se inicia un nuevo proyecto con:

`npm init -y`

Se genera un archivo llamado `package.json`, que contiene:

- Nombre y versión del proyecto.
- Dependencias instaladas.
- Scripts personalizados.

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## 🔍 Comandos Básicos de NPM
Comando	Descripción
`npm init`	Crea un nuevo archivo package.json.
`npm install <paquete>`	Instala un paquete en el proyecto.
`npm uninstall <paquete>`	Elimina un paquete.
`npm update	`Actualiza todas las dependencias.
`npm run <script>`	Ejecuta un script definido en package.json.
`npm list`	Muestra los paquetes instalados.

---

### 🌍 Publicar Paquetes con NPM

NPM también permite a los desarrolladores publicar sus propios paquetes, fomentando la colaboración y el reuso de código en la comunidad global.

Pasos básicos:

1. Crear una cuenta en https://www.npmjs.com
2. Iniciar sesión desde la terminal:
`npm login`

3. Publicar el paquete:
`npm publish`

---

# 🧩 Módulos Nativos y de Terceros en Node.js
### 📘 Introducción

Node.js incluye una serie de módulos nativos que ofrecen funcionalidades esenciales para el desarrollo de aplicaciones backend. Estos módulos permiten realizar tareas comunes sin necesidad de instalar dependencias externas.
Entre los más utilizados se encuentran fs, http, path y crypto.

---

# ⚙️ Módulos Nativos
### 📁 fs — File System

El módulo fs permite interactuar con el sistema de archivos.
Con él puedes:

- Leer, escribir, actualizar y eliminar archivos.
- Guardar datos, cargar configuraciones o manejar registros de actividad.

> Es fundamental para cualquier aplicación que manipule archivos o requiera persistencia de datos local.

---

### 🌐 http — Servidor Web

El módulo http es la base para construir servidores web con Node.js.
Permite:

- Crear servidores que respondan a solicitudes HTTP (GET, POST, etc.).
- Servir páginas web, manejar APIs o procesar formularios.
- Enviar respuestas personalizadas al cliente.

> Es el corazón de las aplicaciones backend con Node.js.

---

### 🧭 path — Manejo de Rutas

El módulo path proporciona herramientas para trabajar con rutas de archivos y directorios.
Sirve para:

- Unir, resolver y normalizar rutas.
- Evitar errores por diferencias entre sistemas operativos (Windows, Unix, etc.).

> Facilita el manejo seguro y coherente de rutas dentro de los proyectos.

---

### 🔐 crypto — Criptografía

El módulo crypto ofrece funcionalidades para manejar operaciones criptográficas como:

- Creación de hashes.
- Cifrado y descifrado de datos.
- Generación de claves seguras.

> Es esencial en aplicaciones que manejan contraseñas o datos sensibles.

---

### 🧠 Aplicación en Proyectos

Estos módulos nativos permiten crear aplicaciones robustas, seguras y eficientes, aprovechando al máximo las capacidades de Node.js sin depender de librerías externas.

---

### 🧩 Módulos de Terceros y NPM
**📦 ¿Qué es NPM?**

Node Package Manager (NPM) es una herramienta que permite instalar y gestionar módulos de terceros.
Gracias a NPM, los desarrolladores pueden integrar bibliotecas y herramientas externas de forma rápida y sencilla.

---

### 🧰 Guía Práctica: Uso de NPM
**🏁 Paso 1: Inicializar un Proyecto**

Crea un archivo `package.json` que actúa como el “mapa” de tu proyecto, almacenando:

- Dependencias.
- Scripts.
- Metadatos del proyecto.

`npm init`

Durante el proceso, se te pedirá información básica como el nombre, la versión y la descripción.

---

### 📥 Paso 2: Instalar Módulos

Instala paquetes de terceros con el comando:

`npm install express`

Esto:

- Descarga el módulo.
- Lo guarda en la carpeta node_modules.
- Lo agrega automáticamente al archivo package.json.

---

### 🔄 Paso 3: Gestionar Dependencias

Para instalar todas las dependencias listadas en package.json, usa:

`npm install`

También puedes:

- Actualizar módulos → npm update
- Eliminar módulos → npm uninstall nombre_paquete

> Mantén tus versiones controladas para asegurar compatibilidad a largo plazo.

---

✅ Conclusión

Los módulos nativos y NPM forman el núcleo del ecosistema de Node.js.
Conocer ambos te permite:

- Crear servidores eficientes.
- Manipular archivos y rutas de forma segura.
- Integrar dependencias externas de manera profesional.

> Dominar estos fundamentos es esencial para cualquier desarrollador backend con Node.js.

---

# ⚙️ Manejo de Archivos en Node.js  

## 📂 Persistencia de Datos y Sistema de Archivos  

La **persistencia de datos** es un concepto clave en el desarrollo backend, y en **Node.js** se puede lograr mediante el uso de archivos. Al almacenar datos en archivos, las aplicaciones pueden guardar información de forma permanente, incluso después de que se cierren o reinicien.  

Node.js ofrece distintas formas de interactuar con el **sistema de archivos**, permitiendo leer, escribir y actualizar datos tanto de manera **síncrona** como **asíncrona**, cada una con sus propias ventajas y casos de uso.  

---

### 🧩 Operaciones Síncronas  

Las operaciones **síncronas** se ejecutan en secuencia, **bloqueando el flujo de ejecución** hasta completarse.  
Esto significa que el programa esperará a que termine una operación antes de continuar con la siguiente.  

➡️ Son fáciles de entender y usar, ya que siguen un flujo lineal, pero pueden afectar el rendimiento en aplicaciones que manejan muchas solicitudes simultáneas.  

**🧠 Ejemplo Conceptual:**  
Si lees un archivo de manera síncrona, el programa se detendrá hasta que todo el contenido sea leído.  
Este enfoque es útil en tareas simples o entornos donde el rendimiento no sea crítico.  

---

### ⚡ Operaciones Asíncronas  

Las operaciones **asíncronas** permiten que el código continúe ejecutándose mientras una tarea ocurre en segundo plano.  
Este modelo, **asíncrono y no bloqueante**, es una de las principales fortalezas de Node.js.  

➡️ Es ideal para aplicaciones que necesitan manejar múltiples tareas sin afectar la velocidad de respuesta del sistema.  

**🧠 Ejemplo Conceptual:**  
Al leer un archivo de forma asíncrona, Node.js inicia la lectura y sigue ejecutando otras instrucciones.  
Cuando la lectura finaliza, se ejecuta una función de **callback** que procesa el contenido.  

---

### 🏁 Conclusión  

Comprender la diferencia entre operaciones **síncronas** y **asíncronas** es esencial para crear aplicaciones **eficientes y escalables** en Node.js.  
Mientras las síncronas son más simples, las asíncronas aprovechan la naturaleza **no bloqueante** del entorno, optimizando el rendimiento en tareas intensivas de I/O.  

---

## 💾 Fs con Callbacks y Promesas  

### 👥 Creación de un Usuario con `fs.promises`  

A continuación, se muestra una guía para crear una clase `UsersManager`, diseñada para gestionar usuarios mediante el uso de **fs.promises** en Node.js.  
Este enfoque combina la asincronía con la persistencia de datos, aplicando buenas prácticas de manejo de archivos y promesas.  

---

### 🧱 Paso 1: Configuración Inicial del Proyecto  

Asegúrate de tener **Node.js instalado** y un proyecto inicializado con `package.json`.  
Aunque este ejercicio utiliza solo módulos nativos, es buena práctica mantener un entorno preparado para futuras dependencias.  

---

### 🏗️ Paso 2: Definición de la Clase `UsersManager`  

Define una clase llamada `UsersManager`, encargada de **agregar, obtener y eliminar usuarios**.  
El constructor debe recibir la ruta del archivo donde se almacenarán los datos (un archivo JSON con la lista de usuarios).  

---

### 🛠️ Paso 3: Implementación de Métodos  

- **addUser(user):**  
  Lee el archivo actual, agrega el nuevo usuario y escribe el array actualizado.  

- **getUsers():**  
  Lee el archivo y devuelve la lista de usuarios.  
  Usa `fs.promises.readFile` para hacerlo de forma asíncrona y maneja errores si el archivo no existe.  

- **deleteUser(userId):**  
  Filtra el array de usuarios eliminando el indicado y escribe la lista actualizada en el archivo.  

---

### 🔁 Paso 4: Uso de `fs.promises` con `async/await`  

Node.js incluye métodos como `fs.promises.readFile` y `fs.promises.writeFile`, que devuelven **promesas**.  
Usá **async/await** para manejar la asincronía y bloques `try/catch` para capturar errores como:  

- Archivos inexistentes  
- Problemas de permisos  
- Datos mal formateados  

Esto mejora la **legibilidad** y **mantenibilidad** del código.  

---

### 🧩 Paso 5: Verificación y Pruebas  

Una vez implementada la clase, crea instancias de `UsersManager` y probá los métodos:  

- `addUser()` → Agrega un nuevo usuario.  
- `getUsers()` → Devuelve la lista actual.  
- `deleteUser()` → Elimina un usuario específico.  

Estas pruebas te ayudarán a validar que la clase gestiona correctamente los datos y responde a los posibles errores.  

---

✅ **Conclusión Final:**  
El manejo de archivos en Node.js mediante `fs.promises` permite desarrollar soluciones **asíncronas, seguras y escalables**.  
Dominar esta herramienta es clave para trabajar con persistencia de datos en proyectos reales.  

--- 

# ⚙️ Gestión de Dependencias y Versionado

## 🌍 Instalaciones Globales vs Locales

En **Node.js**, las dependencias son paquetes o módulos que tu proyecto necesita para funcionar correctamente.  
Estos paquetes pueden instalarse de dos maneras: **de manera global o local**.  
Entender la diferencia entre estas dos opciones es crucial para gestionar correctamente el entorno de desarrollo y asegurar que las aplicaciones funcionen como se espera.

---

### 📦 Instalación Local

La **instalación local** es el método más común y recomendado para proyectos de Node.js.  
Cuando instalas una dependencia de manera local, se guarda en la carpeta `node_modules` dentro del directorio de tu proyecto.  
Estas dependencias solo están disponibles para ese proyecto específico y se registran en el archivo `package.json`, lo que permite a otros desarrolladores (o a ti mismo en otro momento) instalar todas las dependencias necesarias con un solo comando.

#### 🧠 ¿Cuándo usar la instalación local?

- **Proyectos específicos:** Cuando las dependencias solo son necesarias para un proyecto en particular.  
- **Consistencia:** Para asegurar que diferentes proyectos no interfieran entre sí, ya que cada uno tiene su propio conjunto de dependencias.  
- **Facilidad de despliegue:** Cuando se despliega un proyecto, las dependencias locales se pueden instalar automáticamente en el entorno de producción, garantizando que el proyecto funcione igual que en el desarrollo.

---

### 🌐 Instalación Global

La **instalación global**, por otro lado, coloca el paquete en un directorio accesible desde cualquier lugar en tu sistema.  
Esto significa que la dependencia está disponible para todos los proyectos y puede ser utilizada directamente desde la línea de comandos sin necesidad de estar en un proyecto específico.  
Para instalar un paquete de manera global, se usa un comando que lo hace accesible en todo el sistema.

#### ⚡ ¿Cuándo usar la instalación global?

- **Herramientas de línea de comandos:** Cuando el paquete es una herramienta que necesitas usar desde la terminal, como `nodemon`, `eslint` o `npm`.  
- **Uso en múltiples proyectos:** Cuando necesitas la misma herramienta o dependencia en varios proyectos diferentes.  
- **Acceso rápido:** Cuando es más práctico tener una herramienta disponible globalmente para evitar instalarla en cada proyecto individualmente.

---

### ⚠️ Consideraciones Importantes

- **Conflictos de versión:** Instalar paquetes globalmente puede causar conflictos de versión si diferentes proyectos requieren versiones distintas del mismo paquete.  
- **Portabilidad:** Las dependencias locales garantizan que el proyecto es portátil y puede ser replicado en otro entorno sin preocuparse por las versiones globales instaladas.  
- **Buenas prácticas:** Es una buena práctica mantener la mayoría de las dependencias como locales para evitar posibles conflictos y asegurar que el proyecto sea fácilmente gestionable y replicable.

---

### 🧩 Conclusión

La elección entre instalar dependencias de manera global o local depende del uso específico de esas dependencias en tu proyecto.  
La instalación **local** es generalmente preferida para asegurar que cada proyecto sea autónomo y libre de conflictos, mientras que la instalación **global** es ideal para herramientas de desarrollo que se utilizan a través de múltiples proyectos.  
Conocer cuándo usar cada método es esencial para un manejo eficiente de tus dependencias en Node.js.

---

## 🧮 Versionado de Dependencias en NPM

El sistema de versionado en **NPM** es fundamental para gestionar las dependencias en un proyecto Node.js.  
Cada dependencia tiene una versión específica que se registra en el archivo `package.json`.  
Este archivo no solo define las dependencias, sino que también especifica qué versiones de estas son aceptables para el proyecto.  
Entender cómo manejar las versiones y actualizaciones utilizando operadores como `^` y `~` es esencial para mantener la estabilidad y compatibilidad de tu proyecto.

---

### 🔢 Versionado Semántico (SemVer)

NPM utiliza un sistema de **versionado semántico**, conocido como **SemVer**.  
Las versiones de los paquetes siguen un formato de tres números:  
`Mayor.Menor.Patch` → por ejemplo: `1.2.3`

- **Mayor:** Cambios importantes que podrían no ser compatibles con versiones anteriores.  
- **Menor:** Nuevas características que son compatibles con versiones anteriores.  
- **Patch:** Correcciones de errores y pequeñas mejoras que no afectan la compatibilidad.  

Este sistema permite a los desarrolladores especificar con precisión qué versiones de una dependencia son compatibles con su proyecto.

---

### 🧷 Uso de Operadores `^` y `~`

En `package.json`, puedes utilizar operadores como `^` y `~` para controlar cómo **NPM** maneja las actualizaciones de las dependencias.

- **Operador `^`:** Permite actualizaciones que no cambien el primer número de la versión (el mayor).  
  Ejemplo: `"^1.2.3"` → NPM permitirá versiones como `1.3.0` o `1.2.4`, pero **no** `2.0.0`.  

- **Operador `~`:** Es más restrictivo, solo permite actualizaciones en la parte **patch**.  
  Ejemplo: `"~1.2.3"` → NPM permitirá `1.2.4` o `1.2.5`, pero **no** `1.3.0`.  
  Esto asegura aplicar solo pequeñas mejoras o correcciones de errores, manteniendo la estabilidad.

---

### 🔄 Actualización de Dependencias

Cuando actualizas dependencias, **NPM** sigue las reglas definidas en `package.json`.  
Si no quieres que ciertas dependencias se actualicen automáticamente, puedes **fijar una versión exacta** sin usar `^` o `~`.  
Esto garantiza que siempre se utilice una versión específica, ideal cuando la estabilidad es crucial.

Por otro lado, si deseas actualizar todas las dependencias a sus versiones más recientes que sean compatibles, puedes usar el comando correspondiente de **NPM**.  
Es importante **probar el proyecto** después de cualquier actualización para asegurarte de que todo siga funcionando correctamente.

---

### ✅ Conclusión

El sistema de versionado en **NPM**, junto con los operadores `^` y `~`, te brinda un control preciso sobre cómo se manejan las versiones de las dependencias.  
Esto es crucial para mantener la **estabilidad y compatibilidad**, permitiéndote actualizar paquetes de manera segura sin romper tu aplicación.  
Conocer y aplicar correctamente estas herramientas asegura que tu proyecto evolucione de forma controlada, minimizando riesgos asociados con las actualizaciones.

---

# 🤖 IA para Gestión de Dependencias y Versionado con Dependabot

## 💡 Introducción

**Dependabot** es una herramienta integrada en **GitHub** que utiliza **inteligencia artificial (IA)** para automatizar la gestión de dependencias y versiones en proyectos backend.  
Su objetivo es mantener las dependencias **actualizadas y seguras**, eliminando la carga manual de revisar y actualizar librerías.  
Gracias a Dependabot, los desarrolladores pueden enfocarse en la lógica del negocio sin preocuparse por vulnerabilidades o versiones obsoletas.

---

## 🧭 a. ¿Qué es Dependabot?

**Dependabot** es un servicio proporcionado por **GitHub** que monitorea y actualiza automáticamente las dependencias de tu proyecto.  
Detecta nuevas versiones de paquetes, parches críticos y vulnerabilidades de seguridad, creando **pull requests automáticas** para integrarlas sin intervención manual.

### 🔍 Funcionalidades principales impulsadas por IA

- **Análisis de versiones:** Evalúa el impacto de las actualizaciones en la estabilidad del proyecto.  
- **Detección de vulnerabilidades:** Usa IA para comparar tus dependencias con bases de datos como **CVE (Common Vulnerabilities and Exposures)** y generar parches o recomendaciones.  
- **Automatización de actualizaciones:** Crea automáticamente PRs con las versiones más recientes y la información necesaria para revisarlas e integrarlas.

---

## ⚙️ b. ¿Cómo funciona Dependabot?

### 🔁 Monitoreo continuo de dependencias
Dependabot escanea periódicamente los archivos de dependencias (`package.json`, `requirements.txt`, etc.)  
y compara las versiones actuales con las disponibles.  
Si detecta una actualización o vulnerabilidad, **genera una pull request** con los cambios necesarios.

### 🚀 Generación automática de Pull Requests (PRs)
Cada vez que hay una nueva versión disponible, Dependabot crea una PR con:
- La nueva versión del paquete  
- Los detalles del cambio  
- El impacto estimado  

En caso de parches de seguridad, Dependabot **prioriza** esas PRs para revisión urgente.

### 🧩 Integración con flujos CI/CD
Dependabot se integra con **GitHub Actions**, **Jenkins**, **CircleCI**, u otras herramientas,  
permitiendo ejecutar automáticamente pruebas y despliegues tras actualizar dependencias.

### 🛡️ Revisión de vulnerabilidades
Usa IA para analizar las dependencias y sugerir **versiones más seguras** ante vulnerabilidades críticas, evitando problemas de seguridad.

---

## 🧱 c. Implementación en un proyecto Node.js

La configuración de **Dependabot** en un proyecto Node.js es simple y permite mantener las dependencias actualizadas automáticamente.

### 🔓 1. Habilitar Dependabot en tu repositorio
1. Ve a tu repositorio en **GitHub**.  
2. Entra a la pestaña **Security**.  
3. Activa **Dependabot alerts** para escanear dependencias en busca de vulnerabilidades.

### ⚙️ 2. Configurar Dependabot para actualizaciones automáticas
Crea o edita el archivo `.github/dependabot.yml` y agrega lo siguiente:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
```

🔸 Esto indica a Dependabot que monitoree las dependencias npm del directorio raíz / y busque actualizaciones semanalmente.

### 🧩 3. Personalización de PRs

Puedes configurar Dependabot para que:

- Genere PRs automáticas al detectar nuevas versiones o vulnerabilidades.
- Ejecute pruebas automáticas integradas con CI/CD (por ejemplo, GitHub Actions) para verificar que las actualizaciones no rompan el código existente.

---

### 🧪 d. Ejemplo de uso

Dependabot detecta que express.js tiene una nueva versión y genera automáticamente una PR:

```bash
# Dependabot crea automáticamente un pull request para actualizar express.js
npm update express
```

También puede detectar vulnerabilidades y sugerir una actualización de seguridad:

```bash
# Dependabot detecta una vulnerabilidad en la versión actual de lodash
npm audit fix
```

---

### 🧠 e. Casos de uso
**⚙️ Automatización del mantenimiento**

En proyectos grandes o de larga duración, mantener dependencias actualizadas puede ser tedioso.
Dependabot automatiza este proceso y garantiza versiones recientes sin esfuerzo manual.

**🧩 Mejora de la seguridad del código**

Dependabot analiza dependencias con bases de datos de vulnerabilidades conocidas.
Si detecta una amenaza, crea una PR automática para aplicar el parche necesario.
Ejemplo: detectar una vulnerabilidad crítica en jsonwebtoken y sugerir una actualización antes de que cause problemas.

**🔄 Integración con CI/CD**

Dependabot puede integrarse con pipelines de CI/CD (como GitHub Actions) para que cada PR ejecute pruebas automáticamente.
Esto asegura que las nuevas versiones no introduzcan errores en el código existente.

**🌐 Soporte para múltiples ecosistemas**

Además de Node.js, Dependabot soporta otros entornos como:

- Python
- Ruby
- Java
- .NET
Ideal para proyectos multilenguaje o de backend con diversas tecnologías.

---

### ⚡ f. Ventajas de usar Dependabot

- 🕒 Ahorro de tiempo y esfuerzo: Automatiza la verificación y actualización de dependencias.
- 🔁 Mejora continua: Mantiene las librerías seguras y actualizadas, incluso si el proyecto no se modifica frecuentemente.
- 🔐 Seguridad avanzada: Detecta vulnerabilidades mediante IA, reduciendo riesgos en proyectos sensibles.
- 🧩 Facilidad de integración: Compatible con cualquier flujo basado en GitHub y adaptable a distintos ecosistemas.