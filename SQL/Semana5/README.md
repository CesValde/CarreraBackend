# 👓 Manejo de Vistas en SQL  

## 📖 Introducción a las Vistas en SQL  

### 📝 Descripción General  

- 📌 **Definición de Vistas**  
Las vistas en SQL son estructuras virtuales que se generan a partir de la ejecución de consultas sobre una o más tablas de la base de datos. Funcionan como tablas virtuales, es decir, no almacenan datos físicamente como lo hacen las tablas convencionales.  
Una vista se compone de un conjunto de resultados que proviene de una consulta SQL y es presentada en forma de tabla virtual compuesta por filas y columnas.  
Además, las vistas pueden combinar datos de múltiples tablas y permitir la presentación de información agregada o filtrada.  

- ⚙️ **Cómo Funcionan las Vistas**  
Cuando se crea una vista, se define una consulta SQL que recupera datos de una o más tablas.  
La vista guarda esta consulta y cada vez que se accede a la vista, la consulta se ejecuta de nuevo.  
Esto permite que la vista siempre muestre la información más actualizada sin necesidad de almacenar físicamente los datos.  
Son herramientas poderosas para simplificar el acceso y presentar información bajo criterios de seguridad o lógica de negocio.  

---

## 🌟 Ventajas de Usar Vistas  

- 🔐 **Seguridad**: Limitan el acceso mostrando solo datos específicos a ciertos usuarios. Se pueden aplicar permisos de acceso a nivel de vista.  
- 🎯 **Simplicidad**: Ocultan la complejidad de las tablas y presentan datos de forma más sencilla.  
- ⚖️ **Consistencia y Mantenimiento**: Permiten abstraer cambios en las tablas sin afectar a las aplicaciones. Además, estandarizan el acceso a los datos.  
- ⚡ **Rendimiento**: No siempre mejoran el rendimiento directamente, pero permiten reutilizar consultas complejas. En el caso de **vistas materializadas**, sí mejoran la velocidad en lecturas frecuentes.  

---

## 🛠️ Creación de una Vista  

La sintaxis básica es:  

```sql
CREATE VIEW nombre_vista AS 
SELECT columna1, columna2, ... 
FROM tabla 
WHERE condición;
``` 

Ejemplo: Vista de clientes recientes con datos de contacto 👇

```sql
CREATE VIEW VistaClientesRecientes AS 
SELECT nombre_cliente, telefono, email 
FROM clientes 
JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente 
WHERE fecha_pedido >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH);
```

--- 

## ✏️ Modificación y Eliminación de Vistas

Modificar una vista implica recrearla:

```sql
DROP VIEW IF EXISTS VistaClientesRecientes; 
CREATE VIEW VistaClientesRecientes AS 
SELECT nombre_cliente, telefono, email 
FROM clientes 
JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente 
WHERE fecha_pedido >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH) 
AND estado = 'Activo';
```

Eliminar una vista:

```sql
DROP VIEW VistaClientesRecientes;
``` 

--- 

## 🧩 Tipos de Vistas

1. 📄 Vistas Simples
Definidas a partir de una sola tabla. Útiles para ocultar información sensible.

Ejemplo:
```sql
CREATE VIEW VistaClientesSimples AS 
SELECT nombre, direccion 
FROM clientes;
```

2. 📊 Vistas Complejas
Usan subconsultas, joins y agregaciones. Muy útiles para informes y reportes empresariales.

Ejemplo:
```sql
CREATE VIEW VistaResumenVentas AS 
SELECT producto_id, SUM(cantidad) AS TotalVendido 
FROM ventas 
GROUP BY producto_id;
```

3. 💾 Vistas Materializadas
Almacenan físicamente el resultado de la consulta. Mejoran rendimiento en grandes volúmenes de datos, pero requieren mantenimiento.

Ejemplo:
```sql
CREATE MATERIALIZED VIEW VistaCacheProductos AS 
SELECT * FROM productos 
WHERE stock < 10;
```

4. ✍️ Vistas Actualizables
Permiten insertar, actualizar o borrar datos, siempre que incluyan todas las columnas de la clave primaria.

Ejemplo:
```sql
CREATE VIEW VistaEditableClientes AS 
SELECT id, nombre, direccion 
FROM clientes;
```
--- 

## 🎯 Contextos de Uso

- 📄 Simples y complejas: ideales para seguridad y simplificación del acceso en sistemas de información gerencial.
- 💾 Materializadas: perfectas para data warehousing y reportes de gran escala.
- ✍️ Actualizables: útiles en aplicaciones que requieren manipulación controlada de datos.

---

## 🔐 Mejora de la Seguridad mediante Vistas

- 🔎 Filtrado de Datos: Permiten mostrar solo campos específicos y ocultar datos sensibles (ej. números bancarios).
- 🚧 Restricción de Acceso: Se pueden asignar permisos a nivel de vista en vez de tabla
- 🛡️ Minimización de Exposición: Ocultan la estructura interna y lógica de negocio, reduciendo riesgo de ataques.

## 🎭 Vistas como Capa de Abstracción

- 🧩 Simplificación de Consultas: Ocultan consultas complejas, presentando interfaces simples.
- 🔄 Uniformidad de Datos: Presentan datos de múltiples tablas de forma coherente, facilitando análisis y toma de decisiones.