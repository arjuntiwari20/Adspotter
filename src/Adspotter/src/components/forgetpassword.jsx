import React from 'react';
//import './ForgotPassword.css'; // Import styles for the Forgot Password page

const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email to reset password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

