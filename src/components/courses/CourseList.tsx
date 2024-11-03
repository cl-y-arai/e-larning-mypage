import React, { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  level: string;
  progress?: number;
}

const categories = ['すべて', 'プログラミング', 'データサイエンス', 'デザイン', 'ビジネス'];

export function CourseList() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [searchQuery, setSearchQuery] = useState('');

  const courses: Course[] = [
    {
      id: 1,
      title: "React.js 実践マスター",
      category: "プログラミング",
      instructor: "鈴木 一郎",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      duration: "8時間",
      level: "中級",
      progress: 45
    },
    {
      id: 2,
      title: "Python データ分析入門",
      category: "データサイエンス",
      instructor: "佐藤 美咲",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
      duration: "10時間",
      level: "初級",
      progress: 20
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'すべて' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="コースを検索..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">{course.category}</span>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">講師: {course.instructor}</p>
              {course.progress !== undefined && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>進捗状況</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <BookOpen className="w-4 h-4" />
                コースを見る
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}