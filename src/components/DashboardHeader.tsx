
import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, here's what's happening with your projects</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
          
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          {/* New Project Button */}
          <Button className="bg-brand-500 hover:bg-brand-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
