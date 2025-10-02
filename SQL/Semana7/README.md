# 📥 Importación y Gestión de Datos  

## 📌 Importación de Datos en MySQL Workbench  

Aprender a **importar datos** es una habilidad fundamental al trabajar con bases de datos.  
MySQL Workbench proporciona herramientas poderosas para importar datos desde diversos formatos como **CSV** y **JSON**.  

---

## 🛠️ Usando el Asistente de Importación en MySQL Workbench  
El **asistente de importación** permite cargar datos fácilmente sin necesidad de comandos SQL complejos.  

---

## 📂 Importación de Archivos CSV  

### ✅ Preparación del Archivo CSV  
- Asegúrate de que el archivo esté bien estructurado.  
- Los datos deben estar separados por **comas** y con un encabezado que coincida con las columnas de destino.  
- Verifica la **compatibilidad de tipos de datos** entre el CSV y la tabla.  

### 🚀 Proceso de Importación  
1. Abre **MySQL Workbench** y selecciona la base de datos y la tabla de destino.  
2. Haz clic en **"Import/Export"** en la barra de herramientas.  
3. Selecciona **"Importar" → "CSV"**.  
4. Usa **"Browse"** para localizar el archivo CSV.  
5. Configura el **delimitador de campo** (coma).  
6. Revisa la **vista previa** de los datos.  
7. Haz clic en **"Next" → "Finish"**.  

---

## 📂 Importación de Archivos JSON  

### ✅ Preparación del Archivo JSON  
- Asegúrate de que el JSON esté **bien formateado**.  
- Cada objeto debe tener claves que correspondan a los nombres de las columnas de la tabla.  

### 🚀 Proceso de Importación  
1. Abre la base de datos y tabla de destino en **MySQL Workbench**.  
2. Haz clic en **"Import/Export"**.  
3. Selecciona **"Importar" → "JSON"**.  
4. Usa **"Browse"** para seleccionar el archivo JSON.  
5. Verifica la **vista previa**.  
6. Haz clic en **"Next" → "Finish"**.  

---

## 💡 Consejos y Buenas Prácticas  

- 🔍 **Verificación de Datos**: Revisa siempre los datos después de importar.  
- 🗂️ **Consistencia de Tipos de Datos**: Evita errores asegurando compatibilidad.  
- ⚠️ **Manejo de Errores**: Usa la vista previa para corregir antes de importar.  
- 🤖 **Automatización**: Usa scripts si necesitas importaciones frecuentes.  

---

## 🖥️ Asistente de Importación en MySQL Workbench  

### ⭐ Características Principales  
- 📌 **Origen de Datos**: Permite seleccionar archivos locales o externos.  
- 📌 **Compatibilidad de Formatos**: CSV y JSON.  
- 📌 **Mapeo de Columnas**: Asegura que los datos coincidan con las columnas.  
- 📌 **Validación de Datos**: Vista previa para confirmar la alineación.  

### 🚀 Proceso Paso a Paso  
1. Navega a la tabla de destino y abre **"Import/Export"**.  
2. Selecciona el archivo (**CSV o JSON**).  
3. Configura opciones (delimitador, UTF-8).  
4. **Mapea columnas** si es necesario.  
5. Verifica con la **vista previa**.  
6. Finaliza con **"Next" → "Finish"**.  

### 🎯 Beneficios  
- 🖱️ **Facilidad de uso** con interfaz gráfica.  
- ⏳ **Ahorro de tiempo** en tareas repetitivas.  
- ✅ **Menos errores** gracias a vistas previas.  
- 🔄 **Compatibilidad** con formatos estándar.  

---

# 🔗 Integridad Referencial  

## 📌 ¿Por qué es importante?  
1. 🛡️ Prevención de datos huérfanos.  
2. 🔄 Mantenimiento de consistencia.  
3. 🧹 Simplificación del mantenimiento.  

---

## ⚙️ Implementación  

Se implementa con **claves externas (foreign keys)**.  
Una clave externa conecta una tabla con la clave primaria de otra.  

---

## 🔑 Tipos de Restricciones de Integridad Referencial  

### 1️⃣ Integridad Referencial Débil  
- Si existe un valor, debe corresponder con un registro de la tabla referenciada.  

📌 Ejemplo:  
- `Empleado.DepartamentoID` debe existir en `Departamentos.DepartamentoID`.  

---

### 2️⃣ Integridad Referencial Parcial  
- La clave externa **puede ser nula**.  

📌 Ejemplo:  
- `Proyecto.EmpleadoID` puede ser `NULL`, pero si tiene valor, debe existir en `Empleados`.  

---

### 3️⃣ Integridad Referencial Completa  
- Todos los valores deben ser válidos o nulos.  

📌 Ejemplo:  
- `Pedido.ClienteID` debe existir en `Clientes`.  

---

## ⚡ Acciones de Restricción  

- 🔄 **CASCADE** → Propaga cambios automáticamente.  
- ❌ **SET NULL** → Establece `NULL` si se elimina el padre.  
- ⛔ **NO ACTION / RESTRICT** → Impide eliminar/actualizar si hay dependencias.  

---

## 🎯 Beneficios de las Claves Externas  

- ✅ Consistencia asegurada.  
- 🛠️ Reducción de errores manuales.  
- ⚡ Optimización de consultas.  

---

## 📌 Importancia de las Restricciones  

1. 🔗 **Coherencia de datos**: evita registros huérfanos.  
2. 🧾 **Reducción de errores** en operaciones SQL.  
3. 🧹 **Simplificación del mantenimiento** con CASCADE o validaciones.  
4. 🔒 **Integridad y confiabilidad** de la base de datos.  
5. ⚡ **Optimización de consultas** gracias a relaciones claras.  
6. 🚫 **Prevención de anomalías en transacciones**.  
7. 📊 **Mejor entendimiento del modelo de datos**.  

---

## 🛠️ Implementación en SQL  

```sql
CREATE TABLE pedidos (
  pedido_id INT PRIMARY KEY,
  cliente_id INT,
  FOREIGN KEY (cliente_id)
    REFERENCES clientes(cliente_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
```

---

🔹 Ejemplo completo con `DELETE CASCADE` y `UPDATE CASCADE`

```sql
-- Tabla principal
CREATE TABLE PAIS (
    id INT PRIMARY KEY,
    nombre VARCHAR(50)
);

-- Tabla secundaria
CREATE TABLE PERSONAS (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    pais_id INT,
    FOREIGN KEY (pais_id) REFERENCES PAIS(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```

---

🔹 Insertamos datos de prueba

```sql
INSERT INTO PAIS (id, nombre) VALUES
(1, 'Argentina'),
(2, 'Brasil');

INSERT INTO PERSONAS (id, nombre, pais_id) VALUES
(1, 'Juan', 1),
(2, 'Ana', 1),
(3, 'Carlos', 2);
```

---

🔹 Caso `DELETE CASCADE`

Si eliminamos Argentina, automáticamente se borran todas las personas con `pais_id = 1`.

```sql
DELETE FROM PAIS WHERE id = 1;
```

👉 Se eliminan Juan y Ana de la tabla PERSONAS.

---

🔹 Caso UPDATE CASCADE

Si actualizamos el id de Brasil de 2 → 20, automáticamente se actualiza en la tabla PERSONAS.

```sql
UPDATE PAIS SET id = 20 WHERE id = 2;
```

👉 Ahora Carlos tendrá pais_id = 20 sin necesidad de hacer un update manual en PERSONAS.

---

✅ Ventajas de combinar ON DELETE CASCADE y ON UPDATE CASCADE

- Integridad automática: no quedan huérfanos ni referencias inválidas.

- Menos mantenimiento manual: no hace falta borrar/actualizar registros secundarios a mano.

- Coherencia en cascada: cambios en la tabla principal se reflejan en la secundaria al instante.

⚠️ Precaución: en bases de datos grandes, estas operaciones pueden afectar el rendimiento si las relaciones tienen muchos registros.