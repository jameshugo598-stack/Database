import React, { useState, useMemo } from 'react';
import { problems } from './data';
import { FilterState, Problem } from './types';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProblemCard from './components/ProblemCard';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

const ITEMS_PER_PAGE = 12;

const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'All',
    language: 'All',
    severity: 'All',
    sortBy: 'mentions'
  });

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredProblems = useMemo(() => {
    return problems
      .filter(p => {
        // Search Filter
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          p.title.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.tags.some(t => t.toLowerCase().includes(searchLower));
        
        // Category Filter
        const matchesCategory = filters.category === 'All' || p.category === filters.category;
        
        // Language Filter
        const matchesLanguage = filters.language === 'All' || p.language === filters.language || p.language === 'All';

        // Severity Filter
        const matchesSeverity = filters.severity === 'All' || p.severity === filters.severity;

        return matchesSearch && matchesCategory && matchesLanguage && matchesSeverity;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'mentions':
            return b.mentions - a.mentions;
          case 'recent':
            const dateA = new Date(a.lastUpdated).getTime();
            const dateB = new Date(b.lastUpdated).getTime();
            // Handle invalid dates if any "X days ago" strings slipped in by defaulting them to now
            const valA = isNaN(dateA) ? Date.now() : dateA;
            const valB = isNaN(dateB) ? Date.now() : dateB;
            return valB - valA;
          case 'severity':
            const severityWeight = { High: 3, Medium: 2, Low: 1 };
            return severityWeight[b.severity] - severityWeight[a.severity];
          default:
            return 0;
        }
      });
  }, [filters]);

  const displayedProblems = filteredProblems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProblems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  // Reset pagination when filters change
  React.useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [filters]);

  return (
    <div className="min-h-screen bg-background text-neutral-200 selection:bg-primary/20 selection:text-white">
      
      <Hero problems={problems} />

      <main className="px-4 sm:px-6 lg:px-8 pb-16">
        
        <FilterBar filters={filters} setFilters={setFilters} />

        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between text-sm text-neutral-500">
             <span>Showing {displayedProblems.length} of {filteredProblems.length} issues</span>
             {filteredProblems.length === 0 && (
               <span className="text-red-400">No matching issues found. Try adjusting filters.</span>
             )}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
          >
            <AnimatePresence mode="popLayout">
              {displayedProblems.map(problem => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </AnimatePresence>
          </motion.div>

          {hasMore && (
            <div className="flex justify-center pt-4">
              <button 
                onClick={handleLoadMore}
                className="px-8 py-3 bg-surface hover:bg-surfaceHighlight border border-border rounded-full text-white font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              >
                Load More Issues
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;