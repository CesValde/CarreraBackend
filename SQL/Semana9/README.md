# 📌 Introducción a Triggers y DCL en SQL

## 🔹 Concepto General de un Trigger

Un **Trigger** en SQL es un conjunto de sentencias o programa almacenado que se ejecuta **automáticamente** cuando ocurre un evento DML (**INSERT, UPDATE, DELETE**) en una tabla asociada.

* Actúa como un “disparador” que responde a cambios en los datos.
* Se usa para auditoría, validaciones de integridad y automatización de tareas.

---

## 🎯 Usos Específicos de los Triggers

* **Tablas de Auditoría (Logs):** Registran quién, cuándo y qué modificó.
* **Mantenimiento de Integridad:** Validan reglas de negocio antes de insertar/actualizar.
* **Automatización:** Actualizan estadísticas, replican datos o notifican eventos.

> Los triggers **no son automáticos por defecto**: deben ser definidos explícitamente.

---

## 🛠 Tipos de Triggers

* **BEFORE Trigger:** Se ejecuta **antes** de la operación DML. Útil para validaciones o modificación de datos.
* **AFTER Trigger:** Se ejecuta **después** de la operación DML. Ideal para tareas de post-procesamiento.

### 📌 Sintaxis General

```sql
CREATE TRIGGER nombre_del_trigger
{BEFORE | AFTER} {INSERT | UPDATE | DELETE} ON nombre_tabla
FOR EACH ROW
BEGIN
    -- Sentencias a ejecutar
END;
```

✅ `FOR EACH ROW`: ejecuta el trigger por cada fila afectada.
✅ `NEW`: valores nuevos. `OLD`: valores previos.

---

## 📑 Ejemplos

### Ejemplo AFTER Trigger

```sql
CREATE TRIGGER ejemplo_trigger
AFTER INSERT ON ventas
FOR EACH ROW
BEGIN
    INSERT INTO auditoria_ventas (id_venta, fecha, usuario)
    VALUES (NEW.id_venta, NEW.fecha, USER());
END;
```

### Ejemplo BEFORE Trigger

```sql
CREATE TRIGGER validar_stock
BEFORE INSERT ON ventas
FOR EACH ROW
BEGIN
    IF NEW.cantidad <= 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La cantidad debe ser mayor a 0';
    END IF;
END;
```

---

## 🔑 Uso de NEW y OLD

| Pseudovariable | Disponible en  | Descripción                 |
| -------------- | -------------- | --------------------------- |
| **NEW**        | INSERT, UPDATE | Valores nuevos de la fila   |
| **OLD**        | UPDATE, DELETE | Valores antiguos de la fila |

### Ejemplo con OLD y NEW

```sql
CREATE TRIGGER tr_update_empleados
BEFORE UPDATE ON empleados
FOR EACH ROW
BEGIN
    IF OLD.salario < NEW.salario THEN
        INSERT INTO auditoria_salarios (empleado_id, salario_antiguo, salario_nuevo)
        VALUES (OLD.id, OLD.salario, NEW.salario);
    END IF;
END;
```

---

## ⏳ Iteración con FOR EACH ROW

Asegura que el trigger se ejecute una vez **por cada fila** afectada, incluso en operaciones masivas.

* Permite auditoría detallada.
* Permite validar fila por fila.

---

## 🧰 Funciones del Sistema Usadas en Triggers

* **Fecha y Hora:** `NOW()`, `CURRENT_DATE()`, `CURTIME()`
* **Usuario:** `USER()`, `SESSION_USER()`
* **Plataforma:** `DATABASE()`, `VERSION()`

Estas funciones permiten registrar detalles contextuales en tablas de auditoría.

---

# 🔐 Lenguaje de Control de Datos (DCL)

Permite **crear, modificar y eliminar usuarios**, así como **otorgar o revocar permisos** para mantener la seguridad de la base de datos.

## 👤 Gestión de Usuarios

```sql
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'contraseña';
ALTER USER 'usuario'@'localhost' IDENTIFIED BY 'nueva_contraseña';
RENAME USER 'usuario'@'localhost' TO 'nuevo_usuario'@'localhost';
DROP USER 'usuario'@'localhost';
```

* **CREATE USER:** crea un nuevo usuario.
* **ALTER USER:** modifica contraseña u otras propiedades.
* **RENAME USER:** cambia el nombre manteniendo permisos.
* **DROP USER:** elimina usuario y permisos asociados.

🔑 **Seguridad:** establecer contraseñas fuertes, revisar permisos antes de eliminar o renombrar.

---

## 🎟 Gestión de Permisos (GRANT y REVOKE)

### Otorgar Permisos

```sql
GRANT SELECT, INSERT, UPDATE ON base_datos.tabla TO 'usuario'@'localhost';
```

* `SELECT`: lectura de datos.
* `INSERT`: inserción de registros.
* `UPDATE`: modificación de datos.
* `DELETE`: eliminación de datos.

### Otorgar Todos los Permisos

```sql
GRANT ALL ON *.* TO 'usuario'@'host';
```

### Permisos a Nivel de Columnas

```sql
GRANT UPDATE (precio, stock) ON comercio.productos TO 'editor'@'localhost';
```

### Revocar Permisos

```sql
REVOKE SELECT, INSERT ON base_datos.tabla FROM 'usuario'@'host';
```

### Revocar Todos los Permisos

```sql
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'usuario'@'host';
```

---

## 📌 Resumen Final

| Concepto                  | Clave                                                    |
| ------------------------- | -------------------------------------------------------- |
| **Trigger**               | Código que se ejecuta automáticamente ante un evento DML |
| **Tipos**                 | BEFORE (antes), AFTER (después)                          |
| **FOR EACH ROW**          | Ejecuta el trigger para cada fila afectada               |
| **NEW / OLD**             | Acceden a valores nuevos y antiguos                      |
| **Funciones del sistema** | Registran fecha, usuario, base de datos                  |
| **DCL**                   | Crea, renombra, elimina usuarios y gestiona permisos     |
| **GRANT / REVOKE**        | Otorgan y revocan permisos, incluso a nivel de columnas  |

✅ **Consejo:** siempre revisar triggers y permisos para evitar interrupciones y garantizar integridad de datos.