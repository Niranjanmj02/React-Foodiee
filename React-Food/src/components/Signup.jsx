import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !contact || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!/^\d{10}$/i.test(contact)) {
      setErrorMessage('Contact number must be 10 digits');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Call onSignUp prop with user data
    onSignUp({ name, contact, email, password });
    
  const navigate = useNavigate(); 
  };

  return (
    <div>
      <style>
        {`
          .signup-form {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #230d46; /* Dark Violet */
            color: #f5e1f0; /* Cream */
          }

          .signup-container {
            background-color: #5c4274; /* Darker Violet */
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            padding: 20px;
            width: 300px;
          }

          .signup-container h2 {
            text-align: center;
            color: #f5e1f0; /* Cream */
          }

          .signup-container form {
            display: flex;
            flex-direction: column;
          }

          .signup-container form div {
            margin-bottom: 10px;
          }

          .signup-container form label {
            font-weight: bold;
            color: #f5e1f0; /* Cream */
          }

          .signup-container form input {
            padding: 8px;
            border: 1px solid #f5e1f0; /* Cream */
            border-radius: 4px;
            background-color: #fff; /* White */
            color: #333; /* Dark Gray */
          }

          .signup-container form button {
            padding: 10px 20px;
            background-color: #230d46; /* Dark Violet */
            color: #f5e1f0; /* Cream */
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .signup-container form button:hover {
            background-color: #402657; /* Darker Violet */
          }

          .error-message {
            color: red;
            text-align: center;
            margin-top: 10px;
          }
        `}
      </style>
      <div className="signup-form">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="contact">Contact:</label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
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
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className="sign-in-message">
             <Link to="/"> Signup</Link></button>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
