import { User } from "../models/users.model.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "Enter proper details"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            message: "User register successfully",
            User: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            message: "User fetched successfully",
            users
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

export { registerUser, getAllUsers };