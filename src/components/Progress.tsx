import React from 'react';

interface ProgressProps {
  user: {
    progress: number;
  };
}

export function Progress({ user }: ProgressProps) {
  const courses = [
    { name: "JavaScript基礎", progress: 100 },
    { name: "Pythonプログラミング", progress: 80 },
    { name: "データベース設計", progress: 45 }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-4">全体の進捗状況</h4>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                進捗
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {user.progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div style={{ width: `${user.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-4">コース別進捗状況</h4>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{course.name}</span>
                <span className="text-sm text-gray-600">{course.progress}%</span>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div style={{ width: `${course.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}