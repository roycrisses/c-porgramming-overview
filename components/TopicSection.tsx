
import React, { useEffect } from 'react';
import { Info, HelpCircle, Lightbulb } from 'lucide-react';

interface TopicSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  diagram?: string;
  code?: string;
  examFocus?: string[];
  summary?: string[];
}

const TopicSection: React.FC<TopicSectionProps> = ({ 
  title, 
  description, 
  children, 
  diagram, 
  code, 
  examFocus,
  summary 
}) => {
  useEffect(() => {
    // @ts-ignore
    if (window.mermaid) {
      // @ts-ignore
      window.mermaid.contentLoaded();
    }
  }, [diagram]);

  return (
    <section className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">{title}</h2>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        {description}
      </p>

      {children}

      {diagram && (
        <div className="my-8 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            Visual Concept
          </h4>
          <div className="mermaid">
            {diagram}
          </div>
        </div>
      )}

      {code && (
        <div className="my-8">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            Practical Implementation (C)
          </h4>
          <div className="relative group">
            <pre className="p-4 rounded-lg bg-slate-900 text-slate-100 overflow-x-auto text-sm leading-relaxed border border-slate-800 font-mono">
              <code>{code}</code>
            </pre>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="px-2 py-1 bg-slate-800 text-xs rounded text-slate-400">c11</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {examFocus && examFocus.length > 0 && (
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-100">
            <h4 className="flex items-center gap-2 text-amber-800 font-bold mb-3 text-sm uppercase tracking-wide">
              <HelpCircle className="w-4 h-4" /> BIT Exam Perspective
            </h4>
            <ul className="space-y-2">
              {examFocus.map((item, idx) => (
                <li key={idx} className="text-sm text-amber-900/80 flex gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {summary && summary.length > 0 && (
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100">
            <h4 className="flex items-center gap-2 text-indigo-800 font-bold mb-3 text-sm uppercase tracking-wide">
              <Lightbulb className="w-4 h-4" /> Key Takeaways
            </h4>
            <ul className="space-y-2">
              {summary.map((item, idx) => (
                <li key={idx} className="text-sm text-indigo-900/80 flex gap-2">
                  <span className="text-indigo-400 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopicSection;
