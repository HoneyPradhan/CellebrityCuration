import mongoose from 'mongoose'
import colors from 'colors'
// import { ChunkGraph } from 'webpack'
const connectDB = async() => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb database ${conn.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white)
    }
}
export default connectDB