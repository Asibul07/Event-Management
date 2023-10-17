import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import PrivateRoute from './routes/PrivateRoute';
import Loader from './components/Loader';
import { AuthProvider, useAuth } from './context/AuthContext';

function App() {
  const { user, authLoading } = useAuth();

  useEffect(() => {
    console.log("Auth loading:", authLoading);
    console.log("User:", user);
  }, [authLoading, user]);

  return (
    <AuthProvider>
      {authLoading ? (
        // Return a loader or something to indicate loading
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/service/:id" element={<PrivateRoute><ServiceDetailPage /></PrivateRoute>} />
            <Route path="/contact" element={<PrivateRoute><ContactPage /></PrivateRoute>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      )}
    </AuthProvider>
  );
}

export default App;
