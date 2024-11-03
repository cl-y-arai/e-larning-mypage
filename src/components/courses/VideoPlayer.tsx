import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, Subtitles } from 'lucide-react';

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);

  return (
    <div className="space-y-6">
      <div className="relative bg-black aspect-video rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200"
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
        
        {/* Video Controls */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
          {/* Progress Bar */}
          <div className="px-4 py-2">
            <div className="h-1 bg-gray-600 rounded-full">
              <div className="h-full w-1/3 bg-blue-600 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="px-4 py-2 flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-blue-400"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-blue-400"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>
              <span className="text-sm">1:23 / 45:00</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSubtitles(!showSubtitles)}
                className={`hover:text-blue-400 ${showSubtitles ? 'text-blue-400' : ''}`}
              >
                <Subtitles className="w-6 h-6" />
              </button>
              <button className="hover:text-blue-400">
                <Settings className="w-6 h-6" />
              </button>
              <button className="hover:text-blue-400">
                <Maximize className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle Area */}
      {showSubtitles && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-center text-lg">
            現代のWeb開発において、コンポーネントベースの設計は非常に重要です。
          </div>
        </div>
      )}

      {/* Course Navigation */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">React.js コンポーネント設計</h2>
          <p className="text-gray-600">レッスン 3 / 12</p>
        </div>
        <div className="p-4">
          <div className="flex justify-between gap-4">
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              前のレッスン
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              次のレッスン
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}