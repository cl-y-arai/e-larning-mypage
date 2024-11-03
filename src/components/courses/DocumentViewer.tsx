import React from 'react';
import { FileText, Download, ChevronLeft, ChevronRight } from 'lucide-react';

export function DocumentViewer() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">環境構築ガイド.pdf</h2>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
            <Download className="w-5 h-5" />
            ダウンロード
          </button>
        </div>
        
        <div className="p-6 min-h-[600px] bg-gray-50">
          {/* Document content would be rendered here */}
          <div className="max-w-3xl mx-auto bg-white p-8 shadow-sm rounded-lg">
            <h1 className="text-2xl font-bold mb-6">React.js 開発環境構築ガイド</h1>
            <div className="prose prose-blue max-w-none">
              <h2 className="text-xl font-semibold mb-4">必要な開発ツール</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Node.js (バージョン 14.0.0 以上)</li>
                <li>npm または yarn パッケージマネージャー</li>
                <li>お好みのコードエディタ (VS Code推奨)</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">インストール手順</h2>
              <p className="mb-4">
                以下の手順に従って、開発環境をセットアップしてください。
              </p>
              
              <div className="bg-gray-50 p-4 rounded-md mb-6">
                <code className="text-sm">
                  npx create-react-app my-app --template typescript
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4 flex items-center justify-between">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <ChevronLeft className="w-5 h-5" />
            前のページ
          </button>
          <span className="text-gray-600">1 / 10</span>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            次のページ
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}