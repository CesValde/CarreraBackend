import fs from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path
    }

    // para leer solo una vez al principio la bbdd
    getInstance() {
        // verifica si existe el archivo
        if(fs.existsSync(this.path)) {
            // convierto a objeto JS
            return JSON.parse(fs.readFileSync(this.path), 'utf-8')
        } else {
            const products = { data: [] }
            fs.writeFileSync(this.path, JSON.stringify(products))
            return products
        }
    }

    // lee el archivo de productos y devuelve todos los productos en formato de arreglo.
    getProducts() {
        return JSON.parse(fs.readFileSync(this.path, 'utf-8')).data
    }

    // retorna un producto en base a su id
    getProductById(id) {
        const products = this.getProducts()
        const product = products.find(p => p.id === id)
        
        if(!product) return { error: true, message: "Producto no encontrado" }

        return ({ error: false, message: "Producto encontrado", product })
    }

    // agrega un objeto producto nuevo a la coleccion
    addProduct(productData) {
        const allowedFields = ['title', 'description', 'code', 'price', 'status', 'stock', 'category', 'thumbnails']
        const bodyFields = Object.keys(productData)     // -> esto es un array

        // Filtra el array por si hay algun field que no este permitido
        const invalidFields = bodyFields.filter(f => !allowedFields.includes(f))

        if(invalidFields.length > 0) {
            return { 
                error: true, 
                message: "Campos inválidos detectados",
                invalidFields 
            }
        }

        // verifica que no falte ninguno
        const missingFields = allowedFields.filter(f => productData[f] === undefined)
        if(missingFields.length > 0) {
            return { 
                error: true, 
                message: "Faltan campos obligatorios", 
                missingFields 
            }
        }

        const products = this.getProducts()
        const newProduct = { id: String(products.length + 1), ...productData }
        products.push(newProduct)
        fs.writeFileSync(this.path, JSON.stringify({ data: products }, null, 2))
        return { message: "Producto creado", product: newProduct }
    }
}