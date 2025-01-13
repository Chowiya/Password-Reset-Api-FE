import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function NewPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5002/auth/new-password/${token}`, { password });
      setMessage(response.data.message);
      navigate('/login');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Set New Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Reset Password</button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
}

export default NewPassword;
