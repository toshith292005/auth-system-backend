const router = require('express').Router();
const { authMiddleware, requireRole } = require('../middleware/authMiddleware');
const { client } = require('../config/redis');

// ================= PROFILE WITH CACHE =================
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;

        // 🔍 1. Check cache
        const cachedUser = await client.get(userId);

        if (cachedUser) {
            return res.json({
                message: "From cache ⚡",
                user: JSON.parse(cachedUser)
            });
        }

        // 🗄️ 2. Simulate DB fetch (here using token data)
        const userData = req.user;

        // ⚡ 3. Store in Redis (TTL = 60 seconds)
        await client.setEx(userId, 60, JSON.stringify(userData));

        res.json({
            message: "From DB 🗄️",
            user: userData
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ================= ADMIN ROUTE =================
router.get('/admin', authMiddleware, requireRole('admin'), (req, res) => {
    res.json({
        message: "Welcome Admin 👑"
    });
});

module.exports = router;