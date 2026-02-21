import React from 'react';
import { NavLink } from 'react-router-dom';

const ZipTieIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Rotate 180 degrees around the center (12, 12) */}
    <g transform="rotate(180 12 12)">
      {/* Tail - sticking out playfully */}
      <path d="M18.5 5.5 L 21 2.5" />
      
      {/* Head (Lock) - Very rounded, pill-like shape, rotated slightly */}
      <rect x="13.5" y="5" width="6" height="4.5" rx="2.25" transform="rotate(-15 16.5 7.25)" />
      
      {/* Loop Body - Continuous smooth curve, almost circular but organic */}
      {/* Starts from bottom of head, loops counter-clockwise */}
      <path d="M16 10 C 16 16.5, 14.5 21, 9.5 21 C 4.5 21, 3 15.5, 3 10 C 3 4.5, 8.5 3.5, 13 5" />
    </g>
  </svg>
);

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2.5 group">
              {/* Logo Icon Container: Black background for Kessoku Band style */}
              <div className="bg-gray-900 text-white p-1.5 rounded-lg shadow-sm group-hover:shadow transition-all group-hover:-rotate-6 group-hover:scale-110 duration-300">
                 <ZipTieIcon size={22} />
              </div>
              <span className="font-bold text-lg tracking-wider text-gray-900 group-hover:text-black transition-colors uppercase font-display">
                KESSOKU<span className="font-light text-gray-500 ml-1">RECORD</span>
              </span>
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <NavLink 
                to="/" 
                className={({ isActive }) => `text-sm font-medium transition-colors px-3 py-2 rounded-md hover:bg-gray-50 ${isActive ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900'}`}
                end
            >
                首页
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};