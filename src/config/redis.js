const { createClient } = require('redis');

const client = createClient({
    url: 'redis://redis:6379'
});

client.on('error', (err) => console.log('Redis Error:', err));

const connectRedis = async () => {
    await client.connect();
    console.log("Redis Connected ⚡");
};

module.exports = { client, connectRedis };