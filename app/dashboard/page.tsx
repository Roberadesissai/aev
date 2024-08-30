// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import DashboardLayout from '../components/DashboardLayout';
import { ChartBar, Users, ClipboardList, Clock, ArrowRight, Bell, Star, PlusCircle, Activity, Calendar, CheckSquare, Briefcase, FileText, Settings, Mail } from "lucide-react";
import Link from 'next/link';

export default function Dashboard() {
  const { data: session } = useSession();
  const [dashboardData, setDashboardData] = useState<{ user: any; stats: any; recentActivities: any; tasks: any[]; projects: any[] } | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/dashboard');
      if (response.ok) {
        const data = await response.json();
        setDashboardData(data);
      } else {
        console.error('Failed to fetch dashboard data');
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  if (!dashboardData) {
    return <DashboardLayout>Loading dashboard data...</DashboardLayout>;
  }

  const { user, stats, recentActivities, tasks, projects } = dashboardData;

  return (
    <DashboardLayout>
      <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow p-6 mb-8 text-white">
          <h1 className="text-3xl font-bold">
            Welcome Back, {user.name}!
          </h1>
          <p className="mt-2 text-lg">
            Here&rsquo;s your productivity snapshot for today.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="flex items-center justify-center p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors">
            <PlusCircle className="w-6 h-6 mr-2" />
            New Project
          </button>
          <button className="flex items-center justify-center p-4 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition-colors">
            <CheckSquare className="w-6 h-6 mr-2" />
            Add Task
          </button>
          <button className="flex items-center justify-center p-4 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition-colors">
            <Users className="w-6 h-6 mr-2" />
            Team Chat
          </button>
          <button className="flex items-center justify-center p-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors">
            <Mail className="w-6 h-6 mr-2" />
            Inbox
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Projects */}
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Projects
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {stats.totalProjects}
              </p>
            </div>
          </div>

          {/* Tasks in Progress */}
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-3 mr-4 bg-yellow-500 text-white rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tasks In Progress
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {stats.tasksInProgress}
              </p>
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-3 mr-4 bg-green-500 text-white rounded-full">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Completed Tasks
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {stats.completedTasks}
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-3 mr-4 bg-purple-500 text-white rounded-full">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Team Members
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                {stats.teamMembers}
              </p>
            </div>
          </div>
        </div>

        {/* Task Management and Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Task Management */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Task Management</h2>
            <ul className="space-y-3">
              {tasks.slice(0, 5).map((task: any) => (
                <li key={task.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">{task.title}</span>
                  <button className="text-blue-500 hover:text-blue-600">
                    <CheckSquare className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
            <Link href="/tasks" className="text-blue-500 hover:underline mt-4 inline-block">
              View All Tasks
            </Link>
          </div>

          {/* Project Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Project Overview</h2>
            <ul className="space-y-3">
              {projects.slice(0, 5).map((project: any) => (
                <li key={project.id} className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">{project.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Completed' ? 'bg-green-500 text-white' :
                    project.status === 'In Progress' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/projects" className="text-blue-500 hover:underline mt-4 inline-block">
              View All Projects
            </Link>
          </div>
        </div>

        {/* Calendar View */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Upcoming Deadlines</h2>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              return (
                <div key={i} className="text-center p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm font-semibold">{date.toLocaleDateString('en-US', { weekday: 'short' })}</p>
                  <p className="text-lg">{date.getDate()}</p>
                </div>
              );
            })}
          </div>
          <Link href="/calendar" className="text-blue-500 hover:underline mt-4 inline-block">
            View Full Calendar
          </Link>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Recent Activities
            </h2>
            <Link
              href="/activities"
              className="text-blue-500 hover:underline flex items-center"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentActivities.map((activity: any) => (
              <li key={activity.id} className="py-4">
                <div className="flex items-center">
                  <div className="p-2 bg-green-500 text-white rounded-full">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.content}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {new Date(activity.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}