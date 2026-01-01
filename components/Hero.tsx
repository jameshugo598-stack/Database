import React from 'react';
import { Database, Activity, GitPullRequest } from 'lucide-react';
import { Problem } from '../types';

interface HeroProps {
    problems: Problem[];
}

const Hero: React.FC<HeroProps> = ({ problems }) => {
  const totalMentions = problems.reduce((acc, curr) => acc + curr.mentions, 0);
  const toolsCount = new Set(problems.map(p => p.category)).size;

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-fade-in">
        Updated Jan 2025 • v2.0
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 animate-slide-up">
        What's Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Broken</span> in <br className="hidden md:block"/>
        Developer Tools
      </h1>
      
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        The top 1% of critical issues curated from analyzing <span className="text-white font-semibold">50,000+ GitHub comments</span>. No marketing fluff, just real pain points that block development.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="p-4 rounded-2xl bg-surface border border-border flex flex-col items-center justify-center group hover:border-primary/30 transition-colors">
          <div className="mb-2 p-2 rounded-full bg-neutral-800 text-neutral-400 group-hover:text-primary transition-colors">
            <Database size={20} />
          </div>
          <span className="text-2xl font-bold text-white">{problems.length}</span>
          <span className="text-sm text-neutral-500">Curated Issues</span>
        </div>
        
        <div className="p-4 rounded-2xl bg-surface border border-border flex flex-col items-center justify-center group hover:border-primary/30 transition-colors">
           <div className="mb-2 p-2 rounded-full bg-neutral-800 text-neutral-400 group-hover:text-primary transition-colors">
            <GitPullRequest size={20} />
          </div>
          <span className="text-2xl font-bold text-white">50k+</span>
          <span className="text-sm text-neutral-500">Comments Analyzed</span>
        </div>

        <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-surface border border-border flex flex-col items-center justify-center group hover:border-primary/30 transition-colors">
           <div className="mb-2 p-2 rounded-full bg-neutral-800 text-neutral-400 group-hover:text-primary transition-colors">
            <Activity size={20} />
          </div>
          <span className="text-2xl font-bold text-white">{toolsCount}</span>
          <span className="text-sm text-neutral-500">Categories</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;