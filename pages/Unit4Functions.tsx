import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FunctionSquare, ChefHat, Box, ArrowRightLeft, AlertTriangle, BookOpen, Layers, Zap, Cpu, Search, CheckCircle2 } from 'lucide-react';

const Unit4Functions: React.FC = () => {
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
                    <div className="p-3 bg-purple-100 rounded-xl">
                        <FunctionSquare className="w-8 h-8 text-purple-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Unit 4: Functions
                    </h1>
                </div>
                <p className="text-xl text-slate-600 font-medium">
                    "Modularity is the difference between a mess and a masterpiece."
                </p>
            </header>

            {/* Topic 1: The Function Architecture (The Stack) */}
            <section id="architecture" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Cpu className="w-7 h-7 text-purple-600" />
                    <h2 className="text-3xl font-bold text-slate-900">1. High-Precision Function Architecture</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8">
                    <p className="text-lg text-slate-700 leading-relaxed">
                        In C, a function is more than just a block of code. It represents a <strong>Memory Scope</strong> and a <strong>Control Flow Jump</strong>. Every time you call a function, the CPU creates a temporary workspace in RAM called a <strong>Stack Frame</strong>.
                    </p>

                    <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Box className="w-32 h-32" />
                        </div>
                        <h4 className="text-xl font-bold text-yellow-400 mb-8">Anatomy of a Stack Frame (Runtime)</h4>

                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <h5 className="font-bold text-emerald-400">1. Arguments (Inputs)</h5>
                                    <p className="text-xs text-slate-400">Values passed from the caller are pushed first.</p>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h5 className="font-bold text-indigo-400">2. Return Address</h5>
                                    <p className="text-xs text-slate-400">The CPU saves where it needs to jump back to after the function finishes.</p>
                                </div>
                                <div className="border-l-4 border-amber-500 pl-4">
                                    <h5 className="font-bold text-amber-400">3. Variables (Local)</h5>
                                    <p className="text-xs text-slate-400">All local data lives here. They are created on function entry and destroyed on exit.</p>
                                </div>
                            </div>

                            <div className="w-64 border-2 border-slate-700 rounded-xl overflow-hidden bg-slate-800">
                                <div className="p-2 text-[10px] text-slate-500 text-center uppercase border-b border-slate-700">Higher Memory</div>
                                <div className="bg-emerald-900/40 p-3 text-center border-b border-slate-700 text-emerald-200 text-xs font-mono">Arg 2 (y)</div>
                                <div className="bg-emerald-900/40 p-3 text-center border-b border-slate-700 text-emerald-200 text-xs font-mono">Arg 1 (x)</div>
                                <div className="bg-indigo-900/60 p-4 text-center border-b border-slate-700 text-indigo-200 text-xs font-bold uppercase tracking-wider">Return Pointer</div>
                                <div className="bg-amber-900/40 p-3 text-center border-b border-slate-700 text-amber-200 text-xs font-mono">Local: temp</div>
                                <div className="bg-amber-900/40 p-3 text-center text-amber-200 text-xs font-mono">Local: sum</div>
                                <div className="p-2 text-[10px] text-slate-500 text-center uppercase border-t border-slate-700">Lower Memory</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 2: Parameter Passing (Data Transfer) */}
            <section id="parameters" className="space-y-8">
                <div className="flex items-center gap-3">
                    <ArrowRightLeft className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">2. Data Transfer: Value vs Reference</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Call by Value */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-indigo-300 transition-all">
                        <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 px-4 py-1 text-xs font-bold rounded-bl-xl uppercase">Default</div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Call by Value</h3>
                        <p className="text-sm text-slate-600 mb-6">You send a <strong>Copy</strong> of the data. The original variable remains safe.</p>
                        <div className="bg-slate-50 p-4 rounded-xl text-xs font-mono border border-slate-200 mb-6">
                            void inc(int x) {'{'} x++; {'}'}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                            <div className="p-2 bg-slate-100 rounded text-center shrink-0">Original (10)</div>
                            <ArrowRightLeft className="w-4 h-4 text-indigo-400" />
                            <div className="p-2 bg-emerald-50 rounded text-center font-bold text-emerald-700 border border-emerald-100">Copy (10) <br /> Edits stay here</div>
                        </div>
                    </div>

                    {/* Call by Reference */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-purple-300 transition-all">
                        <div className="absolute top-0 right-0 bg-purple-100 text-purple-800 px-4 py-1 text-xs font-bold rounded-bl-xl uppercase">via Pointers</div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Call by Reference</h3>
                        <p className="text-sm text-slate-600 mb-6">You send the <strong>Address</strong>. The function can reach back and modify the original variable.</p>
                        <div className="bg-slate-50 p-4 rounded-xl text-xs font-mono border border-slate-200 mb-6">
                            void inc(int *x) {'{'} (*x)++; {'}'}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                            <div className="p-2 bg-slate-100 rounded text-center shrink-0">Original (10)</div>
                            <ArrowRightLeft className="w-4 h-4 text-purple-400" />
                            <div className="p-2 bg-purple-50 rounded text-center font-bold text-purple-700 border border-purple-100">Original Address <br /> Direct Access!</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 3: Storage Classes (Memory Lifetime) */}
            <section id="storage" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Layers className="w-7 h-7 text-amber-600" />
                    <h2 className="text-3xl font-bold text-slate-900">3. Storage Classes: Where & For How Long?</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-900 text-white">
                            <tr>
                                <th className="p-4">Keyword</th>
                                <th className="p-4">Storage (Location)</th>
                                <th className="p-4">Lifecycle</th>
                                <th className="p-4">Initial Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="p-4 font-bold font-mono text-indigo-600">auto</td>
                                <td className="p-4">Stack</td>
                                <td className="p-4 text-xs text-slate-500">Only inside block</td>
                                <td className="p-4 text-xs text-red-500">Garbage</td>
                            </tr>
                            <tr className="bg-amber-50">
                                <td className="p-4 font-bold font-mono text-amber-700">static</td>
                                <td className="p-4">Data Segment</td>
                                <td className="p-4 text-xs text-slate-600">Until Program ends</td>
                                <td className="p-4 text-xs text-emerald-600 font-bold">Zero (0)</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold font-mono text-purple-600">extern</td>
                                <td className="p-4">Shared</td>
                                <td className="p-4 text-xs text-slate-500">Global across files</td>
                                <td className="p-4 text-xs text-slate-500">Depends on orig.</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="p-4 font-bold font-mono text-emerald-700">register</td>
                                <td className="p-4">CPU Registers</td>
                                <td className="p-4 text-xs text-slate-500">Fast access local</td>
                                <td className="p-4 text-xs text-red-500">Garbage</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Topic 4: Recursion (The Mirror Dimension) */}
            <section id="recursion" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Zap className="w-7 h-7 text-pink-600" />
                    <h2 className="text-3xl font-bold text-slate-900">4. Recursion: Logic from the Beyond</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-800">The Two Golden Laws</h3>
                            <div className="space-y-4">
                                <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-100 flex gap-4">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-600 shrink-0" />
                                    <div>
                                        <h4 className="font-extrabold text-emerald-900">1. The Base Case</h4>
                                        <p className="text-xs text-slate-600">The termination condition. Without it, the function calls itself until the Stack hits the Heap (Crash).</p>
                                    </div>
                                </div>
                                <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-100 flex gap-4">
                                    <ArrowRightLeft className="w-10 h-10 text-indigo-600 shrink-0" />
                                    <div>
                                        <h4 className="font-extrabold text-indigo-900">2. Recursive Step</h4>
                                        <p className="text-xs text-slate-600">Progressing towards the base case. The problem is broken into a smaller version of itself.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-6 font-mono text-[11px] leading-relaxed text-pink-300">
                            <div className="text-slate-500 mb-2">// Call: Factorial(3)</div>
                            <div className="border-l border-slate-700 pl-4 mb-2">
                                Push fact(3) {"->"} Wait for fact(2)<br />
                                <div className="border-l border-slate-700 pl-4 mb-2">
                                    Push fact(2) {"->"} Wait for fact(1)<br />
                                    <div className="border-l border-slate-700 pl-4 mb-2">
                                        Push fact(1) {"->"} Hit Base Case!<br />
                                        <div className="text-emerald-400">Return 1</div>
                                    </div>
                                    <div className="text-indigo-400">Popping fact(2): 2 * 1 = 2</div>
                                </div>
                                <div className="text-indigo-400">Popping fact(3): 3 * 2 = 6</div>
                            </div>
                            <div className="mt-4 text-center text-white font-bold bg-pink-900/50 py-2 rounded">Stack Unwinding Complete</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 5: Variable Arguments (Advanced) */}
            <section id="variadic" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Search className="w-7 h-7 text-slate-600" />
                    <h2 className="text-3xl font-bold text-slate-900">5. Variadic Functions</h2>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-indigo-600 text-white rounded-xl font-bold text-lg">...</div>
                        <div>
                            <h4 className="font-bold text-slate-900">The "Ellipsis" Operator</h4>
                            <p className="text-sm text-slate-600">Used for functions that take an unknown number of arguments, like `printf` or `scanf`.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h5 className="font-bold text-slate-800 mb-4">stdarg.h Macros</h5>
                            <ul className="space-y-3 text-xs text-slate-700">
                                <li className="flex justify-between"><code className="font-bold text-indigo-600">va_list</code> <span>pointer to args</span></li>
                                <li className="flex justify-between"><code className="font-bold text-indigo-600">va_start</code> <span>init pointer</span></li>
                                <li className="flex justify-between"><code className="font-bold text-indigo-600">va_arg</code> <span>fetch next arg</span></li>
                                <li className="flex justify-between"><code className="font-bold text-indigo-600">va_end</code> <span>cleanup</span></li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                            <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Security Risk</h5>
                            <p className="text-[11px] text-red-800 leading-relaxed">
                                Variadic functions are dangerous because C doesn't know the types of `...`. If you pass a Float but `va_arg` expects an Int, you get memory corruption. This is how "Format String Attacks" happen!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unit4Functions;
