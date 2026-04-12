# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of code
COPY . .

# Expose port (match your server.js port)
EXPOSE 5000

# Start server
CMD ["node", "server.js"]