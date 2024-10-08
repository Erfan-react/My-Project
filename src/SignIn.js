

import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const SignIn = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {

const response = await axios.get('http://localhost:3001/users');
const users = response.data;
const user = users.find(

(user) => user.email === email && user.password === password

);

if(user) {
alert ('Sign in successful')
onLogin();
} else {

  alert('invalid email and password')
}

}


catch (error) {

  console.error('error during sign in' , error);
  alert('error signing in');
}
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
required
      />
      </div>
      <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
required
      />
      </div>
      <button type="submit">Sign In</button>
    </form>
  )
    }



export default SignIn;
