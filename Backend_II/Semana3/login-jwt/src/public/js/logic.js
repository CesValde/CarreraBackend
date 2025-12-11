// Seleccionar un único contenedor
const listaProductos = document.querySelector('.product-list')
listaProductos.innerHTML = ''  // limpiar lista
const products = window.serverData.products

products.forEach(product => {
   const card = document.createElement('div')
   card.classList.add('product-card')

   card.innerHTML = `   
         <img src="/${product.thumbnails}">
         <h2>${product.title}</h2> 
         <section> 
            <small> ${product.description} </small> 
            <span> $${product.price} </span>
            <button data-pid="${product._id}">Agregar al carrito</button>
         </section>
      `

   listaProductos.appendChild(card)
})

// Agregar listener a los botones
listaProductos.querySelectorAll('button').forEach(button => {
   button.addEventListener('click', () => {
      addToCart(button.dataset.pid)
   })
})

let cartId = localStorage.getItem("cartId") || null
async function addToCart(pid) {
   // si no tengo carrito → lo creo
   if (!cartId) {
      const res = await fetch("/api/carts/", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ products: [] })
      })

      const data = await res.json()
      if (data.status !== "success") {
         console.error("Error al crear carrito:", data)
         return
      }

      cartId = data.payload._id
      localStorage.setItem("cartId", cartId)
   }

   // agregar producto al carrito existente
   const res = await fetch(`/api/carts/${cartId}/product/${pid}`, {
      method: "POST"
   })

   const data = await res.json()
   if (data.status === "success") {
      Swal.fire({
         title: 'Success!',
         text: 'The product has been add to cart',
         icon: 'success',
         confirmButtonText: 'Confirm'
      })
   } else {
      alert(`Error: ${data.error}`)
   }
}