import React from 'react';
import PropTypes from 'prop-types';
import '../styles/forgotpassword.css';
import PasswordReset from './PasswordReset'
const ForgotPassword = ({ handleOnChange, handleResetOnSubmit, email }) => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="text-black text-center">Reset Password</h1>
        <form onSubmit={handleResetOnSubmit}>
          <div className="form-group">
            <label>Enter your email to recover your password</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Your Email"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Send Code
          </button>
        </form>
      </div>
    </div>
  );
}

ForgotPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleResetOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ForgotPassword;
