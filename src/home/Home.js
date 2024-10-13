// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import  HomeNavBar  from '../components/HomeNavBar';
import HomeCarousel from '../components/HomeCarousel';

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('./login');
    };

    return (
        <div>
          <HomeCarousel />
            <h1>Welcome to the Treasury Health Homepage</h1>
            <p>This is a simple Home page for managing your expenses.</p>
            <button onClick={handleLoginClick}>Go to Login</button>
        </div>
    );
}

export default Home;


