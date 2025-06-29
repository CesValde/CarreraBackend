/* Funciones */

import { carrito } from '../src/miSteam.js';
import { user }  from '../src/miSteam.js';

/**
 * Agrega el juego llegado por paramtetro al carrito y actualiza el carrito de compra.
 */
export function agregarJuegosCarrito(juego) {
    const juegoEnCarrito = carrito.find(item => item.titulo === juego.titulo);

    if(juegoEnCarrito) {
        console.log(juegoEnCarrito)
        // Si ya existe, aumentamos la cantidad
        juegoEnCarrito.cantidad = (juegoEnCarrito.cantidad || 1) + 1;
    } else {
        // Si no existe, agregamos el juego con cantidad 1
        // spread operator
        carrito.push({ ...juego, cantidad: 1 });
    }
    actualizarCarrito(carrito)
}

/**
 * Actualiza el carrito de compras llegado por parametro, lo guardamos en el localStorage y creamos las cards para el carrito
 */
export function actualizarCarrito(carrito) {
    localStorage.setItem(`carrito_steam_${user}`, JSON.stringify(carrito))
    crearCardCarrito(carrito)
}

/**
 * Crea las respectivas cards de los juegos que estan incluidos en el carrito de compras 
 */
export function crearCardCarrito(carrito) {
    const listaJuegos = document.getElementById('carrito-juegos');
    const totalCarrito = document.getElementById('total-carrito')
    let total = 0
    listaJuegos.innerHTML = "";

    carrito.forEach(juego => {
        const cantidad = juego.cantidad || 1;
        total += juego.precio * cantidad;

        listaJuegos.innerHTML += `
            <div class="card-carrito"> 
                <img src="../img/${juego.imagen}" alt="${juego.titulo}" />
                <h3>${juego.titulo}</h3>
                <p>Precio: $${juego.precio}</p>
                <p>Cantidad: ${juego.cantidad || 1}</p>
            </div>
        `;

        if(carrito.length > 0) {
             totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
        } else {
            totalCarrito.textContent = 'Tu carrito esta vacio'
        }
    });
}

/**
 * Remueve la clave del usuario logeado y redirige al login
 */
export function cerrarSesion() {
    localStorage.removeItem("usuarioLogueado");
    window.location.href = "login.html";
}

/**
 * Verifica si el user es valido para iniciar sesion importante!!-> utiliza logica de login.js
 */
export function inicioSesion(user) {
    if(!user) {
        alert("Debes iniciar sesión primero");
        window.location.href = "login.html";
    } else {
        console.log("Sesión iniciada como:", user);
    }
}

/**
 *  Despliega los juegos del JSON en un div propio con sus propiedades
 */
export function juegosDisponibles(juegos) {
    const listaJuegos = document.querySelector('.contenedor-juegos');
    listaJuegos.innerHTML = "";

    juegos.forEach((juego, index) => {
        listaJuegos.innerHTML += `
            <div class="juego-card"> 
                <img src="../img/${juego.imagen}" alt="${juego.titulo}" />
                <h3>${juego.titulo}</h3>
                <p>Precio: $${juego.precio}</p>
                <button class="btn-comprar-juego" data-index="${index}">Comprar</button>
            </div>
        `;
    });

    // Guardamos referencia para que el evento pueda usarla
    const juegosRef = juegos;
    document.querySelectorAll(".btn-comprar-juego").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            const juego = juegosRef[index];
            agregarJuegosCarrito(juego);
        });
    });
}