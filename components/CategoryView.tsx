
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ArrowLeft, Filter, ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { CATEGORY_METADATA, CategoryType, VideoLink, DEFAULT_SUB_CATEGORIES } from '../types';
import { VideoCard } from './VideoCard';
import { getCategoryConfig } from './HomeDashboard';

interface Props {
    videos: VideoLink[];
}

const ITEMS_PER_PAGE = 60;

export const CategoryView: React.FC<Props> = ({ videos }) => {
    const { type } = useParams<{ type: string }>();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSub, setSelectedSub] = useState<string>('All');
    const [selectedYear, setSelectedYear] = useState<string>('All');
    
    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);

    // Validate type
    const categoryType = Object.values(CategoryType).find(t => t === type);
    const meta = categoryType ? CATEGORY_METADATA[categoryType] : null;

    // Reset pagination when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedSub, selectedYear, type]);

    // 1. Base Category Data
    const categoryVideos = useMemo(() => {
        if (!categoryType) return [];
        return videos.filter(v => v.category === categoryType).sort((a, b) => b.dateAdded - a.dateAdded);
    }, [videos, categoryType]);

    // 2. Extract Available Filters based on actual data
    const availableSubCategories = useMemo(() => {
        // Start with defaults for this category to enforce order
        const defaults = DEFAULT_SUB_CATEGORIES[categoryType as CategoryType] || [];
        // Find any other subcategories that exist in the data but aren't in defaults
        const inData = Array.from(new Set(categoryVideos.map(v => v.subCategory).filter(Boolean))) as string[];
        
        // Merge: Defaults first, then others
        const combined = [...defaults];
        inData.forEach(sub => {
            if (!combined.includes(sub)) combined.push(sub);
        });
        return combined;
    }, [categoryVideos, categoryType]);

    const availableYears = useMemo(() => {
        const years = new Set(categoryVideos.map(v => new Date(v.dateAdded).getFullYear().toString()));
        return Array.from(years).sort().reverse();
    }, [categoryVideos]);

    // 3. Apply Filters
    const filteredVideos = useMemo(() => {
        let result = categoryVideos;

        // Sub Category Filter
        if (selectedSub !== 'All') {
            result = result.filter(v => v.subCategory === selectedSub);
        }

        // Year Filter
        if (selectedYear !== 'All') {
            result = result.filter(v => new Date(v.dateAdded).getFullYear().toString() === selectedYear);
        }

        // Search Filter
        if (searchTerm.trim()) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(v => 
                v.title.toLowerCase().includes(lowerTerm) || 
                v.subCategory?.toLowerCase().includes(lowerTerm)
            );
        }

        return result;
    }, [categoryVideos, selectedSub, selectedYear, searchTerm]);

    // 4. Pagination Logic
    const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
    const paginatedVideos = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredVideos, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!meta || !categoryType) {
        return <div className="p-8 text-center text-gray-500">Category not found</div>;
    }

    const config = getCategoryConfig(categoryType);
    const Icon = config.icon;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Header & Nav */}
            <div className="mb-8">
                <Link to="/" className="inline-flex items-center text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors">
                    <ArrowLeft size={16} className="mr-1" />
                    返回首页
                </Link>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${config.bg}`}>
                            <Icon size={32} className={config.color} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{meta.label}</h1>
                            <p className="text-gray-500 text-sm mt-1">{meta.description}</p>
                        </div>
                    </div>

                    <div className="relative w-full md:w-72 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-gray-400 group-focus-within:text-bili-blue transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder={`搜索 ${meta.label}...`}
                            className="block w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bili-blue/20 focus:border-bili-blue transition-all shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Filters Toolbar */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-1.5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Sub Category Tabs */}
                <div className="flex flex-wrap gap-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                    <button
                        onClick={() => setSelectedSub('All')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                            selectedSub === 'All' 
                                ? 'bg-gray-900 text-white shadow-md' 
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                        全部
                    </button>
                    {availableSubCategories.map(sub => (
                         <button
                            key={sub}
                            onClick={() => setSelectedSub(sub)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                                selectedSub === sub 
                                    ? `bg-gray-900 text-white shadow-md` 
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            {sub}
                        </button>
                    ))}
                </div>

                {/* Year Selector */}
                <div className="flex items-center gap-2 w-full sm:w-auto px-2 sm:border-l border-gray-100 sm:pl-4">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider hidden sm:block">Year</span>
                    <div className="relative w-full sm:w-auto">
                        <select 
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="appearance-none w-full sm:w-32 bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-3 pr-8 rounded-lg text-sm font-medium focus:outline-none focus:border-gray-400 focus:bg-white transition-colors cursor-pointer"
                        >
                            <option value="All">所有年份</option>
                            {availableYears.map(year => (
                                <option key={year} value={year}>{year}年</option>
                            ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* List Content */}
            {paginatedVideos.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {paginatedVideos.map(video => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-12 mb-4">
                            <button
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                                title="第一页"
                            >
                                <ChevronsLeft size={20} />
                            </button>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                                title="上一页"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            
                            <span className="text-sm font-medium text-gray-700 px-4">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                                title="下一页"
                            >
                                <ChevronRight size={20} />
                            </button>
                            <button
                                onClick={() => handlePageChange(totalPages)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                                title="最后一页"
                            >
                                <ChevronsRight size={20} />
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="py-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                        <Filter size={24} className="text-gray-400" />
                    </div>
                    <p className="text-gray-500 font-medium">未找到符合条件的内容</p>
                    <button 
                        onClick={() => {
                            setSelectedSub('All');
                            setSelectedYear('All');
                            setSearchTerm('');
                        }}
                        className="mt-2 text-sm text-bili-blue hover:underline"
                    >
                        清除所有筛选
                    </button>
                </div>
            )}
        </div>
    );
};
