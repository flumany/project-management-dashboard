
import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="ml-12 lg:ml-0">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">ダッシュボード</h1>
          <p className="text-sm lg:text-base text-gray-600">お帰りなさい。プロジェクトの状況をご確認ください</p>
        </div>
        
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Search */}
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="プロジェクトを検索..."
              className="pl-10 pr-4 py-2 w-full sm:w-60 lg:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm"
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
          <Button className="bg-brand-500 hover:bg-brand-600 text-white text-sm px-3 lg:px-4">
            <Plus className="h-4 w-4 mr-1 lg:mr-2" />
            <span className="hidden sm:inline">新規プロジェクト</span>
            <span className="sm:hidden">新規</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
