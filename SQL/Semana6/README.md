# 📊 Sublenguaje DML  

## 📌 Descripción General del Sublenguaje DML  

El **sublenguaje DML (Data Manipulation Language)** es una parte esencial del lenguaje SQL que se utiliza para **manipular datos en las bases de datos**.  
A través de DML, podemos realizar operaciones como **insertar, actualizar y eliminar registros** en las tablas de una base de datos.  

Las sentencias DML más comunes son:  
- `INSERT` → agregar registros  
- `UPDATE` → modificar registros  
- `DELETE` → eliminar registros  

---

## 📝 Sentencia `INSERT`  

La sentencia `INSERT` se utiliza para **agregar nuevos registros** a una tabla.  
Puede insertar un único registro o múltiples registros a la vez.  

📌 **Sintaxis básica:**  

```sql
INSERT INTO nombre_de_la_tabla (campo1, campo2, campo3, ...)
VALUES (dato1, dato2, dato3, ...);
```

### 🔹 Puntos clave:

- ✅ Es recomendable especificar los campos para mayor estabilidad.
- ✅ Los valores de tipo texto deben ir entre comillas '...'.
- ✅ Los campos AUTOINCREMENT pueden omitirse o recibir NULL.

📌 Ejemplo:

```sql
INSERT INTO pay (id_pay, amount, currency, date_pay, pay_type, id_system_user, id_game)
VALUES
(NULL, 250, 'U$S', '2021-07-22', 'Paypal', 850, 77),
(NULL, 3700, 'Pesos Arg', '2021-07-22', 'Visa', 38, 31),
(NULL, 180, 'Libras', '2021-07-22', 'Transfer', 175, 16);
```

## ✏️ Sentencia UPDATE

La sentencia `UPDATE` se utiliza para modificar registros existentes.

### 📌 Sintaxis básica:

```sql
UPDATE nombre_de_la_tabla
SET campo1 = valor1, campo2 = valor2, ...
WHERE condición;
```

### ⚠️ Importante:

- Usar WHERE siempre que sea posible, para no modificar todos los registros.
- Los valores de tipo texto deben ir entre comillas.

### 📌 Ejemplo:

```sql
UPDATE pay
SET currency = 'U$S'
WHERE id_pay = 4;
```

### 📌 Ejemplo con condiciones específicas:

```sql
UPDATE class
SET nivel = 8
WHERE id_class BETWEEN 1 AND 20 AND nivel < 13;
```

--- 

## ❌ Sentencia DELETE

La sentencia DELETE elimina registros de una tabla.

### 📌 Sintaxis básica:

```sql
DELETE FROM nombre_de_la_tabla
WHERE condición;
```

### ⚠️ Precauciones:

- Sin `WHERE` → ❗ se eliminan **TODOS** los registros.
- Tener en cuenta las claves foráneas (restricciones de integridad referencial).

### 📌 Ejemplo:

```sql
DELETE FROM class
WHERE id_level = 1 AND id_class = 999;
```

---

## 🔍 Uso de Subconsultas en DML

### 📌 Inserciones con subconsultas

Permiten insertar datos dependiendo de otras tablas.

Ejemplo: insertar clases solo si el `id_level` existe en `level_game`.

```sql
INSERT INTO class (id_level, id_class, description)
SELECT id_level, 999, 'New Class'
FROM level_game
WHERE id_level NOT IN (SELECT id_level FROM class);
```

--- 

## 📌 Actualizaciones con subconsultas

Ejemplo: actualizar registros de `class` solo si su `id_level` existe en `new_level_game`.

```sql
UPDATE class
SET nivel = 20
WHERE id_level IN (SELECT id_level FROM new_level_game);
```
--- 

## 📌 Eliminaciones con subconsultas

Ejemplo: eliminar registros de class cuyo id_level no exista en new_level_game.

```sql
DELETE FROM class
WHERE id_level NOT IN (SELECT id_level FROM new_level_game);
```
---

## 🔗 Inserciones con Claves Foráneas

Cuando hay relaciones entre tablas, conviene usar transacciones para mantener la integridad.

📌 Ejemplo:

```sql
START TRANSACTION;

INSERT INTO orders (order_id, customer_id, order_date)
VALUES (1001, 203, '2024-08-05');

INSERT INTO order_details (order_id, product_id, quantity, price)
VALUES (1001, 45, 3, 19.99);

COMMIT;
```

- `COMMIT` → confirma los cambios.
- `ROLLBACK` → deshace los cambios en caso de error.

--- 

## ⚡ Optimización de Consultas DML
📌 Uso de índices

Los índices aceleran la búsqueda y mejoran JOIN y condiciones WHERE.

```sql
CREATE INDEX idx_customer_id ON orders (customer_id);
```

📌 Estrategias adicionales

1. Inserción masiva

```sql
INSERT INTO employees (name, position, salary)
VALUES
('Alice', 'Engineer', 70000),
('Bob', 'Manager', 80000),
('Charlie', 'Analyst', 60000);
```

2. Transacciones para operaciones seguras y consistentes.

```sql
START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

COMMIT;
```

3. Desactivar índices temporalmente para operaciones masivas y reconstruirlos luego.
4. Analizar el plan de ejecución para identificar cuellos de botella en consultas.

✅ Con DML podemos insertar, actualizar y eliminar datos de forma segura, optimizada y consistente, aprovechando transacciones, subconsultas y buenas prácticas en índices.