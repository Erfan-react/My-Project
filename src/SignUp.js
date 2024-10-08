import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
// import React, {useState} from 'react';

const Signup = ({onSignup}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     const userData = { name, email, password }
    try {
      const response = await axios.post('http://localhost:3001/users',userData);
      console.log(response.data);

      onSignup();

    } catch (error) {
      console.error('There was an error signing up!', error);
    } 
  }
  return (
    <form onSubmit={handleSubmit}>
  <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  )
};

export default Signup;






