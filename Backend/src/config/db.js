import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect(process.env.DATABASE_URI)
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log("Error connection to DB");
            process.exit(1);
        })
}

export { connectDB };