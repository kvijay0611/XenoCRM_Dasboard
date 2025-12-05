// src/pages/Dashboard.tsx

import React from 'react';
// FIX: The paths MUST be "../components/..." to look outside the 'pages' folder
import { TopNav } from '../components/TopNav';
import { KPICards } from '../components/KPICards';
import { CampaignChart } from '../components/CampaignChart';
import { CampaignsTable } from '../components/CampaignsTable';
import { AlertsPanel } from '../components/AlertsPanel';
import { SegmentsCard } from '../components/SegmentsCard';
import { RecommendedActions } from '../components/RecommendedActions';

// FIX: Must use 'export function Dashboard' so App.tsx can import it by name
export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      
      <main className="max-w-[1440px] mx-auto p-6 space-y-6">
        {/* KPIs */}
        <KPICards />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Charts and Table */}
          <div className="col-span-8 space-y-6">
            <CampaignChart />
            <CampaignsTable />
          </div>
          
          {/* Right Column - Alerts */}
          <div className="col-span-4">
            <AlertsPanel />
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7">
            <SegmentsCard />
          </div>
          <div className="col-span-5">
            <RecommendedActions />
          </div>
        </div>
      </main>
    </div>
  );
}