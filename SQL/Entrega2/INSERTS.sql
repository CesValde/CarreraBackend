-- INSERT INTO
-- productos
INSERT INTO productos (nombre, descripcion, precio_unitario, tipo_producto, disponible) VALUES (
    "Torta Chocolate", 
    "Torta de chocolate con relleno de chocolate",
    29999,
    "Torta",
    "Disponible"
);

INSERT INTO productos (nombre, descripcion, precio_unitario, tipo_producto, disponible) VALUES (
   "Torta Vainilla",
   "Torta de Vanilla sin decoracion",
   20000,
   "Torta",
   "Disponible"
);

INSERT INTO productos (nombre, descripcion, precio_unitario, tipo_producto, disponible) VALUES (
    "Quesillo",
    "Quesillo sin decoracion",
    25000,
    "Tarta",
    "Disponible"
);

INSERT INTO productos (nombre, descripcion, precio_unitario, tipo_producto, disponible) VALUES (
    "Cupcake_Vainilla",
    "Cupacke con decoracion a eleccion",
    35000,
    "Cupacke",
    "Disponible"
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
INSERT INTO pedidos(id_cliente, fecha_entrega, total, estado_pago, estado_entrega) VALUES (
    1, 
    '2025-08-15',
    59999   -- 'Torta Chocolate', 'quesillo', $5000 extras (oreos)
    "Pagado"
    "Pendiente"
);

INSERT INTO pedidos(id_cliente, fecha_entrega, total, estado_pago, estado_entrega) VALUES (
    2, 
    '2025-08-16',
    29999  -- 'Torta Chcolate' 
    "Pagado"
    "Pendiente"
);

INSERT INTO pedidos(id_cliente, fecha_entrega, total, estado_pago, estado_entrega) VALUES (
    3, 
    '2025-08-17',
    25000  -- 'Quesillo'
    "Pagado"
    "Pendiente"
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
    "Sin Comentarios"
);

INSERT INTO detalles_pedido(id_pedido, id_producto, cantidad, precio_unitario, comentario) VALUES (
    2, 
    1, 
    1, 
    29999,
    "Sin Comentarios"
);

INSERT INTO detalles_pedido(id_pedido, id_producto, cantidad, precio_unitario, comentario) VALUES (
    3, 
    3, 
    1, 
    25000,
    "Sin Comentarios"
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