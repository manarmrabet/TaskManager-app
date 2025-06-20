import React from 'react'

import { useState } from 'react';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`flex min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout