// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:5000/login', { username, password });
    localStorage.setItem('token', response.data.token);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-2" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
