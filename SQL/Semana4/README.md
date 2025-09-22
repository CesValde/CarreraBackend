# 📦 Objetos y Tablas SQL

## 🗄️ Tablas
Las tablas son el corazón de cualquier base de datos relacional. Son estructuras que almacenan datos en filas y columnas:

- 📌 **Definición**: Una tabla se compone de columnas (también conocidas como campos) y filas (registros) donde cada columna tiene un tipo de dato definido y cada fila representa un registro único.  
- ⚙️ **Uso**: Las tablas se utilizan para almacenar información de manera organizada. Por ejemplo, una tabla de empleados puede contener columnas para ID, nombre, posición y salario.  
- 🔗 **Relaciones**: Las tablas pueden relacionarse entre sí a través de claves primarias y foráneas para mantener la integridad de los datos.  

### 👀 Vistas
Las vistas son tablas virtuales creadas a partir de consultas sobre una o más tablas:

- 📌 **Definición**: Una vista es un objeto que muestra datos de una o varias tablas pero no almacena datos por sí misma, actúa como una ventana a datos almacenados en otras tablas.  
- ⚙️ **Uso**: Las vistas se utilizan para simplificar consultas complejas, asegurar la seguridad de los datos presentando solo información relevante a usuarios específicos, y proporcionar una capa de abstracción sobre los datos subyacentes.  
- 📝 **Tipos de vistas**: Existen vistas actualizables y no actualizables, dependiendo de si permiten modificaciones a los datos que reflejan.  

---

## ⚡ Procedimientos Almacenados
Los procedimientos almacenados son conjuntos de instrucciones SQL que se ejecutan en la base de datos.

- 📌 **Definición**: Un procedimiento almacenado es un conjunto de comandos SQL precompilados que se almacena y se ejecuta en la base de datos. Estos procedimientos pueden contener instrucciones de control de flujo, operaciones condicionales, y transacciones completas.  
- ⚙️ **Uso**: Se utilizan para encapsular la lógica de negocios, realizar operaciones complejas, aplicar reglas de negocio, y gestionar transacciones. Su uso contribuye a mejorar la seguridad al controlar el acceso a los datos y puede aumentar la eficiencia de las aplicaciones al minimizar el tráfico entre el cliente y la base de datos.  
- ✅ **Ventajas**: Permiten estandarizar procesos repetitivos, reducir errores, simplificar el mantenimiento del código y mejorar el rendimiento al aprovechar la compilación y optimización que realiza el servidor.  

---

## 🔧 Funciones
Las funciones son un conjunto de instrucciones SQL que se ejecutan en la base de datos y están diseñadas para devolver un valor específico.

- 📌 **Definición**: Una función es un bloque de código SQL almacenado en la base de datos que, a diferencia de un procedimiento almacenado, siempre devuelve un valor de salida o retorno. Este puede ser un valor escalar (número o cadena) o un conjunto de resultados.  
- ⚙️ **Uso**: Se utilizan para simplificar y estandarizar las consultas al encapsular lógica recurrente como cálculos, transformaciones de datos o validaciones.  
- ✅ **Ventajas**: Ayudan a mantener el código limpio y modular, mejoran la legibilidad de las consultas y permiten reutilizar lógica en múltiples lugares.  

---

## 🔔 Triggers (Disparadores)
Los triggers son conjuntos de instrucciones SQL que se ejecutan automáticamente en respuesta a ciertos eventos en la base de datos.

- 📌 **Definición**: Un trigger es un bloque de código SQL que se ejecuta automáticamente cuando ocurre un evento específico en la base de datos, como una inserción, actualización o eliminación de registros.  
- ⚙️ **Uso**: Se utilizan para auditoría, mantener registros históricos o ejecutar cálculos automáticos.  
- ✅ **Ventajas**: Automatizan tareas repetitivas, garantizan reglas de negocio y ayudan a mantener la integridad de los datos sin intervención manual.  

---

## 🔑 Claves
Las claves son elementos esenciales en el diseño de bases de datos para asegurar la integridad y eficiencia del acceso a los datos:

- 🔐 **Clave Primaria (Primary Key)**: Un campo único que identifica cada fila de una tabla.  
- 🔗 **Clave Foránea (Foreign Key)**: Un campo que identifica la relación entre dos tablas, enlazando con la clave primaria de otra.  
- ⚡ **Índices**: Estructuras adicionales que mejoran la velocidad de recuperación de los datos. No son claves, pero optimizan consultas.  
