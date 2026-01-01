import React from 'react';
import { Search, Filter, SortDesc } from 'lucide-react';
import { FilterState } from '../types';
import { categories, languages } from '../data';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
  
  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="sticky top-4 z-30 mb-8 mx-auto max-w-7xl">
      <div className="bg-surface/80 backdrop-blur-xl border border-border p-4 rounded-2xl shadow-2xl shadow-black/50">
        <div className="flex flex-col lg:flex-row gap-4">
          
          {/* Search Input */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
            <input
              type="text"
              placeholder="Search problems, error codes, or tools..."
              value={filters.search}
              onChange={(e) => handleChange('search', e.target.value)}
              className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>

          {/* Filter Group */}
          <div className="flex flex-wrap gap-2 lg:gap-3">
            
            {/* Category */}
            <div className="relative group">
               <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" size={16} />
               <select
                value={filters.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="appearance-none bg-surfaceHighlight border border-border rounded-lg pl-9 pr-8 py-2.5 text-sm text-neutral-300 focus:outline-none focus:border-primary hover:border-neutral-500 transition-colors cursor-pointer w-full md:w-auto"
               >
                 {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
               </select>
            </div>

            {/* Language */}
            <div className="relative">
              <select
                value={filters.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="appearance-none bg-surfaceHighlight border border-border rounded-lg px-4 py-2.5 text-sm text-neutral-300 focus:outline-none focus:border-primary hover:border-neutral-500 transition-colors cursor-pointer"
              >
                {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
              </select>
            </div>

             {/* Severity */}
             <div className="relative">
              <select
                value={filters.severity}
                onChange={(e) => handleChange('severity', e.target.value)}
                className="appearance-none bg-surfaceHighlight border border-border rounded-lg px-4 py-2.5 text-sm text-neutral-300 focus:outline-none focus:border-primary hover:border-neutral-500 transition-colors cursor-pointer"
              >
                <option value="All">All Severities</option>
                <option value="High">High Severity</option>
                <option value="Medium">Medium Severity</option>
                <option value="Low">Low Severity</option>
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
               <SortDesc className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" size={16} />
              <select
                value={filters.sortBy}
                onChange={(e) => handleChange('sortBy', e.target.value as any)}
                className="appearance-none bg-surfaceHighlight border border-border rounded-lg pl-9 pr-8 py-2.5 text-sm text-neutral-300 focus:outline-none focus:border-primary hover:border-neutral-500 transition-colors cursor-pointer"
              >
                <option value="mentions">Most Mentions</option>
                <option value="recent">Most Recent</option>
                <option value="severity">Highest Severity</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;