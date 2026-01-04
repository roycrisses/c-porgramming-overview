import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Network, Minimize2, MoveRight, CheckCircle2, XCircle, AlertTriangle, Grid3x3, Cpu, Database, Key, Trash2, Box } from 'lucide-react';

const Unit6Pointers: React.FC = () => {
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
                        <Network className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Unit 6: Pointers
                    </h1>
                </div>
                <p className="text-xl text-slate-600">
                    "The Nervous System of C: Direct Memory Manipulation."
                </p>
            </header>

            {/* Topic 1: Pointers Overview (Deep Dive) */}
            <section id="intro" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Cpu className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">1. The Truth About Memory</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-lg text-slate-700 mb-6">
                        To understand pointers, you must stop thinking about C variables as "names" and start thinking of them as <strong>Hardware Addresses</strong>.
                        Every byte in your 16GB RAM has a unique ID number, from <code>0x00000000</code> to <code>0xFFFFFFFF</code> (on 32-bit systems).
                    </p>
                    <p className="text-lg text-slate-700 mb-6">
                        A <strong>Pointer</strong> is simply a variable designed to hold these ID numbers. It's a "Where" variable, not a "What" variable.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 p-6 rounded-xl text-green-400 font-mono text-sm leading-relaxed overflow-hidden relative shadow-lg">
                            <div className="absolute top-2 right-2 text-slate-500 text-xs font-bold border border-slate-700 px-2 rounded">RAM View</div>
                            <div className="opacity-50 text-slate-600">...</div>
                            <div className="flex gap-4 border-b border-slate-800 py-1">
                                <span className="text-slate-500">0x1000</span>
                                <span className="text-white">00000001</span>
                                <span className="text-indigo-400">// int a = 1;</span>
                            </div>
                            <div className="opacity-50 text-slate-600">...</div>
                            <div className="flex gap-4 border-b border-slate-800 py-1 bg-indigo-900/20">
                                <span className="text-slate-500">0x2000</span>
                                <span className="text-yellow-400">00001000</span>
                                <span className="text-indigo-400">// int *p = &a;</span>
                            </div>
                            <div className="mt-4 text-xs text-slate-400">
                                Value of p is <span className="text-yellow-400">0x1000</span> (The address of 'a').
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-6">
                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">&</div>
                                <div>
                                    <h4 className="font-bold text-indigo-900">Address-Of Operator</h4>
                                    <p className="text-sm text-indigo-800">"Where does this live?"</p>
                                    <code className="text-xs text-indigo-600 bg-white px-1 rounded">&x returns 0x1000</code>
                                </div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">*</div>
                                <div>
                                    <h4 className="font-bold text-purple-900">Dereference Operator</h4>
                                    <p className="text-sm text-purple-800">"Go to this address and open the box."</p>
                                    <code className="text-xs text-purple-600 bg-white px-1 rounded">*p returns 1</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 2: Pointer Arithmetic */}
            <section id="arithmetic" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Minimize2 className="w-7 h-7 text-orange-600" />
                    <h2 className="text-3xl font-bold text-slate-900">2. Pointer Arithmetic</h2>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">The "Scaling" Secret</h3>
                    <p className="text-slate-700 mb-6">
                        Pointer arithmetic is <strong>Type Aware</strong>.
                        <code>ptr + 1</code> does NOT mean "add 1 byte". It means "move to the NEXT element".
                    </p>

                    <ul className="grid md:grid-cols-3 gap-6 text-center mb-8">
                        <li className="bg-orange-50 p-6 rounded-xl border border-orange-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-orange-400"></div>
                            <div className="font-bold text-lg text-slate-800 mb-2">char *</div>
                            <div className="text-sm text-slate-500 mb-2">Size: 1 Byte</div>
                            <div className="bg-white p-2 rounded border border-orange-100 font-mono text-sm text-blue-600">
                                0x1000 &rarr; 0x1001
                            </div>
                            <div className="mt-2 text-xs font-bold text-orange-700">+1 Byte Jump</div>
                        </li>
                        <li className="bg-blue-50 p-6 rounded-xl border border-blue-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
                            <div className="font-bold text-lg text-slate-800 mb-2">int *</div>
                            <div className="text-sm text-slate-500 mb-2">Size: 4 Bytes</div>
                            <div className="bg-white p-2 rounded border border-blue-100 font-mono text-sm text-blue-600">
                                0x1000 &rarr; 0x1004
                            </div>
                            <div className="mt-2 text-xs font-bold text-blue-700">+4 Bytes Jump</div>
                        </li>
                        <li className="bg-purple-50 p-6 rounded-xl border border-purple-200 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-purple-400"></div>
                            <div className="font-bold text-lg text-slate-800 mb-2">double *</div>
                            <div className="text-sm text-slate-500 mb-2">Size: 8 Bytes</div>
                            <div className="bg-white p-2 rounded border border-purple-100 font-mono text-sm text-blue-600">
                                0x1000 &rarr; 0x1008
                            </div>
                            <div className="mt-2 text-xs font-bold text-purple-700">+8 Bytes Jump</div>
                        </li>
                    </ul>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Pointer Subtraction</h4>
                        <p className="text-sm text-slate-700 mb-2">
                            `ptr2 - ptr1` returns the <strong>COUNT</strong> of elements between them, not the byte difference.
                        </p>
                        <code className="block bg-white p-2 border border-slate-200 rounded text-sm font-mono text-slate-600">
                            int *p1 = 0x1000;<br />
                            int *p2 = 0x1008;<br />
                            printf("%d", p2 - p1); // Output is 2 (Not 8!)
                        </code>
                    </div>
                </div>
            </section>

            {/* Topic 3: The Universal Void Pointer */}
            <section id="void" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Box className="w-7 h-7 text-emerald-600" />
                    <h2 className="text-3xl font-bold text-slate-900">3. The Universal `void *`</h2>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-200">
                    <p className="text-slate-700 mb-6">
                        A `void *` is a <strong>Generic Container</strong>. It can hold ANY address. This is how `malloc` works.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold">
                                <CheckCircle2 className="w-5 h-5" /> The Superpower
                            </div>
                            <p className="text-sm text-emerald-700 mb-3">Can hold any type without casting.</p>
                            <code className="block bg-white p-2 rounded border border-emerald-200 text-xs font-mono">
                                void *ptr;<br />
                                int i = 10; ptr = &i; // OK<br />
                                char c = 'A'; ptr = &c; // OK
                            </code>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <div className="flex items-center gap-2 mb-2 text-red-800 font-bold">
                                <XCircle className="w-5 h-5" /> The Kryptonite
                            </div>
                            <p className="text-sm text-red-700 mb-3">Cannot be dereferenced directly.</p>
                            <code className="block bg-white p-2 rounded border border-red-200 text-xs font-mono">
                                printf("%d", *ptr); // ERROR!<br />
                                <span className="text-green-600">// Fix: Cast first</span><br />
                                printf("%d", *(int*)ptr); // OK
                            </code>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 4: Dynamic Memory (The Heap) */}
            <section id="heap" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Database className="w-7 h-7 text-pink-600" />
                    <h2 className="text-3xl font-bold text-slate-900">4. Dynamic Memory: The Heap</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200">
                    <p className="text-lg text-slate-700 mb-8">
                        The Stack is small and automatic. The Heap is massive and manual. You are the god of the Heap.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-2">The Stack (Automatic)</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                                <li>Small size (~8MB default).</li>
                                <li>Variables die when function returns.</li>
                                <li>Fast allocation.</li>
                                <li><span className="text-red-500 font-bold">Limit:</span> Fixed size at compile time.</li>
                            </ul>
                        </div>
                        <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                            <h4 className="font-bold text-pink-900 mb-2">The Heap (Manual)</h4>
                            <ul className="list-disc pl-5 text-sm text-pink-900 space-y-2">
                                <li>Huge size (GBs of RAM).</li>
                                <li>Variables look until you kill them.</li>
                                <li>Slower allocation.</li>
                                <li><span className="text-green-600 font-bold">Power:</span> Resizeable at runtime.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-800">The 4 Horsemen of Allocation</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-900 rounded-lg text-green-400 font-mono text-xs border border-slate-700">
                                <span className="text-pink-400 font-bold block text-sm mb-1">malloc(size)</span>
                                Allocates 'size' bytes. Inner content is GARBAGE (random noise).
                            </div>
                            <div className="p-4 bg-slate-900 rounded-lg text-green-400 font-mono text-xs border border-slate-700">
                                <span className="text-pink-400 font-bold block text-sm mb-1">calloc(n, size)</span>
                                Allocates n*size bytes. WIPES everything to ZERO. Slower but safer.
                            </div>
                            <div className="p-4 bg-slate-900 rounded-lg text-green-400 font-mono text-xs border border-slate-700">
                                <span className="text-pink-400 font-bold block text-sm mb-1">realloc(ptr, size)</span>
                                Resizes existing block. May MOVE data to a new address if current spot is too tight.
                            </div>
                            <div className="p-4 bg-slate-900 rounded-lg text-green-400 font-mono text-xs border border-slate-700">
                                <span className="text-pink-400 font-bold block text-sm mb-1">free(ptr)</span>
                                Releases memory. CRITICAL: If you forget this, you get a Memory Leak.
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-red-50 p-6 border-l-4 border-red-500 rounded-r-xl flex gap-4">
                        <Trash2 className="w-8 h-8 text-red-600 flex-shrink-0" />
                        <div>
                            <strong className="text-red-900 block mb-1">Warning: Memory Leaks</strong>
                            <p className="text-sm text-red-800">
                                If you `malloc` inside a loop and never `free`, your program will eat all 16GB of RAM in seconds and crash the computer.
                                <br />Always write `free()` immediately after writing `malloc()`.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 5: Double Pointers & Functions */}
            <section id="advanced" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Grid3x3 className="w-7 h-7 text-purple-600" />
                    <h2 className="text-3xl font-bold text-slate-900">5. Advanced Pointer Concepts</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Double Pointers */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 className="font-bold text-slate-800 mb-4">Double Pointers (int **)</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            A pointer that points to another pointer. Used for:
                        </p>
                        <ul className="list-disc pl-5 text-sm text-slate-700 mb-4 space-y-1">
                            <li>Dynamically allocating 2D arrays.</li>
                            <li>Changing the address held by a pointer inside a function.</li>
                        </ul>
                        <div className="bg-purple-50 p-3 rounded text-xs font-mono text-purple-800">
                            int a = 10;<br />
                            int *p = &a;<br />
                            int **pp = &p; // **pp == 10
                        </div>
                    </div>

                    {/* Function Pointers */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 className="font-bold text-slate-800 mb-4">Function Pointers</h3>
                        <p className="text-sm text-slate-600 mb-4">
                            Storing a function's code address in a variable. Used for <strong>Callbacks</strong>.
                        </p>
                        <code className="block bg-slate-900 text-green-400 p-3 rounded text-xs font-mono mb-2">
                            void (*func)(int);<br />
                            func = &my_print_function;<br />
                            func(10); // Calls my_print_function
                        </code>
                        <p className="text-xs text-slate-500">
                            This is how `qsort()` allows custom comparison logic.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unit6Pointers;
