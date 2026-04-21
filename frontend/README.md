# 📋 TaskkFlow (Taskit)

## 📌 Overview

TaskkFlow (Taskit) is a full-stack task management system built using the MERN stack. It provides secure authentication, role-based access control (Admin/User), and a complete dashboard for managing users and tasks. The system is designed to simulate real-world project architecture with REST APIs, database integration, and a responsive frontend.

---

## 🚀 Features

- Secure Authentication (JWT-based Login & Signup)
- Role-Based Access Control (Admin & User)
- Admin Dashboard with Overview
- Task Management (Create, Read, Update, Delete)
- View all Users(Admin Only)
- RESTful API Integration
- MongoDB Database Integration
- Responsive UI for Mobile & Desktop
- Protected Routes and Middleware Security

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB

**Authentication:**
- JSON Web Token (JWT)


---

## 📁 Project Structure

### Backend

backend/
├── models/
├── routes/
│ ├── authRoute.js
│ ├── adminRoute.js
│ ├── taskRoute.js
├── controllers/
├── middleware/
├── index.js


### Frontend

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
| |__ hooks/
│ ├── App.jsx
│ ├── main.jsx




---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/Maimoona288/TaskkFlow



2. Install Dependencies


Frontend

cd frontend
npm install

Backend

cd backend
npm install


3. Environment Variables

Create a .env file in the backend directory and add:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000


4. Run the Application

Start Backend
node index.js
nodemon index.js


Start Frontend
npm run dev


🔗 API Endpoints

Authentication

POST /api/auth/signup → Register new user
POST /api/auth/login → Login user
Users (Admin Only)
GET /api/admin/users → Get all users



Tasks(users)

GET /api/tasks → Get all tasks
POST /api/tasks → Create task
PUT /api/tasks/:id → Update task
DELETE /api/tasks/:id → Delete task


🔐 Security Features

JWT authentication for protected routes
Password hashing using bcrypt
Role-based authorization middleware
Protected admin routes


📌 Future Improvements

Real-time notifications
Task assignment system
Drag & drop task board 
Email notifications





👩‍💻 Author

Maimoona Shahbaz



