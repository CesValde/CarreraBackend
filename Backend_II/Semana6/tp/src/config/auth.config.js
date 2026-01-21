import mongoose from "mongoose"
import config from "./config.js"

const baseMongooseOpts = {
   serverSelectionTimeoutMS: 10000
}

export const connectAtlasMongoDB = async () => {
   try {
      await mongoose.connect(config.atlasUrl, baseMongooseOpts)
      console.log(`Conectado a Mongo Atlas`)
   } catch (err) {
      console.error(`Error conectando a MongoDB: ${err}`)
      process.exit(1)
   }
}
