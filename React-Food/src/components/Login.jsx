import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform validation here if needed
    // For simplicity, let's assume validation passes
    // You can also add more robust validation logic

    // Call onLogin prop with email and password
    onLogin(email, password);
  };

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log("Redirecting to sign-up page...");
  };

  return (
    <div>
      <style>
        {`
          .header {
            text-align: center;
            font-size: 24px;
            color: #230d46;
            margin-bottom: 20px;
          }

          .login-form {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #230d46; /* Dark Violet */
            color: #f5e1f0; /* Cream */
          }

          .login-container {
            background-color: #5c4274; /* Darker Violet */
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            padding: 20px;
            width: 300px;
          }

          .login-container h2 {
            text-align: center;
            color: #f5e1f0; /* Cream */
          }

          .login-container form {
            display: flex;
            flex-direction: column;
          }

          .login-container form div {
            margin-bottom: 10px;
          }

          .login-container form label {
            font-weight: bold;
            color: #f5e1f0; /* Cream */
          }

          .login-container form input {
            padding: 8px;
            border: 1px solid #f5e1f0; /* Cream */
            border-radius: 4px;
            background-color: #fff; /* White */
            color: #333; /* Dark Gray */
          }

          .login-container form button {
            padding: 10px 20px;
            background-color: #230d46; /* Dark Violet */
            color: #f5e1f0; /* Cream */
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .login-container form button:hover {
            background-color: #402657; /* Darker Violet */
          }

          .sign-in-message {
            text-align: center;
            margin-top: 10px;
            color: #f5e1f0; /* Cream */
          }

          .sign-in-message a {
            color: #f5e1f0; /* Cream */
            text-decoration: underline;
            cursor: pointer;
          }

          .sign-in-message a:hover {
            text-decoration: none;
          }
        `}
      </style>
      <div className="header">Welcome To FooDilie</div>
      <div className="login-form">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="sign-in-message">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
