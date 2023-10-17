import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth'; // Adjust the import path according to your project structure

const LogoutPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Adjust the import path according to your project structure

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout();
        navigate('/login');
      } catch (error) {
        console.error("Logout failed", error);
      }
    };
  
    handleLogout();
  }, [logout, navigate]);
  

  return (
    <div>
      Logging out...
    </div>
  );
};

export default LogoutPage;
