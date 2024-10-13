// Signup.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Signup.css'; // Import custom styles

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form data
    // Implement signup logic (e.g., API call)
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              {...register('name')}
              className={`form-input ${errors.name ? 'input-error' : ''}`}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

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

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword')}
              className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span>}
          </div>

          <div className="btn-group">
            <button type="submit" className="signup-btn">Sign Up</button>
          </div>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;