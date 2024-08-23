import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGO_URL

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URL in environment variable inside .env.local')
}

declare global {
  var mongoose: { connection: any; promise: any };
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null }
}

async function connect() {
  if (cached.connection) {
    return cached.connection
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    }

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then(mongoose => {
      console.log('DB connected!')
      return mongoose
    })
  }

  try {
    cached.connection = await cached.promise
  } catch (error) {
    cached.promise = null
    throw error
  }

  return cached.connection
}

export default connect