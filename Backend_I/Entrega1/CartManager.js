import fs from 'fs'

export class CartManager {
    constructor(path, productManager) {
        this.path = path
        this.productManager = productManager
    }

    // para leer solo una vez al principio la bbdd
    getInstance() {
        // verifica si existe el archivo
        if(fs.existsSync(this.path)) {
            // convierto a objeto JS
            return JSON.parse(fs.readFileSync(this.path), 'utf-8')
        } else {
            const carts = { data: [] }
            fs.writeFileSync(this.path, JSON.stringify(carts))
            return carts
        }
    }

    // retorna todos los carts
    getCarts() {
        return JSON.parse(fs.readFileSync(this.path, 'utf-8')).data
    }

    // Crea un nuevo cart
    createCart(cartData) {
        // valida que 'products' exista y sea un array
        if(!("products" in cartData) || !Array.isArray(cartData.products) || cartData.products.length === 0) {
            return { error: true, message: "Debe incluir 'products' como un array" }
        }

        // obtener todos los carritos
        const carts = this.getCarts()

        // crear nuevo carrito vacío
        const newCart = {
            id: String(carts.length + 1),
            products: []
        }

        // agregar el nuevo carrito
        carts.push(newCart)
        fs.writeFileSync(this.path, JSON.stringify({ data: carts }, null, 2))

        // agregar cada producto al carrito
        for(const prod of cartData.products) {
            const result = this.addProductCart(newCart.id, prod.id)
            if(result.error) return { error: true, message: result.message }
        }

        return { message: "Cart creado", cart: newCart }
    }

    // retorna los productos de un carrito en base a su id 
    getProductsCartById(id) {
        const carts = this.getCarts()
        const cart = carts.find(c => c.id === id)

        if(!cart) return { error: true, message: "Carrito no encontrado" }

        return { message: `Productos del cart ${id}`, cartProducts: cart.products }
    }

    // agrega un producto al carrito seleccionado y retorna el carrito
    addProductCart(cid, pid) {
        // verifica que el carrito exista
        const cartResult = this.getProductsCartById(cid)
        if(cartResult.error) return { error: true, message: cartResult.message }

        // verificar que el producto exista
        const productResult = this.productManager.getProductById(pid)
        if(productResult.error) return { error: true, message: "Producto no existe" }

        const cartProducts = cartResult.cartProducts
        // busca el producto si existe en el carrito
        const productIndex = cartProducts.findIndex(p => p.product === String(pid))

        // si existe aumento cant sino creo la propiedad
        if(productIndex !== -1) {
            cartProducts[productIndex].quantity++
        } else {
            cartProducts.push({ product: String(pid), quantity: 1 })
        }

        // actualizar carrito en el array completo
        const carts = this.getCarts()
        const cartIndex = carts.findIndex(c => c.id === cid)
        carts[cartIndex].products = cartProducts
        fs.writeFileSync(this.path, JSON.stringify({ data: carts }, null, 2))

        return { message: "Producto agregado al carrito", cart: cartProducts }
    }
}