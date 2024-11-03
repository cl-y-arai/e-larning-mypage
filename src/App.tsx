import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Profile } from './components/Profile';
import { Progress } from './components/Progress';
import { TestResults } from './components/TestResults';
import { Certificates } from './components/Certificates';
import { Notifications } from './components/Notifications';
import { CourseList } from './components/courses/CourseList';
import { CourseDetail } from './components/courses/CourseDetail';
import { VideoPlayer } from './components/courses/VideoPlayer';
import { DocumentViewer } from './components/courses/DocumentViewer';
import { UserManagement } from './components/UserManagement';

function App() {
  const [activeTab, setActiveTab] = useState('courses');

  const user = {
    name: "山田 太郎",
    email: "yamada.t@example.com",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400",
    progress: 75,
    completedCourses: 8,
    totalCourses: 12,
    certificates: [
      { id: 1, name: "Webデベロップメント基礎", date: "2024-02-15" },
      { id: 2, name: "データサイエンス入門", date: "2024-01-20" }
    ],
    testResults: [
      { id: 1, course: "JavaScript基礎", score: 92, date: "2024-02-20" },
      { id: 2, course: "Pythonプログラミング", score: 88, date: "2024-02-10" }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile user={user} />;
      case 'progress':
        return <Progress user={user} />;
      case 'tests':
        return <TestResults testResults={user.testResults} />;
      case 'certificates':
        return <Certificates certificates={user.certificates} />;
      case 'notifications':
        return <Notifications />;
      case 'courses':
        return <CourseList />;
      case 'course-detail':
        return <CourseDetail />;
      case 'video-player':
        return <VideoPlayer />;
      case 'document-viewer':
        return <DocumentViewer />;
      case 'user-management':
        return <UserManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="md:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;