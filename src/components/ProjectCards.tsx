
import React from 'react';
import { Calendar, Users, MoreHorizontal } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Webサイトリニューアル',
    description: '新ブランディングに合わせた企業サイト全面改修',
    progress: 65,
    status: 'progress',
    priority: 'high',
    dueDate: '2024-01-15',
    team: [
      { name: '佐藤 花子', avatar: '佐' },
      { name: '田中 太郎', avatar: '田' },
      { name: '鈴木 美咲', avatar: '鈴' }
    ],
    tasks: { completed: 13, total: 20 }
  },
  {
    id: 2,
    name: 'モバイルアプリ開発',
    description: '顧客エンゲージメント向上のためのiOS・Androidアプリ',
    progress: 42,
    status: 'progress',
    priority: 'high',
    dueDate: '2024-02-28',
    team: [
      { name: '山田 健太', avatar: '山' },
      { name: '高橋 恵美', avatar: '高' }
    ],
    tasks: { completed: 8, total: 19 }
  },
  {
    id: 3,
    name: 'データ移行プロジェクト',
    description: 'レガシーシステムからクラウドインフラへの移行',
    progress: 88,
    status: 'complete',
    priority: 'medium',
    dueDate: '2024-01-10',
    team: [
      { name: '渡辺 亮', avatar: '渡' },
      { name: '小林 純', avatar: '小' }
    ],
    tasks: { completed: 22, total: 25 }
  },
  {
    id: 4,
    name: 'マーケティングキャンペーン',
    description: 'Q1デジタルマーケティング施策の企画・実行',
    progress: 15,
    status: 'delayed',
    priority: 'medium',
    dueDate: '2024-01-20',
    team: [
      { name: '松本 由美', avatar: '松' },
      { name: '伊藤 慎一', avatar: '伊' },
      { name: '中村 麻衣', avatar: '中' }
    ],
    tasks: { completed: 3, total: 16 }
  },
  {
    id: 5,
    name: 'セキュリティ監査',
    description: '包括的なセキュリティレビューと実装',
    progress: 0,
    status: 'planned',
    priority: 'high',
    dueDate: '2024-03-15',
    team: [
      { name: '木村 勇', avatar: '木' }
    ],
    tasks: { completed: 0, total: 12 }
  },
  {
    id: 6,
    name: 'ユーザー研修',
    description: '新システム導入に向けた研修プログラム',
    progress: 30,
    status: 'progress',
    priority: 'low',
    dueDate: '2024-02-10',
    team: [
      { name: '森田 恵子', avatar: '森' },
      { name: '清水 浩二', avatar: '清' }
    ],
    tasks: { completed: 6, total: 20 }
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'complete': return 'bg-green-50 text-green-700 border border-green-200';
    case 'progress': return 'bg-blue-50 text-blue-700 border border-blue-200';
    case 'delayed': return 'bg-red-50 text-red-700 border border-red-200';
    case 'planned': return 'bg-gray-50 text-gray-700 border border-gray-200';
    default: return 'bg-gray-50 text-gray-700 border border-gray-200';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'complete': return '完了';
    case 'progress': return '進行中';
    case 'delayed': return '遅延';
    case 'planned': return '予定';
    default: return status;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'border-l-red-400';
    case 'medium': return 'border-l-yellow-400';
    case 'low': return 'border-l-green-400';
    default: return 'border-l-gray-400';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`bg-white rounded-lg p-5 border border-gray-100 hover:shadow-md transition-shadow duration-200 border-l-4 ${getPriorityColor(project.priority)}`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 mb-2 truncate">{project.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">進捗</span>
              <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
            <span className="text-sm text-gray-500">
              {project.tasks.completed}/{project.tasks.total} タスク
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <Calendar className="h-4 w-4 mr-1.5" />
              {formatDate(project.dueDate)}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-400 mr-2" />
              <div className="flex -space-x-1">
                {project.team.slice(0, 3).map((member, index) => (
                  <div
                    key={index}
                    className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-700 border-2 border-white shadow-sm"
                    title={member.name}
                  >
                    {member.avatar}
                  </div>
                ))}
                {project.team.length > 3 && (
                  <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 border-2 border-white shadow-sm">
                    +{project.team.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
