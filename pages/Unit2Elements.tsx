import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Settings, Box, Calculator, CheckCircle2, Binary, Code2, Terminal, Cpu, Database, ArrowRight, Table2 } from 'lucide-react';

const Unit2Elements: React.FC = () => {
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
                    <div className="p-3 bg-emerald-100 rounded-xl">
                        <Settings className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Unit 2: Data & Operators
                    </h1>
                </div>
                <p className="text-xl text-slate-600">
                    "The Building Blocks: From electrical signals to logic."
                </p>
            </header>

            {/* Topic 1: The Structure of C */}
            <section id="structure" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Code2 className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">1. Anatomy of C</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        Before we dive into data, we must understand the container. A C program is not just text; it is a pipeline.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 text-xl">The 4 Stages of Compilation</h3>
                            <div className="space-y-3">
                                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-3">1</span>
                                    <div>
                                        <div className="font-bold text-slate-800">Pre-processing</div>
                                        <div className="text-xs text-slate-500">Handles #include, #define. Text replacement only.</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-3">2</span>
                                    <div>
                                        <div className="font-bold text-slate-800">Compilation</div>
                                        <div className="text-xs text-slate-500">Translates C to Assembly Language.</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-3">3</span>
                                    <div>
                                        <div className="font-bold text-slate-800">Assembly</div>
                                        <div className="text-xs text-slate-500">Translates Assembly to Machine Code (Binary).</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold mr-3">4</span>
                                    <div>
                                        <div className="font-bold text-slate-800">Linking</div>
                                        <div className="text-xs text-slate-500">Combines libraries (printf) into final executable.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-xl p-6 text-slate-300 font-mono text-sm overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                                <Terminal className="w-4 h-4 text-green-400" />
                                <span className="text-green-400 font-bold">hello.c</span>
                            </div>
                            <div className="space-y-1">
                                <span className="text-purple-400">#include</span> <span className="text-yellow-300">&lt;stdio.h&gt;</span> <span className="text-slate-500">// Header</span>
                                <br /><br />
                                <span className="text-blue-400">int</span> <span className="text-yellow-300">main</span>() {'{'} <span className="text-slate-500">// Entry Point</span>
                                <div className="pl-4">
                                    <span className="text-green-300">printf</span>(<span className="text-orange-300">"Hello World\\n"</span>);
                                    <br />
                                    <span className="text-blue-400">return</span> <span className="text-purple-400">0</span>; <span className="text-slate-500">// Exit Status</span>
                                </div>
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 2: Character Set & Tokens */}
            <section id="tokens" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Database className="w-7 h-7 text-pink-600" />
                    <h2 className="text-3xl font-bold text-slate-900">2. Character Set & Tokens</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-lg text-slate-700 mb-6">
                        The smallest individual unit in a C program is a <strong>Token</strong>. Just like a sentence has words and punctuation, C has Keywords, Identifiers, and Symbols.
                    </p>

                    <div className="space-y-6">
                        {/* Keywords */}
                        <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
                            <h3 className="font-bold text-pink-900 text-xl mb-4">The 32 Keywords (Instruction Set)</h3>
                            <p className="text-sm text-pink-800 mb-4">These are reserved words. You cannot use them as variable names.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 font-mono text-xs text-slate-700">
                                {['auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do',
                                    'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if',
                                    'int', 'long', 'register', 'return', 'short', 'signed', 'sizeof', 'static',
                                    'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while'].map(k => (
                                        <div key={k} className="bg-white p-2 rounded text-center shadow-sm border border-pink-100">{k}</div>
                                    ))}
                            </div>
                        </div>

                        {/* Identifiers */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-lg mb-3">Identifiers (Names)</h3>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                                    <li>Names you give to variables and functions.</li>
                                    <li>Must start with a Letter (A-Z, a-z) or Underscore (_).</li>
                                    <li><strong>NO</strong> numbers at the start.</li>
                                    <li><strong>Case Sensitive:</strong> `apple` != `Apple`.</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-lg mb-3">Naming Conventions</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="space-y-2">
                                        <div className="flex items-center text-green-600 font-bold"><CheckCircle2 className="w-4 h-4 mr-2" /> Valid</div>
                                        <code className="block bg-white px-2 py-1 rounded border">total_score</code>
                                        <code className="block bg-white px-2 py-1 rounded border">_sysVal</code>
                                        <code className="block bg-white px-2 py-1 rounded border">camelCase</code>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center text-red-600 font-bold"><CheckCircle2 className="w-4 h-4 mr-2 rotate-45" /> Invalid</div>
                                        <code className="block bg-white px-2 py-1 rounded border">2ndPlayer</code>
                                        <code className="block bg-white px-2 py-1 rounded border">total-score</code>
                                        <code className="block bg-white px-2 py-1 rounded border">int</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 3: Data Types (Deep Dive) */}
            <section id="datatypes" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Box className="w-7 h-7 text-emerald-600" />
                    <h2 className="text-3xl font-bold text-slate-900">3. Data Types: The Hardware Level</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        In C, strict data types are not just rules; they are <strong>blueprints for memory allocation</strong>.
                        When you say `int`, you are telling the CPU exactly how many bytes to grab.
                    </p>

                    <div className="space-y-12">
                        {/* 1. The Integer Architecture */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shrink-0">INT</span>
                                The Integer Architecture
                            </h3>
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-slate-600">
                                        Integers are stored in binary using <strong>Two's Complement</strong> for negative numbers.
                                        This clever math allows the CPU to add positive and negative numbers using the same circuits.
                                    </p>
                                    <div className="bg-slate-50 border-l-4 border-indigo-500 p-4">
                                        <h4 className="font-bold text-indigo-900 mb-2">Two's Complement Logic (-5)</h4>
                                        <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-1 font-mono">
                                            <li>Take 5:  0000 0101</li>
                                            <li>Invert:  1111 1010 (Flip bits)</li>
                                            <li>Add 1:   1111 1011 (-5)</li>
                                        </ol>
                                        <div className="mt-2 text-xs text-indigo-700 font-bold">Result: 1111 1011 is -5.</div>
                                    </div>
                                </div>

                                {/* Integer Hierarchy Table */}
                                <div className="border border-slate-200 rounded-lg overflow-hidden">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-100 font-bold text-slate-700">
                                            <tr>
                                                <th className="p-3">Type</th>
                                                <th className="p-3">Size</th>
                                                <th className="p-3">Range</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr>
                                                <td className="p-3 font-mono text-pink-600">char</td>
                                                <td className="p-3">1 Byte</td>
                                                <td className="p-3 text-xs">-128 to 127</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-mono text-pink-600">short</td>
                                                <td className="p-3">2 Bytes</td>
                                                <td className="p-3 text-xs">-32,768 to 32,767</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-mono text-pink-600">int</td>
                                                <td className="p-3">4 Bytes</td>
                                                <td className="p-3 text-xs">-2B to +2B</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3 font-mono text-pink-600">long long</td>
                                                <td className="p-3">8 Bytes</td>
                                                <td className="p-3 text-xs">-9 Quintillion...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* 2. IEEE 754 Floating Point */}
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <span className="bg-emerald-600 text-white text-sm px-3 py-1 rounded-full shrink-0">FLOAT</span>
                                The IEEE 754 Standard
                            </h3>
                            <p className="text-slate-600 mb-6">
                                `float` and `double` use scientific notation in binary.
                                <br />Value = Sign * (1.Mantissa) * 2^Exponent
                            </p>

                            <div className="flex flex-col md:flex-row gap-1 mb-6 font-mono text-white text-center text-sm">
                                <div className="bg-red-500 w-16 py-2 rounded-l" title="Sign Bit">S</div>
                                <div className="bg-green-600 flex-1 py-2" title="Exponent">Exponent (8)</div>
                                <div className="bg-blue-600 flex-[2] py-2 rounded-r" title="Mantissa">Mantissa (23 bits)</div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-50 p-4 rounded border border-red-100">
                                    <h5 className="font-bold text-red-900 mb-2">Precision Dangers</h5>
                                    <p className="text-sm text-red-800">
                                        `0.1` cannot be perfectly represented in binary.
                                        <br />
                                        `if (x == 0.1)` is usually <strong>FALSE</strong>.
                                        <br />
                                        <strong>Solution:</strong> Use epsilon `if (abs(x - 0.1) &lt; 0.0001)`
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                                    <h5 className="font-bold text-blue-900 mb-2">Double vs Float</h5>
                                    <ul className="list-disc pl-4 space-y-1 text-sm text-blue-800">
                                        <li><strong>float:</strong> 7 digits precision. (Games/Graphics)</li>
                                        <li><strong>double:</strong> 15 digits precision. (Science/Finance)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 4: Scope & Storage Classes */}
            <section id="storage" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Database className="w-7 h-7 text-amber-600" />
                    <h2 className="text-3xl font-bold text-slate-900">4. Scope & Storage Classes</h2>
                </div>
                <div className="bg-amber-50 p-8 rounded-2xl border border-amber-200">
                    <p className="text-lg text-amber-900 mb-6">
                        Where does a variable live? And how long does it survive? This is defined by its <strong>Storage Class</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-amber-100">
                            <span className="font-bold text-amber-800 block mb-1">auto (Default)</span>
                            <div className="text-xs text-slate-500 font-mono mb-2">Stack</div>
                            <p className="text-sm text-slate-700">Lives inside a function. Created on entry, destroyed on exit.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-amber-100">
                            <span className="font-bold text-amber-800 block mb-1">static</span>
                            <div className="text-xs text-slate-500 font-mono mb-2">Data Segment</div>
                            <p className="text-sm text-slate-700">Lives for the entire program run. Persists value between function calls.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-amber-100">
                            <span className="font-bold text-amber-800 block mb-1">extern</span>
                            <div className="text-xs text-slate-500 font-mono mb-2">Global</div>
                            <p className="text-sm text-slate-700">Visible to ALL files in the project. Defined elsewhere.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-amber-100">
                            <span className="font-bold text-amber-800 block mb-1">register</span>
                            <div className="text-xs text-slate-500 font-mono mb-2">CPU Register</div>
                            <p className="text-sm text-slate-700">Request to store in CPU for super speed. Compiler often ignores this.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 5: I/O Deep Dive */}
            <section id="io" className="space-y-8">
                <div className="flex items-center gap-3">
                    <Terminal className="w-7 h-7 text-green-600" />
                    <h2 className="text-3xl font-bold text-slate-900">5. Input & Output Deep Dive</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-xl mb-4">The Art of printf()</h3>
                    <p className="text-slate-600 mb-6">
                        `printf` stands for "Print Formatted". It replaces placeholders `%` with values.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-2">
                            <div className="font-bold text-slate-800">Format Specifiers</div>
                            <div className="grid grid-cols-2 gap-2 text-sm font-mono text-slate-600">
                                <div className="bg-slate-50 p-2 border rounded">%d (int)</div>
                                <div className="bg-slate-50 p-2 border rounded">%f (float)</div>
                                <div className="bg-slate-50 p-2 border rounded">%c (char)</div>
                                <div className="bg-slate-50 p-2 border rounded">%s (string)</div>
                                <div className="bg-slate-50 p-2 border rounded">%x (hex)</div>
                                <div className="bg-slate-50 p-2 border rounded">%p (pointer)</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-bold text-slate-800">Advanced Formatting</div>
                            <div className="space-y-2 text-sm font-mono text-slate-600">
                                <div className="bg-slate-50 p-2 border rounded flex justify-between">
                                    <span>%5d</span>
                                    <span className="text-slate-400">Right align (width 5)</span>
                                </div>
                                <div className="bg-slate-50 p-2 border rounded flex justify-between">
                                    <span>%-5d</span>
                                    <span className="text-slate-400">Left align</span>
                                </div>
                                <div className="bg-slate-50 p-2 border rounded flex justify-between">
                                    <span>%.2f</span>
                                    <span className="text-slate-400">2 Decimal places</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="font-bold text-slate-900 text-xl mb-4">The Danger of scanf()</h3>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <code className="block text-red-900 font-bold mb-2">scanf("%d", &variable);</code>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-red-800">
                            <li><strong>The Ampersand (&):</strong> You MUST provide the memory address. Without `&`, scanf writes to a random location → <span className="font-bold">CRASH</span>.</li>
                            <li><strong>The Buffer Problem:</strong> If user types "10 abc", scanf reads 10 and leaves " abc" in the buffer. The next scanf will immediately fail reading " abc".</li>
                            <li><strong>String Overflow:</strong> `scanf("%s", str)` is unsafe (like gets). Use widths: `scanf("%19s", str)`.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Topic 6: Operators (The Engine) */}
            <section id="operators" className="space-y-6">
                <div className="flex items-center gap-3">
                    <Calculator className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold text-slate-900">6. Operators: The Logic Engine</h2>
                </div>

                <div className="space-y-8">
                    {/* 6.1 Arithmetic & Modulus */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 className="font-bold text-xl text-slate-800 mb-4 border-b pb-2">6.1 Arithmetic & Modulus</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-indigo-600 mb-2">Integer Division</h4>
                                <p className="text-sm text-slate-600 mb-2">
                                    When dividing two integers, the result is TRUNCATED (floor), not rounded.
                                </p>
                                <code className="block bg-slate-50 p-2 rounded text-xs border border-slate-200 font-mono">
                                    5 / 2 = 2  (Not 2.5)<br />
                                    -5 / 2 = -2
                                </code>
                            </div>
                            <div>
                                <h4 className="font-bold text-indigo-600 mb-2">Modulus (%)</h4>
                                <p className="text-sm text-slate-600 mb-2">
                                    Returns the remainder. Sign always follows the Numerator.
                                </p>
                                <code className="block bg-slate-50 p-2 rounded text-xs border border-slate-200 font-mono">
                                    5 % 2 = 1<br />
                                    -5 % 2 = -1
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* 6.2 Precedence Table */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 overflow-hidden">
                        <h3 className="font-bold text-xl text-slate-800 mb-6">6.2 Hierarchy of Operations (Precedence)</h3>
                        <p className="text-sm text-slate-600 mb-4">The higher the rank, the earlier it is executed.</p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left border border-slate-200">
                                <thead className="bg-slate-900 text-white uppercase text-xs">
                                    <tr>
                                        <th className="p-3">Rank</th>
                                        <th className="p-3">Operators</th>
                                        <th className="p-3">Associativity</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 font-mono text-xs">
                                    <tr className="bg-indigo-50"><td className="p-3 font-bold">1</td><td className="p-3">() [] . -&gt;</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr><td className="p-3 font-bold">2</td><td className="p-3">++ -- ! ~ * & (cast) sizeof</td><td className="p-3 text-red-600 font-bold">R &rarr; L</td></tr>
                                    <tr className="bg-indigo-50"><td className="p-3 font-bold">3</td><td className="p-3">* / %</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr><td className="p-3 font-bold">4</td><td className="p-3">+ -</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr className="bg-indigo-50"><td className="p-3 font-bold">5</td><td className="p-3">&lt;&lt; &gt;&gt;</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr><td className="p-3 font-bold">6</td><td className="p-3">&lt; &lt;= &gt; &gt;=</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr className="bg-indigo-50"><td className="p-3 font-bold">7</td><td className="p-3">== !=</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr><td className="p-3 font-bold">8-10</td><td className="p-3">& ^ |</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr className="bg-indigo-50"><td className="p-3 font-bold">11</td><td className="p-3">&&</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr><td className="p-3 font-bold">12</td><td className="p-3">||</td><td className="p-3">L &rarr; R</td></tr>
                                    <tr className="bg-indigo-50"><td className="p-3 font-bold">13</td><td className="p-3">?: (Ternary)</td><td className="p-3 text-red-600 font-bold">R &rarr; L</td></tr>
                                    <tr><td className="p-3 font-bold">14</td><td className="p-3">= += -= *=</td><td className="p-3 text-red-600 font-bold">R &rarr; L</td></tr>
                                    <tr className="bg-indigo-50"><td className="p-3 font-bold">15</td><td className="p-3">, (Comma)</td><td className="p-3">L &rarr; R</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 6.3 Bitwise Visualizer (The Star) */}
                    <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Binary className="w-32 h-32" />
                        </div>
                        <h3 className="font-bold text-2xl mb-6 text-green-400 flex items-center gap-2">
                            <Binary className="w-6 h-6" /> 6.3 Bitwise Logic
                        </h3>

                        <div className="space-y-8">
                            <div className="grid md:grid-cols-3 gap-4 border-b border-slate-700 pb-6">
                                <div className="md:col-span-1">
                                    <div className="text-xl font-bold text-purple-400 mb-1">& (AND)</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">The "Masker"</div>
                                    <p className="text-xs text-slate-500 mt-2">Force bits to 0.</p>
                                </div>
                                <div className="md:col-span-2 bg-black/50 p-3 rounded font-mono text-sm border-l-2 border-purple-500">
                                    1100 (12)<br />
                                    0101 (5)<br />
                                    ---- (&)<br />
                                    0100 (4)
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 border-b border-slate-700 pb-6">
                                <div className="md:col-span-1">
                                    <div className="text-xl font-bold text-orange-400 mb-1">| (OR)</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">The "Setter"</div>
                                    <p className="text-xs text-slate-500 mt-2">Force bits to 1.</p>
                                </div>
                                <div className="md:col-span-2 bg-black/50 p-3 rounded font-mono text-sm border-l-2 border-orange-500">
                                    1100 (12)<br />
                                    0101 (5)<br />
                                    ---- (|)<br />
                                    1101 (13)
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="md:col-span-1">
                                    <div className="text-xl font-bold text-blue-400 mb-1">^ (XOR)</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">The "Toggler"</div>
                                    <p className="text-xs text-slate-500 mt-2">Flip bits.</p>
                                </div>
                                <div className="md:col-span-2 bg-black/50 p-3 rounded font-mono text-sm border-l-2 border-blue-500">
                                    1100 (12)<br />
                                    0101 (5)<br />
                                    ---- (^)<br />
                                    1001 (9)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Unit2Elements;
