
import React, { useState } from 'react';
import { Home, BarChart3, Calendar, Users, Settings, FolderKanban, Activity, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'ダッシュボード', icon: Home, current: true },
  { name: 'プロジェクト', icon: FolderKanban, current: false },
  { name: '分析', icon: BarChart3, current: false },
  { name: 'カレンダー', icon: Calendar, current: false },
  { name: 'チーム', icon: Users, current: false },
  { name: 'アクティビティ', icon: Activity, current: false },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md border border-gray-200"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        flex flex-col w-64 bg-white border-r border-gray-200 h-screen
        fixed lg:relative z-50 lg:z-0
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PH</span>
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">プロジェクトハブ</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  item.current
                    ? 'bg-brand-50 text-brand-700 border-r-2 border-brand-500'
                    : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                }`}
              >
                <Icon
                  className={`mr-3 h-5 w-5 transition-colors ${
                    item.current ? 'text-brand-500' : 'text-gray-400 group-hover:text-brand-500'
                  }`}
                />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* User profile */}
        <div className="px-4 py-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium text-sm">田中</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">田中太郎</p>
              <p className="text-xs text-gray-500">プロジェクトマネージャー</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
