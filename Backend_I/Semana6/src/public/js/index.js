/* console.log("esto deberia de verse en consola - pantalla socket") */

const socket = io();    // establece la conexion del cliente hacia el server 
const box = document.querySelector('#box')          // input
const app = document.querySelector('#app-chat')     // div con los <p> mensajes <p>
const teclaEnter = 'Enter'
const bienvenida = document.querySelector('h1')
const listaUsuarios = document.getElementById('lista-usuarios')

let user = '';

// oculto el div app, hasta que el usuario no valide
app.style.display = 'none'

// mensaje de bienvenida
Swal.fire({
    title: 'Quien sos?',
    input: 'text',
    text: 'Ingresa un nick para identificarte en la sala',
    allowOutsideClick: false,
    inputValidator: (value) => {
        return !value && 'necesitas un nick para poder chatear'
    } 
}).then(nick => {
    user = nick.value
    bienvenida.textContent = `Bienvenido ${user}! ${bienvenida.textContent}`
    socket.emit('registrar_usuario', user)
    app.style.display = 'block'
})

// 
box.addEventListener('keyup', (e) => {
    const { key, target } = e
    if(key === teclaEnter && target.value !== ''){
        // enviar al servidor el mensaje con el usuario
        
        socket.emit('mensaje',{ user, mensaje: target.value })
        box.value = '';
    }
})

// itera cada mensaje 
socket.on('lista_de_mensaje_actualizada', (data) => {
    // cree la card o la fila
    app.innerHTML = ''
    data.forEach(chat => {
        if(user == chat.user) { chat.user = 'Yo'} else { chat.user = chat.user }

        const p = document.createElement('p')
        p.innerText = `${chat.user}: ${chat.mensaje}` 
        app.appendChild(p)
    })
})

// Mostrar los usuarios conectados y desconectados
socket.on('estado_del_usuario', (usuarios) => {
    listaUsuarios.innerHTML = ''

    // itero cada objeto (usuarios)
    for(const id in usuarios) {
        const p = document.createElement('p')
        p.dataset.id = id
        p.innerText = `${usuarios[id]}`
        p.style.color = 'green'
        listaUsuarios.appendChild(p)
    }
})

// modificamos el color del usuario desconectado
socket.on('usuario_desconectado', (idDesconectado) => {
    const p = document.querySelector(`p[data-id="${idDesconectado}"]`)
    p.style.color = 'red'
})