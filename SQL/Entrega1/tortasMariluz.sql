CREATE DATABASE IF NOT EXISTS tortas_mariluz 

USE tortas_mariluz

CREATE TABLE IF NOT EXISTS productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(30),
    descripcion TEXT,
    precio_unitario DECIMAL,
    tipo_producto VARCHAR(30),  -- "Torta", "cupcake", "tarta", etc
    disponible BOOLEAN
);

CREATE TABLE IF NOT EXISTS clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30), 
    apellido VARCHAR(30),
    dni INT, 
    telefono INT
);

CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    fecha_pedido DATE,
    fecha_entrega DATE,
    estado BOOLEAN,     -- si esta listo para la entrega
    total DECIMAL,
    FOREIGN key (id_cliente) REFERENCES clientes(id_cliente)
);

/* Tabla intermedia entre pedidos y productos */
CREATE TABLE IF NOT EXISTS detalles_pedido (
    id_pedido INT, 
    id_producto INT,
    cantidad INT, 
    precio_unitario DECIMAL,
    comentario VARCHAR(100),    -- si desea algun extra en el producto (decoracion)
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE IF NOT EXISTS pagos (
    id_pago INT AUTO_INCREMENT PRIMARY key, 
    id_pedido INT, 
    fecha_pago DATE,
    monto_pagado DECIMAL,
    metodo_pagado VARCHAR(30),
    FOREIGN key (id_pedido) REFERENCES pedidos(id_pedido)
);

CREATE TABLE IF NOT EXISTS ingredientes (
    id_ingrediente INT AUTO_INCREMENT PRIMARY key,
    nombre VARCHAR(30), 
    unidad_medida VARCHAR(30), 
    stock_actual DECIMAL
);

/* Tabla intermedia entre productos y ingredientes */
CREATE TABLE IF NOT EXISTS recetas (
    id_producto INT, 
    id_ingrediente INT, 
    cantidad_usada DECIMAL,
    unidad_medida VARCHAR(30),
    comentario VARCHAR(100),    -- Indicar como se dividen las cantidades en caso de usar el mismo ingrediente dos veces en la receta
    PRIMARY KEY (id_producto, id_ingrediente),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto), 
    FOREIGN KEY (id_ingrediente) REFERENCES ingredientes(id_ingrediente)
);

-- ALTER TABLE
ALTER TABLE pedidos 
MODIFY fecha_pedido DATE DEFAULT (CURRENT_DATE);

-- columnas boolean
ALTER TABLE pedidos MODIFY COLUMN estado VARCHAR(30) NOT NULL DEFAULT 'Pendiente';
ALTER TABLE productos MODIFY COLUMN disponible VARCHAR(30) NOT NULL DEFAULT 'Si';

ALTER TABLE pagos 
MODIFY fecha_pago DATE DEFAULT (CURRENT_DATE);

-- UPDATES
UPDATE pedidos SET estado = "En Preparacion" WHERE estado = 0;
UPDATE productos SET disponible = "Si" WHERE disponible = 0;
UPDATE productos SET disponible = "Si" WHERE disponible = 1;

-- INSERT ITNO
-- productos
INSERT INTO productos (nombre, descripcion, precio_unitario, tipo_producto, disponible) VALUES (
    "Torta Chocolate", 
    "Torta de chocolate con relleno de chocolate",
    29999,
    "Torta",
    true
);

INSERT INTO productos (nombre, descripcion, precio_unitario, tipo_producto, disponible) VALUES (
   "Torta Vainilla",
   "Torta de Vanilla sin decoracion",
   20000,
   "Torta",
   true
);

INSERT INTO productos (nombre, descripcion, precio_unitario, tipo_producto, disponible) VALUES (
    "Quesillo",
    "Quesillo sin decoracion",
    25000,
    "Tarta",
    false
);

INSERT INTO productos (nombre, descripcion, precio_unitario, tipo_producto, disponible) VALUES (
    "Cupcake_Vainilla",
    "Cupacke con decoracion a eleccion",
    35000,
    "Cupacke",
    true
);

-- clientes
INSERT INTO clientes (nombre, apellido, dni, telefono) VALUES (
    "Cesar",
    "Valderrama",
    11111,
    299
);

INSERT INTO clientes (nombre, apellido, dni, telefono) VALUES (
    "Jesus",
    "Valderrama",
    22222,
    299
);

INSERT INTO clientes (nombre, apellido, dni, telefono) VALUES (
    "Maria",
    "Valderrama",
    33333,
    299
);

INSERT INTO clientes (nombre, apellido, dni, telefono) VALUES (
    "Andres",
    "Valderrama",
    44444,
    299
);

-- pedidos 
INSERT INTO pedidos(id_cliente, fecha_entrega, estado, total) VALUES (
    1, 
    '2025-08-15',
    false,
    59999   -- 'Torta Chocolate', 'quesillo', $5000 extras (oreos)
);

INSERT INTO pedidos(id_cliente, fecha_entrega, estado, total) VALUES (
    2, 
    '2025-08-16',
    false,
    29999  -- 'Torta Chcolate' 
);

INSERT INTO pedidos(id_cliente, fecha_entrega, estado, total) VALUES (
    3, 
    '2025-08-17',
    false,
    25000  -- 'Quesillo'
);

-- detalles_pedido
INSERT INTO detalles_pedido(id_pedido, id_producto, cantidad, precio_unitario, comentario) VALUES (
    1, 
    1, 
    1, 
    29999,
    "Oreos de decoracion"
);

INSERT INTO detalles_pedido(id_pedido, id_producto, cantidad, precio_unitario, comentario) VALUES (
    1, 
    3, 
    1, 
    25000,
    "Sin Decoracion extra"
);

INSERT INTO detalles_pedido(id_pedido, id_producto, cantidad, precio_unitario, comentario) VALUES (
    2, 
    1, 
    1, 
    29999,
    "Sin Decoracion extra"
);

INSERT INTO detalles_pedido(id_pedido, id_producto, cantidad, precio_unitario, comentario) VALUES (
    3, 
    3, 
    1, 
    25000,
    "Sin Decoracion extra"
);

-- pagos 
INSERT INTO pagos(id_pedido, monto_pagado, metodo_pagado) VALUES (
    1, 
    59999,
    "Mercado Pago"
);

INSERT INTO pagos(id_pedido, monto_pagado, metodo_pagado) VALUES (
    2,
    29999,
    "Mercado Pago"
);

INSERT INTO pagos(id_pedido, monto_pagado, metodo_pagado) VALUES (
    3, 
    25000,
    "Efectivo"
);

-- ingredientes
INSERT INTO ingredientes(nombre, unidad_medida, stock_actual) VALUES (
    "harina leudante",
    "gramos",
    10000   -- expresada en gramos
);

INSERT INTO ingredientes(nombre, unidad_medida, stock_actual) VALUES (
    "Azucar",
    "gramos",
    10000   -- expresada en gramos
);

INSERT INTO ingredientes(nombre, unidad_medida, stock_actual) VALUES (
    "huevos",
    "unidad",
    100
);

INSERT INTO ingredientes(nombre, unidad_medida, stock_actual) VALUES (
    "leche",
    "mililitros",
    8000   -- expresada en mililitros
);

INSERT INTO ingredientes(nombre, unidad_medida, stock_actual) VALUES (
    "polvo de hornear",
    "gramos",
    1000   -- expresada en gramos
);

INSERT INTO ingredientes(nombre, unidad_medida, stock_actual) VALUES (
    "cacao",
    "gramos",
    50000   -- expresada en gramos
);

INSERT INTO ingredientes(nombre, unidad_medida, stock_actual) VALUES (
    "oreos",
    "unidad",
    20  -- cada unidad es un paquete de 8 unidades
);

INSERT INTO ingredientes(nombre, unidad_medida, stock_actual) VALUES (
    "mantequilla",
    "gramos",
    70000   -- expresada en gramos
);

-- recetas
INSERT INTO recetas(id_producto, id_ingrediente, cantidad_usada, unidad_medida) VALUES (
    1,
    1,
    400, 
    "gramos"
);

INSERT INTO recetas(id_producto, id_ingrediente, cantidad_usada, unidad_medida) VALUES (
    1,
    2,
    350,
    "gramos"
);

INSERT INTO recetas(id_producto, id_ingrediente, cantidad_usada, unidad_medida) VALUES (
    1,
    3,
    7,
    "unidad"
);

INSERT INTO recetas(id_producto, id_ingrediente, cantidad_usada, unidad_medida) VALUES (
    1,
    5,
    20,
    "gramos"
);

INSERT INTO recetas(id_producto, id_ingrediente, cantidad_usada, unidad_medida, comentario) VALUES (
    1,
    6,
    70,
    "gramos",
    "Usar 50 en una mezcla y 20 en otra para una capa mas oscura"
);

-- Vistas
-- Creacion de vista 
CREATE VIEW view_productos AS SELECT id_producto, nombre, tipo_producto, disponible FROM tortas_mariluz.productos;
CREATE VIEW view_clientes AS SELECT nombre, apellido, telefono FROM tortas_mariluz.clientes;
CREATE VIEW view_pedidos AS SELECT id_pedido, id_cliente, total FROM tortas_mariluz.pedidos ;
CREATE VIEW view_ingredientes AS SELECT nombre, stock_actual FROM tortas_mariluz.ingredientes ;

-- Usar la vista 
/* id_producto, nombre, tipo_producto y disponible */
SELECT * FROM view_productos ;

/* nombre apellido y tel del cliente */
SELECT * FROM view_clientes;

/* id_pedido, id_cliente y el total */
SELECT * FROM view_pedidos;

/* nombre y stock del ingrediente */
SELECT * FROM view_ingredientes;
