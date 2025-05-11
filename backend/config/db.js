import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/tomato")
        .then(() => console.log("✅ Local MongoDB Connected"))
        .catch((err) => console.error("❌ MongoDB connection error:", err));
};
