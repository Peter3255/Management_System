import mongoose from "mongoose";

const connect = async () => {
    try {
        // mongodb connection
        const con = await mongoose.connect(process.env.MONGO_URL, {
            
            
        });

        console.log(`MongoDB connected ${con.connection.host}`);
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

export default connect;