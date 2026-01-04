
import React from 'react';
import { Search, Menu, Github, BookOpen } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 flex items-center h-16 px-4 bg-white/80 backdrop-blur-md border-b border-slate-200 md:px-8">
      <button 
        onClick={onMenuClick}
        className="p-2 mr-4 text-slate-500 rounded-md lg:hidden hover:bg-slate-100 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="relative flex-1 max-w-md hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search topics (e.g. pointers, malloc)..." 
          className="w-full pl-10 pr-4 py-2 text-sm bg-slate-100 border-transparent rounded-full focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
        />
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
          <BookOpen className="w-4 h-4" />
          Syllabus
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
          BIT
        </div>
      </div>
    </header>
  );
};

export default Navbar;
