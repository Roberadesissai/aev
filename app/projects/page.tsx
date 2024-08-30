// app/projects/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import EmployerLayout from '../components/EmployerLayout';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, UserPlus, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const { data: session } = useSession();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '', deadline: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    // TODO: Implement actual API call
    setLoading(true);
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    // TODO: Implement actual project creation
    console.log('Creating new project:', newProject);
    setShowNewProjectModal(false);
    setNewProject({ title: '', description: '', deadline: '' });
    // Refetch projects after creation
    fetchProjects();
  };

  const handleDeleteProject = async (projectId) => {
    // TODO: Implement actual project deletion
    console.log('Deleting project:', projectId);
    // Refetch projects after deletion
    fetchProjects();
  };

  const handleAssignStudent = async (projectId, studentId) => {
    // TODO: Implement actual student assignment
    console.log('Assigning student:', studentId, 'to project:', projectId);
    // Refetch projects after assignment
    fetchProjects();
  };

  const filteredProjects = projects
    .filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(project => filterStatus === 'all' || project.status === filterStatus);

  return (
    <EmployerLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Projects Management</h1>
          <button
            onClick={() => setShowNewProjectModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition duration-300"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Project
          </button>
        </div>

        <div className="mb-6 flex space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="spinner"></div>
            <p className="mt-2 text-gray-600">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <div className="relative">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      {/* Dropdown menu for project actions */}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === 'completed' ? 'bg-green-200 text-green-800' :
                      project.status === 'in_progress' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {project.status.replace('_', ' ')}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.deadline}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2 overflow-hidden">
                      {project.assignedStudents.map((student, index) => (
                        <img
                          key={student.id}
                          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                          src={student.avatar}
                          alt={student.name}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => handleAssignStudent(project.id)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <UserPlus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* New Project Modal */}
        {showNewProjectModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
              <form onSubmit={handleCreateProject}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
                    Deadline
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newProject.deadline}
                    onChange={(e) => setNewProject({...newProject, deadline: e.target.value})}
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowNewProjectModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </EmployerLayout>
  );
}