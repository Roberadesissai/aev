"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Home, Settings, User, Calendar, Bell, Clipboard, FileText, Ticket, Clock, CalendarCheck, CalendarArrowDown } from "lucide-react";

export function Sidemenu() {
  const { theme, setTheme } = useTheme();
  
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };

  return (
    <nav className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <Link href="/">
        <h1 className="flex items-center space-x-2">
          <span className="text-xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            AEV SCHEDULER
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
              v1.0
            </span>
          </span>
        </h1>
      </Link>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3 ">
          <div className="relative mx-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
            <input
              type="text"
              className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border-none rounded-md dark:bg-gray-900 dark:text-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Search"
              style={{
                boxShadow: "inset 0 0 0 2px #3B82F6",
                border: "none"
              }}
            />
          </div>

          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/dashboard">
            <Home className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Home</span>
          </Link>
          
          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/projects">
            <Clipboard className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Projects</span>
          </Link>

          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/tasks">
            <FileText className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Tasks</span>
          </Link>

          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/reporting">
            <Bell className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Reporting</span>
          </Link>

          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/users">
            <User className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Users</span>
          </Link>

          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/settings">
            <Settings className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Settings</span>
          </Link>

          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/calendar">
            <Calendar className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Calendar</span>
          </Link>

          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/scheduler">
            <CalendarCheck className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Scheduler</span>
          </Link>

          <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="/time-off">
            <CalendarArrowDown className="w-5 h-5" />
            <span className="mx-2 text-sm font-medium">Request Time Off</span>
          </Link>
        </nav>

        <div className="px-1 py-4">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`w-full px-4 py-2 rounded-md backdrop-blur-lg border shadow-md transition-colors duration-300 ${theme === "light"
                ? "text-gray-700 bg-white/30 border-white/10 hover:bg-white/40"
                : "text-white dark:bg-gray-800/30 dark:border-gray-700/10 dark:hover:bg-gray-800/40"
              }`}
          >
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        <div className="mt-6">
          <div className="p-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg flex items-start">
            <div className="ml-3">
              <h2 className="text-sm font-medium text-gray-800 dark:text-white">Employee Performance Review Available</h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                The latest performance reviews for your team are now available. You can view detailed reports and provide feedback to your employees.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-x-2">
              <img className="object-cover rounded-full h-7 w-7" src={session?.user?.image || "https://via.placeholder.com/50"} alt="avatar" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{session?.user?.name || "User"}</span>
            </div>
            
            <button
              onClick={handleSignOut}
              className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}