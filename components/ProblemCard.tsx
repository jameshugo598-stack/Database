import React, { useState } from 'react';
import { Problem, SeverityLevel } from '../types';
import { MessageSquare, Calendar, Github, ExternalLink, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProblemCardProps {
  problem: Problem;
}

const severityColors: Record<SeverityLevel, string> = {
  High: "bg-red-500/10 text-red-500 border-red-500/20",
  Medium: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  Low: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
};

const ProblemCard: React.FC<ProblemCardProps> = ({ problem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2 }}
      className="group bg-surface border border-border hover:border-neutral-600 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5"
    >
      <div 
        className="p-6 cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Header Tags */}
        <div className="flex flex-wrap gap-2 mb-4 text-xs font-medium">
          <span className={`px-2.5 py-1 rounded-full border ${severityColors[problem.severity]}`}>
            {problem.severity} Severity
          </span>
          <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
            {problem.category}
          </span>
          {problem.language !== "All" && (
            <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
              {problem.language}
            </span>
          )}
          <span className="ml-auto flex items-center gap-1 text-neutral-500">
            <MessageSquare size={14} />
            {problem.mentions}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold text-neutral-100 mb-2 group-hover:text-primary transition-colors">
          {problem.title}
        </h3>
        <p className="text-neutral-400 leading-relaxed mb-4 line-clamp-3">
          {problem.description}
        </p>

        {/* Footer Meta */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Calendar size={14} />
            <span>Updated {problem.lastUpdated}</span>
          </div>
          <button className="text-neutral-400 hover:text-white transition-colors">
             {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-neutral-900/50"
          >
            <div className="p-6 pt-0 border-t border-border/50">
              
              {/* Why It Matters */}
              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                  <AlertTriangle size={16} />
                  Why This Matters
                </h4>
                <p className="text-sm text-neutral-300">
                  {problem.whyItMatters}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {problem.tags.map(tag => (
                  <span key={tag} className="text-xs text-neutral-500 px-2 py-1 bg-neutral-800 rounded">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Example Issues */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-neutral-300 mb-3 flex items-center gap-2">
                  <Github size={16} />
                  Source Discussions
                </h4>
                <div className="space-y-2">
                  {problem.exampleIssues.length > 0 ? (
                    problem.exampleIssues.map((issue, idx) => (
                      <a
                        key={idx}
                        href={issue.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded bg-neutral-800/50 hover:bg-neutral-800 border border-transparent hover:border-neutral-600 transition-all"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary hover:underline truncate max-w-[70%]">
                            {issue.repo}
                          </span>
                          <div className="flex items-center gap-2 text-xs text-neutral-500">
                            <MessageSquare size={12} />
                            {issue.comments} comments
                            <ExternalLink size={12} />
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="text-xs text-neutral-600 italic px-2">
                      Aggregated from multiple related threads.
                    </div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProblemCard;