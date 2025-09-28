import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate Form Data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // Sign In/ Sign Up
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage(null);

    name.current.value = '';
    email.current.value = '';
    password.current.value = '';
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg'
          alt='background-image'
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='w-4/12 absolute bg-black/80 p-12  my-36 mx-auto right-0 left-0 text-white rounded-lg'
      >
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full bg-gray-600'
          />
        )}
        <input
          ref={email}
          type='email'
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-600'
        />

        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-600'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button
          className='p-4  my-6 bg-red-600 w-full rounded-sm text-lg cursor-pointer'
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign Up now'
            : 'Already Registered? Sign In Now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
