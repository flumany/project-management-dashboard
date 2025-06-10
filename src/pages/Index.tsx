
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import MetricsWidgets from '@/components/MetricsWidgets';
import ProjectCards from '@/components/ProjectCards';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            <MetricsWidgets />
            
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900">進行中のプロジェクト</h2>
                <div className="flex items-center space-x-2">
                  <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent flex-1 sm:flex-none">
                    <option>すべてのプロジェクト</option>
                    <option>高優先度</option>
                    <option>進行中</option>
                    <option>遅延</option>
                  </select>
                  <button className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                    フィルター
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
