# Frontend - MyApp

## 📂 Project Overview
- This is the Frontend part of MyApp — a user authentication and account management application built using React, Tailwind CSS, and React Router.

The app allows users to Sign Up, Log In, Reset Password, logout and manage their profiles securely.

## 🛠 Technologies Used

React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
React Router: A library for routing in React applications.
Axios: A promise-based HTTP client for making requests to the backend.


## 🔧 Installation & Setup

1. Install Dependencies
Make sure you have Node.js and npm installed. Then, run the following command to install project dependencies:

bash
Copy code
npm install
3. Environment Configuration
Create a .env file in the root directory of the project.
Add the backend URL and other necessary configurations to this file:
bash
Copy code
VITE_BACKEND_URL=http://localhost:4001
4. Start the Development Server
Run the following command to start the application:

bash
Copy code
npm start
Visit http://localhost:5173 in your browser to view the app.


## 🔒 Authentication Flow
Sign Up: Users can create an account by providing a username, email, and password.
Log In: After signing up, users can log in to access their dashboard.
Password Reset: Users can reset their password if they forget it by following the password reset link sent to their email.
## 🧩 Features
Responsive layout using Tailwind CSS.
User authentication with JWT tokens.
Easy-to-use routing with React Router.
Secure login and sign-up functionality connected to the backend.
## 🧑‍💻 Contributing
Contributions are welcome! To contribute, please fork this repository, make your changes, and submit a pull request.