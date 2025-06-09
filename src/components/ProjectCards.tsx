
import React from 'react';
import { Calendar, Users, MoreHorizontal } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website with new branding',
    progress: 65,
    status: 'progress',
    priority: 'high',
    dueDate: '2024-01-15',
    team: [
      { name: 'Sarah Chen', avatar: 'SC' },
      { name: 'Mike Johnson', avatar: 'MJ' },
      { name: 'Lisa Wong', avatar: 'LW' }
    ],
    tasks: { completed: 13, total: 20 }
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'iOS and Android app for customer engagement',
    progress: 42,
    status: 'progress',
    priority: 'high',
    dueDate: '2024-02-28',
    team: [
      { name: 'David Kim', avatar: 'DK' },
      { name: 'Emma Davis', avatar: 'ED' }
    ],
    tasks: { completed: 8, total: 19 }
  },
  {
    id: 3,
    name: 'Data Migration',
    description: 'Migrate legacy systems to cloud infrastructure',
    progress: 88,
    status: 'complete',
    priority: 'medium',
    dueDate: '2024-01-10',
    team: [
      { name: 'Alex Rodriguez', avatar: 'AR' },
      { name: 'Sam Taylor', avatar: 'ST' }
    ],
    tasks: { completed: 22, total: 25 }
  },
  {
    id: 4,
    name: 'Marketing Campaign',
    description: 'Q1 digital marketing campaign launch',
    progress: 15,
    status: 'delayed',
    priority: 'medium',
    dueDate: '2024-01-20',
    team: [
      { name: 'Maya Patel', avatar: 'MP' },
      { name: 'Chris Brown', avatar: 'CB' },
      { name: 'Nina Lee', avatar: 'NL' }
    ],
    tasks: { completed: 3, total: 16 }
  },
  {
    id: 5,
    name: 'Security Audit',
    description: 'Comprehensive security review and implementation',
    progress: 0,
    status: 'planned',
    priority: 'high',
    dueDate: '2024-03-15',
    team: [
      { name: 'Robert Wilson', avatar: 'RW' }
    ],
    tasks: { completed: 0, total: 12 }
  },
  {
    id: 6,
    name: 'User Training',
    description: 'Training program for new system rollout',
    progress: 30,
    status: 'progress',
    priority: 'low',
    dueDate: '2024-02-10',
    team: [
      { name: 'Grace Kim', avatar: 'GK' },
      { name: 'Tom Anderson', avatar: 'TA' }
    ],
    tasks: { completed: 6, total: 20 }
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'complete': return 'bg-green-100 text-green-800';
    case 'progress': return 'bg-yellow-100 text-yellow-800';
    case 'delayed': return 'bg-red-100 text-red-800';
    case 'planned': return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'border-l-red-500';
    case 'medium': return 'border-l-yellow-500';
    case 'low': return 'border-l-green-500';
    default: return 'border-l-gray-500';
  }
};

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className={`bg-white rounded-lg p-6 widget-shadow hover:shadow-lg transition-all duration-200 border-l-4 ${getPriorityColor(project.priority)} cursor-pointer hover:-translate-y-1`}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm text-gray-600">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-brand-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Status and Tasks */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
            <span className="text-sm text-gray-600">
              {project.tasks.completed}/{project.tasks.total} tasks
            </span>
          </div>

          {/* Due Date and Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(project.dueDate).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-400 mr-2" />
              <div className="flex -space-x-2">
                {project.team.slice(0, 3).map((member, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center text-xs font-medium text-brand-700 border-2 border-white"
                    title={member.name}
                  >
                    {member.avatar}
                  </div>
                ))}
                {project.team.length > 3 && (
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 border-2 border-white">
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
