# Consultas y subconsultas DDL

**✨ Uniendo Dos consultas con SQL**

**🔗 Unión de consultas con la Cláusula UNION en SQL**

La cláusula `UNION` en SQL se utiliza para combinar los resultados de dos o más consultas `SELECT` en un único conjunto de resultados, incluyendo todas las filas que pertenecen a todas las consultas combinadas. Es crucial para el uso correcto de `UNION` que cada consulta involucrada en la unión tenga el mismo número de columnas en sus resultados, con tipos de datos compatibles en sus columnas correspondientes.

1. 🔢 **Número de Columnas:** Todas las consultas combinadas deben tener el mismo número de columnas. Por ejemplo, si la primera consulta selecciona 3 columnas, entonces la segunda consulta también debe seleccionar 3 columnas.

2. 🧩 **Tipos de Datos Compatibles:** Las columnas que se están combinando en diferentes consultas deben tener tipos de datos compatibles. Por ejemplo, no puedes combinar directamente una columna de texto con una de números sin realizar alguna forma de conversión o ajuste, pero aunque es posible realizarlo, siempre lo más conveniente es tener el mismo tipo de datos en las columnas de cada una de las consultas, y por cuestiones de legibilidad, es conveniente que las mismas tengan el mismo nombre de columna.

📌 Supongamos que tenemos dos tablas de juegos, `game_level_1` y `game_level_2`, que contienen información de juegos en diferentes niveles pero con estructura similar:

```sql
-- Selección de juegos del nivel 1
SELECT id_game, name, description 
FROM game_level_1 
WHERE condition = 'X';

-- Selección de juegos del nivel 2
SELECT id_game, name, description 
FROM game_level_2 
WHERE condition = 'Y';
```

Ambos `SELECT` tienen el mismo número de columnas (tres en este caso: `id_game`, `name`, y `description`) y se asume que las columnas correspondientes en ambas consultas son del mismo tipo de datos.

---

## 📊 Tipos de Datos en SQL

## 🔢 Tipos Numéricos

- INT: Para valores enteros sin decimales, ideal para identificadores o cantidades.
- DECIMAL y NUMERIC: Usados para números con precisión decimal, como precios.
- FLOAT y DOUBLE: Para cálculos que requieren muchos decimales, aunque no son recomendados para datos financieros debido a posibles errores de redondeo.

## ✍️ Tipos de Texto

- CHAR y VARCHAR: CHAR para textos de longitud fija y VARCHAR para textos de longitud variable.
- TEXT: Adecuado para textos largos como descripciones o comentarios.

## ⏰ Tipos de Fecha y Hora

- DATE: Solo almacena fechas.
- TIME: Solo registra tiempos.
- DATETIME y TIMESTAMP: Almacenan tanto la fecha como la hora; TIMESTAMP ajusta automáticamente las zonas horarias.

## 📂 Otros Tipos de Datos

- BOOLEAN: Para valores verdadero o falso.
- BINARY y VARBINARY: Para datos binarios, como imágenes o archivos.

--- 

## 🔍 Profundizando en el Uso del Operador LIKE

El operador `LIKE` en SQL se utiliza para realizar búsquedas de patrones dentro de cadenas de texto, permitiendo encontrar coincidencias parciales o completas en los registros.

## 🃏 Comodines en LIKE

- % (Porcentaje): Sustituye a cualquier número de caracteres y es útil para búsquedas generales en cualquier posición de la cadena.
- _ (Guion Bajo): Representa un único carácter y es útil cuando se conoce la posición exacta del carácter en la cadena.

## ️ Consideraciones Importantes

- Sensibilidad al Caso: Depende del sistema gestor de la base de datos; algunos son sensibles a mayúsculas y minúsculas.
- Rendimiento: El uso de comodines, especialmente al inicio del patrón (%algo), puede afectar el rendimiento al impedir el uso eficiente de índices.

✅ El operador LIKE es una herramienta esencial para filtrar y analizar datos basados en criterios de texto en SQL.

---

### 📐 Sublenguaje DDL

**DDL**: Data Definition Language (Lenguaje de Definición de Datos) y es un subconjunto de SQL que se utiliza para definir y gestionar la estructura de una base de datos.

--- 

## 📘 Introducción a DDL en SQL

### ⚙️ Funciones Principales de DDL

- CREATE: Utilizada para crear nuevos objetos en la base de datos.
📌 Ejemplo: CREATE TABLE se emplea para crear una nueva tabla especificando sus columnas y restricciones.

- DROP: Esta sentencia elimina objetos existentes en la base de datos.
📌 Ejemplo: DROP TABLE eliminaría completamente una tabla especificada, incluyendo todos sus datos.

- ALTER: Permite modificar la estructura de objetos existentes.
📌 Ejemplo: Se puede usar para añadir, eliminar, o modificar columnas en una tabla o para cambiar otras propiedades de la tabla.

--- 

## 🏗️ Ejemplos

1. Creación de Tablas:

```sql
CREATE TABLE Employees (
  ID INT PRIMARY KEY, 
  Name VARCHAR(100), 
  HireDate DATE
);
```

2. Modificación de Tablas:
```sql
ALTER TABLE Employees 
ADD Email VARCHAR(255);
```

3. Eliminación de Objetos:
```sql
DROP TABLE Employees;
```

--- 

## ⚠️ Consideraciones

- Impacto Permanente: Las operaciones de DDL tienen un impacto permanente en la estructura de la base de datos, por lo que deben usarse con precaución.
- Seguridad y Control de Acceso: Es importante controlar quién tiene permisos para ejecutar sentencias DDL, ya que implican cambios significativos en la estructura de la base de datos.
- Planificación y Pruebas: Antes de aplicar cambios significativos en un entorno de producción, estos deben ser cuidadosamente planificados y probados en un entorno de desarrollo.