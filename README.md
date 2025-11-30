### 🚀 NodeJS Express MongoDB CRUD API

This project is a simple, foundational RESTful API built with Node.js, Express.js, and Mongoose to perform basic CRUD (Create, Read, Update, Delete) operations on a Product resource. 
This is my starting point for learning backend API development.

> Note: This is my very first attempt at building a backend API and is intended strictly for learning and demonstrating core CRUD functionality.
> As a result, some production-level practices might have been simplified or omitted.
---

## ✨ Features
- RESTful Routing: Clear, predictable routes defined under `/api/products` for all CRUD operations
- Express Middleware: Configured to handle incoming JSON data `(req.body)`
- MongoDB Integration: Uses Mongoose for object data modeling (ODM) and secure connectivity
- Separation of Concerns: Organized code with dedicated files for Routes, Controllers, and the main server logic
- Environment Variables: Secure connection to the MongoDB Atlas using the dotenv package
- Development Workflow: Uses nodemon for automatic server restarts during development
---

## ⚙️ Tech Stack
<div align="center">

| Technology | Badge | Description |
|-----------|--------|-------------|
| Node.js | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | JavaScript runtime environment. |
| Express.js | ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | Web application framework for Node.js. |
| Mongoose | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | MongoDB ODM library. |
| dotenv | ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black) | Loads environment variables from `.env`. |
| nodemon (dev) | ![nodemon](https://img.shields.io/badge/nodemon-4F8A10?style=for-the-badge&logo=nodemon&logoColor=white) | Auto-restarts server during development. |
| Insomnia | ![Insomnia](https://img.shields.io/badge/Insomnia-4000BF?style=for-the-badge&logo=insomnia&logoColor=white) | API testing and debugging tool. |

</div>

---

## 🏁 Getting Started
Prerequisites: You need to have Node.js and npm (Node Package Manager) installed on your system.

### 1. Installation
```bash
# Cloning the repository
git clone https://github.com/HaiqalAly/Learn-CRUD-NodeAPI

# Navigate to folder
cd Learn-CRUD-NodeAPI

# Install Dependencies
npm install
```

### 2. Configure Environtment Variable<br>
Create a file named `.env` in the root directory of your project and add your MongoDB connection string.<br>
Inside the `.env` write:

```bash
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

> Note: Replace the placeholders with your actual MongoDB Atlas connection details.

### 3. Run the Server (Dev)
Start the application using the development script defined in the `package.json`.

```bash
npm run dev
```

This command uses nodemon, which will watch for file changes and automatically restart the server.

The server will be running at http://localhost:3000. You will see the following confirmation in your console:

```bash
Connected to MongoDB
Example app listening on port 3000
```
---

## 🕧 API Endpoints

<div align="center">

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|---------------|
| GET | `/api/products` | Retrieves a list of all products. | 200 |
| GET | `/api/products/:id` | Retrieves a single product by its ID. | 200, 404 |
| POST | `/api/products` | Creates a new product. | 201, 500 |
| PUT | `/api/products/:id` | Updates an existing product by ID. | 200, 404 |
| DELETE | `/api/products/:id` | Deletes a product by its ID. | 200, 404 |

</div>


### Example Payloads

To create a new product (send as JSON):

```bash
{
    "name": "Laptop",
    "quantity": 10,
    "price": 999.99
}
```

To update an existing product (send as JSON):

```bash
{
    "name": "Gaming Laptop",
    "quantity": 5,
    "price": 1299.00
}
```

---
## 📁 Project Structure

```bash
.
├── controllers/
│   └── product.controller.js  # Defines the CRUD logic functions.
├── models/
│   └── product.model.js       # Defines the Mongoose Product Schema.
├── routes/
│   └── product.route.js       # Defines the API endpoints and maps them to controllers.
├── index.js                   # Main application file, server setup, and MongoDB connection.
├── package-lock.json
└── package.json
```
---
## ⚠️ Known Limitations
- No authentication or authorization
- No request validation (e.g., Joi, Zod)
- No pagination for product listings
- Error handling simplified for learning

---
## 📜 License
This project is licensed under the MIT License.  
You are free to use, modify, and distribute this project for learning or development purposes.
