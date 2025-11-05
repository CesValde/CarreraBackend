import { Router } from "express"; // export comun sin default
import { uploader } from "../utils.js";

const route = Router();

const userBBDD = [];

// uploader.single('avatar')
 
route.post('/', uploader.single('avatar'), (req, res) => {
    // req.avatar
    // necesito guardar la imagen
    res.json({message: "endpoint de users - metodo post "})
})

export default route;