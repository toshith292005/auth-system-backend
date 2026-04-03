require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');
const { connectRedis } = require('./src/config/redis'); // 👈 NEW

const PORT = process.env.PORT || 3000;

// connect databases
connectDB();
connectRedis(); // 👈 NEW

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});