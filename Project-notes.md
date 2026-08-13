# 📒 Project Notes – Scalable Payment Processing System

> These are my personal development notes while building the project. This document contains daily progress, setup commands, important learnings, debugging notes, and future references.

---

# 📌 Project Information

**Project Name:** Scalable Payment Processing System

**Tech Stack**

- React (Vite)
- Tailwind CSS
- Node.js
- Express.js
- MongoDB Atlas
- Razorpay
- Axios
- React Router DOM
- Git & GitHub

---

# 📅 Day 1 – Environment Setup

## Objective

Set up the complete development environment.

## Tasks Completed

- Installed Node.js
- Verified Node & npm installation
- Installed VS Code
- Installed Git
- Configured Git
- Created MongoDB Atlas account
- Created project folder
- Connected GitHub repository

---

## Verify Node Installation

```bash
node -v
npm -v
```

Purpose

- Check whether Node.js and npm are installed correctly.

---

## Verify Git Installation

```bash
git --version
```

---

## Configure Git

```bash
git config --global user.name "Your Name"

git config --global user.email "your@email.com"
```

Purpose

- Sets Git identity.
- Required before pushing code to GitHub.

---

## MongoDB Atlas Setup

Steps followed

1. Create Atlas Account
2. Create Project
3. Create Cluster
4. Wait until cluster is ready
5. Click **Connect**
6. Select **Drivers**
7. Copy MongoDB Connection String
8. Paste connection string inside project
9. Run backend server
10. Verify successful database connection

### Note

If connection issues occur

- Check Network Access in MongoDB Atlas
- Add current IP
- If SSL related issues occur, verify connection string and Atlas settings.

---

## Project Folder Structure

```text
Scalable-Payment-Processing-System/

client/

server/
```

---

## GitHub Setup

Initialize Git

```bash
git init
```

Create `.gitignore` before first commit.

Commit Code

```bash
git add .

git commit -m "Initial Commit"
```

Connect GitHub Repository

```bash
git branch -M main

git remote add origin <repository-url>

git push -u origin main
```

---

# ✅ Day 1 Output

- Development environment ready
- GitHub connected
- MongoDB Atlas ready

---

# 📅 Day 2 – Frontend Setup

## Objective

Set up React project using Vite and Tailwind CSS.

---

## Tasks Completed

- Created React Project
- Installed dependencies
- Installed Tailwind CSS
- Configured Tailwind
- Removed default Vite code
- Created basic UI layout
- Frontend running successfully

---

## Create React App

```bash
npm create vite@latest
```

Choose

```
Framework : React

Variant : JavaScript
```

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

---

## Tailwind CSS Setup

Install packages

```bash
npm install -D tailwindcss postcss autoprefixer
```

Generate configuration

```bash
npx tailwindcss init -p
```

Update

```
tailwind.config.js
```

Configure content paths.

---

### Issue Faced

VS Code showed

```
Unknown At Rule
```

### Solution

Installed

```
PostCSS Language Support
```

extension in VS Code.

---

## Basic UI Setup

- Removed default App.jsx code
- Removed default styles
- Verified main.jsx
- Started writing Tailwind-based UI

---

# ✅ Day 2 Output

- React running
- Tailwind configured
- Basic UI ready

---

# 📅 Day 3 – Backend Setup

## Objective

Build Express server and connect MongoDB.

---

## Tasks Completed

- Express server setup
- Installed required packages
- MongoDB connection
- Created test API

---

## Install Packages

```bash
npm install express mongoose cors dotenv
```

Check installation

```bash
npm list --depth=0
```

Run server

```bash
node index.js
```

---

## Test API

```
GET /api/test
```

Verify

```
http://localhost:5000/api/test
```

or

```bash
curl http://localhost:5000/api/test
```

---

# ✅ Day 3 Output

- Backend working
- MongoDB connected
- Test API successful

---

# 📅 Day 4 – Product & Cart UI

## Objective

Create product page and shopping cart.

---

## Tasks Completed

Created Components

- Navbar.jsx
- ProductCard.jsx
- Cart.jsx

Created Pages

- Home.jsx

Implemented

- Product List
- Add To Cart button
- Basic Cart State

---

## Folder Organization

Separated code into

```
components/

pages/
```

instead of keeping everything inside App.jsx.

This made the project cleaner and easier to maintain.

---

# ✅ Day 4 Output

- Product page ready
- Cart working
- Project structure improved

---

# 📅 Day 5 – Checkout Page

## Objective

Create checkout flow.

---

## Tasks Completed

- Checkout page
- Cart Summary
- Total Amount Calculation
- Pay Now button

Installed

```bash
npm install react-router-dom
```

Created

```
Checkout.jsx
```

Added routing.

---

# ✅ Day 5 Output

- Checkout page completed
- Checkout flow ready

---

# 📅 Day 6 – Razorpay Integration

## Objective

Integrate Razorpay Checkout.

---

## Tasks Completed

Backend

- Razorpay account setup
- Razorpay configuration
- Create Order API
- Environment variables

Frontend

- Axios installed
- Backend API call
- Razorpay popup integration

---

## Overall Flow

```
Frontend

↓

Backend API

↓

Create Razorpay Order

↓

Order ID Returned

↓

Razorpay Checkout Popup

↓

Payment Starts
```

---

## Packages Used

Frontend

```
Axios
```

Backend

```
Razorpay SDK
```

---

## Important Learning

I spent several days debugging why the Razorpay popup was not opening.

After checking multiple possibilities, I found that the issue was not with Razorpay itself.

The real problem was that the backend server was not running while the frontend was sending API requests.

Since the frontend depends on the backend to create a Razorpay Order ID, both servers must be running simultaneously.

After starting both frontend and backend servers correctly, the payment popup opened successfully.

This debugging experience improved my understanding of

- Client–Server communication
- API request lifecycle
- Razorpay integration flow
- Backend dependency for payment initialization

---

# ✅ Day 6 Output

- Razorpay popup opens successfully
- Backend Order API working
- Payment flow initiated

---

# 📌 Current Project Status

| Day   | Status       |
| ----- | ------------ |
| Day 1 | ✅ Completed |
| Day 2 | ✅ Completed |
| Day 3 | ✅ Completed |
| Day 4 | ✅ Completed |
| Day 5 | ✅ Completed |
| Day 6 | ✅ Completed |

---

# 🚀 Next Development Phase

- Payment Verification
- Save Transactions to MongoDB
- JWT Authentication
- User Dashboard
- Payment History
- Admin Dashboard
- Payment Status
- Retry Failed Payments
- Razorpay Webhooks
- Deployment

---

# 📝 Personal Notes

- Always run both frontend and backend before testing payment flow.
- Commit code after completing each major feature.
- Keep project structure modular from the beginning.
- Write meaningful Git commit messages.
- Update README after completing each milestone.
- Document bugs and their solutions for future reference.
