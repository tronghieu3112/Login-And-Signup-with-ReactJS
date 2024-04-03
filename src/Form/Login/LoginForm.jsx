// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      console.log(response.data);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* <i class="fa-solid fa-user"></i> */}
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
        {/* <i class="fa-solid fa-key"></i> */}
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
        <button type="submit">Login</button><br></br>
        <span className='fogot'><a>Quên mật khẩu</a></span><br></br>
        <span className='have'>if you don't have a account <Link to="/SignUp/SignUpForm.jsx">Link Text</Link></span>
        <div className='export'>
          <h2>Log In With</h2>
         <a href='#' className='google'><i class="fa-brands fa-google"></i></a>
         <a href='#' className='facebook'><i class="fa-brands fa-facebook"></i></a>
         <a href='#' className='tiktok'><i class="fa-brands fa-tiktok"></i></a> 
         <a href='#' className='twitter'><i class="fa-brands fa-twitter"></i></a>
         </div>
      </form>
    </div>
  );
};

export default LoginForm;
