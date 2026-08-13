# 💳 Scalable Payment Processing System (MERN + Razorpay)

A full-stack payment processing application built using the MERN stack with Razorpay integration. This project is being developed step by step to understand the complete payment lifecycle, backend architecture, and scalable project structure.

> **Current Progress:** Day 1 – Day 6 Completed ✅

---

# 📌 Project Goal

The goal of this project is to build a scalable payment processing system instead of just integrating a payment button.

Current implementation includes:

- Project setup
- React + Vite frontend
- Node.js + Express backend
- MongoDB Atlas connection
- Product & Cart UI
- Checkout flow
- Razorpay Order API
- Razorpay Payment Popup

More advanced features like authentication, payment verification, dashboards, webhooks, and analytics will be added in the upcoming development phases.

---

# 🛠️ Tech Stack

## Frontend

- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS

## Payment Gateway

- Razorpay

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
Payment-System/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── node_modules/
│
└── README.md
```

---

# 🚀 Development Progress

## ✅ Day 1 – Project Setup

Completed:

- Installed Node.js
- Installed VS Code
- Installed Git
- Configured Git username & email
- Created MongoDB Atlas account
- Created project folder
- Connected GitHub repository

Verified Installation

```
node -v
npm -v
git --version
```

Git Configuration

```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Initialized Repository

```
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

---

## ✅ Day 2 – Frontend Setup

Completed:

- Created React project using Vite
- Installed dependencies
- Installed Tailwind CSS
- Configured Tailwind
- Removed default Vite code
- Created basic UI layout

Project Creation

```
npm create vite@latest
```

Selected

```
Framework : React
Variant   : JavaScript
```

Installed Packages

```
npm install
```

Started Development Server

```
npm run dev
```

Output

- React application running successfully
- Tailwind configured successfully

---

## ✅ Day 3 – Backend Setup

Completed:

- Express server setup
- Installed required packages
- MongoDB Atlas connection
- Created test API

Installed Packages

```
npm install express mongoose cors dotenv
```

Server Running

```
node index.js
```

Test API

```
GET /api/test
```

Output

- Backend server running successfully
- MongoDB connected successfully

---

## ✅ Day 4 – Product & Cart UI

Completed:

- Product List page
- Navbar component
- Product Card component
- Cart component
- Basic cart state

Created Components

```
Navbar
ProductCard
Cart
```

Created Pages

```
Home.jsx
```

Output

- Products displayed
- Add to Cart working
- Basic cart functionality implemented

---

## ✅ Day 5 – Checkout Page

Completed:

- Checkout page
- Cart Summary
- Total Amount Calculation
- Pay Now button
- React Router setup

Installed

```
npm install react-router-dom
```

Output

- Checkout flow ready
- User can navigate to checkout page
- Total amount calculated correctly

---

## ✅ Day 6 – Razorpay Payment Integration

Completed:

### Backend

- Razorpay account setup
- Razorpay configuration
- Created Order API
- Environment variables configured

### Frontend

- Axios installed
- Payment button connected
- Backend API call
- Razorpay popup integration

Payment Flow

```
Frontend
      ↓
Backend Order API
      ↓
Razorpay Order Creation
      ↓
Order ID Returned
      ↓
Razorpay Popup Opens
```

Current Output

- Razorpay popup opens successfully
- Order API working
- Payment flow initiated

---

# 📖 Learning Highlights

During Razorpay integration, I faced an issue where the payment popup was not opening correctly.

After debugging and analyzing the application flow, I identified that the frontend and backend servers were not running simultaneously. Since the frontend sends requests to the backend for order creation, the backend server must remain active to process those requests.

Once both servers were running correctly, the Razorpay popup opened successfully and the payment flow worked as expected.

This debugging process helped me better understand:

- Client–Server communication
- API request flow
- Razorpay order creation process
- Importance of running both frontend and backend services together

---

# 🔄 Current Payment Flow

```
User Clicks Pay Now
        │
        ▼
Frontend Sends API Request
        │
        ▼
Backend Creates Razorpay Order
        │
        ▼
Order ID Returned
        │
        ▼
Razorpay Checkout Opens
```

---

# 📅 Upcoming Features

The following features are planned for the next development phase:

- Payment Signature Verification
- Store Transactions in MongoDB
- JWT Authentication
- User Dashboard
- Admin Dashboard
- Payment Status Tracking
- Retry Failed Payments
- Razorpay Webhooks
- Transaction Analytics
- Deployment

---

# ⚠️ Current Status

| Feature              | Status         |
| -------------------- | -------------- |
| Project Setup        | ✅ Completed   |
| Frontend Setup       | ✅ Completed   |
| Backend Setup        | ✅ Completed   |
| Product & Cart       | ✅ Completed   |
| Checkout Page        | ✅ Completed   |
| Razorpay Integration | ✅ Completed   |
| Payment Verification | ⏳ In Progress |
| Authentication       | ⏳ Planned     |
| Dashboard            | ⏳ Planned     |
| Webhooks             | ⏳ Planned     |

---

# 👩‍💻 Author

**Project:** Scalable Payment Processing System

**Technology:** MERN Stack + Razorpay

**Development Status:** Day 1 – Day 6 Completed ✅
