import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../resources/Brand.png';
import React, { useEffect, useState } from 'react';
import './HomeNavBar.css';
import { Link } from 'react-router-dom';
import { auth } from '../FirebaseConfig'; // Your firebase configuration
import { onAuthStateChanged, signOut } from 'firebase/auth';

const HomeNavBar =() => {
    const [user, setUser] = useState(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is signed in
      } else {
        setUser(null); // No user is signed in
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle sign-out
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user on sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <a href="/home">
        <img src={logo} alt="Brand Logo" className="navbar-logo" />
      </a>
        <Navbar.Brand as ={Link} to= "/home" className='brand-text'>Treasury Health</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to= "/features">Features</Nav.Link>
            <Nav.Link as ={Link} to= "/pricing">Pricing</Nav.Link>
            <Nav.Link as ={Link} to= "/about">About</Nav.Link>
            <Nav.Link as ={Link} to= "/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
          {user ? (
            // Show Dashboard and My Account if user is logged in
            <>
              <Nav.Link as={Link} to="/home">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/home">My Account</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            // Show Login and Signup if user is not logged in
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavBar;