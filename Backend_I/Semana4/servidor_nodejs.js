// 🧱 Servidor básico con Node.js

import { http } from "http"

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hola desde Node.js puro!')
  }
})

server.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'))