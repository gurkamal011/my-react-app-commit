// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is a simple Home page for your React app.</p>
            <button onClick={handleLoginClick}>Go to Login</button>
        </div>
    );
}

export default Home;