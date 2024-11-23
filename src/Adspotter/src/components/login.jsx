import React from 'react';
//import './Login.css'; // Import styles for the Login page

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
