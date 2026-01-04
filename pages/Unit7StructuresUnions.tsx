import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BoxSelect, Briefcase, Ungroup, AlertTriangle, Grid3x3, Cpu, Database, Network, Layers } from 'lucide-react';

const Unit7StructuresUnions: React.FC = () => {
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
                    <div className="p-3 bg-pink-100 rounded-xl">
                        <BoxSelect className="w-8 h-8 text-pink-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Unit 7: User-Defined Data Types
                    </h1>
                </div>
                <p className="text-xl text-slate-600 font-medium">
                    "Moving from raw bits to meaningful objects."
                </p>
            </header>

            {/* Topic 1: Structures (The Blueprint) */}
            <section id="structures" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Briefcase className="w-7 h-7 text-pink-600" />
                    <h2 className="text-3xl font-bold text-slate-900">1. Structures: The Blueprint of Data</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8">
                    <p className="text-lg text-slate-700 leading-relaxed">
                        A <strong>Structure</strong> (struct) is a custom data type that allows you to group different primitive types into a single logical unit. Unlike arrays, which are homogeneous, structures are <strong>Heterogeneous</strong>.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 rounded-xl p-6 text-white font-mono text-sm leading-8">
                            <span className="text-pink-400">struct</span> Profile {'{'}<br />
                            &nbsp;&nbsp;<span className="text-blue-400">char</span> name[20];<br />
                            &nbsp;&nbsp;<span className="text-blue-400">int</span> age;<br />
                            &nbsp;&nbsp;<span className="text-blue-400">float</span> weight;<br />
                            {'}'};<br /><br />
                            <span className="text-slate-500">// Usage</span><br />
                            <span className="text-pink-400">struct</span> Profile p1 = {"{"}"Alex", 25, 70.5{"}"};
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-800 mb-4">Logical Organization</h4>
                            <p className="text-xs text-slate-600 mb-4">Without structs, you'd need three independent arrays and have to manually keep their indices synchronized. One mistake leads to data corruption.</p>
                            <div className="space-y-2">
                                <div className="p-2 bg-white border rounded text-[10px] flex justify-between"><span>p1.name</span> <span className="text-pink-600">"Alex"</span></div>
                                <div className="p-2 bg-white border rounded text-[10px] flex justify-between"><span>p1.age</span> <span className="text-pink-600">25</span></div>
                                <div className="p-2 bg-white border rounded text-[10px] flex justify-between"><span>p1.weight</span> <span className="text-pink-600">70.5</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 2: Memory Alignment & Padding (Hardware Depth) */}
            <section id="padding" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Grid3x3 className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">2. Memory Secrets: Alignment & Padding</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="flex items-start gap-4 mb-8 bg-amber-50 p-6 rounded-xl border border-amber-200">
                        <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
                        <div>
                            <h4 className="font-bold text-amber-900">The "Lie" of sizeof()</h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                You might assume that a struct with a `char` (1 byte) and an `int` (4 bytes) takes 5 bytes. <strong>In reality, it takes 8 bytes.</strong> Why?
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-slate-800">CPU Word Alignment</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                CPUs read memory in "words" (usually 4 or 8 bytes). If an integer starts at an odd address, the CPU might have to do <strong>two memory reads</strong> and a shift to fetch it. To prevent this, the C compiler inserts <strong>Padding</strong> bytes.
                            </p>
                            <div className="bg-slate-900 p-6 rounded-xl font-mono text-[10px] text-slate-400">
                                struct Example {'{'}<br />
                                &nbsp;&nbsp;char c; <span className="text-emerald-500">// 1 byte</span><br />
                                &nbsp;&nbsp;<span className="text-red-500">char _pad[3]; // 3 invisible bytes</span><br />
                                &nbsp;&nbsp;int i; <span className="text-emerald-500">// 4 bytes</span><br />
                                {'}'};
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center justify-center">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">RAM Map (8 Bytes)</h4>
                            <div className="flex border-2 border-slate-200 rounded overflow-hidden shadow-sm">
                                <div className="w-8 h-8 bg-emerald-400 border-r border-slate-200 flex items-center justify-center text-[10px] font-bold">C</div>
                                <div className="w-8 h-8 bg-slate-300 border-r border-slate-200 flex items-center justify-center text-[8px] opacity-50">PAD</div>
                                <div className="w-8 h-8 bg-slate-300 border-r border-slate-200 flex items-center justify-center text-[8px] opacity-50">PAD</div>
                                <div className="w-8 h-8 bg-slate-300 border-r border-slate-200 flex items-center justify-center text-[8px] opacity-50">PAD</div>
                                <div className="w-32 h-8 bg-indigo-400 flex items-center justify-center text-white text-[10px] font-bold">Integer I</div>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-4 italic">Saving the CPU time by wasting RAM space.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 3: Bit Fields (Optimization) */}
            <section id="bitfields" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Cpu className="w-7 h-7 text-emerald-600" />
                    <h2 className="text-3xl font-bold text-slate-900">3. Bit Fields: Surgical Precision</h2>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-6">
                    <p className="text-slate-400 leading-relaxed">
                        What if you only need to store a "Yes/No" flag? Using an `int` (32 bits) wastes 31 bits. <strong>Bit Fields</strong> allow you to tell the compiler exactly how many BITS to use.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black/50 p-6 rounded-xl border border-slate-700 font-mono text-sm">
                            <span className="text-pink-400">struct</span> Header {'{'}<br />
                            &nbsp;&nbsp;<span className="text-blue-400">unsigned int</span> isOnline : 1;<br />
                            &nbsp;&nbsp;<span className="text-blue-400">unsigned int</span> isAdmin  : 1;<br />
                            &nbsp;&nbsp;<span className="text-blue-400">unsigned int</span> level    : 4;<br />
                            {'}'};
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-emerald-900/40 rounded border border-emerald-800 text-emerald-400 font-bold text-xs">USE CASE</div>
                                <p className="text-xs text-slate-300 leading-relaxed">Extremely critical in <strong>Embedded Systems</strong>, Network Protocols (IP/TCP headers), and Hardware Driver development where memory is scarce.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-red-900/40 rounded border border-red-800 text-red-400 font-bold text-xs">LIMIT</div>
                                <p className="text-xs text-slate-300 leading-relaxed">You cannot take the address of a bit-field member (`&amp;isOnline` is illegal) because the hardware can't point to a single bit directly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 4: Unions (The Shared Space) */}
            <section id="unions" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Ungroup className="w-7 h-7 text-amber-600" />
                    <h2 className="text-3xl font-bold text-slate-900">4. Unions: The Shared Memory Chameleon</h2>
                </div>

                <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200">
                    <h3 className="text-2xl font-bold text-amber-900 mb-6 font-mono">union Data {'{'} ... {'}'}</h3>
                    <p className="text-amber-800 leading-relaxed mb-10">
                        A Union looks like a Struct but behaves differently. It allocates enough space only for the <strong>Largest Member</strong>. All members share the <strong>Same Starting Address</strong>.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                            <Database className="w-8 h-8 text-amber-600" />
                            <h4 className="font-bold text-slate-800">Space Saving</h4>
                            <p className="text-xs text-slate-500">Only one member can be used at a time. Writing to one overwrites the others.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                            <Network className="w-8 h-8 text-amber-600" />
                            <h4 className="font-bold text-slate-800">Variant Types</h4>
                            <p className="text-xs text-slate-500">Perfect for "Variant" data where an object could be an Int OR a Float, but never both.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                            <Cpu className="w-8 h-8 text-amber-600" />
                            <h4 className="font-bold text-slate-800">Registers</h4>
                            <p className="text-xs text-slate-500">Used for low-level byte-to-bit conversions or accessing sub-parts of a register.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 5: Advanced Patterns */}
            <section id="patterns" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Layers className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">5. Advanced Structural Patterns</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-lg">
                        <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">Self-Referential Structs</h4>
                        <p className="text-sm text-slate-600 mb-6">A structure that contains a pointer to another structure of its same type. This is the bedrock of complex data structures.</p>
                        <div className="bg-slate-50 p-4 rounded-lg font-mono text-xs text-indigo-600">
                            struct Node {'{'}<br />
                            &nbsp;&nbsp;int data;<br />
                            &nbsp;&nbsp;<span className="font-bold">struct Node *next;</span><br />
                            {'}'};
                        </div>
                        <p className="text-[10px] text-slate-400 mt-4 italic">Essential for Linked Lists, Trees, and Graphs.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-lg">
                        <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">Nested Structures</h4>
                        <p className="text-sm text-slate-600 mb-6">Defining complex hierarchies by embedding one struct within another.</p>
                        <div className="bg-slate-50 p-4 rounded-lg font-mono text-xs text-indigo-600">
                            struct Engine {'{'} int hp; {'}'};<br />
                            struct Car {'{'}<br />
                            &nbsp;&nbsp;char brand[10];<br />
                            &nbsp;&nbsp;<span className="font-bold">struct Engine eng;</span><br />
                            {'}'};
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unit7StructuresUnions;
