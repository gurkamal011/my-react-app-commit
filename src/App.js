import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchItems } from './apiService';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Login from './login/Login';
import HomeNavBar from './components/HomeNavBar';
import Home from './home/Home';
import Login from './login/Login';
import Signup from './login/Signup';
import Pricing from './components/pages/pricing/Pricing';
import Features from './components/pages/features/Features';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';

function App() {
  // State variables for items, loading, and error
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch items on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <HomeNavBar />
      <Routes>
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </div>
    </Router>
  );
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to have fun.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );*/
}

export default App;
