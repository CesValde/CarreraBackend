import { Router } from "express"; // export comun sin default
const route = Router();
 
route.get('/notas', (req, res) => {
    res.render('perfil', {
        name: "Pedro sanchez",
        rol: "guest",
        isAdmin: true,
        notas: [{curso: "javascript", nota:10},{curso: 'html', nota:9}, {curso:'css', nota:6}, {curso:'react', nota: 3}]
    }) 
    // primer parametro -> define la vista index.handlebars
    // segundo parametro -> data que va a recibir la vista
})

route.get('/socket', (req, res) => {
    res.render('chat',{})
})

export default route;