# User Authentication and Authorization System

A Node.js-based authentication system implementing Bearer token authentication using JWT (JSON Web Tokens).

## Postman Collection

- API Documentation
  You can find the Postman collection for this project [here](https://documenter.getpostman.com/view/33765519/2sAYBd6nL9).

## Features

- User Registration
- User Login with JWT token generation
- Protected Routes using Bearer token
- Password Hashing
- MVC Architecture

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs 
- Postman (for API testing)

## Project Structure

├── .env    
├── README.md    
├── server.js    
├── Config/   
│   └── ConfigMongoDB.js   
├── controllers/    
│   └── UserController.js    
├── middleware/    
│   └── UserMiddleware.js    
├── models/    
│   └── UserModel.js    
└── routes/    
    └── userRoutes.js    


## API Endpoints

### User Registration

- **POST** `/api/user/register`
- Register new user with username, email, and password
- Returns success message upon registration

### User Login

- **POST** `/api/user/login`
- Authenticate user and generate JWT token
- Returns token upon successful login

### Get User information

- **GET** `/api/user/userinfo`
- Protected route requiring Bearer token
- Returns user information

## Error Handling

The API implements proper error handling for:

- Invalid credentials
- Duplicate email/username
- Invalid token
- Server errors
- Validation errors

## Security Features

- Password hashing using bcryptjs
- JWT token authentication
- Protected routes
- Input validation
- MongoDB injection protection
