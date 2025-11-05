import { Router } from "express"; // export comun sin default

const route = Router();

const petsBBDD = []

route.post('/',(req, res) => {
    res.json({message: "endpoint de pets - metodo post "})
})

// route.get('/:pid', (req, res) => {

// })

export default route;