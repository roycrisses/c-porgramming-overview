
import React from 'react';
import { Book, Target, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <header className="py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Master C Programming for <span className="text-indigo-600">BIT</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          An academic-grade documentation portal designed specifically for University-level
          Information Technology students. We focus on theoretical depth, memory-level understanding,
          and logical clarity.
        </p>
        <div className="mt-8 flex gap-4">
          <Link to="/unit1" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center gap-2">
            Start Learning <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#syllabus" className="px-6 py-3 bg-white text-slate-600 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
            View Syllabus
          </a>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8 py-10">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
            <Book className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Theoretically Sound</h3>
          <p className="text-slate-500 text-sm">
            Deep dives into memory management, compilers, and internal architecture.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">Visual Learning</h3>
          <p className="text-slate-500 text-sm">
            Diagram-driven explanations for pointers, arrays, and recursion stacks.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold mb-2">BIT Focus</h3>
          <p className="text-slate-500 text-sm">
            Mapped to standard university curriculum with exam-oriented insights.
          </p>
        </div>
      </div>

      <section id="syllabus" className="py-10 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-8">Curriculum Overview</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Unit 1: Foundations", desc: "History, Program Lifecycle, and Environment Setup", path: "/unit1" },
            { title: "Unit 2: Elements of C", desc: "Tokens, Data Types, and Standard I/O Deep Dive", path: "/unit2" },
            { title: "Unit 3: Control Flow", desc: "Branch Prediction, Jump Tables, and Iteration Logic", path: "/unit3" },
            { title: "Unit 4: Functions", desc: "Stack Frames, Recursion, and Storage Classes", path: "/unit4" },
            { title: "Unit 5: Arrays & Strings", desc: "Memory Mapping and Manual String Implementation", path: "/unit5" },
            { title: "Unit 6: Pointers", desc: "Pointer Arithmetic, Void Pointers, and DMA", path: "/unit6" },
            { title: "Unit 7: Derived Types", desc: "Memory Padding, Bit Fields, and Unions", path: "/unit7" },
            { title: "Unit 8: File Handling", desc: "Binary Streams, Buffering, and Random Access", path: "/unit8" }
          ].map((unit, i) => (
            <Link key={i} to={unit.path} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
              <span className="text-indigo-600 font-bold w-6">{i + 1}</span>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{unit.title}</h4>
                <p className="text-slate-500 text-xs">{unit.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
