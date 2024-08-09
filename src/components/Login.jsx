import React from 'react';
import '../styles/login.css'; 
import PropTypes from 'prop-types';

const Login = ({handleOnSubmit, handleOnChange, email, password, switchform}) => {
    

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className='text-black text-center'>Login</h1>
        <hr />
        <form  onSubmit={handleOnSubmit}>
          <div className="form-group">
           
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Your Password"
              required
            />
          </div>

          

         
        </form>
        <hr/>
        <a href='#!' onClick={() => switchform('reset')}>Forgot Password?</a>
        <button type="submit" className="login-btn">
            Login
          </button>
      </div>
    </div>
  );
};
Login.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    switchform:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,

}

export default Login;