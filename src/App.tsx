// src/App.tsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the pages from the 'pages' folder
import { HomePage } from './pages/HomePage';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    // BrowserRouter is required to use Routes and Route
    <BrowserRouter>
      <Routes>
        {/* Route 1: The Login/Home Screen, shown at the root path "/" */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route 2: The Dashboard, shown at the path "/dashboard" */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}