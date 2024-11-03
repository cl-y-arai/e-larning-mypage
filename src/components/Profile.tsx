import React from 'react';

interface ProfileProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full" />
        <div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-4">プロフィール情報</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">名前</label>
            <input type="text" defaultValue={user.name} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">メールアドレス</label>
            <input type="email" defaultValue={user.email} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            保存する
          </button>
        </div>
      </div>
    </div>
  );
}