import mongoose from "mongoose";


const connectDB = async () => {
    try{ 
        // mongodb connection string
        const con2 = await mongoose.connect(process.env.MONGO_URI, {
            // Add any necessary connection options here
        });
        console.log(`MongoDB connected (Feature 2): ${con2.connection.host}`);
        return con2; // Return the connection object

    }catch(err){
        console.error(`Error connecting to MongoDB (Feature 2):`, err);
        process.exit(1);
    }
}












export default connectDB;



