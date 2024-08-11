/*import React from 'react';

const Login = () => {
  const login = () => {
    window.location.href = '/signin-oidc';
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};


export default Login;*/

/* --------------------------- Modified Code -----------------------*/

// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:5001/api/account/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                // Redirect or update the UI after login
                // Example: window.location.href = '/';
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('An error occurred while trying to login.');
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-card">
                    <h2 className="login-title">Welcome Back!</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="login-footer">
                        <p>New here? <a href="#">Create an account</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;