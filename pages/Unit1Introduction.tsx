import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BookOpen, Cpu, Code2, Terminal, CheckCircle2, Search, AlertTriangle, Layers, Zap, History } from 'lucide-react';

const Unit1Introduction: React.FC = () => {
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
                    <div className="p-3 bg-indigo-100 rounded-xl">
                        <BookOpen className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Unit 1: The Foundation
                    </h1>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    "The universe is built on Physics. Software is built on C."
                </p>
            </header>

            {/* Topic 1: The Origins & Evolution */}
            <section id="history" className="space-y-8">
                <div className="flex items-center gap-3">
                    <History className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">1. Origins & History: The Birth of Modern Computing</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">The Genesis (Bell Labs, 1972)</h3>
                    <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
                        <p>
                            In the early 1970s, at AT&T Bell Labs, Ken Thompson and Dennis Ritchie were working on a game called "Space Travel". They were using a PDP-7 computer, which was extremely limited. To make their work easier, they decided to build a new Operating System: <strong>UNIX</strong>.
                        </p>
                        <p>
                            Initial versions of UNIX were written in <strong>Assembly Language</strong>. This was problematic because Assembly is specific to the hardware. Moving UNIX to a new computer meant rewriting the entire code from scratch.
                        </p>
                        <p className="font-bold text-indigo-700">
                            They needed a "Portable" language—one that could run on any hardware with minimal changes.
                        </p>
                    </div>

                    <div className="mt-12 grid md:grid-cols-4 gap-4 relative">
                        {/* Timeline Arrows */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center">
                            <div className="text-xs font-bold text-slate-400 mb-2">1960</div>
                            <h4 className="font-bold text-slate-800">ALGOL 60</h4>
                            <p className="text-[10px] text-slate-500 mt-2">The mother of block structures.</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center">
                            <div className="text-xs font-bold text-slate-400 mb-2">1967</div>
                            <h4 className="font-bold text-slate-800">BCPL</h4>
                            <p className="text-[10px] text-slate-500 mt-2">Martin Richards. Introduced bit manipulation.</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm text-center">
                            <div className="text-xs font-bold text-slate-400 mb-2">1970</div>
                            <h4 className="font-bold text-slate-800">B Language</h4>
                            <p className="text-[10px] text-slate-500 mt-2">Ken Thompson's simplified BCPL.</p>
                        </div>
                        <div className="bg-indigo-600 p-5 rounded-xl border border-indigo-500 shadow-lg text-center text-white transform scale-110">
                            <div className="text-xs font-bold text-indigo-200 mb-2">1972</div>
                            <h4 className="font-bold text-white">C Language</h4>
                            <p className="text-[10px] text-indigo-100 mt-2">Dennis Ritchie. Added Data Types.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 2: Hardware-Software Relationship */}
            <section id="hardware" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Cpu className="w-7 h-7 text-emerald-600" />
                    <h2 className="text-3xl font-bold text-slate-900">2. The Hardware/Software Relationship</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-lg text-slate-700 mb-8">
                        C is often called a <strong>"Middle-Level Language"</strong> because it combines the power of Assembly with the readability of high-level languages like Java.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                                <Code2 className="w-8 h-8 text-slate-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 border-b pb-2">High Level</h4>
                            <p className="text-xs text-slate-500">Python, JS, Java</p>
                            <p className="text-sm text-slate-600">Human friendly. Abstracted from hardware. Slower.</p>
                        </div>
                        <div className="space-y-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 transform scale-105 shadow-md">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                <Zap className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h4 className="font-bold text-emerald-900 border-b border-emerald-200 pb-2">Middle Level (C)</h4>
                            <p className="text-xs text-emerald-600 font-bold uppercase">The Sweet Spot</p>
                            <p className="text-sm text-emerald-800">Pointer access, bit manipulation, yet Structured.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                                <Layers className="w-8 h-8 text-slate-600" />
                            </div>
                            <h4 className="font-bold text-slate-900 border-b pb-2">Low Level</h4>
                            <p className="text-xs text-slate-500">Assembly, Binary</p>
                            <p className="text-sm text-slate-600">Machine specific. Pure speed. Extremely hard to write.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 3: The Compilation Pipeline */}
            <section id="compilation" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Terminal className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">3. The Compilation Pipeline</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <p className="text-slate-700 mb-10">
                        Compiling isn't a single step. It's a 4-stage factory line that turns human text into machine sparks.
                    </p>

                    <div className="relative space-y-12">
                        {/* Connecting Line */}
                        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100 -z-10"></div>

                        {/* Stage 1 */}
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center font-bold relative z-10">1</div>
                            <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-2">Preprocessor</h4>
                                <p className="text-sm text-slate-600 mb-4">Handles directives (lines starting with `#`). It parses text before the compiler even starts.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded border border-slate-200">
                                        <span className="text-xs font-bold text-slate-400 block mb-1">Inputs</span>
                                        <code className="text-[10px] text-indigo-600">#include &lt;stdio.h&gt;<br />#define MAX 100</code>
                                    </div>
                                    <div className="bg-white p-3 rounded border border-slate-200">
                                        <span className="text-xs font-bold text-slate-400 block mb-1">Actions</span>
                                        <ul className="text-[10px] text-slate-500 list-disc pl-4">
                                            <li>Removes comments</li>
                                            <li>Macro expansion</li>
                                            <li>Header file inclusion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stage 2 */}
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center font-bold relative z-10">2</div>
                            <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-2">Compiler Proper</h4>
                                <p className="text-sm text-slate-600 mb-4">Translates the expanded code into <strong>Assembly Language</strong>.</p>
                                <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs text-green-400 leading-relaxed">
                                    mov eax, 1<br />
                                    add eax, ebx<br />
                                    ret
                                </div>
                            </div>
                        </div>

                        {/* Stage 3 */}
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center font-bold relative z-10">3</div>
                            <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-2">Assembler</h4>
                                <p className="text-sm text-slate-600 mb-4">Converts Assembly instructions into raw <strong>Object Code (Binary)</strong>.</p>
                                <div className="text-xs font-mono text-slate-500 bg-white p-2 rounded border border-dashed border-slate-300">
                                    01101110 00101101 11110000 00101111 ...
                                </div>
                            </div>
                        </div>

                        {/* Stage 4 */}
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex-shrink-0 flex items-center justify-center font-bold relative z-10">4</div>
                            <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm border-emerald-100">
                                <h4 className="font-bold text-slate-900 mb-2">Linker</h4>
                                <p className="text-sm text-slate-600 mb-4">Combines your object files with library files (like the code for `printf`) to create the final <strong>Executable (.exe / .out)</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 4: Anatomy of a C Program */}
            <section id="structure" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Code2 className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">4. High-Resolution Anatomy of a Program</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-slate-900 p-8 rounded-2xl font-mono text-sm leading-8 text-slate-300 relative">
                            <div className="absolute top-4 right-4 text-xs text-slate-600 border border-slate-700 px-2 rounded">hello.c</div>

                            <div className="text-indigo-400 group relative cursor-help">
                                #include &lt;stdio.h&gt;
                                <span className="absolute left-full ml-4 top-0 bg-slate-800 text-white text-[10px] w-48 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                    "Standard Input Output" header. Connects your code to the Keyboard and Screen.
                                </span>
                            </div>
                            <div className="h-4"></div>
                            <div className="text-yellow-400 group relative cursor-help">
                                int main() {'{'}
                                <span className="absolute left-full ml-4 top-0 bg-slate-800 text-white text-[10px] w-48 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                    The Entry Point. The Operating System jumps here to start your app.
                                </span>
                            </div>
                            <div className="pl-6">
                                <div className="text-green-400 group relative cursor-help">
                                    printf("Hello Universe\n");
                                    <span className="absolute left-full ml-4 top-0 bg-slate-800 text-white text-[10px] w-48 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                        Function call. "\n" is an escape sequence for a New Line.
                                    </span>
                                </div>
                                <div className="text-slate-500 text-xs">// Every statement ends with ;</div>
                                <div className="h-4"></div>
                                <div className="text-blue-400 group relative cursor-help">
                                    return 0;
                                    <span className="absolute left-full ml-4 top-0 bg-slate-800 text-white text-[10px] w-48 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                                        Signals "Success" to the OS. Any other number signals an Error code.
                                    </span>
                                </div>
                            </div>
                            <div className="text-yellow-400">{'}'}</div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 border-b pb-4">Key Keywords Uncovered</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-indigo-600 font-bold">#</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Directives</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">Instructions to the Preprocessor. Not actually C code, but configurations for the build.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-emerald-600 font-bold">int</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Return Type</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">The main function returns an integer status. Useful for scripting (e.g., if return is 0, continue to next step).</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-amber-600 font-bold">{ }</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Block Scope</h4>
                                        <p className="text-xs text-slate-600 leading-relaxed">Braces define the "lifetime" of variables. A variable born in these braces dies when the CPU hits the closing brace.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 5: Memory Segments */}
            <section id="memory" className="space-y-8">
                <div className="flex items-center gap-3">
                    < Zap className="w-7 h-7 text-amber-600" />
                    <h2 className="text-3xl font-bold text-slate-900">5. Memory Layout of a C Program</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <p className="text-slate-700 mb-8">
                        When you run your program, the OS divides the allocated RAM into specialized zones.
                    </p>

                    <div className="max-w-md mx-auto border-2 border-slate-200 rounded-2xl overflow-hidden shadow-xl">
                        <div className="bg-slate-50 p-4 border-b border-slate-200 text-center font-bold text-slate-400 text-xs">High Memory</div>

                        <div className="bg-red-50 p-6 border-b border-red-100 text-center relative group">
                            <h4 className="font-bold text-red-900">The Stack</h4>
                            <p className="text-[10px] text-red-700 mt-1">Grows DOWNWARDS. Stores local variables & function calls.</p>
                            <div className="absolute inset-0 bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 text-xs">
                                Dynamic allocation. Automatically freed when function returns.
                            </div>
                        </div>

                        <div className="bg-slate-100 h-12 flex items-center justify-center text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                            Free Space (The Void)
                        </div>

                        <div className="bg-amber-50 p-6 border-y border-amber-100 text-center relative group">
                            <h4 className="font-bold text-amber-900">The Heap</h4>
                            <p className="text-[10px] text-amber-700 mt-1">Grows UPWARDS. Manual memory for "malloc" calls.</p>
                            <div className="absolute inset-0 bg-amber-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 text-xs">
                                Persistent until program ends or YOU free it.
                            </div>
                        </div>

                        <div className="bg-indigo-50 p-4 border-b border-indigo-100 text-center">
                            <h4 className="font-bold text-indigo-900 text-sm italic">BSS & Data Segment</h4>
                            <p className="text-[10px] text-indigo-700 mt-1">Static and Global variables.</p>
                        </div>

                        <div className="bg-slate-900 p-4 text-center">
                            <h4 className="font-bold text-white text-sm">Text Segment</h4>
                            <p className="text-[10px] text-slate-500 mt-1">The actual binary code instructions (Read Only).</p>
                        </div>

                        <div className="bg-slate-50 p-4 font-bold text-slate-400 text-xs text-center">Low Memory</div>
                    </div>

                    <div className="mt-8 bg-red-50 p-6 rounded-xl border border-red-200 flex gap-4">
                        <AlertTriangle className="w-8 h-8 text-red-600 shrink-0" />
                        <div>
                            <h4 className="font-bold text-red-900">The Stack Overflow</h4>
                            <p className="text-sm text-red-800 leading-relaxed">
                                If you call too many functions (like an infinite recursion), the Stack grows so much it crashes into the Heap. This is a "Stack Overflow", the name of the famous forum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unit1Introduction;
