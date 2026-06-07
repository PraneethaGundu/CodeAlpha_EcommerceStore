# ShopEase - E-Commerce Store

A full-stack E-Commerce web application built using React, Node.js, Express.js, and MongoDB Atlas.

## Features

- User Registration
- User Login & Logout
- JWT Authentication
- Product Listing
- Product Search
- Product Details Page
- Add to Cart
- Remove from Cart
- Persistent Cart using Local Storage
- Dynamic Cart Counter
- Welcome User Display

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

## Project Structure

```text
CodeAlpha_EcommerceStore/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## API Routes

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Products

```http
GET /api/products
GET /api/products/:id
```

## Author

**Gundu Praneetha**

Computer Science Student | Exploring Technology & Innovation

Email: praneetha1435@gmail.com