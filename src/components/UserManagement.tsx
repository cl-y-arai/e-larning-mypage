import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { UserList } from './users/UserList';
import { UserForm } from './users/UserForm';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  lastLogin: string;
  status: 'active' | 'inactive';
}

const initialUsers: User[] = [
  {
    id: 1,
    name: '山田 太郎',
    email: 'yamada.t@example.com',
    role: '学生',
    department: '情報工学科',
    lastLogin: '2024-03-15',
    status: 'active'
  },
  {
    id: 2,
    name: '佐藤 美咲',
    email: 'sato.m@example.com',
    role: '講師',
    department: 'コンピュータサイエンス学科',
    lastLogin: '2024-03-14',
    status: 'active'
  },
  {
    id: 3,
    name: '鈴木 一郎',
    email: 'suzuki.i@example.com',
    role: '管理者',
    department: 'システム管理部',
    lastLogin: '2024-03-13',
    status: 'inactive'
  }
];

export function UserManagement() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleAddUser = (userData: Omit<User, 'id' | 'lastLogin' | 'status'>) => {
    const newUser: User = {
      ...userData,
      id: users.length + 1,
      lastLogin: new Date().toISOString().split('T')[0],
      status: 'active'
    };
    setUsers([...users, newUser]);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">ユーザ管理</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          新規ユーザを追加
        </button>
      </div>

      {showForm ? (
        <UserForm onClose={() => setShowForm(false)} onSubmit={handleAddUser} />
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
}