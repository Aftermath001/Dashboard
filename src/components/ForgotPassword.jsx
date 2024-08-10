import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className='text-black text-center'>Reset Password</h1>
        <form  onSubmit={handleResetOnSubmit}>
          <div className="form-group">
            <label>Enter your email to recover your password</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Send Code
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

export default ForgotPassword