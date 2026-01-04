import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layers, GitBranch, RepeatIcon, HelpCircle, AlertTriangle, CheckCircle2, Zap, Table2, ArrowBigRightDash } from 'lucide-react';

const Unit3ControlStatements: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="space-y-12">
            <header className="border-b border-slate-200 pb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-100 rounded-xl">
                        <Layers className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Unit 3: Control Flow
                    </h1>
                </div>
                <p className="text-xl text-slate-600 font-medium">
                    "Control flow is the intelligence of your program. Without it, your code is just a grocery list."
                </p>
            </header>

            {/* Topic 1: The Selection (Selection Structures) */}
            <section id="selection" className="space-y-8">
                <div className="flex items-center gap-3">
                    <GitBranch className="w-7 h-7 text-cyan-600" />
                    <h2 className="text-3xl font-bold text-slate-900">1. Selection: The Art of Decision Making</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">If-Else: The Logical Fork</h3>
                    <p className="text-slate-700 mb-8 leading-relaxed">
                        Selection structures allow a program to choose different paths of execution based on a condition. In C, any <strong>non-zero</strong> value is considered TRUE, and <strong>zero</strong> is FALSE.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                                <Table2 className="w-5 h-5" /> Logical Truth Tables
                            </h4>
                            <div className="overflow-hidden rounded-lg border border-slate-200">
                                <table className="w-full text-xs text-left">
                                    <thead className="bg-slate-900 text-white">
                                        <tr><th className="p-2">A</th><th className="p-2">B</th><th className="p-2">A && B</th><th className="p-2">A || B</th></tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr><td className="p-2">1 (T)</td><td className="p-2">1 (T)</td><td className="p-2 text-emerald-600 font-bold font-mono">1</td><td className="p-2 text-emerald-600 font-bold font-mono">1</td></tr>
                                        <tr><td className="p-2">1 (T)</td><td className="p-2">0 (F)</td><td className="p-2 text-red-600 font-bold font-mono">0</td><td className="p-2 text-emerald-600 font-bold font-mono">1</td></tr>
                                        <tr><td className="p-2">0 (F)</td><td className="p-2">1 (T)</td><td className="p-2 text-red-600 font-bold font-mono">0</td><td className="p-2 text-emerald-600 font-bold font-mono">1</td></tr>
                                        <tr><td className="p-2">0 (F)</td><td className="p-2">0 (F)</td><td className="p-2 text-red-600 font-bold font-mono">0</td><td className="p-2 text-red-600 font-bold font-mono">0</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Zap className="w-20 h-20" />
                            </div>
                            <h4 className="font-bold text-amber-900 mb-4">Hardware Hack: Branch Prediction</h4>
                            <p className="text-xs text-amber-800 leading-relaxed mb-4">
                                Modern CPUs try to "guess" which branch the `if` will take. If the CPU guesses wrong, the entire instruction pipeline is flushed, causing a significant delay. This is why <strong>sorting data</strong> before looping through it often makes `if` statements run much faster.
                            </p>
                            <div className="bg-white p-3 rounded border border-amber-100 text-[10px] font-mono">
                                // Sorted data is "predictable" for the CPU.<br />
                                // Unsorted data causes "Branch Misprediction".
                            </div>
                        </div>
                    </div>

                    <div id="switch" className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-6">The Switch Statement & Jump Tables</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-4 rounded-xl border border-indigo-100">
                                <h5 className="font-bold text-slate-800 mb-2">Structure</h5>
                                <p className="text-xs text-slate-600">Uses constants (labels) for branches. Each case must be a unique integer or character constant.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-indigo-100">
                                <h5 className="font-bold text-slate-800 mb-2">Performance</h5>
                                <p className="text-xs text-indigo-600 font-bold">O(1) Efficiency.</p>
                                <p className="text-xs text-slate-600">Compilers create a "Jump Table", avoiding sequential checks of every condition.</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-indigo-100">
                                <h5 className="font-bold text-slate-800 mb-2">Requirement</h5>
                                <p className="text-xs text-slate-600">Variables or Floats are NOT allowed. Standard C requires integral types only.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl font-mono text-sm text-green-400">
                            <span className="text-purple-400">switch</span> (day) {'{'}<br />
                            &nbsp;&nbsp;<span className="text-yellow-400">case</span> 1: printf("Monday"); <span className="text-purple-400">break</span>;<br />
                            &nbsp;&nbsp;<span className="text-yellow-400">case</span> 2: printf("Tuesday"); <span className="text-purple-400">break</span>;<br />
                            &nbsp;&nbsp;<span className="text-yellow-400">default</span>: printf("Unknown Day");<br />
                            {'}'}
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 2: Iteration (Loops) */}
            <section id="loops" className="space-y-8">
                <div className="flex items-center gap-3">
                    <RepeatIcon className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">2. Iteration: The Engine of Repetition</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-12">
                    {/* 2.1 Entry Control vs Exit Control */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full w-fit text-xs font-bold">
                                <CheckCircle2 className="w-3 h-3" /> ENTRY CONTROLLED
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">For & While</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                The condition is checked <strong>BEFORE</strong> the loop body executes. If the first check fails, the body may run <strong>ZERO</strong> times.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs">
                                while (condition) {'{'} // Check first<br />
                                &nbsp;&nbsp;// do work<br />
                                {'}'}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-700 rounded-full w-fit text-xs font-bold">
                                <ArrowBigRightDash className="w-3 h-3" /> EXIT CONTROLLED
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Do-While</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                The condition is checked <strong>AFTER</strong> the loop body executes. The body is guaranteed to run <strong>AT LEAST ONCE</strong>.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs">
                                do {'{'}<br />
                                &nbsp;&nbsp;// do work<br />
                                {'}'} while (condition); // Check last
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-100" />

                    {/* 2.2 Nested Loops & Complexity */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Nested Loops & Hardware Impact</h3>
                        <p className="text-slate-700 mb-8 leading-relaxed">
                            A loop within a loop is the foundation of Matrix processing and Sorting. However, it creates <strong>O(N²)</strong> complexity.
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 p-8 rounded-2xl">
                            <div className="flex-1 space-y-4">
                                <div className="text-indigo-400 font-bold text-lg">Multiplication of Iterations</div>
                                <p className="text-xs text-slate-400">
                                    If the Outer loop runs 1000 times, and the Inner loop runs 1000 times, the total operations = <strong>1,000,000</strong>. Small increases in N lead to massive performance drops.
                                </p>
                                <div className="text-[10px] font-mono text-slate-500 bg-black/50 p-3 rounded">
                                    for(i=0; i&lt;N; i++)<br />
                                    &nbsp;&nbsp;for(j=0; j&lt;N; j++)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;count++;
                                </div>
                            </div>
                            <div className="w-48 h-48 border-4 border-indigo-500/20 rounded-full flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-4xl font-extrabold text-indigo-400">N²</span>
                                <span className="text-[10px] text-slate-500 mt-2 uppercase tracking-tighter">Polynomial Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 3: Jump Statements */}
            <section id="jumps" className="space-y-8">
                <div className="flex items-center gap-3">
                    <ArrowBigRightDash className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">3. Jump Statements: Breaking the Sequence</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Break */}
                        <div className="space-y-4 group">
                            <div className="h-1 bg-red-500 w-full rounded-full transition-all group-hover:h-2"></div>
                            <h4 className="font-bold text-slate-900 text-xl">break;</h4>
                            <p className="text-sm text-slate-600">The <strong>"Eject"</strong> button. Terminates the innermost loop or switch statement immediately. Control passes to the next line <em>after</em> the loop.</p>
                        </div>
                        {/* Continue */}
                        <div className="space-y-4 group">
                            <div className="h-1 bg-amber-500 w-full rounded-full transition-all group-hover:h-2"></div>
                            <h4 className="font-bold text-slate-900 text-xl">continue;</h4>
                            <p className="text-sm text-slate-600">The <strong>"Skip"</strong> button. Aborts the <em>current</em> iteration and jumps to the update/condition check. The loop doesn't end, it just moves to the next tick.</p>
                        </div>
                        {/* Goto */}
                        <div className="space-y-4 group">
                            <div className="h-1 bg-slate-900 w-full rounded-full transition-all group-hover:h-2"></div>
                            <h4 className="font-bold text-slate-900 text-xl">goto;</h4>
                            <p className="text-sm text-slate-600">The <strong>"Teleport"</strong> button. Unconditional jump to a labeled statement. Used primarily in Linux Kernel for centralized error cleanup.</p>
                        </div>
                    </div>

                    <div className="mt-12 bg-red-50 p-6 rounded-2xl border border-red-200">
                        <div className="flex gap-4 items-start">
                            <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-red-900 text-lg mb-2">The "Spaghetti Code" Warning</h4>
                                <p className="text-sm text-red-800 leading-relaxed">
                                    Overuse of `goto` makes code impossible to trace logically. A program with too many `goto` labels is known as Spaghetti Code. <strong>Rule of Thumb:</strong> Only use `goto` for cleaning up multiple resources at the end of a function.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unit3ControlStatements;
