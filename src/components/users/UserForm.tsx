import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface UserFormData {
  name: string;
  email: string;
  role: string;
  department: string;
}

interface UserFormProps {
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
}

const roleOptions = [
  { value: '学生', label: '学生' },
  { value: '講師', label: '講師' },
  { value: '管理者', label: '管理者' }
];

export function UserForm({ onClose, onSubmit }: UserFormProps) {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    role: '学生',
    department: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setSuccessMessage(`${formData.name}を追加しました`);
    setFormData({
      name: '',
      email: '',
      role: '学生',
      department: '',
    });
    setTimeout(() => {
      setSuccessMessage('');
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            役割
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {roleOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
            所属
          </label>
          <input
            type="text"
            id="department"
            name="department"
            required
            value={formData.department}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            キャンセル
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            追加
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <Check className="w-5 h-5" />
          {successMessage}
        </div>
      )}
    </div>
  );
}