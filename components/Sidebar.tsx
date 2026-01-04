
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Code,
  Settings,
  Layers,
  Cpu,
  Database,
  X,
  ChevronRight
} from 'lucide-react';
import { Module } from '../types';

const modules: Module[] = [
  {
    id: 'unit1',
    title: 'Unit 1: Introduction',
    icon: <BookOpen className="w-5 h-5" />,
    topics: [
      { id: 'history', title: 'History of C', path: '/unit1' },
      { id: 'compilation', title: 'Compilation Process', path: '/unit1#compilation' },
      { id: 'structure', title: 'Structure of C', path: '/unit1#structure' },
      { id: 'keywords', title: 'Keywords', path: '/unit1#keywords' }
    ]
  },
  {
    id: 'unit2',
    title: 'Unit 2: Elements of C',
    icon: <Settings className="w-5 h-5" />,
    topics: [
      { id: 'datatypes', title: 'Data Types', path: '/unit2' },
      { id: 'constants', title: 'Constants', path: '/unit2#constants' },
      { id: 'variables', title: 'Variables', path: '/unit2#variables' },
      { id: 'operators', title: 'Operators', path: '/unit2#operators' },
      { id: 'typecasting', title: 'Type Casting', path: '/unit2#typecasting' }
    ]
  },
  {
    id: 'unit3',
    title: 'Unit 3: Control Statements',
    icon: <Layers className="w-5 h-5" />,
    topics: [
      { id: 'ifelse', title: 'If-Else', path: '/unit3' },
      { id: 'nested', title: 'Nested If', path: '/unit3#nested' },
      { id: 'switch', title: 'Switch-Case', path: '/unit3#switch' },
      { id: 'for', title: 'For Loop', path: '/unit3#for' },
      { id: 'while', title: 'While Loop', path: '/unit3#while' },
      { id: 'dowhile', title: 'Do-While Loop', path: '/unit3#dowhile' },
      { id: 'break', title: 'Break/Continue', path: '/unit3#break' }
    ]
  },
  {
    id: 'unit4',
    title: 'Unit 4: Functions',
    icon: <Code className="w-5 h-5" />,
    topics: [
      { id: 'userdefined', title: 'User-defined Functions', path: '/unit4' },
      { id: 'library', title: 'Library Functions', path: '/unit4#library' },
      { id: 'recursion', title: 'Recursion', path: '/unit4#recursion' },
      { id: 'parameters', title: 'Parameter Passing', path: '/unit4#parameters' }
    ]
  },
  {
    id: 'unit5',
    title: 'Unit 5: Arrays & Strings',
    icon: <Database className="w-5 h-5" />,
    topics: [
      { id: '1d-arrays', title: '1D Arrays', path: '/unit5' },
      { id: '2d-arrays', title: '2D Arrays', path: '/unit5#2d' },
      { id: 'strings', title: 'String Handling', path: '/unit5#strings' },
      { id: 'multidim', title: 'Multi-dimensional', path: '/unit5#multidim' }
    ]
  },
  {
    id: 'unit6',
    title: 'Unit 6: Pointers',
    icon: <Cpu className="w-5 h-5" />,
    topics: [
      { id: 'pointer-basics', title: 'Pointer Basics', path: '/unit6' },
      { id: 'arithmetic', title: 'Pointer Arithmetic', path: '/unit6#arithmetic' },
      { id: 'double-pointer', title: 'Pointers to Pointers', path: '/unit6#double' },
      { id: 'arrays-pointers', title: 'Arrays & Pointers', path: '/unit6#arrays' }
    ]
  },
  {
    id: 'unit7',
    title: 'Unit 7: Structures & Unions',
    icon: <Layers className="w-5 h-5" />,
    topics: [
      { id: 'defining', title: 'Defining Structures', path: '/unit7' },
      { id: 'nested', title: 'Nested Structures', path: '/unit7#nested' },
      { id: 'typedef', title: 'Typedef', path: '/unit7#typedef' },
      { id: 'unions', title: 'Unions', path: '/unit7#unions' }
    ]
  },
  {
    id: 'unit8',
    title: 'Unit 8: File Handling',
    icon: <Database className="w-5 h-5" />,
    topics: [
      { id: 'fopen', title: 'Fopen/Fclose', path: '/unit8' },
      { id: 'sequential', title: 'Sequential Access', path: '/unit8#sequential' },
      { id: 'random', title: 'Random Access', path: '/unit8#random' }
    ]
  }
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100 bg-slate-900 text-white">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="bg-indigo-500 p-1 rounded">
            <Code className="w-5 h-5" />
          </div>
          <span>C-BIT Mastery</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="lg:hidden">
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="p-4 space-y-8 h-[calc(100vh-4rem)] overflow-y-auto">
        {modules.map((module) => (
          <div key={module.id} className="space-y-2">
            <div className="flex items-center gap-2 px-3 text-sm font-semibold text-slate-400 uppercase tracking-wider">
              {module.icon}
              <span>{module.title}</span>
            </div>
            <ul className="space-y-1">
              {module.topics.map((topic) => {
                const isActive = location.pathname === topic.path;
                return (
                  <li key={topic.id}>
                    <Link
                      to={topic.path}
                      className={`
                        flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors
                        ${isActive
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'}
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      {topic.title}
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
