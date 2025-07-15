// Inicializamos EmailJS
(function(){
    emailjs.init("lpsNX3LHnHOZqgrXf"); // ← poné tu clave pública
})();

const emailsGuardados = []
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturás el email del formulario
    const email = this.querySelector('input[name="email"]').value;

    // Guardás el email en un array (que deberías definir antes)
    emailsGuardados.push(email);
    console.log("Emails guardados:", emailsGuardados);

    // Luego envías el formulario con EmailJS
    emailjs.sendForm('service_vemqoug', 'template_uzuf47f', this)
    .then(() => {
        alert('Mensaje enviado correctamente ✅');
        form.reset();
    }, (error) => {
        alert('Error al enviar el mensaje ❌');
        console.error(error);
    });
});

// recibe emails la persona del formulario
/* form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_vemqoug', 'template_uzuf47f', this)
    .then(() => {
        alert('Mensaje enviado correctamente ✅');
        form.reset();
    }, (error) => {
        alert('Error al enviar el mensaje ❌');
        console.error(error);
    });
}); */

// recibo emails a mi mismo 
/* const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_vemqoug', 'template_76i4y2m', this)
    .then(() => {
        alert('Mensaje enviado correctamente ✅');
        form.reset();
    }, (error) => {
        alert('Error al enviar el mensaje ❌');
        console.error(error);
    });
}); */