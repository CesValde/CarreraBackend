const form = document.getElementById("loginForm")
const inputs = form.querySelectorAll('input')
const button = form.querySelector('button')

verificarCampos()

/**
 * Verifica los inputs del login para ativar o desactivar el boton de login
 */
function verificarCampos() {
    const hayVacios = Array.from(inputs).some(input => input.value.trim() === '')

    if(hayVacios) {
        button.classList.add('desactivado')
        button.disabled = true
    } else {
        button.classList.remove('desactivado')
        button.disabled = false
    }
}

inputs.forEach(input => {
    input.addEventListener('input', verificarCampos);
});

/**
 * Tomo los valores ingresados en usuario y password para validar si son correctos
 */
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("user").value
    const password = document.getElementById("password").value

    validarLogin(user, password)
});

/**
 * Valida los datos ingresados por el usuario y compara con el JSON de usuarios validos
 */
async function validarLogin(userIngresado, passwordIngresada) {
    try {
        const url = '../json/usuarios.json'
        const response = await fetch(url);
        const data = await response.json();
        /* Usamos find para buscar un usuario de nuestro json */
        const userValido = data.usuarios.find(
            user => user.usuario === userIngresado && user.password === passwordIngresada
        )

        if(userValido) {
            localStorage.setItem('usuarioLogueado', userIngresado)
            window.location.href = 'main.html'
        } else {
            document.getElementById("error").textContent = "Usuario o contraseña incorrectos"
        }
    } catch(error) {
        console.error('Error al cargar el JSON:', error)
    }
}