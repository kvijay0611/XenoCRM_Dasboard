// src/components/TopNav.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // <--- 1. Import Link
import { Bell, ChevronDown, Calendar } from 'lucide-react';

export function TopNav() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left - Logo & Brand */}
          <div className="flex items-center gap-8">
            
            {/* --- 2. CLICKABLE HOME LINK START --- */}
            {/* Replaced the <div> with <Link to="/"> */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <span className="text-2xl font-semibold text-gray-900">Xeno</span>
            </Link>
            {/* --- CLICKABLE HOME LINK END --- */}
            
            {/* Brand Selector */}
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-white text-xs">
                UT
              </div>
              <span className="font-medium">UrbanThreads</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          {/* Right - Controls */}
          <div className="flex items-center gap-4">
            {/* Date Range Picker */}
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700 font-medium text-sm">Last 7 days</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            {/* User Avatar */}
            <button className="flex items-center gap-3 pl-4 pr-3 py-2 hover:bg-gray-100 rounded-lg transition-colors border-l border-gray-100 ml-2">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-semibold text-gray-900">Keerti</div>
                <div className="text-xs text-gray-500">Marketing Manager</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-medium shadow-sm">
                K
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}