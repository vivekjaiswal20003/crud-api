<<<<<<< HEAD
# User Management API

## Description
This project is a simple user management system built with Node.js, Express.js, and Prisma. It provides a RESTful API for managing users, including functionality to create, read, update, and delete user records. Authentication is implemented using JWT (JSON Web Tokens) to secure certain endpoints.

## Features
- User CRUD operations:
  - Create a new user
  - Retrieve all users
  - Retrieve a single user by ID
  - Update a user
  - Delete a user
- Secure endpoints with JWT-based authentication.
- Prisma as the ORM for interacting with a PostgreSQL database.
- Data validation with `express-validator`.
- Environment variable management using `dotenv`.

---

## Technologies Used
- **Node.js** (20.x)
- **Express.js** (Web framework)
- **PostgreSQL** (Database)
- **Prisma** (ORM)
- **jsonwebtoken** (JWT for authentication)
- **express-validator** (Input validation)
- **bcrypt** (Password hashing)

---

## Getting Started


### Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the root of your project:
     ```env
     DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database-name>?schema=public"
     JWT_SECRET="your_secret_key"
     PORT=3000
     ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the server:
   ```bash
   npm run dev
   ```
   The server will be running at `http://localhost:3000`.

---

## API Documentation

### Authentication
To access protected routes, include the `Authorization` header in your requests:
```bash
Authorization: Bearer <token>
```

### Endpoints

#### Create User
**POST** `/api/users`
- **Request Body:**
  ```json
  {
    "name":"vivek9",
    "email": "vicky9guddu12@gmail.com",
    "password":"12345"
  }
  ```
- **Response:**
  ```json
  {
    "id": 8,
    "name": "vivek9",
    "email": "vicky9guddu12@gmail.com",
    "createdAt": "2025-01-20T14:09:55.309Z"
  }
  ```

#### Get All Users
**GET** `/api/users`
- **Response:**
  ```json
  [
    "data": [
        {
            "id": 2,
            "name": "vivek1",
            "email": "vicky1guddu12@gmail.com",
            "password": "1123",
            "created_at": "2025-01-19T21:20:10.800Z",
            "updatedAt": "2025-01-20T17:36:16.537Z"
        },
        {
            "id": 3,
            "name": "vivek3",
            "email": "vicky3guddu12@gmail.com",
            "password": "11123",
            "created_at": "2025-01-19T21:21:44.778Z",
            "updatedAt": "2025-01-20T17:36:16.537Z"
        },
        {
            "id": 4,
            "name": "vivek4",
            "email": "vicky4guddu12@gmail.com",
            "password": "111123",
            "created_at": "2025-01-19T21:23:02.162Z",
            "updatedAt": "2025-01-20T17:36:16.537Z"
        },
        {
            "id": 5,
            "name": "vivek3",
            "email": "vicky3guddu12gmail.com",
            "password": "11123",
            "created_at": "2025-01-20T06:25:38.629Z",
            "updatedAt": "2025-01-20T17:36:16.537Z"
        },
        {
            "id": 6,
            "name": "vivek7",
            "email": "vicky7guddu12@gmail.com",
            "password": "$2b$10$eiUw1Pzg3zwt.Qp7wC/Vwu7djoKf/G3yRfU12ZujzLDcvtupBeFLC",
            "created_at": "2025-01-20T06:56:59.892Z",
            "updatedAt": "2025-01-20T17:36:16.537Z"
        },
        {
            "id": 7,
            "name": "vivek8",
            "email": "vicky8guddu12@gmail.com",
            "password": "$2b$10$zGnIEr.Qx9uZS6euf7P88Oy0TNflZPO/U4Aj4fe8dMbBFtsQRiDQS",
            "created_at": "2025-01-20T11:50:30.958Z",
            "updatedAt": "2025-01-20T17:36:16.537Z"
        },
        {
            "id": 8,
            "name": "vivek9",
            "email": "vicky9guddu12@gmail.com",
            "password": "$2b$10$fK0hwqlmeQjt5OWC.VIFmONovhoLsB3nQw4WocYNKdouTO8MTc.KO",
            "created_at": "2025-01-20T14:09:55.309Z",
            "updatedAt": "2025-01-20T14:09:55.309Z"
        }
    ]
  ]
  ```

#### Get User by ID
**GET** `/api/users/:id`
- **Response:**
  ```json
  {
    "data": {
        "id": 3,
        "name": "vivek3",
        "email": "vicky3guddu12@gmail.com",
        "password": "11123",
        "created_at": "2025-01-19T21:21:44.778Z",
        "updatedAt": "2025-01-20T17:36:16.537Z"
    }
  }
  ```

#### Update User
**PUT** `/api/users/:id`
- **Request Body:**
  ```json
  {
    "name":"vibek jaiswal",
    "email":"vicky5guddu12@gmail.com",
    "password":"123"

  }
  ```
- **Response:**
  ```json
  {
    
    "status": 200,
    "message": "User updated successfully"

  }  
  ```

#### Delete User
**DELETE** `/api/users/:id`
- **Response:**
  ```json   ---> on deleting id=3
  {
    "message": "User deleted successfully"     
  }
  ```

---

<!-- ## Running Tests
 Write and run tests for your application:
```bash
npm test
```

--- -->

## Folder Structure
```
CRUD_PROJECT
├── controller    ---    all the logic
│   ├── authController.js
│   └── userController.js
├── DB            ---    databse file
│   └── db.config.js
├── middleware    ---    middleware to protect all route
│   └── authMiddleware.js
├── prisma        ---    all migration
│   ├── migrations
│   └── schema.prisma
├── routes        ---  endpoints and their functions  
│   ├── index.js
│   └── userRoutes.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── server.js

```


=======
# crud-api
crud-api using nodejs and postgres
>>>>>>> 5932d8c478519d1123a26b3bc032fde5396c7481
