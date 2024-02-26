import mongoose from 'mongoose'

import Color  from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to MONGODB ${conn.connection.host}'.bgGreen.white)
    } catch (error) {
        console.log ('error in DB $(error)'.bgRed.white)
    }
};

export default connectDB; 