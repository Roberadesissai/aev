// app/components/EmployerLayout.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Users, Settings, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

interface EmployerLayoutProps {
  children: React.ReactNode;
}

const EmployerLayout: React.FC<EmployerLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl font-bold text-blue-600">AEV SCHEDULER</h1>
        </div>
        <nav className="mt-5">
          <Link href="/dashboard" className={`flex items-center mt-4 py-2 px-6 ${isActive('/dashboard') ? 'bg-blue-600 bg-opacity-25 text-blue-600' : 'text-gray-500 hover:bg-blue-600 hover:bg-opacity-25 hover:text-blue-600'}`}>
            <Home className="h-5 w-5" />
            <span className="mx-3">Dashboard</span>
          </Link>
          <Link href="/projects" className={`flex items-center mt-4 py-2 px-6 ${isActive('/projects') ? 'bg-blue-600 bg-opacity-25 text-blue-600' : 'text-gray-500 hover:bg-blue-600 hover:bg-opacity-25 hover:text-blue-600'}`}>
            <Briefcase className="h-5 w-5" />
            <span className="mx-3">Projects</span>
          </Link>
          <Link href="/students" className={`flex items-center mt-4 py-2 px-6 ${isActive('/students') ? 'bg-blue-600 bg-opacity-25 text-blue-600' : 'text-gray-500 hover:bg-blue-600 hover:bg-opacity-25 hover:text-blue-600'}`}>
            <Users className="h-5 w-5" />
            <span className="mx-3">Students</span>
          </Link>
          <Link href="/settings" className={`flex items-center mt-4 py-2 px-6 ${isActive('/settings') ? 'bg-blue-600 bg-opacity-25 text-blue-600' : 'text-gray-500 hover:bg-blue-600 hover:bg-opacity-25 hover:text-blue-600'}`}>
            <Settings className="h-5 w-5" />
            <span className="mx-3">Settings</span>
          </Link>
        </nav>
        <div className="absolute bottom-0 my-10">
          <button
            className="flex items-center py-2 px-6 text-gray-500 hover:bg-blue-600 hover:bg-opacity-25 hover:text-blue-600"
            onClick={() => signOut()}
          >
            <LogOut className="h-5 w-5" />
            <span className="mx-3">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
};

export default EmployerLayout;