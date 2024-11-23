import React from 'react';
//import './Signup.css'; // Import styles for the Signup page

const Signup = () => {
  return (
    <div className="signup">
      <h2>Signup</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Create a password" />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

