import { User } from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existinguser = await User.findOne({
            email
        });

        if (!existinguser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, existinguser.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
            { id: existinguser._id, role: existinguser.role }
            , process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            User: {
                id: existinguser._id,
                name: existinguser.name,
                email: existinguser.email,
                role: existinguser.role
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
}

export {loginUser}