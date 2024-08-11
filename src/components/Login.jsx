import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';
import { FaEnvelope } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import Content from '../components/Content'


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
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
           
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             <i className="fas"><FaEnvelope /></i>
            
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="fas"><TbEyeClosed /></i>
          </div>
          <Link to='/content'><button type="submit">Login</button></Link>
        </form>
        <a href='#!' onClick={() => switchform('reset')}>Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
