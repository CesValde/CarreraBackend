import mongoose from "mongoose"

const baseMongooseOpts = {
   serverSelectionTimeoutMS: 10000
}

const atlas_url = ""

export const connectAtlasMongoDB = async () => {
   try {
      await mongoose.connect(atlas_url, baseMongooseOpts)
      console.log(`Conectado a Mongo Atlas`)
   } catch (err) {
      console.error(`Error conectando a MongoDB: ${err}`)
      process.exit(1)
   }
}
