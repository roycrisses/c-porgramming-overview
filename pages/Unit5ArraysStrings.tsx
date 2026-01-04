import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid3x3, MapPin, Network, AlertTriangle, Code2, Layers, Box, Keyboard, Search, Copy, CheckCircle2 } from 'lucide-react';

const Unit5ArraysStrings: React.FC = () => {
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
                    <div className="p-3 bg-teal-100 rounded-xl">
                        <Network className="w-8 h-8 text-teal-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Unit 5: Arrays & Strings
                    </h1>
                </div>
                <p className="text-xl text-slate-600">
                    "Organizing data in rows and lists (Vectors and Words)."
                </p>
            </header>

            {/* Topic 1: The Hardware Reality of Arrays */}
            <section id="arrays-intro" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Grid3x3 className="w-7 h-7 text-teal-600" />
                    <h2 className="text-3xl font-bold text-slate-900">1. Arrays: The Hardware Reality</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-lg text-slate-700 mb-6">
                        Imagine you need to store the grades of 100 students. Would you create 100 variables like `int s1, s2, s3...`? No.
                        You need an <strong>Array</strong>.
                    </p>
                    <p className="text-lg text-slate-700 mb-6">
                        An Array is more than a list. It is a strict contract with the Operating System to reserve a <strong>single, contiguous block of RAM</strong>.
                        Because there are no "gaps", the CPU can predict where data is, making arrays the fastest data structure in existence.
                    </p>

                    <div className="bg-slate-900 p-8 rounded-2xl shadow-inner mb-8 text-center text-white">
                        <div className="text-sm text-slate-400 mb-4 font-mono text-left">int grades[4] = {'{10, 20, 30, 40}'}; // Base Address: 0x1000</div>

                        <div className="flex flex-wrap justify-center font-mono gap-1">
                            {/* Cell 0 */}
                            <div className="relative group">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-teal-400 font-bold opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Base Address</div>
                                <div className="w-20 h-16 bg-teal-600 border-2 border-teal-400 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(45,212,191,0.3)]">10</div>
                                <div className="mt-2 text-xs text-slate-400">0x1000</div>
                                <div className="mt-1 text-xs text-teal-400 font-bold">Index 0</div>
                            </div>

                            {/* Cell 1 */}
                            <div className="relative">
                                <div className="w-20 h-16 bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">20</div>
                                <div className="mt-2 text-xs text-slate-500">0x1004</div>
                                <div className="mt-1 text-xs text-slate-600">Index 1</div>
                            </div>

                            {/* Cell 2 */}
                            <div className="relative">
                                <div className="w-20 h-16 bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">30</div>
                                <div className="mt-2 text-xs text-slate-500">0x1008</div>
                                <div className="mt-1 text-xs text-slate-600">Index 2</div>
                            </div>

                            {/* Cell 3 */}
                            <div className="relative">
                                <div className="w-20 h-16 bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">40</div>
                                <div className="mt-2 text-xs text-slate-500">0x100C</div>
                                <div className="mt-1 text-xs text-slate-600">Index 3</div>
                            </div>
                        </div>

                        <div className="mt-8 text-left border-t border-slate-800 pt-6">
                            <h4 className="text-teal-400 font-bold mb-2">The Speed Formula: O(1)</h4>
                            <p className="text-sm text-slate-400 mb-3">
                                How does C find <code>grades[3]</code> instantly? It doesn't count 1, 2, 3... It calculates.
                            </p>
                            <code className="block bg-black p-4 rounded border border-slate-800 text-green-400 text-sm font-mono">
                                Address = Base_Address + (Index * Size_Of_Type)<br />
                                Address = 0x1000 + (3 * 4 bytes)<br />
                                Address = 0x100C
                            </code>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-teal-900 text-xl mb-3">Declaration Syntax</h4>
                            <div className="space-y-3 font-mono text-sm">
                                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                                    <span className="text-blue-600">int</span> arr[<span className="text-purple-600">5</span>];
                                    <div className="text-slate-500 text-xs mt-1">// Declares 5 integers. Contains Random Garbage!</div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                                    <span className="text-blue-600">int</span> arr[] = {'{1, 2, 3}'};
                                    <div className="text-slate-500 text-xs mt-1">// Size inferred as 3 automatically.</div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                                    <span className="text-blue-600">int</span> arr[<span className="text-purple-600">5</span>] = {'{0}'};
                                    <div className="text-slate-500 text-xs mt-1">// All 5 elements set to 0. Safe initialization.</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h4 className="font-bold text-red-900 text-lg mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> Buffer Overflow
                            </h4>
                            <p className="text-sm text-red-800 mb-3">
                                C does NOT check boundaries. If you access `arr[10]` in an array of size 5, C will let you.
                            </p>
                            <p className="text-sm text-red-800 font-bold">
                                You just overwrote some other variable's memory. This is how 90% of security hacks happen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 2: Multidimensional Arrays */}
            <section id="multidimensional" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Layers className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">2. The Matrix (Multidimensional)</h2>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-lg text-slate-700 mb-6">
                        Think of a 2D array as a spreadsheet (Rows & Columns). Think of a 3D array as a book of spreadsheets.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mb-8">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Logical Visualization (2D)</h4>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="aspect-square bg-indigo-100 flex items-center justify-center font-mono text-xs rounded border border-indigo-200 font-bold text-indigo-700">[0][0]</div>
                                <div className="aspect-square bg-indigo-100 flex items-center justify-center font-mono text-xs rounded border border-indigo-200 font-bold text-indigo-700">[0][1]</div>
                                <div className="aspect-square bg-indigo-100 flex items-center justify-center font-mono text-xs rounded border border-indigo-200 font-bold text-indigo-700">[0][2]</div>
                                <div className="aspect-square bg-purple-100 flex items-center justify-center font-mono text-xs rounded border border-purple-200 font-bold text-purple-700">[1][0]</div>
                                <div className="aspect-square bg-purple-100 flex items-center justify-center font-mono text-xs rounded border border-purple-200 font-bold text-purple-700">[1][1]</div>
                                <div className="aspect-square bg-purple-100 flex items-center justify-center font-mono text-xs rounded border border-purple-200 font-bold text-purple-700">[1][2]</div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Physical RAM Layout (Row-Major)</h4>
                            <p className="text-sm text-slate-600 mb-3">RAM is 1D. C lays out rows one after another.</p>
                            <div className="flex flex-col gap-1">
                                <div className="h-10 bg-indigo-100 w-full rounded flex items-center px-3 text-xs font-mono border border-indigo-200">
                                    <span className="font-bold text-indigo-600 mr-4">Row 0:</span> [0][0] &rarr; [0][1] &rarr; [0][2]
                                </div>
                                <div className="h-10 bg-purple-100 w-full rounded flex items-center px-3 text-xs font-mono border border-purple-200">
                                    <span className="font-bold text-purple-600 mr-4">Row 1:</span> [1][0] &rarr; [1][1] &rarr; [1][2]
                                </div>
                            </div>
                            <div className="mt-4 bg-amber-50 p-3 rounded border border-amber-200 text-xs text-amber-800">
                                <strong>Performance Tip:</strong> Always loop Rows then Columns. If you loop Columns first, you jump around in memory, causing Cache Misses.
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-900">Declaration & Initialization</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="text-sm font-bold text-slate-500">2D Matrix</div>
                                <code className="block bg-slate-50 p-3 rounded border border-slate-200 font-mono text-sm">
                                    int mat[2][3] = {'{'}<br />
                                    &nbsp;&nbsp;{'{1, 2, 3}'},<br />
                                    &nbsp;&nbsp;{'{4, 5, 6}'}<br />
                                    {'}'};
                                </code>
                            </div>
                            <div className="space-y-2">
                                <div className="text-sm font-bold text-slate-500">Accessing Elements</div>
                                <code className="block bg-slate-50 p-3 rounded border border-slate-200 font-mono text-sm">
                                    mat[0][0] = 1; // Top-Left<br />
                                    mat[1][2] = 6; // Bottom-Right
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 3: String Theory */}
            <section id="strings" className="space-y-8">
                <div className="flex items-center gap-3">
                    <MapPin className="w-7 h-7 text-pink-600" />
                    <h2 className="text-3xl font-bold text-slate-900">3. String Theory</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-slate-700 mb-6 font-lg">
                        C does not have a "String" type. It creates the illusion of text using <strong>Null-Terminated Character Arrays</strong>.
                    </p>

                    <div className="bg-slate-900 p-8 rounded-xl mb-8">
                        <div className="flex flex-wrap justify-center gap-2 mb-4 font-mono">
                            {['H', 'e', 'l', 'l', 'o'].map((char, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-pink-600 text-white flex items-center justify-center border border-pink-400 font-bold">'{char}'</div>
                                    <div className="text-xs text-slate-500 mt-1">{i}</div>
                                </div>
                            ))}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-slate-700 text-green-400 flex items-center justify-center border border-slate-600 font-bold">'\0'</div>
                                <div className="text-xs text-slate-500 mt-1">5</div>
                            </div>
                        </div>
                        <p className="text-center text-slate-300 text-sm">
                            The <strong>Null Terminator (\0)</strong> is the "Period" at the end of the sentence. Without it, functions read until they crash.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                            <h3 className="font-bold text-pink-900 mb-2">String Literal (Immutability)</h3>
                            <code className="bg-white px-2 py-1 rounded border border-pink-100 text-sm block mb-2 font-mono">char *str = "Hello";</code>
                            <p className="text-sm text-pink-800">
                                This pointers points to the <strong>Read-Only Data Segment</strong>.
                                <br />
                                <span className="font-bold text-red-600">CRASH:</span> `str[0] = 'J';` is illegal.
                            </p>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
                            <h3 className="font-bold text-emerald-900 mb-2">Stack Array (Mutability)</h3>
                            <code className="bg-white px-2 py-1 rounded border border-emerald-100 text-sm block mb-2 font-mono">char str[] = "Hello";</code>
                            <p className="text-sm text-emerald-800">
                                This allocates space on the <strong>Stack</strong> and copies the letters there.
                                <br />
                                <span className="font-bold text-emerald-600">SAFE:</span> `str[0] = 'J';` works beautifully.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2"><Keyboard className="w-5 h-5" /> Safe Input Handling</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left border border-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="p-3">Function</th>
                                        <th className="p-3">Safety</th>
                                        <th className="p-3">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="bg-red-50">
                                        <td className="p-3 font-mono text-red-700">gets()</td>
                                        <td className="p-3 text-red-700 font-bold">DEADLY</td>
                                        <td className="p-3">No bounds checking. Removed from C11. NEVER use.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-mono text-amber-600">scanf("%s", s)</td>
                                        <td className="p-3 text-amber-600 font-bold">RISKY</td>
                                        <td className="p-3">Stops at space. Can overflow buffer. Use `%19s` to fix.</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="p-3 font-mono text-green-700">fgets()</td>
                                        <td className="p-3 text-green-700 font-bold">SAFE</td>
                                        <td className="p-3">You pass the size. Reads spaces. The Gold Standard.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 4: The Standard Library */}
            <section id="stdlib" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Code2 className="w-7 h-7 text-blue-600" />
                    <h2 className="text-3xl font-bold text-slate-900">4. Inside the Standard Library</h2>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-slate-700 mb-8">
                        The {"<string.h>"} library provides tools to work with strings. Let's look under the hood.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* strlen */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                            <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                                <span className="font-bold text-blue-700 font-mono">strlen(s)</span>
                                <span className="text-xs text-slate-500">Returns length (excluding \0)</span>
                            </div>
                            <div className="p-4 bg-slate-900 text-green-400 font-mono text-xs overflow-x-auto">
                                <pre>{`int my_strlen(char *s) {
    int count = 0;
    while (*s != '\\0') {
        count++;
        s++;
    }
    return count;
}`}</pre>
                            </div>
                        </div>

                        {/* strcpy */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                            <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                                <span className="font-bold text-blue-700 font-mono">strcpy(dest, src)</span>
                                <span className="text-xs text-slate-500">Copies string (Unsafe)</span>
                            </div>
                            <div className="p-4 bg-slate-900 text-green-400 font-mono text-xs overflow-x-auto">
                                <pre>{`void my_strcpy(char *d, char *s) {
    while (*s != '\\0') {
        *d = *s;
        d++; s++;
    }
    *d = '\\0'; // Don't forget this!
}`}</pre>
                            </div>
                        </div>

                        {/* strcmp */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                            <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                                <span className="font-bold text-blue-700 font-mono">strcmp(s1, s2)</span>
                                <span className="text-xs text-slate-500">Compare ASCII difference</span>
                            </div>
                            <div className="p-4 bg-slate-900 text-green-400 font-mono text-xs overflow-x-auto">
                                <pre>{`int my_strcmp(char *s1, char *s2) {
    while (*s1 && (*s1 == *s2)) {
        s1++; s2++;
    }
    return *(unsigned char *)s1 - 
           *(unsigned char *)s2;
}`}</pre>
                            </div>
                        </div>

                        {/* strcat */}
                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                            <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                                <span className="font-bold text-blue-700 font-mono">strcat(dest, src)</span>
                                <span className="text-xs text-slate-500">Appends src to dest</span>
                            </div>
                            <div className="p-4 bg-slate-900 text-green-400 font-mono text-xs overflow-x-auto">
                                <pre>{`void my_strcat(char *d, char *s) {
    // Go to end of dest
    while (*d != '\\0') d++;
    
    // Copy src
    while (*s != '\\0') {
        *d = *s;
        d++; s++;
    }
    *d = '\\0';
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unit5ArraysStrings;
