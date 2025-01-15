import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, formData);
      setMessage(response.data.message);
      navigate('/login');

    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (

    <>
     <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
    <div className="max-w-md mx-auto border-2">
      <h2 className="text-2xl font-bold mb-4 font-serif text-center">Signup</h2>


      <form onSubmit={handleSubmit} className="space-y-4 p-5">
        <input type="text" name="name" placeholder="UserName" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Signup</button>
        <p>Already have an account <Link to={'/login'} className='text-blue-600 underline'>Login</Link></p>
      </form>

      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
    </div>
    </>
  );
}

export default Signup;