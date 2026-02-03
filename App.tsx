
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NGOListing from './pages/NGOListing';
import MedicineVerify from './pages/MedicineVerify';
import Donate from './pages/Donate';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Compliance from './pages/Compliance';
import { User, UserRole } from './types';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Persistence check (simulated)
  useEffect(() => {
    const savedUser = localStorage.getItem('sevasetu_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('sevasetu_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('sevasetu_user');
  };

  return (
    <HashRouter>
      <Layout user={currentUser} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ngos" element={<NGOListing />} />
          <Route path="/medicine-verify" element={<MedicineVerify />} />
          <Route path="/donate" element={<Donate user={currentUser} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/compliance" element={<Compliance />} />
          
          <Route 
            path="/dashboard" 
            element={currentUser ? <Dashboard user={currentUser} /> : <Navigate to="/login" />} 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
