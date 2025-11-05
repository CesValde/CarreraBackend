import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(process.cwd(), 'src','public','images'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname) // guardara el archivo dentro de images con el nombre original cargado -> fiestaEgresado-25-2321.png
    }
})

export const uploader = multer({ storage }) // { storage: storage}