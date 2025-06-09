
import React from 'react';
import { Home, BarChart3, Calendar, Users, Settings, FolderKanban, Activity } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, current: true },
  { name: 'Projects', icon: FolderKanban, current: false },
  { name: 'Analytics', icon: BarChart3, current: false },
  { name: 'Calendar', icon: Calendar, current: false },
  { name: 'Team', icon: Users, current: false },
  { name: 'Activity', icon: Activity, current: false },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200 h-screen">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PM</span>
          </div>
          <span className="ml-3 text-lg font-semibold text-gray-900">ProjectHub</span>
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
            <span className="text-gray-600 font-medium text-sm">JD</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
