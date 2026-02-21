import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Guitar, 
    Drum, 
    Calendar, 
    Theater, 
    ChevronRight, 
    LayoutGrid
} from 'lucide-react';
import { CATEGORY_METADATA, CategoryType, VideoLink } from '../types';

// Helper for icons and colors specific to this theme
export const getCategoryConfig = (type: CategoryType) => {
    switch(type) {
        // Bocchi (Hitori Gotoh) - Pink - Lead Guitar
        case CategoryType.ANIMATION: 
            return { 
                icon: Guitar, 
                color: 'text-pink-500', 
                bg: 'bg-pink-50', 
                border: 'hover:border-pink-200', 
                ring: 'group-hover:ring-pink-100' 
            };
        
        // Ryo Yamada - Blue - Bass (represented by Guitar icon)
        case CategoryType.RADIO: 
            return { 
                icon: Guitar, 
                color: 'text-blue-500', 
                bg: 'bg-blue-50', 
                border: 'hover:border-blue-200', 
                ring: 'group-hover:ring-blue-100' 
            };
            
        // Ikuyo Kita - Red - Rhythm Guitar (and Vocals)
        case CategoryType.MUSIC: 
            return { 
                icon: Guitar, 
                color: 'text-red-500', 
                bg: 'bg-red-50', 
                border: 'hover:border-red-200', 
                ring: 'group-hover:ring-red-100' 
            };
            
        // Nijika Ijichi - Yellow - Drums
        case CategoryType.CONCERT: 
            return { 
                icon: Drum, 
                color: 'text-yellow-500', 
                bg: 'bg-yellow-50', 
                border: 'hover:border-yellow-200', 
                ring: 'group-hover:ring-yellow-100' 
            };
            
        // Generic Green
        case CategoryType.ACTIVITY: 
            return { 
                icon: Calendar, 
                color: 'text-green-500', 
                bg: 'bg-green-50', 
                border: 'hover:border-green-200', 
                ring: 'group-hover:ring-green-100' 
            };
            
        // Generic Purple
        case CategoryType.STAGE: 
            return { 
                icon: Theater, 
                color: 'text-purple-500', 
                bg: 'bg-purple-50', 
                border: 'hover:border-purple-200', 
                ring: 'group-hover:ring-purple-100' 
            };
            
        default: 
            return { 
                icon: LayoutGrid, 
                color: 'text-gray-500', 
                bg: 'bg-gray-50', 
                border: 'hover:border-gray-200', 
                ring: 'group-hover:ring-gray-100' 
            };
    }
}

interface Props {
    videos: VideoLink[];
}

export const HomeDashboard: React.FC<Props> = ({ videos }) => {
    const getCount = (type: CategoryType) => videos.filter(v => v.category === type).length;

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-bold tracking-widest uppercase mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-500"></span>
                    </span>
                    Unofficial Archives
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase font-display">
                    KESSOKU <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-400">RECORD</span>
                </h1>
                <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
                    结束乐队 (Kessoku Band) 视频索引数据库。<br/>
                    <span className="text-sm opacity-80">（非官方粉丝站 / Fan-made Site）</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(CATEGORY_METADATA).map(meta => {
                    const config = getCategoryConfig(meta.type);
                    const count = getCount(meta.type);
                    const Icon = config.icon;

                    return (
                        <Link 
                            key={meta.type}
                            to={`/category/${meta.type}`}
                            className={`group relative overflow-hidden bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${config.border}`}
                        >
                            {/* Decorative background icon */}
                            <div className={`absolute -bottom-6 -right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity transform group-hover:scale-110 duration-500 rotate-12`}>
                                <Icon size={180} className={config.color} />
                            </div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-2xl ${config.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-1 ring-white`}>
                                    <Icon size={28} className={config.color} />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors tracking-tight">
                                    {meta.label}
                                </h3>
                                <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed font-medium">
                                    {meta.description}
                                </p>
                                
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-md bg-gray-100 text-gray-500 group-hover:bg-gray-900 group-hover:text-white transition-colors uppercase">
                                        {count} ITEMS
                                    </span>
                                    <div className={`w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-transparent group-hover:text-white transition-all shadow-sm ${config.bg.replace('bg-', 'group-hover:bg-').replace('-50', '-500')}`}>
                                        <ChevronRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}