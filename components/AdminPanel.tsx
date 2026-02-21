
import React, { useState, useEffect } from 'react';
import { Save, Trash2, Copy, Check, RefreshCw, Lock, KeyRound, Loader2, Cloud, CalendarDays, PlusCircle, Pencil, XCircle, Download } from 'lucide-react';
import { CategoryType, CATEGORY_METADATA, VideoLink, DEFAULT_SUB_CATEGORIES } from '../types';
import { fetchVideos, saveVideosRemote, exportData, resetToDefaults } from '../services/storage';
import { ADMIN_UUID } from '../constants';

interface AdminPanelProps {
    onDataChange: (videos: VideoLink[]) => void;
}

// Helper to get local date string YYYY-MM-DD
const getTodayString = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Helper to convert timestamp back to YYYY-MM-DD
const timestampToDateString = (ts: number) => {
    const d = new Date(ts);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onDataChange }) => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  // App data state
  const [videos, setVideos] = useState<VideoLink[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  
  // Edit mode state
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    category: CategoryType.ANIMATION,
    subCategory: '',
    date: getTodayString(),
  });
  const [copied, setCopied] = useState(false);

  // Load data on auth
  useEffect(() => {
    const token = sessionStorage.getItem('admin_token');
    if (token === ADMIN_UUID) {
        setIsAuthenticated(true);
        loadData();
    }
  }, []);

  const loadData = async () => {
      setIsSyncing(true);
      const data = await fetchVideos();
      setVideos(data);
      onDataChange(data); // Sync global state
      setIsSyncing(false);
  }

  const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      if (passwordInput.trim() === ADMIN_UUID) {
          sessionStorage.setItem('admin_token', ADMIN_UUID);
          setIsAuthenticated(true);
          setAuthError(false);
          loadData();
      } else {
          setAuthError(true);
          setPasswordInput('');
      }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setSubCategory = (sub: string) => {
      setFormData({ ...formData, subCategory: sub });
  }

  const handleEdit = (video: VideoLink) => {
      setEditingId(video.id);
      setFormData({
          title: video.title,
          url: video.url,
          category: video.category,
          subCategory: video.subCategory || '',
          date: timestampToDateString(video.dateAdded)
      });
      // Scroll to top to see form
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
      setEditingId(null);
      setFormData({
        title: '',
        url: '',
        category: CategoryType.ANIMATION,
        subCategory: '',
        date: getTodayString(),
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.url) return;

    setIsSyncing(true);

    // Handle date parsing to ensure it stays on the selected day
    // We set time to 12:00:00 to avoid timezone shifts rolling it back to previous day
    const [year, month, day] = formData.date.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day, 12, 0, 0);

    let updatedList: VideoLink[];

    if (editingId) {
        // Update existing video
        updatedList = videos.map(v => v.id === editingId ? {
            ...v,
            title: formData.title,
            url: formData.url,
            category: formData.category as CategoryType,
            subCategory: formData.subCategory,
            dateAdded: dateObj.getTime(),
        } : v);
    } else {
        // Create new video
        const newVideo: VideoLink = {
            id: Date.now().toString(),
            title: formData.title,
            url: formData.url,
            category: formData.category as CategoryType,
            subCategory: formData.subCategory,
            dateAdded: dateObj.getTime(),
        };
        updatedList = [newVideo, ...videos];
    }
    
    // Save
    const success = await saveVideosRemote(updatedList);
    
    if (success) {
        setVideos(updatedList);
        onDataChange(updatedList);
        handleCancelEdit(); // Reset form and mode
    }
    
    setIsSyncing(false);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('确定要删除这个链接吗?')) {
      setIsSyncing(true);
      const updatedList = videos.filter(v => v.id !== id);
      await saveVideosRemote(updatedList);
      setVideos(updatedList);
      onDataChange(updatedList);
      
      // If deleting the item currently being edited, cancel edit mode
      if (editingId === id) {
          handleCancelEdit();
      }
      
      setIsSyncing(false);
    }
  };
  
  const handleReset = () => {
      if(window.confirm('确定重置到初始状态吗？此操作将清除所有云端数据并恢复默认。')) {
          const defaults = resetToDefaults();
          setVideos(defaults);
          onDataChange(defaults);
          saveVideosRemote(defaults); // Push reset to cloud
          handleCancelEdit();
      }
  }

  const handleDownloadConstants = () => {
    const json = exportData(videos);
    const fileContent = `
import { VideoLink, CategoryType } from './types';

// The password/UUID required to access the admin panel.
export const ADMIN_UUID = '${ADMIN_UUID}';

// This serves as the "Default" database if LocalStorage is empty.
export const INITIAL_VIDEOS: VideoLink[] = ${json};
`;
    
    const blob = new Blob([fileContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'constants.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Login Screen
  if (!isAuthenticated) {
      return (
          <div className="min-h-[80vh] flex items-center justify-center p-4">
              <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock size={32} className="text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Restricted Access</h2>
                  <p className="text-gray-500 mb-8">Please enter the UUID key to verify your identity.</p>
                  
                  <form onSubmit={handleLogin} className="space-y-4">
                      <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <KeyRound size={18} className="text-gray-400" />
                          </div>
                          <input 
                              type="password"
                              value={passwordInput}
                              onChange={(e) => {
                                  setPasswordInput(e.target.value);
                                  setAuthError(false);
                              }}
                              placeholder="Enter Admin UUID"
                              className={`w-full pl-10 pr-4 py-3 border rounded-xl outline-none focus:ring-2 transition-all ${
                                  authError 
                                  ? 'border-red-300 focus:ring-red-200 focus:border-red-500 bg-red-50' 
                                  : 'border-gray-200 focus:ring-bili-blue/20 focus:border-bili-blue bg-white'
                              }`}
                          />
                      </div>
                      
                      {authError && (
                          <p className="text-red-500 text-sm font-medium animate-pulse">
                              Verification failed. Invalid UUID.
                          </p>
                      )}

                      <button 
                          type="submit"
                          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform active:scale-[0.98]"
                      >
                          Verify & Login
                      </button>
                  </form>
              </div>
          </div>
      )
  }

  const currentSubSuggestions = DEFAULT_SUB_CATEGORIES[formData.category as CategoryType] || [];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 border-b pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                管理面板
                {isSyncing && <Loader2 size={20} className="animate-spin text-bili-pink" />}
            </h1>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
               <Cloud size={14} /> 
               数据将同步至云端 KV 数据库
            </p>
        </div>
        <div className="flex gap-2">
             <button
                onClick={handleReset}
                disabled={isSyncing}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium disabled:opacity-50"
            >
                <RefreshCw size={16} />
                重置
            </button>
            <button
                onClick={handleDownloadConstants}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-lg transition-colors text-sm font-medium"
            >
                <Download size={16} />
                下载 constants.ts
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1">
          <div className={`bg-white p-6 rounded-xl shadow-sm border sticky top-24 transition-colors ${editingId ? 'border-yellow-300 ring-4 ring-yellow-50' : 'border-gray-100'}`}>
            <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                    {editingId ? <Pencil size={20} className="text-yellow-600" /> : <PlusCircle size={20} className="text-bili-blue" />}
                    {editingId ? '编辑视频' : '添加新视频'}
                </span>
                {editingId && (
                    <button onClick={handleCancelEdit} className="text-gray-400 hover:text-gray-600">
                        <XCircle size={20} />
                    </button>
                )}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">标题</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="输入视频标题"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bili-blue focus:border-bili-blue outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bilibili 链接</label>
                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="https://www.bilibili.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bili-blue focus:border-bili-blue outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">分类</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bili-blue focus:border-bili-blue outline-none transition-all bg-white"
                    >
                      {Object.values(CATEGORY_METADATA).map((meta) => (
                        <option key={meta.type} value={meta.type}>
                          {meta.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">发布日期</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bili-blue focus:border-bili-blue outline-none transition-all bg-white"
                      required
                    />
                  </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">子分类</label>
                <input
                  type="text"
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  placeholder="手动输入或点击下方标签"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bili-blue focus:border-bili-blue outline-none transition-all"
                />
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {currentSubSuggestions.map(sub => (
                        <button
                            key={sub}
                            type="button"
                            onClick={() => setSubCategory(sub)}
                            className="px-2 py-1 text-xs bg-gray-50 border border-gray-200 rounded text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition-colors"
                        >
                            {sub}
                        </button>
                    ))}
                </div>
              </div>

              <div className="flex gap-2">
                  {editingId && (
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-lg transition-colors"
                      >
                          取消
                      </button>
                  )}
                  <button
                    type="submit"
                    disabled={isSyncing}
                    className={`flex-1 ${editingId ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-bili-pink hover:bg-pink-500'} disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow`}
                  >
                    {isSyncing ? <Loader2 size={18} className="animate-spin" /> : (editingId ? <Save size={18}/> : <PlusCircle size={18}/>)}
                    {isSyncing ? '保存中...' : (editingId ? '更新视频' : '添加视频')}
                  </button>
              </div>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 flex justify-between items-center">
                <span>当前列表 ({videos.length})</span>
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {videos.length === 0 ? (
                    <div className="p-8 text-center text-gray-400">暂无数据</div>
                ) : (
                    <ul className="divide-y divide-gray-100">
                        {videos.map((video) => (
                            <li key={video.id} className={`p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group ${editingId === video.id ? 'bg-yellow-50 hover:bg-yellow-50' : ''}`}>
                                <div className="min-w-0 flex-1 pr-4">
                                    <h4 className="text-sm font-medium text-gray-900 truncate">{video.title}</h4>
                                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                            {CATEGORY_METADATA[video.category].label}
                                        </span>
                                        {video.subCategory && (
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                                                {video.subCategory}
                                            </span>
                                        )}
                                         <span className="text-xs text-gray-400 flex items-center gap-1">
                                            <CalendarDays size={12} />
                                            {new Date(video.dateAdded).toLocaleDateString()}
                                         </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => handleEdit(video)}
                                        disabled={isSyncing}
                                        className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all"
                                        title="编辑"
                                    >
                                        <Pencil size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(video.id)}
                                        disabled={isSyncing}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                        title="删除"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};
