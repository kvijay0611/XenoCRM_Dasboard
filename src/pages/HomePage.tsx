// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, TrendingUp, Users, ChevronRight } from 'lucide-react';

const accounts = [
  { id: 1, name: 'UrbanThreads Inc.', status: 'Active', revenue: '₹12.4M', campaigns: 7, color: 'border-purple-500' },
  { id: 2, name: 'Electro Gadgets Co.', status: 'Trial', revenue: '₹3.2M', campaigns: 3, color: 'border-blue-500' },
  { id: 3, name: 'Global Foods Corp.', status: 'Suspended', revenue: 'N/A', campaigns: 0, color: 'border-red-500' },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <header className="mb-8 flex items-center gap-4">
          <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-xl font-bold text-2xl shadow-lg">X</div>
          <div>
             <h1 className="text-3xl font-bold text-gray-900">Welcome back, Keerti</h1>
             <p className="text-gray-500">Select an account to manage campaigns</p>
          </div>
        </header>

        <div className="bg-white border-l-4 border-red-500 p-4 mb-8 rounded-lg shadow-sm flex items-start gap-3">
             <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
             <div>
                <p className="font-semibold text-red-900">Action Required</p>
                <p className="text-sm text-red-700 mt-1">
                    Global Foods Corp. account access has been suspended due to payment failure.
                </p>
             </div>
        </div>

        <div className="grid gap-4">
          {accounts.map((account) => (
            <div
              key={account.id}
              onClick={() => navigate('/dashboard')}
              className={`bg-white p-6 rounded-xl border border-gray-100 border-l-4 ${account.color} shadow-sm hover:shadow-lg hover:translate-x-1 transition-all cursor-pointer flex flex-col md:flex-row justify-between md:items-center gap-4`}
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{account.name}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
                        account.status === 'Active' ? 'bg-green-100 text-green-700' : 
                        account.status === 'Trial' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {account.status}
                    </span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-gray-100 rounded text-gray-500"><TrendingUp className="w-4 h-4" /></div>
                  <div>
                      <p className="text-xs text-gray-400">Revenue</p>
                      <p className="font-semibold text-gray-900">{account.revenue}</p>
                  </div>
                </div>
                <div className="hidden md:block pl-4 border-l border-gray-100">
                    <ChevronRight className="w-6 h-6 text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}