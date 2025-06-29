/* Simulacion de Steam */
import { actualizarCarrito, crearCardCarrito, cerrarSesion, inicioSesion, juegosDisponibles } from '../Js/functions.js';

export let user = localStorage.getItem("usuarioLogueado")



const carritoGuardado = localStorage.getItem(`carrito_steam_${user}`)
export let carrito = carritoGuardado ? JSON.parse(carritoGuardado) : []
crearCardCarrito(carrito)

export let juegosTienda = [];
    fetch('../json/juegos.json')
    .then(res => res.json())
    .then(data => {
        juegosTienda = data.juegos;
        juegosDisponibles(juegosTienda); 
    });

/* ----------------------------------------------------------------------------------------- */
// Manejo de DOM

const bienvenida = document.getElementById('bienvenida')
const botonCerrarSesion = document.getElementById('btn-cerrar-sesion')
const terminarCompra = document.getElementById('terminar-compra')
const totalCarrito = document.getElementById('total-carrito')

inicioSesion(user)
bienvenida.innerText = (`Bienvenido a Steam ${user}!`)
botonCerrarSesion.addEventListener('click', () => cerrarSesion())
terminarCompra.addEventListener('click', () => {
    carrito.splice(0, carrito.length)
    actualizarCarrito(carrito)
    totalCarrito.textContent = 'Tu carrito esta vacio'
})