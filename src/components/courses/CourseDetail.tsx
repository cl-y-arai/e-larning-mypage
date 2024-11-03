import React from 'react';
import { Play, FileText, Clock, BarChart2, Award } from 'lucide-react';

interface Section {
  id: number;
  title: string;
  duration: string;
  lessons: {
    id: number;
    title: string;
    duration: string;
    type: 'video' | 'document';
  }[];
}

export function CourseDetail() {
  const course = {
    title: "React.js 実践マスター",
    description: "現代のWeb開発に不可欠なReact.jsを基礎から実践まで学びます。コンポーネント設計、状態管理、パフォーマンス最適化など、実践的なスキルを身につけることができます。",
    instructor: "鈴木 一郎",
    duration: "8時間",
    level: "中級",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  };

  const sections: Section[] = [
    {
      id: 1,
      title: "イントロダクション",
      duration: "45分",
      lessons: [
        { id: 1, title: "コースの概要", duration: "10分", type: 'video' },
        { id: 2, title: "環境構築ガイド", duration: "15分", type: 'document' },
        { id: 3, title: "最初のReactアプリケーション", duration: "20分", type: 'video' }
      ]
    },
    {
      id: 2,
      title: "基本概念",
      duration: "1時間30分",
      lessons: [
        { id: 4, title: "コンポーネントとProps", duration: "30分", type: 'video' },
        { id: 5, title: "状態管理入門", duration: "30分", type: 'video' },
        { id: 6, title: "練習問題と解説", duration: "30分", type: 'document' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <BarChart2 className="w-4 h-4" />
                {course.level}
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                修了証明書あり
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">コース概要</h2>
            <p className="text-gray-700">{course.description}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">カリキュラム</h2>
            <div className="space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="border rounded-lg">
                  <div className="p-4 bg-gray-50 border-b">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{section.title}</h3>
                      <span className="text-sm text-gray-600">{section.duration}</span>
                    </div>
                  </div>
                  <div className="divide-y">
                    {section.lessons.map((lesson) => (
                      <div key={lesson.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          {lesson.type === 'video' ? (
                            <Play className="w-5 h-5 text-blue-600" />
                          ) : (
                            <FileText className="w-5 h-5 text-blue-600" />
                          )}
                          <span>{lesson.title}</span>
                        </div>
                        <span className="text-sm text-gray-600">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
            <h2 className="text-xl font-semibold mb-4">講師情報</h2>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                alt={course.instructor}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-medium">{course.instructor}</h3>
                <p className="text-sm text-gray-600">シニアエンジニア</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              コースを始める
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}