import React from 'react';
import { Mail, Github, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">DevTools Broken</h3>
            <p className="text-neutral-400 text-sm max-w-sm">
              Built by a CS student looking for problems worth solving. 
              Data is sourced from public GitHub repositories and forums.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="w-full max-w-md bg-neutral-900/50 p-6 rounded-2xl border border-border">
            <div className="flex items-center gap-2 mb-4 text-white font-medium">
              <Mail size={18} className="text-primary" />
              <span>Get weekly updates on new issues</span>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="developer@example.com"
                className="flex-grow bg-background border border-border rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-neutral-600 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-xs text-neutral-600 flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart size={12} className="text-red-500 fill-red-500" />
          <span>in 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;