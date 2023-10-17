import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleAuth } from '../hooks/useGoogleAuth';
import { FaGoogle } from 'react-icons/fa';

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useGoogleAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/home');
    } catch (error) {
      console.error("Google sign in failed", error);
    }
  };

  return (
    <div className=' justify-center flex'>
      <button onClick={handleGoogleSignIn} className="flex items-center justify-center">
        <FaGoogle className="mr-2" />
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;
