# 🚀 Dockerized Auth System Backend

A production-ready authentication backend built with **Node.js, Express, MongoDB, and Redis**, fully containerized using **Docker and Docker Compose**.

---

## 🔥 Features

* 🔐 JWT-based Authentication
* ⚡ Redis integration for caching/session handling
* 🗄️ MongoDB database (containerized)
* 🐳 Fully Dockerized backend
* 📦 Multi-container setup using Docker Compose
* 💾 Persistent storage using Docker volumes

---

## 🧱 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Cache:** Redis
* **Containerization:** Docker, Docker Compose

---

## 📁 Project Structure

```
AUTH-SYSTEM/
│
├── src/
│   ├── config/        # DB and Redis configs
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth middleware
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   └── app.js
│
├── server.js
├── Dockerfile
├── docker-compose.yml
├── .env
└── README.md
```

---

## ⚙️ Setup & Run (Docker)

### 1️⃣ Clone the repo

```
git clone https://github.com/your-username/auth-system-backend.git
cd auth-system-backend
```

### 2️⃣ Add environment variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=mongodb://mongodb:27017/authDB
JWT_SECRET=your_secret_key
```

---

### 3️⃣ Run using Docker Compose

```
docker compose up --build
```

---

## 🌐 API Runs On

```
http://localhost:3000
```

---

## 🧠 Architecture

* Backend communicates with:

  * MongoDB (for persistent data)
  * Redis (for caching/session management)
* All services run in isolated containers
* Docker Compose handles networking automatically

---

## 💾 Persistence

MongoDB data is stored using Docker volumes:

```
mongo-data
```

So data remains even after restarting containers.

---

## 📌 Future Improvements

* Add rate limiting with Redis
* Add role-based access control (RBAC)
* Add Kubernetes deployment
* Add CI/CD pipeline

---

## 👨‍💻 Author

**Toshith**

---

## ⭐ If you like this project

Give it a star on GitHub!
