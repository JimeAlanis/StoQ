# StoQ - Stock Management Backend

## Overview

StoQ is a backend application designed to manage products, stock, and warehouse data.

This project was refactored to follow a modular architecture using Node.js and Express, focusing on clean code practices, separation of concerns, and basic security implementations.

---

## Features

* Full CRUD for products
* Basic user login system
* Warehouse and stock structure (PostgreSQL)
* Modular backend architecture
* Input validation middleware
* Request logging
* Rate limiting to prevent abuse

---

## Project Structure

The application is organized using a modular pattern:

```id="6k8lzw"
src/
├── controllers/
├── services/
├── routes/
├── middlewares/
└── app.js
```

* **Controllers**: handle HTTP requests and responses
* **Services**: contain business logic and database queries
* **Routes**: define API endpoints
* **Middlewares**: validation, logging, and request control

---

## Technologies

* Node.js
* Express.js
* PostgreSQL
* dotenv
* express-rate-limit

---

## Security & Best Practices

* Environment variables for sensitive data (.env)
* Parameterized queries to prevent SQL Injection
* Basic rate limiting middleware
* Input validation before processing requests

---

## Setup

1. Clone the repository:

```id="jz5t55"
git clone https://github.com/JimeAlanis/StoQ.git
cd StoQ
```

2. Install dependencies:

```id="r83df9"
npm install
```

3. Create a `.env` file:

```id="iy50o3"
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=stoq
DB_PORT=5432
PORT=3000
```

4. Run the project:

```id="t4w40i"
node src/app.js
```

---

## API Endpoints

### Products

* GET `/api/products`
* POST `/api/products`
* PUT `/api/products/:id`
* DELETE `/api/products/:id`

### Auth

* POST `/api/login`

---

## About This Project

This project was rebuilt and improved to apply:

* Modular backend architecture
* Clean code practices
* Database integration
* Basic backend security concepts

---

## Future Improvements

* JWT authentication
* Password hashing (bcrypt)
* Role-based access
* Deployment

---

## Author

Jime Alanis
