import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from '../FirebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

import './Login.css'
const schema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [user, setUser] = useState(null);

  

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
    } catch (error) {
        setLoginError('Login failed. Please check your email and password.');
        console.error('Error logging in with email/password:', error);
    }
  };

    const handleGoogleLogin = async () => {
        setLoginError('');
      try {
        const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user); // Set the logged-in user
      console.log('Google login success:', result.user);
      } catch (error) {
        setLoginError('Google login failed.');
      console.error('Error logging in with Google:', error);
      }
    };
    
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

    return (
        <div className="login-container">
          <div className="login-card">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>
    
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  {...register('password')}
                  className={`form-input ${errors.password ? 'input-error' : ''}`}
                  placeholder="Enter your password"
                />
                {errors.password && <span className="error-message">{errors.password.message}</span>}
              </div>
    
              <div className="btn-group">
                <button type="submit" className="login-btn">Login</button>
              </div>
            </form>
    
            <div className="divider">OR</div>
    
            <div className="google-login">
              <button onClick={handleGoogleLogin} className="google-btn">Sign in with Google</button>
            </div>
    
            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign up here</a>
            </p>
          </div>
          {/* Display user details if logged in */}
      {user && (
        <div className="user-info">
          <h3>Welcome, {user.displayName || user.email}</h3>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </div>
      )}
        </div>
      );
//   return (
//     <form onSubmit={handleLogin}>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Login</button>
//       <button onClick={handleGoogleLogin}>
//         Sign in with Google
//       </button>
//       {error && <p>{error}</p>}
//     </form>
//   );
};

export default Login;