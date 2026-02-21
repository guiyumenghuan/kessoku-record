import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { VideoLink } from '../types';

interface VideoCardProps {
  video: VideoLink;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <a 
      href={video.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col justify-between bg-white border border-gray-200 rounded-xl p-4 hover:border-bili-pink hover:shadow-md transition-all duration-300 h-full"
      title={video.title}
    >
      <div className="space-y-2">
          <h3 className="text-[15px] font-semibold text-gray-800 leading-snug group-hover:text-bili-pink transition-colors line-clamp-2">
            {video.title}
          </h3>
          
          {video.subCategory && (
            <span className="inline-block px-2 py-0.5 rounded-md bg-gray-50 text-xs text-gray-500 font-medium border border-gray-100 group-hover:bg-pink-50 group-hover:text-bili-pink group-hover:border-pink-100 transition-colors">
                {video.subCategory}
            </span>
          )}
      </div>
      
      <div className="mt-4 flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50 group-hover:border-pink-50 transition-colors">
          <div className="flex items-center gap-1">
             <Calendar size={12} className="opacity-70"/>
             <span className="tabular-nums">
               {new Date(video.dateAdded).toLocaleDateString()}
             </span>
          </div>
          <ExternalLink size={14} className="text-gray-300 group-hover:text-bili-pink transition-colors" />
      </div>
    </a>
  );
};