import React from 'react';

const notificationSettings = [
  { title: "コース更新通知", description: "新しいコンテンツが追加された時に通知" },
  { title: "締切通知", description: "課題の提出期限が近づいた時に通知" },
  { title: "フィードバック通知", description: "講師からのフィードバックを受け取る" },
  { title: "メールマガジン", description: "週刊ニュースレターを受け取る" }
];

export function Notifications() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="font-semibold mb-4">通知設定</h4>
      <div className="space-y-4">
        {notificationSettings.map((setting, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b">
            <div>
              <h5 className="font-medium">{setting.title}</h5>
              <p className="text-sm text-gray-600">{setting.description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}