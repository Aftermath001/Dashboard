import React from 'react'
import PropTypes from 'prop-types';

function PasswordReset({handleResetOnSubmit, handleOnChange, email, switchform}) {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className='text-black text-center'>Reset Password</h1>
        <form  onSubmit={handleResetOnSubmit}>
          <div className="form-group">
            <label>Atleast 8 characters, with uppercase and lowercase letters</label>
            <input
              type="password"
              name="password"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Password"
              required
            />

            <input
              type="password"
              name="password"
              value={email}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>

         
        </form>
      </div>
    </div>
  )
}
PasswordReset.propTypes ={
    handleOnChange: PropTypes.func.isRequired,
    handleResetOnSubmit:PropTypes.func.isRequired,
    switchform:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,

}

export default PasswordReset