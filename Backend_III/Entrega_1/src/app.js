import express from "express"

// import routes
import mocksRouter from "./routes/mocks.router.js"

const app = express()
const PORT = process.env.PORT || 1234

async function startServer() {
   try {
      await connectAtlasMongoDB()

      // routes
      app.use("/api/mocks", mocksRouter)

      app.listen(PORT, () => console.log(`Entrega1 http://localhost:${PORT}`))
   } catch (err) {
      console.error(`Error conectando a MongoDB: ${err}`)
   }
}

startServer()

// para probar el server noma
app.get("/", (req, res) => {
   res.send("home")
})
