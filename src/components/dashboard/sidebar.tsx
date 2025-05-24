'use client';

import Link from 'next/link';
import { Home, User, Settings, Code, CheckSquare, FileText, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export function Sidebar() {
  const pathname = usePathname();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className={`flex items-center p-2 hover:bg-gray-700 rounded transition-colors ${pathname === '/dashboard' ? 'bg-gray-700' : ''}`}>
              <Home className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard/code-snippets" className={`flex items-center p-2 hover:bg-gray-700 rounded transition-colors ${pathname === '/dashboard/code-snippets' ? 'bg-gray-700' : ''}`}>
              <Code className="mr-2" /> Code Snippets
            </Link>
          </li>
          <li>
            <Link href="/dashboard/checklist" className={`flex items-center p-2 hover:bg-gray-700 rounded transition-colors ${pathname === '/dashboard/checklist' ? 'bg-gray-700' : ''}`}>
              <CheckSquare className="mr-2" /> Checklist
            </Link>
          </li>
          <li>
            <Link href="/dashboard/ad-templates" className={`flex items-center p-2 hover:bg-gray-700 rounded transition-colors ${pathname === '/dashboard/ad-templates' ? 'bg-gray-700' : ''}`}>
              <FileText className="mr-2" /> Ad Templates
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="mt-auto">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard/profile" className={`flex items-center p-2 hover:bg-gray-700 rounded transition-colors ${pathname === '/dashboard/profile' ? 'bg-gray-700' : ''}`}>
              <User className="mr-2" /> Profile
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className={`flex items-center p-2 hover:bg-gray-700 rounded transition-colors ${pathname === '/dashboard/settings' ? 'bg-gray-700' : ''}`}>
              <Settings className="mr-2" /> Settings
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="flex items-center p-2 hover:bg-gray-700 rounded transition-colors w-full text-left">
              <LogOut className="mr-2" /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
} 