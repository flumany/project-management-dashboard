
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import MetricsWidgets from '@/components/MetricsWidgets';
import ProjectCards from '@/components/ProjectCards';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <MetricsWidgets />
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Active Projects</h2>
                <div className="flex items-center space-x-2">
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                    <option>All Projects</option>
                    <option>High Priority</option>
                    <option>In Progress</option>
                    <option>Overdue</option>
                  </select>
                  <button className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm hover:bg-gray-50 transition-colors">
                    Filter
                  </button>
                </div>
              </div>
            </div>
            
            <ProjectCards />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
