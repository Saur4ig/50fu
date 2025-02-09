import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, onSearchChange, onReset }) => (
  <div className="max-w-2xl mx-auto mb-12">
    <div className="flex items-center gap-4 mb-4">
      <div className="relative flex-1">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search languages or phrases..."
          className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-gray-200 
                   focus:border-slate-500 focus:outline-none focus:ring-4 
                   focus:ring-slate-500/20 transition-all duration-300
                   placeholder:text-gray-400"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search className="w-6 h-6" />
        </span>
      </div>
      <button
        onClick={onReset}
        className="px-6 py-4 rounded-xl bg-gray-100 text-slate-700 
               font-semibold hover:bg-gray-200 transition-colors
               focus:outline-none focus:ring-4 focus:ring-slate-500/20
               flex items-center gap-2"
      >
        <RotateCcw className="w-5 h-5" />
        Reset Progress
      </button>
    </div>
  </div>
);

export default SearchBar;