import React from 'react';
import { User, BarChart3, GraduationCap, Award, Bell, Users } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'profile', icon: User, label: 'プロフィール' },
  { id: 'progress', icon: BarChart3, label: '学習進捗' },
  { id: 'tests', icon: GraduationCap, label: 'テスト結果' },
  { id: 'certificates', icon: Award, label: '証明書・バッジ' },
  { id: 'notifications', icon: Bell, label: '通知設定' },
  { id: 'user-management', icon: Users, label: 'ユーザ管理' }
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeTab === item.id
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}