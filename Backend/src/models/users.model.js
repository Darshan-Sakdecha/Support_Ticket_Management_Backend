import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
    },
    role: {
        type: String,
        required: true,
        enum: ["MANAGER", "SUPPORT", "USER"],
        unique: true,
        default: "MANAGER"
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export { User };