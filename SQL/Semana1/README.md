# 📘 Bases de datos Relacionales 

## 📖 ¿Qué es una Base de Datos?

Una base de datos es un conjunto organizado de información, habitualmente relacionado a un contexto específico, que se almacena de manera sistemática para su uso futuro.  
Esta estructura sistemática permite la fácil recuperación, gestión y manipulación de los datos cuando sea necesario.  

> 💡 La analogía más sencilla para entender una base de datos es imaginarla como una **biblioteca organizada**.

---

## 🎯 Importancia de las Bases de Datos

Las bases de datos son vitales en diversos campos y aplicaciones, desde sistemas de gestión empresarial como ERP y CRM hasta servicios web y redes sociales.  

Su importancia radica en su capacidad para:

- Evitar la duplicación de datos: Mediante el uso de bases de datos relacionales, es posible reducir la redundancia al almacenar datos de manera normalizada.  
- Optimizar el espacio de almacenamiento: Al estructurar la información correctamente, se utiliza el espacio de almacenamiento de manera más eficiente.  
- Facilitar el acceso y la manipulación de datos: Gracias al uso de lenguajes de consulta como SQL, se puede acceder y manipular datos de manera eficaz, lo que es crucial para la toma de decisiones empresariales y el análisis de datos.  

Las bases de datos continúan evolucionando, adaptándose a nuevas tecnologías y necesidades, como el análisis de grandes volúmenes de datos (big data), el aprendizaje automático (machine learning), y el Internet de las Cosas (IoT).  
Esta evolución constante asegura que seguirán siendo una herramienta indispensable en el mundo digital.

---

## 🧩 Componentes de una Base de Datos

### 📋 Tablas

Las tablas son la estructura fundamental en una base de datos relacional.  
Similar a una hoja de cálculo, las tablas organizan los datos en filas y columnas.  
Cada tabla se enfoca en un tema o entidad específica, como clientes o productos.

- **Columnas (Campos):** Representan las características de la entidad descrita por la tabla. Cada columna tiene un nombre único y un tipo de dato, como texto o números.  
  Ejemplo: en una tabla de clientes, las columnas pueden ser nombre, dirección y teléfono.  
- **Filas (Registros):** Contienen datos individuales de la tabla. Cada fila representa un registro único.  
  Ejemplo: en una tabla de productos, una fila podría incluir el nombre del producto, el precio y la cantidad en inventario.  

> El esquema de una tabla define su estructura y especifica qué columnas contiene y qué tipo de datos se pueden almacenar.  
Esto garantiza que los datos ingresados sean consistentes y correctos.

---

### 📑 Registros

Un **registro** es un conjunto de datos relacionados en una fila de una tabla.  
Representa una instancia de la entidad descrita.  

Ejemplo: un registro en una tabla de ventas podría incluir detalles como el número de la transacción, el cliente y el monto total.

---

### 🔑 Clave Primaria

Para identificar cada registro de manera única, se utiliza una **clave primaria**.  
Es un campo con valores únicos para cada registro, asegurando que cada fila sea individualmente identificable.

---

### 📌 Campos

Los campos son las **columnas de una tabla** y contienen tipos de datos específicos.  

Tipos de datos comunes:

- Texto: Cadenas de caracteres.  
- Números enteros: Números sin decimales.  
- Números decimales: Números con decimales.  
- Fechas: Valores de fecha y hora.  

Los campos pueden tener propiedades adicionales que aseguran la integridad de los datos, como restricciones de unicidad y valores predeterminados.  

Ejemplo: una clave primaria debe ser única y no nula, garantizando que cada registro tenga un identificador exclusivo. 

---

### 🌟 Importancia de los Componentes

- Eficiencia en el almacenamiento: Minimiza la redundancia de datos.  
- Integridad de los datos: Asegura que los datos sean precisos y consistentes.  
- Facilidad de acceso: Permite recuperar y manipular datos eficientemente utilizando SQL.  

---

## 🏗️ Estructura Basada en Tablas

Las bases de datos relacionales están organizadas en tablas, donde cada tabla representa una entidad distinta.  

- Cada fila en una tabla = **registro o tupla**.  
- Cada columna = **campo o atributo**.  

Esta estructura tabular permite que las tablas se relacionen entre sí, creando conexiones lógicas entre diferentes conjuntos de datos.

---

## 🔗 Relaciones

Las bases de datos relacionales obtienen su nombre por la capacidad de **definir relaciones entre tablas**.  
Estas relaciones se establecen utilizando **claves**:

- **Clave Primaria (PK):** Identificador único de cada registro.  
- **Clave Foránea (FK):** Campo que apunta a una PK de otra tabla.  
- **Clave Única (UK):** Asegura valores únicos dentro de una tabla (ejemplo: mail de usuario).  

---

## 📊 Tipos de Relaciones en Bases de Datos Relacionales

### 1. Uno a Uno (1:1)  

Cada fila en una tabla se relaciona con una única fila en otra tabla.  

Ejemplo: **Persona y DNI**  

- Cada persona tiene un solo DNI.  
- Cada DNI pertenece a una sola persona.  

**Personas**  
- id_persona (PK)  
- nombre  
- apellido  

**DNI**  
- id_dni (PK)  
- numero_dni  
- id_persona (FK)  

---

### 2. Uno a Muchos (1:N)  

Una fila en una tabla se puede relacionar con muchas filas en otra tabla.  

Ejemplo: **Autor y Libros**  

- Un autor puede escribir muchos libros.  
- Cada libro tiene un solo autor.  

**Autores**  
- id_autor (PK)  
- nombre  

**Libros**  
- id_libro (PK)  
- titulo  
- id_autor (FK)  

---

### 3. Muchos a Muchos (N:M)  

Muchas filas en una tabla pueden relacionarse con muchas filas en otra tabla.  
Se implementa con una **tabla intermedia**.  

Ejemplo: **Estudiantes y Cursos**

- Un estudiante puede inscribirse en muchos cursos.  
- Un curso puede tener muchos estudiantes.  

**Estudiantes**  
- id_estudiante (PK)  
- nombre  

**Cursos**  
- id_curso (PK)  
- nombre  

**Estudiante_Curso**  
- id_curso (FK)  
- id_estudiante (FK)  
- (PK compuesta)  

🔑 PK compuesta:  
```sql
PRIMARY KEY (id_estudiante, id_curso)
```

Esto significa que la combinación de id_estudiante + id_curso es única.

Ejemplo: ❌ No podés tener dos veces `(1, 101)`.

--- 

🛠️ **Instrucciones para la Creación de una Base de Datos Relacional Básica**

**Paso 1: Definición del Propósito de la Base de Datos**

Antes de comenzar a diseñar la base de datos, es fundamental definir claramente el propósito que servirá.
Esto implica comprender qué tipo de datos se almacenarán, cómo se utilizarán y quiénes serán los usuarios principales de la base de datos.

---

**Paso 2: Identificación de Entidades y Atributos**

Una entidad = objeto o concepto real.

Cada entidad se convierte en una tabla.

Los atributos = columnas de esas tablas.

Ejemplo en ventas:

Entidades: Clientes, Productos, Pedidos.

Atributos: Nombre, Precio, Fecha de Pedido.

En esta fase también se identifican claves candidatas y claves únicas.

---

**Paso 3: Creación del Modelo Entidad-Relación**

Diseño gráfico que muestra cómo se relacionan las entidades (1:1, 1:N, N:M).

---

**Paso 4: Definición de Claves Primarias y Foráneas**

Cada tabla debe tener una PK.

Las FK permiten mantener la integridad referencial.

También se definen las UK detectadas en el modelo.

---

**Paso 5: Normalización de la Base de Datos**

Proceso de estructurar para minimizar redundancia.

Aplicando 1NF, 2NF, 3NF, etc.

Ejemplo: separar "Pedidos" en "Clientes" y "Productos".

---

**Paso 6: Implementación en un SGBD**

Creación física de tablas, relaciones y restricciones en MySQL, PostgreSQL, SQL Server, etc.

---

**Paso 7: Inserción de Datos y Pruebas**

Se cargan datos iniciales y se realizan pruebas de integridad y rendimiento.

⚡ Consultas SQL Complejas

El Lenguaje de Consulta Estructurado (SQL) permite interactuar con el SGBD para:

- DML: gestión de datos.

- DDL: gestión de objetos.

- DCL: gestión de usuarios y permisos.

- TCL: gestión de transacciones.

---

1. **Selección de Datos con Condiciones Avanzadas**

Una de las funcionalidades más básicas pero esenciales de SQL es la capacidad de seleccionar datos utilizando condiciones avanzadas para filtrar los resultados. Esto se logra con la cláusula ```WHERE```, que puede incorporar operadores lógicos y de comparación.

- Operadores de Comparación: Permiten comparar valores en las columnas, como ```=```, ```<>```, ```>```, ```<```, ```>=```, ```<=```.
- Operadores Lógicos: ```AND```, ```OR```, y ```NOT``` se utilizan para combinar múltiples condiciones, lo que permite crear filtros detallados.
- Consultas con Rango y Patrones: Utilizando `BETWEEN` para seleccionar valores dentro de un rango, y `LIKE` para buscar patrones dentro de cadenas de texto.

Ejemplo: Recuperar todos los clientes mayores de 30 años que viven en una ciudad específica.

```SQL 
SELECT * FROM Clientes WHERE Edad > 30 AND Ciudad = 'Madrid' ;
```

---

2. **Uso de Funciones Agregadas**

SQL proporciona funciones agregadas que permiten realizar cálculos sobre un conjunto de valores y devolver un único valor. Estas son cruciales para obtener resúmenes de datos, como totales y promedios.

`SUM()`: Suma todos los valores de una columna.

`AVG()`: Calcula el promedio de los valores.

`COUNT()`: Cuenta el número de filas.

`MAX()` y `MIN()`: Encuentran el valor máximo y mínimo respectivamente.

Ejemplo: Calcular el total de ventas y el promedio de las ventas de un cliente específico. 

```SQL 
SELECT SUM(TotalVentas) AS Total, AVG(TotalVentas) AS Promedio FROM Ventas
`WHERE ClienteID = 23;
```

---

3. **Agrupación de Datos**

La cláusula `GROUP BY` se utiliza para agrupar filas que tienen los mismos valores en columnas especificadas en grupos resumidos, a menudo en combinación con funciones agregadas que van a actuar sobre el grupo que se haya definido. Esto es útil para crear informes que requieren resúmenes de datos.

Ejemplo: Mostrar la cantidad de productos vendidos por categoría. 

```SQL
SELECT Categoria, COUNT(*) AS NumeroDeProductos FROM Productos GROUP BY Categoria;
```

---

4. **Consultas de Unión y Subconsultas**

Las consultas más complejas a menudo requieren combinar datos de múltiples tablas. SQL ofrece varias maneras de lograr esto:

- Unión (JOIN): Se utiliza para combinar filas de dos o más tablas, basándose en una columna relacionada entre ellas. Existen varios tipos de uniones:
- INNER JOIN: Devuelve filas cuando hay una coincidencia en ambas tablas.
- LEFT JOIN: Devuelve todas las filas de la tabla izquierda, y las filas coincidentes de la tabla derecha.
- RIGHT JOIN: Devuelve todas las filas de la tabla derecha, y las filas coincidentes de la tabla izquierda.
- FULL OUTER JOIN: Devuelve filas cuando hay una coincidencia en una de las tablas.

Ejemplo: Obtener la lista de clientes y sus pedidos, incluso si no han realizado pedidos. 

```SQL 
SELECT Clientes.Nombre, Pedidos.Fecha FROM Clientes LEFT JOIN Pedidos ON Clientes.ClienteID = Pedidos.ClienteID;
```

- Subconsultas: Una consulta dentro de otra consulta. Se pueden usar en `SELECT`, `FROM`, `WHERE`, `HAVING`, y `INSERT`

Ejemplo: Listar productos cuyo precio está por encima del promedio. 

```SQL 
SELECT NombreProducto FROM Productos WHERE Precio > (SELECT AVG(Precio) FROM Productos);
```

---

5. **Ordenación y Limitación de Resultados**

Para mejorar la presentación de datos, SQL permite ordenar y limitar los resultados.

- ORDER BY: Ordena el conjunto de resultados por una o más columnas, de forma ascendente (`ASC`) o descendente (`DESC`).
- LIMIT: Limita la cantidad de resultados que se va a devolver al cliente. Junto con el `LIMIT` podemos utilizar el modificador `OFFSET` que nos va a indicar desde que registro queremos obtener los valores (especialmente útil cuando queremos paginar)

Ejemplo: Obtener los 5 productos más caros. 

```SQL 
SELECT NombreProducto, Precio FROM Productos ORDER BY Precio DESC LIMIT 5;
```

Ejemplo: Obtener los 5 productos más caros, pero partiendo desde el registro 

```SQL 
SELECT NombreProducto, Precio FROM Productos ORDER BY Precio DESC LIMIT 5 OFFSET 5;
```

---

6. **Consultas con Funciones de Ventana**

Las funciones de ventana permiten realizar cálculos que utilizan información de varias filas relacionadas en una consulta, sin la necesidad de agrupar los resultados en una única fila.

OVER(): Define una ventana de filas para las funciones de ventana.

Ejemplo: Calcular el salario acumulado para cada empleado, ordenado por fecha de contratación. 

```SQL
SELECT EmpleadoID, FechaContratacion, SUM(Salario) OVER (ORDER BY FechaContratacion) AS SalarioAcumulado FROM Empleados;
``` 

---

7. **Optimización de Consultas**

Para asegurar que las consultas complejas sean eficientes y rápidas, es importante considerar:

- Índices: Mejoran la velocidad de las operaciones de búsqueda.
- Análisis de Plan de Ejecución: Evaluar cómo SQL ejecuta la consulta para identificar cuellos de botella.
- Uso de Alias: Simplifican la consulta y mejoran la legibilidad.