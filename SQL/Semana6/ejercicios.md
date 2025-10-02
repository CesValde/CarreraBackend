# Ejercicios de DDL y Subconsultas

- DDL (Data Definition Language): CREATE, ALTER, DROP, etc.
- DML (Data Manipulation Language): INSERT, UPDATE, DELETE, SELECT
- Subconsultas
- Inserciones parciales
- Errores comunes al eliminar registros (por restricciones de integridad referencial)

## 🏗️ SECCIÓN 1: DDL - Crear estructuras (20 ejercicios)

1. Crear una tabla usuarios con id, nombre, email, fecha_nacimiento.
```sql
CREATE TABLE usuarios(
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    emaiL VARCHAR(50),
    fecha_nacimiento DATE
);
```

2. Crear una tabla productos con id, nombre, precio, stock.
```sql
CREATE TABLE productos(
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    precio DECIMAL,
    stock INT
);
```

3. Crear una tabla pedidos con id, id_usuario, fecha.
```sql
CREATE TABLE pedidos(
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT, 
    fecha DATE DEFAULT (CURRENT_DATE)
    /* FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) */
);
```

4. Crear una tabla detalle_pedidos con id, pedido_id, producto_id, cantidad, precio_unitario.
```sql
CREATE TABLE detalles_pedido(
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    cantidad INT, 
    precio_unitario DECIMAL
    /* FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto), */
);
```

5. Crear una tabla categorias y relacionarla con productos.
```sql
CREATE TABLE categorias(
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    id_producto INT,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
```

6. Agregar una columna telefono a usuarios.
```sql
ALTER TABLE usuario
ADD COLUMN telefono;
```

7. Modificar el tipo de dato de precio en productos a DECIMAL(10,2).
```sql
ALTER TABLE productos 
MODIFY precio DECIMAL(10,2);    /* ver si funciona */
```

8. Agregar una restricción UNIQUE sobre email en usuarios.
```sql

```

9. Crear una clave foránea en pedidos hacia usuarios.
```sql
ALTER TABLE 
ADD FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) /* ver si funciona */
```

10. Crear una clave foránea en detalle_pedidos hacia productos.
```sql
ADD FOREIGN KEY (id_producto) REFERENCES producto(id_producto);
```

11. Crear una clave foránea en detalle_pedidos hacia pedidos.
```sql
ADD FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido);
```

12. Crear una tabla comentarios con relación a usuarios y productos.
```sql
CREATE TABLE comentarios(
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    id_usuario INT,
    id_producto INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);
```

13. Crear una tabla intermedia usuarios_roles para una relación N:N entre usuarios y roles.
```sql
CREATE TABLE usuarios_roles(
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    id_rol INT AUTO_INCREMENT PRIMARY KEY,      /* no existe una tabla roles */
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)     /* Habria que crear tabla roles */
)
```

14. Eliminar la columna telefono de usuarios.
```sql
ALTER TABLE usuarios
DROP COLUMN telefono
```

15. Eliminar la tabla comentarios.
```sql
DROP TABLE comentarios
```

16. Crear una tabla direcciones con una restricción CHECK para que el país sea “AR” o “UY”.
```sql
CREATE TABLE direcciones(

)
```

17. Usar AUTO_INCREMENT en una tabla envios.
```sql

```

18. Crear una vista vista_usuarios_activos.
```sql
CREATE VIEW view_usuarios_activos AS SELECT id_usuario, nombre FROM basededatos.usuarios
```

19. Crear un índice en productos(nombre).
```sql

```

20. Crear una tabla logs con una columna timestamp por defecto.
```sql
CREATE TABLE logs(
    timestap DATE DEFAULT (CURRENT_DATE) /* revisar si hay current timestap */
)
```

--- 

## 📝 SECCIÓN 2: DML - Manipular datos (25 ejercicios)
21. Insertar 3 usuarios.
```sql
INSERT INTO usuarios(nombre, email, fecha_nacimiento) 
VALUES
("Cesar", "cesar@gmail", "08-03-2002"), 
("Jesus", "jesus@gmail", "22-11-68"), 
("Majo", "majo@gmial", "04-03-2006")
```

22. Insertar 5 productos con diferentes precios.
```sql
INSERT INTO productos(nombre, precio, stock) 
VALUES 
("harina pan", 6000, 50),
("arroz", 3000, 40),
("azucar", 4000, 70),
```

23. Insertar parcialmente un usuario (solo nombre y email).
```sql
INSERT INTO usuarios(nombre, email)
VALUES 
("Pablo", "pablo@gmail")
```

24. Insertar parcialmente un producto (nombre y stock).
```sql
INSERT INTO usuarios(nombre, stock)
VALUES 
("leche", "20")
```

25. Insertar un pedido con su detalle.
```sql
INSERT INTO pedidos(id_usuario) 
VALUES (1)

INSERT INTO detalles_pedido(id_usuario, id_producto, cantidad, precio_unitario) 
VALUES (1, 2, 5, 3000)
```

26. Actualizar el precio de todos los productos aumentando un 10%.
```sql
INSERT INTO 
```

27. Cambiar el email de un usuario específico.
```sql
UPDATE usuarios 
MODIFY 
```

28. Eliminar un producto por ID.
```sql
```

29. Eliminar un usuario que tiene pedidos (¡provoca error!).
```sql
```

30. Insertar un producto con NULL en precio (probar si está permitido).
```sql
INSERT INTO 
```

31. Insertar un detalle de pedido con cantidad 0 (con CHECK activado).
```sql
INSERT INTO 
```

32. Insertar varios usuarios con INSERT INTO ... VALUES (...), (...), (...);
```sql
INSERT INTO 
```
Insertar una dirección para un usuario existente.
```sql
INSERT INTO 
```
Actualizar todos los usuarios nacidos antes del 2000.
```sql
```
Incrementar el stock de un producto en 20 unidades.
```sql
```
Eliminar todos los pedidos anteriores a una fecha.
```sql
```
Insertar un comentario sobre un producto.
```sql
```
Insertar un log con la fecha actual por defecto.
```sql
```
Eliminar un producto que tiene detalles de pedido (¡provoca error!).
```sql
```
Insertar una fila con clave foránea que no existe (¡provoca error!).
```sql
INSERT INTO 
```
Insertar datos con funciones como NOW(), UUID().
```sql
INSERT INTO 
```
Copiar todos los productos caros a una tabla productos_premium.
```sql
```
Insertar un producto sin nombre (¡provoca error! si es NOT NULL).
```sql
INSERT INTO 
```
Insertar un usuario con un email duplicado (¡provoca error!).
```sql
INSERT INTO 
```
Actualizar el stock de un producto basado en una subconsulta de ventas.
```sql
```

---

## 🔎 SECCIÓN 3: SELECT y Subconsultas (25 ejercicios)

Listar todos los usuarios.
```sql
SELECT * FROM usuarios ; 
```

Listar productos cuyo precio es mayor al promedio.
<!-- SELECT AVG(precio) FROM productos → calcula el promedio de todos los precios. -->
```sql
SELECT *
FROM productos
WHERE precio > (SELECT AVG(precio) FROM productos);
```

Listar usuarios que han hecho pedidos.
```sql
```
Listar productos con menos de 10 en stock.
```sql
```
Obtener los 3 productos más caros.
```sql
```
Obtener el total de pedidos por usuario.
```sql
```
Obtener el total facturado por pedido.
```sql
```
Obtener la suma total facturada por usuario.
```sql
```
Listar los productos de un pedido usando JOIN.
```sql
```
Listar pedidos con sus usuarios y totales.
```sql
```
Usar subconsulta correlacionada para obtener el último pedido de cada usuario.
```sql
```
Listar usuarios que no han hecho pedidos.
```sql
```
Mostrar productos que nunca se han vendido.
```sql
```
Obtener la media de precio por categoría.
```sql
```
Listar los productos que están en más de 1 pedido.
```sql
```
Mostrar la fecha del primer pedido.
```sql
```
Mostrar la cantidad total de ventas por producto.
```sql
```
Mostrar el producto más vendido.
```sql
```
Mostrar los 5 usuarios con más compras.
```sql
```
Listar productos con stock mayor al promedio.
Listar todos los pedidos hechos en los últimos 30 días.
```sql
```
Obtener los pedidos con más de 3 productos.
```sql
```
Obtener usuarios que hayan comprado productos de la categoría "Electrónica".
```sql
```
Subconsulta para traer usuarios con más de 2 pedidos.
```sql
```
Subconsulta para traer productos que tienen precio igual al más caro.
```sql
```
## 🧩 SECCIÓN 4: Subconsultas en INSERT, UPDATE, DELETE (15 ejercicios)
Insertar en logs todos los usuarios con pedidos.
Actualizar stock de productos restando lo vendido (usando subconsulta).
Eliminar productos que nunca se han vendido (subconsulta NOT IN).
Insertar en productos_backup todos los productos caros (subconsulta).
Insertar en clientes_vip los usuarios con más de 5 pedidos.
Eliminar usuarios sin pedidos (subconsulta).
Actualizar a “descontinuado” los productos sin ventas recientes.
Insertar en usuarios_mayores todos los usuarios mayores de 30 años.
Insertar con SELECT productos con stock > 100.
Eliminar direcciones sin usuarios asociados.
Insertar en comentarios_backup los comentarios de productos eliminados.
Actualizar emails de prueba con dominio “@test.com”.
Eliminar pedidos sin detalles (usando NOT EXISTS).
Insertar en usuarios_sin_telefono aquellos con telefono IS NULL.
Insertar en envios todos los pedidos con fecha de hoy.
## 🧨 SECCIÓN 5: Errores comunes y manejo (15 ejercicios)

Eliminar un usuario con pedidos (viola FK).


Insertar un pedido con usuario_id inexistente (viola FK).
Insertar producto sin nombre (NOT NULL).
Insertar usuario con email duplicado (UNIQUE).
Eliminar producto con detalles en detalle_pedidos (viola FK).
Insertar detalle de pedido con cantidad negativa (viola CHECK).
Eliminar un pedido sin detalles (debería funcionar).
Insertar pedido con NULL en fecha (si no es NOT NULL, pasa).
Eliminar categoria que tiene productos asociados (viola FK).
Insertar dirección con país inválido (viola CHECK).
Eliminar usuario con comentarios (viola FK).
Eliminar producto que aparece en comentarios.
Eliminar todos los datos de una tabla sin DELETE CASCADE.
Crear tabla con tipo de dato inválido (VARCHAR(-5)).
Insertar fecha_nacimiento con formato incorrecto ("31-02-2024").