import mongoose from "mongoose";

const Connection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        await console.log('Database connected successfuly');
    } catch (error) {
        console.log(error);
    }
}

export default Connection;