
import React from 'react';
import { TrendingUp, TrendingDown, Clock, CheckCircle, AlertCircle, Users } from 'lucide-react';

const metrics = [
  {
    title: '進行中のプロジェクト',
    value: '24',
    change: '+12%',
    changeType: 'increase',
    icon: Clock,
    description: '先月から'
  },
  {
    title: '完了したタスク',
    value: '1,247',
    change: '+8%',
    changeType: 'increase',
    icon: CheckCircle,
    description: '今月'
  },
  {
    title: 'チームメンバー',
    value: '32',
    change: '+3',
    changeType: 'increase',
    icon: Users,
    description: '今四半期の新規'
  },
  {
    title: '遅延タスク',
    value: '18',
    change: '-24%',
    changeType: 'decrease',
    icon: AlertCircle,
    description: '今週の改善'
  }
];

const MetricsWidgets = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.changeType === 'increase' ? TrendingUp : TrendingDown;
        const trendColor = metric.changeType === 'increase' ? 'text-green-600' : 'text-red-600';
        const trendBg = metric.changeType === 'increase' ? 'bg-green-50' : 'bg-red-50';
        
        return (
          <div key={index} className="bg-white rounded-lg p-4 lg:p-6 widget-shadow hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <div className={`p-2 rounded-lg ${
                metric.title === '進行中のプロジェクト' ? 'bg-blue-50' :
                metric.title === '完了したタスク' ? 'bg-green-50' :
                metric.title === 'チームメンバー' ? 'bg-purple-50' : 'bg-yellow-50'
              }`}>
                <Icon className={`h-4 w-4 lg:h-5 lg:w-5 ${
                  metric.title === '進行中のプロジェクト' ? 'text-blue-600' :
                  metric.title === '完了したタスク' ? 'text-green-600' :
                  metric.title === 'チームメンバー' ? 'text-purple-600' : 'text-yellow-600'
                }`} />
              </div>
              <div className={`flex items-center ${trendBg} px-2 py-1 rounded-full`}>
                <TrendIcon className={`h-3 w-3 ${trendColor} mr-1`} />
                <span className={`text-xs font-medium ${trendColor}`}>{metric.change}</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600">{metric.title}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsWidgets;
