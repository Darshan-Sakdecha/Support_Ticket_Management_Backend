import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized - token is required!"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.users = decoded;

        next();
    } catch (error) {
        return res.status(500).json({
            message: "Invalid or expired token"
        });
    }
}

const role = (...roles) => {
    return (req, res, next) => {
        if (!req.users) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }
        if (!roles.includes(req.users.role)) {
            return res.status(403).json({
                message: "Forbidden - Access denied"
            });
        }
        next();
    }
}

export{auth,role};