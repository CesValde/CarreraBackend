# 📘 Sentencias y Sublenguajes

## 🔹 El Lenguaje de Consultas Estructuradas (SQL)

SQL, o **Lenguaje de Consultas Estructuradas** (Structured Query Language), es un lenguaje de programación diseñado para gestionar y manipular bases de datos relacionales.  
A lo largo de los años, SQL se ha establecido como el estándar de facto en la manipulación de bases de datos debido a su potente capacidad para realizar consultas complejas de manera eficiente.

Tiene comandos para:

- **DML (Data Manipulation Language):** gestión de datos.  
- **DDL (Data Definition Language):** gestión de objetos.  
- **DCL (Data Control Language):** gestión de usuarios y permisos.  
- **TCL (Transaction Control Language):** gestión de transacciones.  

👉 En DML, los más utilizados son:
- `SELECT`: consultar datos.  
- `INSERT`: insertar datos.  
- `UPDATE`: actualizar registros.  
- `DELETE`: eliminar registros.  

👉 En DDL son:
- `CREATE`: Crea objetos de base de datos.
- `ALTER`: Modifica la estructura de objetos existentes.
- `DROP`: Elimina objetos de base de datos.
- `TRUNCATE`: Elimina todos los datos de una tabla, pero mantiene la estructura.
- `CREATE INDEX`: Crea un índice en una tabla.
- `DROP INDEX`: Elimina un índice

---

## ✍️ Sintaxis Básica de Consultas SQL

Ejemplo de estructura típica:

```sql
SELECT columna1, columna2
FROM nombre_tabla
WHERE condicion;
```

- `SELECT`: define qué columnas recuperar.
- `FROM`: especifica la tabla de origen.
- `WHERE`: filtra registros bajo condiciones específicas.   

---

## 📌 Ejemplos de Consultas SQL

1. Consulta Simple

```SQL 
SELECT nombre, apellido 
FROM empleados 
WHERE departamento = 'Ventas';
```

2. Inserción de Datos

```SQL
INSERT INTO clientes (nombre, direccion) 
VALUES ('Ana Pérez', 'Calle Falsa 123');
```

3. Actualización de Datos

```SQL
UPDATE productos 
SET precio = precio * 1.10 
WHERE categoria = 'Electrónica';
```

4. Eliminación de Datos

```SQL
DELETE FROM pedidos 
WHERE fecha < '2021-01-01';
```

---

👉 Selecciona nombres y apellidos de empleados del departamento de Ventas.

⚖️ Principales Operadores de Comparación

- `=` → Igual.

- `!=` o `<>` → Distinto.

- `<` → Menor que.

- `>` → Mayor que.

- `<=` → Menor o igual.

- `>=` → Mayor o igual.

- `BETWEEN` → Verifica si un valor está en un rango.

- `LIKE` → Busca patrones en una columna.

- `IN` → Permite múltiples valores posibles.

---

## 🔍 Uso de Operadores en Consultas SQL

1. Selección Simple

Esta consulta selecciona todos los registros de empleados donde el salario es mayor o igual a 3000.

```SQL
SELECT * 
FROM empleados 
WHERE salario >= 3000;
```

2. Uso de BETWEEN

Recupera todos los productos cuyo precio está entre 10 y 50.

```SQL
SELECT * 
FROM productos 
WHERE precio BETWEEN 10 AND 50;
```

3. Combinando LIKE e IN

Esta consulta selecciona todos los clientes cuyos nombres comienzan con la letra 'A' y están ubicados en Madrid o Barcelona. 

```SQL
SELECT * 
FROM clientes 
WHERE nombre LIKE 'A%' 
AND ciudad IN ('Madrid', 'Barcelona');
```

---

## ⚠️ Consideraciones Especiales

- `NULL`: se usa IS NULL o IS NOT NULL, ya que = o <> no aplican.
- **Case Sensitivity**: la sensibilidad a mayúsculas/minúsculas depende del servidor de base de datos.

---

### ✏️ Modificar Datos con UPDATE

```SQL
UPDATE clientes 
SET nombre = 'Ana María', ciudad = 'Sevilla' 
WHERE id_cliente = 101;
```

👉 Actualiza datos solo del cliente con id_cliente = 101.

---

### 🆕 Insertar Datos con INSERT INTO
```SQL
INSERT INTO clientes (id_cliente, nombre, ciudad) 
VALUES (102, 'Juan Martín', 'Madrid');
```

👉 Inserta un nuevo registro en la tabla clientes.

---

### 🗑️ Eliminar Datos con DELETE

```SQL
DELETE FROM clientes 
WHERE ciudad = 'Barcelona';
```

👉 Elimina todos los registros de clientes en Barcelona.

---

## ✅ Recomendaciones con UPDATE y DELETE

- Usar PKs para evitar afectar datos no deseados.
- Hacer un `SELECT` previo para validar.

Ejemplo antes de modificar:

```SQL
SELECT * FROM clientes WHERE id_cliente = 101;
SELECT * FROM clientes WHERE ciudad = 'Barcelona';
```

---

## 🔒 Consideraciones de Seguridad y Mantenimiento

1. Backup Regular antes de operaciones críticas.
2. Transacciones (BEGIN, COMMIT, ROLLBACK): permiten revertir errores.
3. Limitar Accesos: permisos mínimos para evitar modificaciones indebidas.

---

## 🧩 Uso de Cláusulas Complementarias

**RETURNING**: en algunos SGBD devuelve detalles de registros afectados con `INSERT`, `UPDATE` o `DELETE`.

**Desarrollando habilidades con SQL**

---

## 🚀 Desarrollando Habilidades con SQL

1. **Sintaxis Correcta y Estructurada**

- Indentar cláusulas.
- Usar nombres descriptivos.
- Orden recomendado:

```SQL
SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY
```

- Terminar con `;`.

---

2. **Selección Específica de Campos**

❌ Ineficiente:
```SQL
SELECT * FROM employees;
```

✅ Correcto:
```SQL
SELECT first_name, last_name, department 
FROM employees;
```
---

3. **Uso de Índices**

Ejemplo: Crea un índice en la columna email: 
```SQL 
CREATE INDEX idx_email ON users(email);
```

👉 Acelera búsquedas, pero puede ralentizar escrituras.

---

4. **Evitar Consultas Anidadas Innecesarias**

❌ Subconsulta:
```SQL
SELECT name 
FROM customers 
WHERE id IN (SELECT customer_id FROM orders);
```

✅ Mejor con JOIN:
```SQL
SELECT customers.name 
FROM customers 
INNER JOIN orders 
ON customers.id = orders.customer_id;
```

--- 

5. **Uso Apropiado de JOIN**

- `INNER JOIN` → solo coincidencias.
- `LEFT JOIN` → incluye todos los registros de la tabla izquierda.

```SQL
-- INNER JOIN
SELECT orders.id, customers.name 
FROM orders 
INNER JOIN customers ON orders.customer_id = customers.id;

-- LEFT JOIN
SELECT orders.id, customers.name 
FROM orders 
LEFT JOIN customers ON orders.customer_id = customers.id;
```

---

6. **Utilizar Operadores Eficientes**

❌ Ineficiente:
```SQL
SELECT * 
FROM orders 
WHERE customer_id IN (SELECT id FROM customers);
```

✅ Correcto:
```SQL
SELECT * 
FROM orders 
WHERE EXISTS (
    SELECT 1 FROM customers WHERE customers.id = orders.customer_id
);
```

---

7. **Limitar Resultados**

```SQL
SELECT * 
FROM sales 
ORDER BY sale_date DESC 
LIMIT 10;
```

👉 Usa `LIMIT` o `TOP` para obtener solo las filas necesarias. Esto es útil en grandes bases de datos o para previsualizar datos.

---

8. **Evitar Funciones en WHERE**

Ineficiente: 
``` SQL
SELECT * FROM orders WHERE YEAR(order_date) = 2023;
```

Eficiente: 
```SQL 
SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';
```

👉 Aplicar funciones en columnas puede desactivar los índices. En su lugar, usa rangos directos.

---

9. **Optimización de GROUP BY y HAVING**

```SQL
SELECT department, COUNT(*) AS total_employees 
FROM employees WHERE hire_date >= '2020-01-01' 
GROUP BY department
HAVING COUNT(*) > 10;
```

👉 Usa `WHERE` para filtrar datos antes de agruparlos con `GROUP BY`. Aplica filtros finales con `HAVING`.

---

10. **Pruebas y Ajustes**

```SQL
EXPLAIN SELECT * FROM orders WHERE customer_id = 123;
```

👉 Usar EXPLAIN o EXPLAIN PLAN para detectar cuellos de botella.