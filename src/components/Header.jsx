import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='absolute px-8 py-2 z-10'>
      <img className='w-44' src={logo} alt='logo' />
    </div>
  );
};

export default Header;
