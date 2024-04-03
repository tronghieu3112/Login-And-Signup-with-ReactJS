import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', { username, password });
      console.log(response.data);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className='container'>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
      <i class="fa-solid fa-user"></i>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
        <button type="submit">Sign Up</button><br></br>
        <span>if you have a account.<a>Click me</a></span>
        <div className='export'>
          <h2>Sign Up With</h2>
         <a href='#' className='google'><i class="fa-brands fa-google"></i></a>
         <a href='#' className='facebook'><i class="fa-brands fa-facebook"></i></a>
         <a href='#' className='tiktok'><i class="fa-brands fa-tiktok"></i></a> 
         <a href='#' className='twitter'><i class="fa-brands fa-twitter"></i></a>
         </div>
      </form>
    </div>
  );
};

export default SignUpForm;
