import React from 'react';
import logo from '../assets/logo.png';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User signed out.');
        navigate('/');
      })
      .catch((error) => {
        // An error happened.
        console.error('Sign out error', error);
        navigate('/error');
      });
  };

  return (
    <div className='absolute px-8 py-2 z-10 w-screen flex justify-between'>
      <img className='w-44' src={logo} alt='logo' />
      {user && (
        <div className='flex p-2 flex-row items-center'>
          <img
            className='w-10 h-10 '
            // src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
            src={user?.photoURL}
            alt='usericon'
          />
          <button className='cursor-pointer' onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
