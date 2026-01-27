import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const baseMongooseOpts = {
   serverSelectionTimeoutMS: 10000,
}

export const connectAtlasMongoDB = async () => {
   try {
      const url = process.env.ATLAS_URL
      await mongoose.connect(url, baseMongooseOpts)
      console.log(`Conectado a Mongo Atlas`)
   } catch (err) {
      console.error(`Error conectando a MongoDB: ${err}`)
      process.exit(1)
   }
}
