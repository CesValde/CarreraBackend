# 📚 Sublenguaje TCL y Estrategias de Backup

## 🟢 Introducción al sublenguaje TCL

El **Transaction Control Language (TCL)** es un sublenguaje de SQL que se utiliza para gestionar **transacciones** dentro de una base de datos. Es crucial para garantizar la **integridad de los datos**, ya que permite agrupar operaciones DML (INSERT, UPDATE, DELETE) en transacciones lógicas y controlarlas de manera eficiente.

---

## 🟢 Fundamentos del TCL

* Una **transacción** es un conjunto de operaciones que se ejecutan como una sola unidad lógica de trabajo.
* Si alguna falla, **todas las operaciones se deshacen** para mantener la consistencia.
* TCL permite:

  * Confirmar cambios → `COMMIT`
  * Deshacer cambios → `ROLLBACK`
  * Crear puntos de restauración → `SAVEPOINT`

> **Nota:** En MySQL el modo por defecto es **autocommit**, lo que significa que cada operación DML se confirma automáticamente.

Para desactivar este comportamiento:

```sql
SET AUTOCOMMIT = 0;
```

---

## 🟢 Comandos Principales de TCL

### 🔵 COMMIT

Confirma los cambios realizados en una transacción.

* Hace los cambios **permanentes**.
* Los datos quedan disponibles para otros usuarios.

**Ejemplo:**

```sql
START TRANSACTION;
UPDATE empleados SET salario = salario * 1.10 WHERE departamento = 'Ventas';
COMMIT;
```

---

### 🔵 ROLLBACK

Revierte los cambios realizados desde el inicio de la transacción (o desde un SAVEPOINT).

* Funciona como un **UNDO**.
* Solo puede ejecutarse si no se ha hecho `COMMIT`.

**Ejemplo:**

```sql
START TRANSACTION;
UPDATE inventario SET precio = precio * 0.80 WHERE categoria = 'Electrónica';
-- Error detectado
ROLLBACK;
```

---

### 🔵 SAVEPOINT

Crea puntos intermedios dentro de una transacción para deshacer **solo una parte** de los cambios.

**Ejemplo:**

```sql
START TRANSACTION;
SAVEPOINT inicio_actualizacion;
UPDATE productos SET stock = stock - 10 WHERE id_producto = 123;
SAVEPOINT despues_de_producto_123;
UPDATE productos SET stock = stock - 5 WHERE id_producto = 456;
ROLLBACK TO despues_de_producto_123;
COMMIT;
```

---

## 🟢 Proceso de Transacción

1. **Inicio:** `START TRANSACTION`
2. **Ejecución:** se realizan operaciones DML (INSERT, UPDATE, DELETE).
3. **Bloqueos:** se aplican bloqueos a los registros afectados.
4. **Confirmación o Deshacer:**

   * `COMMIT` → hace los cambios permanentes.
   * `ROLLBACK` → revierte los cambios.

---

## 🟢 Backup y Restauración de Bases de Datos

### 🔵 Definición

* **Backup:** copia de los datos y estructura de la BD para prevenir pérdidas.
* **Restauración:** proceso de recuperar datos a partir de un backup.

### 🔵 Importancia

* Protección ante pérdida de datos.
* Recuperación rápida en caso de fallos.
* Mantiene integridad y consistencia.

### 🔵 RPO y RTO

* **RPO (Recovery Point Objective):** cuántos datos se pueden perder (frecuencia de backups).
* **RTO (Recovery Time Objective):** tiempo máximo aceptable de inactividad.

---

## 🟢 Tipos de Backup

* **Completo:** toda la BD (datos + estructura).
* **Incremental:** solo cambios desde el último backup.
* **Diferencial:** cambios desde el último backup completo.

### Herramientas

* **mysqldump** (línea de comandos)
* **MySQL Workbench** (interfaz gráfica → Data Export / Data Import)

### Opciones en MySQL Workbench

* **Dump Data and Structure:** datos + estructura.
* **Dump Data Only:** solo datos.
* **Dump Structure Only:** solo estructura.

---

## 🟢 Proceso de Backup en MySQL Workbench

1. **Abrir MySQL Workbench** y conectarse a la BD.
2. Ir a **Administration → Data Export**.
3. Seleccionar esquemas y tablas.
4. Elegir tipo de backup (data, estructura o ambos).
5. Seleccionar exportación:

   * **Dump Project Folder:** un archivo por tabla.
   * **Self-Contained File:** único archivo `.sql`.
6. **Iniciar Exportación** y verificar archivos generados.

---

## 🟢 Proceso de Restauración en MySQL Workbench

1. **Abrir MySQL Workbench** y conectarse a la BD destino.
2. Ir a **Administration → Data Import/Restore**.
3. Seleccionar archivo/carpeta de backup.
4. Configurar esquema destino y opciones (crear estructura, solo datos, etc.).
5. **Iniciar Importación** y verificar datos restaurados.

---

## 🟢 Consideraciones Finales

* **Frecuencia de backups:** depende de la criticidad de los datos.
* **Diversificación:** almacenar copias en diferentes ubicaciones.
* **Pruebas periódicas:** validar que la restauración funciona correctamente.

> ✅ **Conclusión:** El sublenguaje TCL junto con un plan de backup/restauración sólido aseguran **consistencia, disponibilidad y seguridad** de la información en bases de datos.
