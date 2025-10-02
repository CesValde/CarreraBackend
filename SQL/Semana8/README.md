# 📌 Funciones y Stored Procedures en SQL

## 🔹 ¿Qué son las Funciones Personalizadas?

Las funciones personalizadas son bloques de código almacenados en la base de datos que encapsulan lógica de negocio y devuelven un valor.
Se diferencian de los stored procedures porque siempre devuelven un valor único y pueden ser usadas dentro de consultas SQL.

---

## ✅ Ventajas de las Funciones Personalizadas

- Modularidad y Reutilización → encapsulan lógica y evitan duplicación de código.
- Mantenimiento Simplificado → si cambia la lógica, se actualiza en un solo lugar.
- Mejora del Rendimiento → procesan en el servidor, reduciendo tráfico entre cliente-servidor.
- Seguridad de los Datos → evitan exponer datos sensibles y permiten control de acceso.

--- 

### 🔹 Sintaxis Básica de una Función

```sql
DELIMITER //

CREATE FUNCTION nombre_funcion (param1 TipoDato, param2 TipoDato)
RETURNS TipoRetorno
[DETERMINISTIC|NOT DETERMINISTIC]
[CONTAINS SQL|NO SQL|READS SQL DATA|MODIFIES SQL DATA]
BEGIN
    DECLARE variable TipoDato;
    -- Lógica de la función
    RETURN resultado;
END;
//

DELIMITER ;
```

### 📌 Componentes Clave

- Nombre de la función → único dentro de la BD.
- Parámetros de entrada → valores necesarios para el cálculo.
- Tipo de retorno → INT, VARCHAR, BOOLEAN, etc.
- Determinismo → DETERMINISTIC (siempre mismo resultado) o NOT DETERMINISTIC.
- Cuerpo (BEGIN...END) → variables, operaciones y RETURN.

---

## 🔹 Variables Internas

Se declaran dentro de la función para cálculos intermedios.

```sql 
DECLARE total INT;
SET total = param1 + param2;
RETURN total;
```

---

## 🔹 Ejemplo 1: Función con Parámetros y Retorno

```sql
DELIMITER //

CREATE FUNCTION f_obtener_total_factura (precio DECIMAL(10,2), cantidad INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE total DECIMAL(10,2);
    SET total = precio * cantidad;
    RETURN total;
END;
//

DELIMITER ;
```

### 📌 Uso en consulta:

```sql
SELECT f_obtener_total_factura(100.50, 3) AS Total;
```

👉 Resultado: 301.50

---

## 🔹 Ejemplo 2: Función que Lee Datos de una Tabla

```sql
DELIMITER //

CREATE FUNCTION f_contar_personas(paisId INT)
RETURNS INT
READS SQL DATA
BEGIN
    DECLARE cantidad INT;
    SELECT COUNT(*) INTO cantidad
    FROM PERSONAS
    WHERE pais_id = paisId;
    RETURN cantidad;
END;
//

DELIMITER ;
```

### 📌 Uso en consulta:

```sql
SELECT f_contar_personas(1) AS Personas_en_Pais;
```

---

## 📊 Diferencias entre Funciones y Stored Procedures

Característica	Funciones	Stored Procedures

```
Retorno	Siempre un valor	Puede retornar varios valores
Uso en consultas	✅ Sí	❌ No
Parámetros	Entrada	Entrada y Salida
Modificación de datos (INSERT, UPDATE, DELETE)	Limitado	✅ Sí
Modularidad	Alta	Alta

| Característica | Funciones | Stored Procedures |
|----------------|-----------|-------------------|
| Retorno | Siempre un valor | Puede retornar varios valores |
| Uso en consultas | ✅ Sí | ❌ No |
| Parámetros | Entrada | Entrada y Salida |
| Modificación de datos (INSERT, UPDATE, DELETE) | Limitado | ✅ Sí |
| Modularidad | Alta | Alta |
```

--- 

## 🚀 Conclusión

- Funciones personalizadas: ideales para cálculos, transformaciones y lógica reutilizable en consultas.
- Stored Procedures: mejores para procesos más grandes, que incluyen múltiples sentencias SQL y modificaciones de datos.

---

## ⚙️ Stored Procedures en SQL
🔹 ¿Qué son?

Un Stored Procedure (procedimiento almacenado) es un conjunto de instrucciones SQL que se guardan en la base de datos y se ejecutan en el servidor.
Sirven para tareas desde operaciones simples hasta procesos complejos con múltiples tablas y transacciones.

✅ Mejoran el rendimiento
✅ Reducen tráfico de red
✅ Centralizan la lógica de negocio

--- 

### 📝 Sintaxis básica

```sql
DELIMITER //

CREATE PROCEDURE nombre_del_procedimiento
(
    [IN|OUT|INOUT] parametro1 TipoDato,
    [IN|OUT|INOUT] parametro2 TipoDato
)
BEGIN
    -- Lógica del procedimiento
END //

DELIMITER ;
```

--- 

## 🧱 Componentes clave

- ✂️ DELIMITER → cambia el delimitador temporal para definir el procedure

- 🏷️ CREATE PROCEDURE → define el procedimiento

- 📥 Parámetros:
    - IN → entrada
    - OUT → salida
    - INOUT → entrada y salida

- 📦 Cuerpo (BEGIN...END) → contiene SQL, variables, DML, bucles, condicionales

---

## 🚀 Utilidad de los Stored Procedures

- ⚡ Eficiencia → ejecutan en servidor y reducen tráfico
- 🔒 Seguridad → control de accesos y encapsulación de datos sensibles
- ✅ Menos errores → lógica centralizada y reutilizable
- 🔧 Mantenibilidad → cambios centralizados
- 🔁 Transacciones → garantizan propiedades ACID

--- 

## 🧩 Tipos de Stored Procedures

1. Básico → sin parámetros
2. Con parámetros de entrada (IN) → reciben valores externos
3. Con parámetros de salida (OUT) → devuelven resultados
4. Con parámetros de entrada y salida (INOUT) → reciben y devuelven valores

--- 

## 💡 Beneficios

- 📊 Ejecución eficiente → menos tráfico y planes de consulta precompilados
- 🔁 Reutilización de código → lógica de negocio en un único lugar
- 🔒 Seguridad → protección contra SQL Injection y control de permisos
- 🛠️ Menos errores humanos → los usuarios no escriben queries complejas

🔑 Sintaxis clave

```sql
1. DELIMITER

Permite redefinir el final de una instrucción.

DELIMITER //

2. CREATE PROCEDURE

Define el procedimiento.

CREATE PROCEDURE nombre_del_procedimiento()

3. BEGIN...END

Delimita el cuerpo.

BEGIN
   -- Lógica
END //

4. Parámetros
CREATE PROCEDURE ejemplo(IN valor INT, OUT resultado VARCHAR(255))
```

---

## 📌 Parámetros

- 🔹 IN → reciben datos
- 🔹 OUT → devuelven datos
- 🔹 INOUT → reciben y devuelven

---

## 📥 Variables

Dentro del procedure se pueden usar variables:

```sql
DECLARE total INT;
SET total = 0;
```

👉 También se pueden pasar por referencia, modificando valores fuera del procedure.

Ejemplo dinámico:

```sql
DELIMITER //

CREATE PROCEDURE ObtenerDatos(
    IN tabla VARCHAR(50),
    IN columna VARCHAR(50),
    IN condicion VARCHAR(100),
    OUT resultado INT
)
BEGIN
    DECLARE consulta_dinamica VARCHAR(255);
    DECLARE valor INT;

    SET consulta_dinamica = CONCAT('SELECT COUNT(*) INTO @valor FROM ', tabla, 
                                   ' WHERE ', columna, ' = "', condicion, '"');

    PREPARE stmt FROM consulta_dinamica;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;

    SELECT @valor INTO valor;
    SET resultado = valor;
END //

DELIMITER ;
```

👉 Ejecución:

```sql
CALL ObtenerDatos('empleados', 'departamento', 'Ventas', @resultado);
SELECT @resultado AS NumeroDeEmpleados;
```

---

## 🔀 Uso de condicionales en Procedures

Se puede usar `IF...THEN...ELSE`:

```sql
IF condicion THEN
   -- sentencias si es verdadero
ELSE
   -- sentencias si es falso
END IF;
```

✅ Permite adaptar la lógica a diferentes escenarios
✅ Controla el flujo de ejecución
✅ Maneja excepciones y validaciones

---

## 🏁 Conclusión

Los Stored Procedures:

- 🔒 Mejoran la seguridad
- ⚡ Aumentan la eficiencia
- 🧩 Encapsulan la lógica de negocio
- 🔁 Permiten reutilización y reducen errores

Son esenciales para automatizar procesos complejos y asegurar consistencia en las operaciones.

```
📊 Diferencia entre Funciones y Stored Procedures en SQL
🔹 Característica	🛠️ Funciones	⚙️ Stored Procedures
📤 Retorno	Siempre devuelven un valor (con RETURN)	Pueden retornar cero, uno o varios valores (mediante parámetros OUT o INOUT)
📑 Uso en consultas	✅ Se pueden usar en SELECT, WHERE, etc.	❌ No se pueden usar directamente en consultas
🎛️ Parámetros	Solo de entrada (IN)	Soportan IN, OUT e INOUT
✍️ Modificación de datos (INSERT, UPDATE, DELETE)	❌ Limitadas (no están pensadas para modificar datos)	✅ Sí, permiten modificar datos directamente
🧩 Modularidad	Alta (reutilizables dentro de queries)	Alta (reutilizables para procesos completos)
⚡ Rendimiento	Ejecutan cálculos rápidos dentro de queries	Ejecutan procesos más complejos y pesados
🔒 Seguridad	Se enfocan en cálculos y retornos	Encapsulan lógica de negocio y mejoran seguridad
🔁 Transacciones	❌ No pueden manejar transacciones	✅ Sí, soportan transacciones (COMMIT, ROLLBACK)
```

--- 

👉 En resumen:

- Funciones → se usan para cálculos y lógica ligera dentro de consultas.
- Stored Procedures → se usan para procesos completos, manipulación de datos y lógica compleja.