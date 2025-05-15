import mongoose from "mongoose";

const connect = async () => {
    try {
        // mongodb connection
        const con = await mongoose.connect(process.env.MONGO_URL, {
            
            
        });

        console.log(`MongoDB connected (Feature 1): ${con.connection.host}`);
        return con;
    }
    catch (err) {
        console.error(`Error connecting to MongoDB (Feature 1):`, err);
        process.exit(1)
    }
}

export default connect;