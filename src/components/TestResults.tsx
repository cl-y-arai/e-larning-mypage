import React from 'react';

interface TestResultsProps {
  testResults: Array<{
    id: number;
    course: string;
    score: number;
    date: string;
  }>;
}

export function TestResults({ testResults }: TestResultsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="font-semibold mb-4">テスト結果一覧</h4>
      <div className="space-y-4">
        {testResults.map((test) => (
          <div key={test.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="font-medium">{test.course}</h5>
                <p className="text-sm text-gray-600">{test.date}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-blue-600">{test.score}点</span>
                <p className="text-sm text-gray-600">満点: 100点</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}