
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home.tsx';
import Unit1Introduction from './pages/Unit1Introduction.tsx';
import Unit2Elements from './pages/Unit2Elements.tsx';
import Unit3ControlStatements from './pages/Unit3ControlStatements.tsx';
import Unit4Functions from './pages/Unit4Functions.tsx';
import Unit5ArraysStrings from './pages/Unit5ArraysStrings.tsx';
import Unit6Pointers from './pages/Unit6Pointers.tsx';
import Unit7StructuresUnions from './pages/Unit7StructuresUnions.tsx';
import Unit8FileHandling from './pages/Unit8FileHandling.tsx';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HashRouter>
      <div className="flex min-h-screen bg-slate-50">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <div className="flex-1 flex flex-col min-w-0">
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

          <main className="flex-1 overflow-y-auto px-4 py-8 md:px-8 lg:px-12 max-w-5xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/unit1" element={<Unit1Introduction />} />
              <Route path="/unit2" element={<Unit2Elements />} />
              <Route path="/unit3" element={<Unit3ControlStatements />} />
              <Route path="/unit4" element={<Unit4Functions />} />
              <Route path="/unit5" element={<Unit5ArraysStrings />} />
              <Route path="/unit6" element={<Unit6Pointers />} />
              <Route path="/unit7" element={<Unit7StructuresUnions />} />
              <Route path="/unit8" element={<Unit8FileHandling />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <footer className="py-6 px-4 md:px-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-left">
                <p>© {new Date().getFullYear()} C-BIT Mastery Portal. Designed for Academic Excellence.</p>
                <p className="mt-1 font-semibold text-slate-700">Website by Mr. Krishna Karki</p>
              </div>
              <div className="flex flex-col md:items-end text-right gap-1">
                <a href="https://github.com/roycrisses" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2 font-medium transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  github.com/roycrisses
                </a>
                <span className="text-slate-600 flex items-center gap-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-bold">WhatsApp</span> 9700804395
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
