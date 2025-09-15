CREATE DATABASE IF NOT EXISTS tortas_mariluz 

/* para desacrivar modo seguro */
SET SQL_SAFE_UPDATES = 0;

USE tortas_mariluz

CREATE TABLE IF NOT EXISTS productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(30) NOT NULL,
    descripcion VARCHAR(150) NULL DEFAULT "Sin Descripcion",
    precio_unitario DECIMAL NOT NULL,
    tipo_producto VARCHAR(30) NOT NULL,  -- "Torta", "cupcake", "tarta", etc
    disponible ENUM("Disponible", "No Disponible") NOT NULL
);

CREATE TABLE IF NOT EXISTS clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL, 
    apellido VARCHAR(30) NOT NULL,
    dni INT NOT NULL, 
    telefono INT NOT NULL
);

CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    fecha_pedido DATE,         -- tiene CURRENT_DATE
    fecha_entrega DATE NOT NULL,
    total DECIMAL NOT NULL,
    estado_pago ENUM('Pendiente', 'Pagado', 'Parcial') NOT NULL,
    estado_entrega ENUM('Pendiente', 'Entregado', 'Cancelado') NOT NULL,
    FOREIGN key (id_cliente) REFERENCES clientes(id_cliente)
);

/* Tabla intermedia entre pedidos y productos */
CREATE TABLE IF NOT EXISTS detalles_pedido (
    id_pedido INT NOT NULL, 
    id_producto INT NOT NULL,
    cantidad INT NOT NULL, 
    precio_unitario DECIMAL,
    comentario VARCHAR(100) NULL DEFAULT "Sin Comentario",    -- si desea algun extra en el producto (decoracion)
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE IF NOT EXISTS pagos (
    id_pago INT AUTO_INCREMENT PRIMARY key, 
    id_pedido INT NOT NULL, 
    fecha_pago DATE,        -- tiene CURRENT_DATE
    monto_pagado DECIMAL NOT NULL,
    metodo_pagado VARCHAR(30) NOT NULL,
    FOREIGN key (id_pedido) REFERENCES pedidos(id_pedido)
);

CREATE TABLE IF NOT EXISTS ingredientes (
    id_ingrediente INT AUTO_INCREMENT PRIMARY key,
    nombre VARCHAR(30) NOT NULL, 
    unidad_medida VARCHAR(30) NULL, 
    stock_actual DECIMAL NULL 
);

/* Tabla intermedia entre productos y ingredientes */
CREATE TABLE IF NOT EXISTS recetas (
    id_producto INT NOT NULL, 
    id_ingrediente INT NOT NULL, 
    cantidad_usada DECIMAL NOT NULL,
    unidad_medida VARCHAR(30) NULL,
    comentario VARCHAR(100) NULL DEFAULT "Sin Comentarios",    -- Indicar como se dividen las cantidades en caso de usar el mismo ingrediente dos veces en la receta
    PRIMARY KEY (id_producto, id_ingrediente),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto), 
    FOREIGN KEY (id_ingrediente) REFERENCES ingredientes(id_ingrediente)
);

-- ALTER TABLE
ALTER TABLE pedidos 
MODIFY fecha_pedido DATE DEFAULT (CURRENT_DATE);

ALTER TABLE pagos 
MODIFY fecha_pago DATE DEFAULT (CURRENT_DATE);

/* Agregamos columnas a la tabla pedidos */
ALTER TABLE 
pedidos ADD COLUMN estado_pago ENUM('Pendiente', 'Pagado', 'Parcial') NOT NULL DEFAULT "Pendiente", 
ADD COLUMN estado_entrega ENUM('Pendiente', 'Entregado', 'Cancelado') NOT NULL DEFAULT "Pendiente";

/* Actualizamos la columna disponible de la tabla productos */
UPDATE productos
SET disponible = CASE
    WHEN disponible = 1 THEN 'Disponible'
END;

/* Pedidos 1, 2 y 3, Pagados */
UPDATE pedidos SET estado_pago = 'Pagado' WHERE id_pedido IN (1, 2, 3);

-- UPDATES
UPDATE detalles_pedido SET comentario = "Sin Comentarios" WHERE comentario = "Sin Decoracion extra"
UPDATE recetas SET comentario = "Sin Comentarios" WHERE comentario is null;

-- Vistas
-- Creacion de vista 
CREATE VIEW view_productos AS SELECT id_producto, nombre, tipo_producto, disponible FROM tortas_mariluz.productos;
CREATE VIEW view_clientes AS SELECT nombre, apellido, telefono FROM tortas_mariluz.clientes;
CREATE VIEW view_pedidos AS SELECT id_pedido, id_cliente, total FROM tortas_mariluz.pedidos ;
CREATE VIEW view_ingredientes AS SELECT nombre, stock_actual FROM tortas_mariluz.ingredientes ;
CREATE VIEW view_detalles_pedido AS SELECT id_pedido, id_producto, cantidad, comentario FROM tortas_mariluz.detalles_pedido ;

-- Usar la vista 
/* id_producto, nombre, tipo_producto y disponible */
SELECT * FROM view_productos ;

/* nombre apellido y tel del cliente */
SELECT * FROM view_clientes;

/* id_pedido, id_cliente y el total */
SELECT * FROM view_pedidos;

/* nombre y stock del ingrediente */
SELECT * FROM view_ingredientes;

/* id_prodcuto, id_pedido, cantidad, y comentario */
SELECT * FROM view_detalles_pedido;

-- Stored Producers 
-- Creacion de Stored Producers 
DELIMITER $$

CREATE PROCEDURE registrar_pago (
    IN p_id_pedido INT,
    IN p_monto DECIMAL(10,2),
    IN p_metodo VARCHAR(30)
)
BEGIN
    DECLARE v_total DECIMAL(10,2);
    DECLARE v_pagado DECIMAL(10,2);

    -- Insertar el pago
    INSERT INTO pagos (id_pedido, fecha_pago, monto_pagado, metodo_pagado)
    VALUES (p_id_pedido, CURRENT_DATE, p_monto, p_metodo);

    -- Calcular cuánto lleva pagado
    SELECT IFNULL(SUM(monto_pagado),0) INTO v_pagado
    FROM pagos
    WHERE id_pedido = p_id_pedido;

    -- Traer total del pedido
    SELECT total INTO v_total
    FROM pedidos
    WHERE id_pedido = p_id_pedido;

    -- Actualizar estado
    IF v_pagado >= v_total THEN
        UPDATE pedidos SET estado_pago = 'Pagado'
        WHERE id_pedido = p_id_pedido;
    ELSEIF v_pagado > 0 THEN
        UPDATE pedidos SET estado_pago = 'Parcial'
        WHERE id_pedido = p_id_pedido;
    ELSE
        UPDATE pedidos SET estado_pago = 'Pendiente'
        WHERE id_pedido = p_id_pedido;
    END IF;
END$$

DELIMITER ;
-- Usar Stored Producers 
/* Agrego nuevo pedido para probar el SP */
INSERT INTO pedidos (id_cliente, fecha_entrega, total, estado_pago, estado_entrega) VALUES (1, '2025-09-06', 25000, "pendiente", "Pendiente");
CALL registrar_pago(4, 25000, 'Mercado Pago');

------------------
/* SP 2 */

DELIMITER $$

CREATE PROCEDURE actualizar_stock (
    IN p_id_pedido INT
)
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE v_id_producto INT;
    DECLARE v_cantidad_producto DECIMAL(10,2);
    DECLARE v_comentario VARCHAR(100);

    -- Cursor para recorrer los productos del pedido, usamos la tabla intermedia detalles_pedido
    DECLARE cur_productos CURSOR FOR
        SELECT id_producto, cantidad, comentario
        FROM detalles_pedido
        WHERE id_pedido = p_id_pedido;

    /* Cuando el cursor llega al final de las filas, MySQL genera un error NOT FOUND.
    Este handler evita que eso detenga el SP.
    En lugar de error, pone done = 1 para indicar que no quedan más productos por recorrer. */
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    -- Activa el cursor para empezar a recorrer las filas.
    OPEN cur_productos;

    /* FETCH cur_productos INTO ... → toma la siguiente fila del cursor y guarda los valores en las variables */
    -- leer_productos es el nombre del loop
    leer_productos: LOOP
        FETCH cur_productos INTO v_id_producto, v_cantidad_producto, v_comentario;
        IF done = 1 THEN
            LEAVE leer_productos;
        END IF;

        -- Resta todos los ingredientes del producto según receta
        UPDATE ingredientes i
        JOIN recetas r ON i.id_ingrediente = r.id_ingrediente
        SET i.stock_actual = i.stock_actual - (r.cantidad_usada * v_cantidad_producto)
        WHERE r.id_producto = v_id_producto;

        -- Si el comentario contiene "Oreos de decoracion", restar Oreos según receta
        IF v_comentario LIKE '%Oreos de decoracion%' THEN
            UPDATE ingredientes i
            JOIN recetas r ON i.id_ingrediente = r.id_ingrediente
            SET i.stock_actual = i.stock_actual - (r.cantidad_usada * v_cantidad_producto)
            WHERE r.id_producto = v_id_producto AND i.nombre = 'oreos';
        END IF;

        -- Si dice 'Sin Comentario', no hace nada
    END LOOP;

    CLOSE cur_productos;
END$$

DELIMITER ;

-- Usar Stored Producers 
/* Agrego el detalle pedido del nuevo pedido */
INSERT INTO detalles_pedido (id_pedido, id_producto, cantidad, precio_unitario, comentario) VALUES (4, 3, 1, 25000, "Oreos de decoracion"); 

/* Insertamos la receta del producto */
INSERT INTO recetas (id_producto, id_ingrediente, cantidad_usada, unidad_medida) VALUES (3, 7, 8, "unidad");
INSERT INTO recetas (id_producto, id_ingrediente, cantidad_usada, unidad_medida) VALUES (3, 2, 700, "gramos");
INSERT INTO recetas (id_producto, id_ingrediente, cantidad_usada, unidad_medida) VALUES (3, 3, 6, "unidad");
INSERT INTO recetas (id_producto, id_ingrediente, cantidad_usada, unidad_medida) VALUES (3, 4, 500, "mililitros");
CALL actualizar_stock(4);

-- Funciones
-- Creacion de Funciones
DELIMITER $$ 

CREATE FUNCTION stock_disponible_ingrediente(
    p_id_ingrediente INT
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE v_stock DECIMAL(10,2);

    -- Obtener stock del ingrediente
    SELECT stock_actual
    INTO v_stock
    FROM ingredientes
    WHERE id_ingrediente = p_id_ingrediente;

    RETURN v_stock;
END$$

DELIMITER ;

-- Usar Funciones
/* El as para que cuando muestre la query se muestre stock_oreo y no stock_disponible_ingrediente(7) */
SELECT stock_disponible_ingrediente(7) AS stock_oreo;


-- Creacion de Funciones
DELIMITER $$

CREATE FUNCTION calcular_total_pedido(
    p_id_pedido INT
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE v_total DECIMAL(10,2);

    -- Calcular total sumando cantidad * precio_unitario de cada producto del pedido
    SELECT SUM(cantidad * precio_unitario)
    INTO v_total
    FROM detalles_pedido
    WHERE id_pedido = p_id_pedido;

    RETURN v_total;
END$$

DELIMITER ;

-- Usar Funciones
SELECT calcular_total_pedido(3) AS total_pedido;

-- Triggers
-- Creacion de Triggers
DELIMITER $$

-- Cuando se inserta un detalle
CREATE TRIGGER trg_detalles_pedido_insert
AFTER INSERT ON detalles_pedido
FOR EACH ROW
BEGIN
    UPDATE pedidos
    SET total = total + (NEW.cantidad * NEW.precio_unitario)
    WHERE id_pedido = NEW.id_pedido;
END$$

-- Cuando se actualiza un detalle (ej: cambia cantidad o precio)
CREATE TRIGGER trg_detalles_pedido_update
AFTER UPDATE ON detalles_pedido
FOR EACH ROW
BEGIN
    UPDATE pedidos
    SET total = total - (OLD.cantidad * OLD.precio_unitario) + (NEW.cantidad * NEW.precio_unitario)
    WHERE id_pedido = NEW.id_pedido;
END$$

-- Cuando se elimina un detalle
CREATE TRIGGER trg_detalles_pedido_delete
AFTER DELETE ON detalles_pedido
FOR EACH ROW
BEGIN
    UPDATE pedidos
    SET total = total - (OLD.cantidad * OLD.precio_unitario)
    WHERE id_pedido = OLD.id_pedido;
END$$

DELIMITER ;