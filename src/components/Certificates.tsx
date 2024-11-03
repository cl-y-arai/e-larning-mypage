import React from 'react';
import { Award } from 'lucide-react';

interface CertificatesProps {
  certificates: Array<{
    id: number;
    name: string;
    date: string;
  }>;
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-4">取得証明書・バッジ一覧</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="border rounded-lg p-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Award className="w-12 h-12 text-blue-600" />
              </div>
              <div>
                <h5 className="font-medium">{cert.name}</h5>
                <p className="text-sm text-gray-600">取得日: {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}