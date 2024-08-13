import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';
import { FaEnvelope } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your authentication logic
    if (email === 'user@example.com' && password === 'password') {
      navigate('/entry');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="container">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <i className="fas"><FaEnvelope /></i>
        </div>
        <div className="container">
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className="fas"><TbEyeClosed /></i>
        </div>
        <Link to='/identity'><button type="submit">Login</button></Link>
        <Link to='/forgot-password'>Forgot Password?</Link>
      </form>
    </div>
  );
};

export default Login;
