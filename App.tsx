
import React, { useEffect, useState } from 'react';
import { HashRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { CategoryView } from './components/CategoryView';
import { AdminPanel } from './components/AdminPanel';
import { fetchVideos } from './services/storage';
import { VideoLink } from './types';
import { INITIAL_VIDEOS } from './constants';

export const App: React.FC = () => {
  const [videos, setVideos] = useState<VideoLink[]>(INITIAL_VIDEOS);
  const [loading, setLoading] = useState(true);
  
  // Initialize data asynchronously
  useEffect(() => {
    const loadData = async () => {
        const data = await fetchVideos();
        setVideos(data);
        setLoading(false);
    };
    loadData();
  }, []);

  // Check if we are running in a sandboxed/blob environment.
  const isSandboxed = window.location.protocol === 'blob:';
  const Router = isSandboxed ? MemoryRouter : HashRouter;

  return (
    <Router>
      <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow relative">
           {loading && (
             <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 overflow-hidden z-50">
                <div className="h-full bg-bili-pink animate-pulse w-1/3 mx-auto"></div>
             </div>
           )}
          <Routes>
            <Route path="/" element={<HomeDashboard videos={videos} />} />
            <Route path="/category/:type" element={<CategoryView videos={videos} />} />
            <Route path="/admin" element={<AdminPanel onDataChange={setVideos} />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} KESSOKU RECORD. 
              <span className="hidden sm:inline mx-1">·</span> 
              <br className="sm:hidden" />
              Designed for performance & simplicity.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};
