const socket = io()
const listaProductos = document.querySelector('.lista-productos')

// muestra todos los productos de la coleccion
socket.on('lista_productos', (products) => {
   listaProductos.innerHTML = ''
   const ul = document.createElement('ul')
   listaProductos.appendChild(ul)

   products.forEach(product => {
      const li = document.createElement('li')
      li.innerText = `${product.title}, Precio: ${product.price}`
      ul.appendChild(li)
   })
})