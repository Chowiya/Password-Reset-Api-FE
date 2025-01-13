import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://password-reset-api-be.onrender.com/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className='flex  justify-between min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
       <h2>{user ? (
        <div>
          <p className='text-4xl font-mono mt-6 ml-36'>HEY 👋  <span className='text-pink-400 font-extrabold'>{user.name} </span></p>
            
             <p className='font-mono ml-36'>WELCOME TO PROFILE PAGE </p> 
             <p className='font-mono ml-36'>HERE YOU CAN EDIT YOUR PROFILE</p>
             <p className='font-mono ml-36'>AND ALSO YOU CAN UPLOAD YOUR PROFILE PHOTO</p>


         
        </div>
      ) : (
        <p>Loading...</p>
      )}</h2>
      <div className='p-5'>
      <h2 className="text-2xl font-bold mb-4 mt-5">Profile</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button className='rounded-full px-6 py-2 bg-slate-600 text-white mr-2 mt-5 hover:bg-slate-500'>Edit</button>
       <button className='rounded-full px-6 py-2 bg-slate-600 text-white hover:bg-slate-500'>Logout</button><br />
       <button className='rounded-full px-6 py-2 bg-slate-600 text-white mt-5 hover:bg-slate-500'>upload profile photo</button>
      </div>
    </div>
  );
}

export default Profile;