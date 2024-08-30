"use client";

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import DashboardLayout from '../components/DashboardLayout';
import {
  ChartBar, Users, ClipboardList, Clock, ArrowRight, Bell, Star, PlusCircle,
  Activity, Calendar, CheckSquare, Briefcase, FileText, Settings, Mail, Loader
} from "lucide-react";
import Link from 'next/link';

interface DashboardData {
  user: { name: string };
  stats: {
    totalProjects: number;
    tasksInProgress: number;
    completedTasks: number;
    teamMembers: number;
  };
  recentActivities: Array<{
    id: string;
    content: string;
    createdAt: string;
  }>;
  tasks: Array<{
    id: string;
    title: string;
    status: string;
  }>;
  projects: Array<{
    id: string;
    name: string;
    status: string;
  }>;
}

export default function Dashboard() {
  const { data: session } = useSession();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/dashboard');
      if (response.ok) {
        const data = await response.json();
        setDashboardData(data);
      } else {
        throw new Error('Failed to fetch dashboard data');
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <p className="text-red-500 text-xl mb-4">{error}</p>
            <button onClick={fetchDashboardData} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Retry</button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow p-8 mb-10 text-white flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back, {session?.user?.name || 'User'}!</h1>
            <p className="mt-4 text-lg">Here's your productivity snapshot for today.</p>
          </div>
          <ChartBar className="w-12 h-12 opacity-50" />
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { color: 'bg-green-600', icon: PlusCircle, text: 'New Project', link: '/new-project' },
            { color: 'bg-yellow-600', icon: CheckSquare, text: 'Add Task', link: '/add-task' },
            { color: 'bg-purple-600', icon: Users, text: 'Team Chat', link: '/team-chat' },
            { color: 'bg-red-600', icon: Mail, text: 'Inbox', link: '/inbox' }
          ].map((btn, index) => (
            <Link key={index} href={btn.link} className={`flex items-center justify-center p-5 ${btn.color} text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}>
              <btn.icon className="w-7 h-7 mr-3" />
              <span className="text-lg font-medium">{btn.text}</span>
            </Link>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {['Total Projects', 'Tasks In Progress', 'Completed Tasks', 'Team Members'].map((stat, index) => (
            <div key={stat} className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <div className={`p-4 mr-4 rounded-lg ${['bg-blue-600', 'bg-yellow-600', 'bg-green-600', 'bg-purple-600'][index]} text-white`}>
                {[<Briefcase />, <Clock />, <CheckSquare />, <Users />][index]}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat}</p>
                {loading ? <Loader className="w-5 h-5 text-gray-400 animate-spin" /> : <p className="text-2xl font-semibold text-gray-800 dark:text-white">{dashboardData?.stats[['totalProjects', 'tasksInProgress', 'completedTasks', 'teamMembers'][index]] || 0}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Task Management and Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Task Management */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Task Management</h2>
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <Loader className="w-8 h-8 text-blue-500 animate-spin" />
              </div>
            ) : (
              <ul className="space-y-4">
                {(dashboardData?.tasks || []).slice(0, 5).map((task) => (
                  <li key={task.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">{task.title}</span>
                    <button className="text-blue-500 hover:text-blue-600" title="Mark as Complete"><CheckSquare className="w-6 h-6" /></button>
                  </li>
                ))}
              </ul>
            )}
            <Link href="/tasks" className="text-blue-500 hover:underline mt-6 inline-block">View All Tasks</Link>
          </div>

          {/* Project Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Project Overview</h2>
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <Loader className="w-8 h-8 text-blue-500 animate-spin" />
              </div>
            ) : (
              <ul className="space-y-4">
                {(dashboardData?.projects || []).slice(0, 5).map((project) => (
                  <li key={project.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">{project.name}</span>
                    <span className={`px-3 py-1 rounded-full text-xs ${project.status === 'Completed' ? 'bg-green-500 text-white' : project.status === 'In Progress' ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'}`}>{project.status}</span>
                  </li>
                ))}
              </ul>
            )}
            <Link href="/projects" className="text-blue-500 hover:underline mt-6 inline-block">View All Projects</Link>
          </div>
        </div>

        {/* Calendar View */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Upcoming Deadlines</h2>
          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 7 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              return (
                <div key={i} className="text-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm font-semibold">{date.toLocaleDateString('en-US', { weekday: 'short' })}</p>
                  <p className="text-2xl">{date.getDate()}</p>
                </div>
              );
            })}
          </div>
          <Link href="/calendar" className="text-blue-500 hover:underline mt-6 inline-block">View Full Calendar</Link>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Recent Activities</h2>
            <Link href="/activities" className="text-blue-500 hover:underline flex items-center"><ArrowRight className="w-5 h-5 ml-2" />View All</Link>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <Loader className="w-8 h-8 text-blue-500 animate-spin" />
            </div>
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {(dashboardData?.recentActivities || []).map((activity) => (
                <li key={activity.id} className="py-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-green-500 text-white rounded-lg"><Activity className="w-6 h-6" /></div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{activity.content}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{new Date(activity.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
