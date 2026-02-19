## 4.1 Introducción a Clusters y Escalabilidad

### Conceptos de Clusters y Escalabilidad

**Introducción a los conceptos de escalabilidad vertical y horizontal**

La escalabilidad es un concepto fundamental en el desarrollo backend, especialmente cuando se trata de mejorar el rendimiento de los servidores y garantizar que las aplicaciones puedan manejar un número creciente de usuarios y peticiones. Existen dos enfoques principales para escalar un servidor: la escalabilidad vertical y la escalabilidad horizontal.

### Escalabilidad Vertical

La escalabilidad vertical, también conocida como _scaling up_, consiste en mejorar el rendimiento de un servidor existente mediante la adición de recursos de hardware. Esto puede incluir el aumento de memoria RAM, la mejora del procesador o el uso de sistemas de almacenamiento más rápidos.

Este enfoque se caracteriza por su simplicidad, ya que no requiere cambios significativos en la arquitectura del software.

**Ventajas:**

- Implementación relativamente sencilla.
- No requiere cambios en la arquitectura del software.
- Permite mejoras rápidas ante aumentos moderados de carga.

**Desventajas:**

- Está limitada por las capacidades físicas del hardware.
- Puede resultar costosa a medida que se requieren equipos más potentes.
- Existe un límite máximo de escalado.

### Escalabilidad Horizontal

La escalabilidad horizontal, también conocida como _scaling out_, implica añadir más servidores para distribuir la carga de trabajo entre ellos. En este enfoque, varios servidores trabajan en conjunto formando un _cluster_, lo que permite manejar un mayor volumen de peticiones de forma simultánea.

Este tipo de escalabilidad suele requerir cambios en la arquitectura de la aplicación y la implementación de mecanismos de balanceo de carga.

**Ventajas:**

- Permite escalar casi indefinidamente agregando más servidores.
- Aumenta la resiliencia del sistema ante fallos.
- Facilita el uso de servidores más económicos.

**Desventajas:**

- Mayor complejidad en la configuración y administración.
- Requiere balanceadores de carga y gestión de estados.
- Puede aumentar la dificultad del mantenimiento.

### Cómo Mejorar el Rendimiento de Servidores

- **Escalabilidad vertical:** Consiste en aumentar los recursos de hardware del servidor existente, como memoria o capacidad de procesamiento.
- **Escalabilidad horizontal:** Implica distribuir la carga entre múltiples servidores que trabajan de forma coordinada dentro de un cluster.

### Ejemplos Prácticos

**Caso de escalabilidad vertical:**  
Una tienda en línea experimenta un aumento temporal de tráfico durante una campaña de descuentos y decide ampliar la memoria RAM y mejorar el procesador del servidor principal para responder a la demanda.

**Caso de escalabilidad horizontal:**  
Una plataforma de streaming utiliza múltiples servidores distribuidos geográficamente para atender a millones de usuarios simultáneamente, asegurando alta disponibilidad y un rendimiento constante.

---

## 4.2 Contenedores con Docker

### Introducción a Docker y Contenedores

**Docker y contenedores: qué son, cómo funcionan y sus beneficios**

Docker es una plataforma diseñada para desarrollar, distribuir y ejecutar aplicaciones dentro de entornos llamados contenedores. Estos contenedores son unidades de software estandarizadas que empaquetan todo lo necesario para que una aplicación funcione correctamente, incluyendo el código, las bibliotecas y las configuraciones del sistema.

El uso de contenedores se ha convertido en una práctica clave en el desarrollo backend moderno, ya que facilita la portabilidad, la escalabilidad y la consistencia entre entornos.

### ¿Qué es Docker?

Docker es una herramienta que permite crear, ejecutar y gestionar contenedores de manera eficiente. Su objetivo principal es asegurar que una aplicación se ejecute de la misma forma independientemente del entorno en el que se despliegue, ya sea en desarrollo, pruebas o producción.

Docker proporciona una capa de abstracción que simplifica la gestión de dependencias y configuraciones del sistema, reduciendo errores y mejorando la productividad del equipo de desarrollo.

### Funcionamiento de los Contenedores

Un contenedor es un entorno de ejecución aislado que incluye todas las dependencias necesarias para que una aplicación funcione correctamente. A diferencia de las máquinas virtuales, los contenedores no requieren un sistema operativo completo, sino que comparten el kernel del sistema operativo del host.

Esto hace que los contenedores sean más ligeros, rápidos de iniciar y más eficientes en el uso de recursos. Cada contenedor es independiente de los demás, lo que evita conflictos entre aplicaciones que utilizan diferentes versiones de librerías o herramientas.

### Beneficios de Usar Contenedores

**Portabilidad:**  
Los contenedores garantizan que una aplicación se ejecute de la misma manera en cualquier entorno. Al incluir todas las dependencias, se elimina el problema de inconsistencias entre sistemas.

**Eficiencia de recursos:**  
Al compartir el kernel del sistema operativo y no requerir un sistema operativo completo por instancia, los contenedores consumen menos recursos que las máquinas virtuales tradicionales.

**Escalabilidad:**  
Docker facilita la creación de múltiples instancias de una aplicación mediante contenedores adicionales, permitiendo manejar aumentos en la carga de trabajo de forma rápida y eficiente.

**Aislamiento:**  
Cada contenedor se ejecuta de forma aislada, lo que mejora la seguridad y evita que fallos o problemas en una aplicación afecten a otras que se ejecutan en el mismo sistema.

---

## 4.3 Orquestación de Contenedores con Kubernetes 🚀

### Introducción a Kubernetes y Minikube

**Introducción a Kubernetes y configuración de un entorno local con Minikube**

Kubernetes es una plataforma de orquestación de contenedores que automatiza la gestión, el despliegue y la escalabilidad de aplicaciones basadas en contenedores. Originalmente desarrollado por Google y actualmente mantenido por la comunidad de código abierto, Kubernetes permite administrar clústeres de servidores de forma eficiente, garantizando alta disponibilidad y una correcta distribución de la carga de trabajo.

El uso de Kubernetes es fundamental en arquitecturas modernas, donde las aplicaciones están compuestas por múltiples servicios que deben escalar y recuperarse automáticamente ante fallos.

### ¿Qué es Kubernetes?

Kubernetes es un sistema diseñado para coordinar y gestionar contenedores que se ejecutan en uno o varios servidores. Su función principal es asegurar que las aplicaciones estén siempre disponibles, escalables y funcionando según lo esperado, incluso ante fallos de infraestructura.

Entre sus responsabilidades principales se encuentran el despliegue automatizado, el escalado dinámico, el balanceo de carga y la recuperación automática de contenedores que fallan.

### Orquestación de Contenedores con Kubernetes

La orquestación de contenedores consiste en administrar múltiples contenedores que trabajan en conjunto para ofrecer un servicio o aplicación. Kubernetes se encarga de esta orquestación, asegurando que los contenedores se ejecuten correctamente y se mantengan disponibles en todo momento.

Además, Kubernetes proporciona mecanismos integrados para el balanceo de carga, la supervisión del estado de los contenedores y la autorrecuperación, reiniciando o reemplazando contenedores cuando ocurre un fallo ⚙️.

### Componentes Clave de Kubernetes

**Pods:**  
Son la unidad más pequeña de Kubernetes. Un pod puede contener uno o varios contenedores que comparten red y almacenamiento, y se gestionan como una sola entidad.

**Servicios:**  
Un servicio define un conjunto lógico de pods y una forma estable de acceder a ellos. Permite que otros componentes o usuarios interactúen con la aplicación sin preocuparse por cambios internos en los pods.

**Deployments:**  
Un deployment gestiona la creación, actualización y escalado de pods. Facilita la implementación de nuevas versiones de una aplicación y permite revertir cambios en caso de errores.

### Configuración de un Entorno Local con Minikube

Minikube es una herramienta que permite ejecutar Kubernetes de manera local, creando un clúster en una sola máquina. Es ideal para aprender, probar configuraciones y desarrollar aplicaciones sin necesidad de infraestructura en la nube.

### Pasos para Configurar Minikube

**Instalación de Minikube:**  
Descargar e instalar Minikube desde su sitio oficial. Es necesario contar con un hipervisor compatible, como VirtualBox o Docker, para ejecutar el clúster local.

**Inicio de Minikube:**  
Una vez instalado, se inicia el clúster ejecutando el comando `minikube start`. Este comando crea y levanta un entorno Kubernetes local.

**Uso de kubectl:**  
Kubectl es la herramienta de línea de comandos para interactuar con Kubernetes. Permite consultar el estado del clúster, gestionar pods y desplegar aplicaciones. Por ejemplo, `kubectl get pods` muestra los pods en ejecución.

**Acceso a aplicaciones en Minikube:**  
Las aplicaciones se despliegan mediante archivos de configuración YAML. Minikube permite exponer los servicios localmente, facilitando el acceso desde el navegador o herramientas de prueba 🧪.

---

## 4.4 Seguridad y Gestión de Imágenes en DockerHub 🔐

### Subida y Gestión de Imágenes en DockerHub

**Subir imágenes a DockerHub y sus ventajas para el desarrollo colaborativo**

DockerHub es un repositorio en la nube que permite almacenar, compartir y gestionar imágenes Docker. Al utilizar DockerHub, las imágenes de las aplicaciones se vuelven accesibles para todos los miembros del equipo, garantizando coherencia entre los entornos de desarrollo, pruebas y producción.

### ¿Qué es DockerHub?

DockerHub es el registro de imágenes Docker más utilizado. Funciona como un repositorio donde los desarrolladores pueden publicar imágenes públicas o privadas, facilitando la distribución de aplicaciones empaquetadas en contenedores.

Su uso es clave en equipos de desarrollo colaborativo, ya que permite reutilizar imágenes y mantener un control claro sobre las versiones desplegadas.

### Cómo Subir Imágenes a DockerHub

**Creación de la imagen Docker:**  
Antes de subir una imagen, es necesario construirla localmente a partir de un Dockerfile utilizando el comando:

`docker build -t nombre_imagen .`

Este proceso genera la imagen Docker usando el Dockerfile del directorio actual y le asigna un nombre identificador.

---

**Login en DockerHub:**  
Para poder subir imágenes, debes autenticarte en DockerHub desde la terminal mediante:

`docker login`

Se solicitará tu Docker ID y contraseña.

---

**Tagueo de la imagen:**  
Una vez creada la imagen, es necesario etiquetarla con tu Docker ID para que DockerHub la reconozca:

`docker tag nombre_imagen tu_docker_id/nombre_imagen:version`

---

La etiqueta de versión permite llevar un control claro de los cambios realizados en la imagen.

**Subida de la imagen a DockerHub:**  
Finalmente, se sube la imagen al repositorio con:

`docker push tu_docker_id/nombre_imagen:version`

Una vez completado este paso, la imagen quedará disponible en DockerHub para su uso o distribución 🚀.

---

### Ventajas de Usar DockerHub para el Desarrollo Colaborativo

**Centralización y accesibilidad:**  
DockerHub permite que todos los integrantes del equipo trabajen con las mismas imágenes, evitando inconsistencias entre entornos.

**Gestión de versiones:**  
El uso de etiquetas facilita mantener múltiples versiones de una imagen, permitiendo volver a versiones anteriores o probar nuevas funcionalidades sin afectar producción.

**Automatización y CI/CD:**  
Las imágenes alojadas en DockerHub pueden integrarse directamente en pipelines de integración y despliegue continuo, asegurando despliegues reproducibles y controlados.

**Colaboración eficiente:**  
Compartir imágenes a través de DockerHub elimina la necesidad de transferir archivos manualmente o configurar entornos complejos, acelerando el flujo de trabajo del equipo 🤝.
