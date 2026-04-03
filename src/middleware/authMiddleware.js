const jwt = require('jsonwebtoken');

// verify token
const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');

        if (!authHeader) {
            return res.status(401).json({ message: "No token, access denied" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
};

// role check middleware
const requireRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: "Access denied: insufficient permissions" });
        }
        next();
    };
};

module.exports = { authMiddleware, requireRole };