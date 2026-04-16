import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [currentView, setCurrentView] = useState('register');

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {currentView === 'register' ? (
        <Register onNavigate={setCurrentView} />
      ) : (
        <Login onNavigate={setCurrentView} />
      )}
    </div>
  );
}

export default App;
