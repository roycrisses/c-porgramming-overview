import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, Save, FolderOpen, AlertTriangle, Grid3x3, Minimize2, HardDrive, Database, Binary, Key } from 'lucide-react';

const Unit8FileHandling: React.FC = () => {
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
                    <div className="p-3 bg-orange-100 rounded-xl">
                        <FileText className="w-8 h-8 text-orange-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                        Unit 8: File Handling
                    </h1>
                </div>
                <p className="text-xl text-slate-600">
                    "Persistence: Saving your work in a Notebook just like a Video Game Save File."
                </p>
            </header>

            {/* Topic 1: File Handling Fundamentals (Hardware Level) */}
            <section id="intro" className="space-y-8">
                <div className="flex items-center gap-3">
                    <HardDrive className="w-7 h-7 text-orange-600" />
                    <h2 className="text-3xl font-bold text-slate-900">1. The Hardware Reality: Persistence</h2>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Volatile vs. Non-Volatile</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Variables (int, float) live in <strong>RAM</strong>. RAM is fast but "Volatile". When you turn off the PC, the electrons fade, and the data vanishes.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                To keep data forever, we must send it to the <strong>HDD/SSD (Disk)</strong>. This is "file handling".
                            </p>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col justify-center">
                            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                                <span>RAM (Fast)</span>
                                <span>DISK (Slow)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-2 bg-green-500 rounded animate-pulse"></div>
                                <div className="text-white font-bold">&rarr; fwrite &rarr;</div>
                                <div className="flex-1 h-2 bg-blue-600 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                        <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                            <Key className="w-5 h-5" /> The FILE Pointer
                        </h4>
                        <p className="text-sm text-orange-800 mb-4">
                            You never access the disk directly. You deal with a "Stream".
                        </p>
                        <code className="block bg-white p-3 rounded border border-orange-200 font-mono text-sm text-orange-900">
                            FILE *fptr;<br />
                            fptr = fopen("data.txt", "w");
                        </code>
                        <p className="text-xs text-orange-700 mt-2">
                            This `fptr` holds the state of the stream (Current position, Errors, End-of-File status).
                        </p>
                    </div>
                </div>
            </section>

            {/* Topic 2: Standard Streams */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">2. Standard Streams: The Invisible Files</h2>
                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                    <p className="text-indigo-900 mb-4">
                        In C, the keyboard and screen are treated exactly like files! They are open by default.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded border border-indigo-100 shadow-sm">
                            <div className="font-bold text-slate-800">stdin</div>
                            <div className="text-xs text-slate-500 mb-2">Standard Input</div>
                            <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">fscanf(stdin, ...)</code>
                            <p className="text-xs text-slate-600 mt-2">The Keyboard.</p>
                        </div>
                        <div className="bg-white p-4 rounded border border-indigo-100 shadow-sm">
                            <div className="font-bold text-slate-800">stdout</div>
                            <div className="text-xs text-slate-500 mb-2">Standard Output</div>
                            <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">fprintf(stdout, ...)</code>
                            <p className="text-xs text-slate-600 mt-2">The Console Screen.</p>
                        </div>
                        <div className="bg-white p-4 rounded border border-red-100 shadow-sm">
                            <div className="font-bold text-red-800">stderr</div>
                            <div className="text-xs text-red-500 mb-2">Standard Error</div>
                            <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">fprintf(stderr, ...)</code>
                            <p className="text-xs text-slate-600 mt-2">Unbuffered Error Log.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 3: The Mode Matrix */}
            <section id="modes" className="space-y-6">
                <div className="flex items-center gap-3">
                    <Grid3x3 className="w-7 h-7 text-green-600" />
                    <h2 className="text-3xl font-bold text-slate-900">3. The Mode Matrix</h2>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-slate-700 mb-6 font-medium">
                        Opening a file is a commitment. You must decide your intent upfront.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border border-slate-200">
                            <thead className="bg-slate-100 text-slate-800 uppercase">
                                <tr>
                                    <th className="p-4">Mode</th>
                                    <th className="p-4">Meaning</th>
                                    <th className="p-4">If File Exists...</th>
                                    <th className="p-4">If File Missing...</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-mono font-bold text-blue-600">"r"</td>
                                    <td className="p-4">Read Only</td>
                                    <td className="p-4 text-green-600">Opens safely</td>
                                    <td className="p-4 text-red-600 font-bold">NULL (Error)</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-mono font-bold text-red-600">"w"</td>
                                    <td className="p-4">Write (Override)</td>
                                    <td className="p-4 text-red-600 font-bold">WIPES DATA (0 Bytes)</td>
                                    <td className="p-4 text-green-600">Creates New</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-mono font-bold text-green-600">"a"</td>
                                    <td className="p-4">Append</td>
                                    <td className="p-4">Writes at End</td>
                                    <td className="p-4 text-green-600">Creates New</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-mono font-bold text-purple-600">"r+"</td>
                                    <td className="p-4">Read & Write</td>
                                    <td className="p-4">Modifies existing</td>
                                    <td className="p-4 text-red-600 font-bold">NULL (Error)</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-mono font-bold text-purple-600">"w+"</td>
                                    <td className="p-4">Read & Write</td>
                                    <td className="p-4 text-red-600 font-bold">WIPES DATA</td>
                                    <td className="p-4 text-green-600">Creates New</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-xs text-slate-500 italic">
                        Tip: Add 'b' for Binary Mode (e.g., "wb", "rb") to prevent Windows newline translation issues.
                    </div>
                </div>
            </section>

            {/* Topic 4: Binary vs Text (Deep Dive) */}
            <section id="binary" className="space-y-6">
                <div className="flex items-center gap-3">
                    <Binary className="w-7 h-7 text-blue-600" />
                    <h2 className="text-3xl font-bold text-slate-900">4. Text vs. Binary Files</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Text Files */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-orange-400"></div>
                        <h3 className="font-bold text-slate-800 mb-2 pl-4">Text Files (.txt)</h3>
                        <p className="text-sm text-slate-600 mb-4 pl-4">
                            Human-readable characters. <br />
                            Slow because numbers `123` must be converted to strings "123".
                        </p>
                        <div className="bg-slate-50 p-3 mx-4 rounded font-mono text-xs border border-slate-200">
                            fprintf(fp, "Score: %d\\n", 100);
                        </div>
                    </div>

                    {/* Binary Files */}
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm relative overflow-hidden text-white">
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                        <h3 className="font-bold text-green-400 mb-2 pl-4">Binary Files (.bin)</h3>
                        <p className="text-sm text-slate-300 mb-4 pl-4">
                            Raw memory dump. Exact copy of RAM.<br />
                            Fast, efficient, but not readable by notepad.
                        </p>
                        <div className="bg-black/50 p-3 mx-4 rounded font-mono text-xs border border-slate-700 text-blue-300">
                            fwrite(&score, sizeof(int), 1, fp);
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 5: Serialization (Saving Objects) */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <Save className="w-7 h-7 text-purple-600" />
                    <h2 className="text-3xl font-bold text-slate-900">5. Serialization (Save Game)</h2>
                </div>
                <div className="bg-white p-8 rounded-xl border border-slate-200">
                    <p className="text-slate-700 mb-6">
                        How do you save a complex struct Player {"{"} int hp; float pos[3]; {"}"} ?
                        <br />
                        You dump the memory directly using `fwrite`.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg font-mono text-xs text-green-400 border border-slate-700">
                            <span className="text-purple-400">struct</span> Player p1 = {'{'} 100, {'{'}10.5, 20.0, 0.0{'}'} {'}'};<br /><br />

                            <span className="text-slate-500">// SAVE (Serialize)</span><br />
                            FILE *fp = fopen(<span className="text-orange-300">"save.bin"</span>, <span className="text-orange-300">"wb"</span>);<br />
                            fwrite(&p1, sizeof(p1), 1, fp);<br />
                            fclose(fp);<br /><br />

                            <span className="text-slate-500">// LOAD (Deserialize)</span><br />
                            FILE *fp2 = fopen(<span className="text-orange-300">"save.bin"</span>, <span className="text-orange-300">"rb"</span>);<br />
                            fread(&p1, sizeof(p1), 1, fp2);<br />
                            fclose(fp2);
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 6: Random Access */}
            <section id="random" className="space-y-6">
                <div className="flex items-center gap-3">
                    <Minimize2 className="w-7 h-7 text-red-600" />
                    <h2 className="text-3xl font-bold text-slate-900">6. Random Access (Time Travel)</h2>
                </div>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                    <p className="text-slate-700 mb-6">
                        Sequential files (CSVs) are like cassette tapes. You must fast-forward.
                        <br />
                        <strong>Random Access</strong> files are like Vinyl Records (or RAM). You can jump the needle anywhere instantly.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                            <div className="font-bold text-slate-800 mb-1">rewind(fp)</div>
                            <div className="text-xs text-slate-500">Jump to Request 0</div>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                            <div className="font-bold text-slate-800 mb-1">ftell(fp)</div>
                            <div className="text-xs text-slate-500">Returns current Byte position</div>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                            <div className="font-bold text-slate-800 mb-1">fseek(fp, offset, origin)</div>
                            <div className="text-xs text-slate-500">The Time Machine</div>
                        </div>
                    </div>

                    <div className="mt-6 bg-white p-4 rounded border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">The 3 Origins of fseek</h4>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                            <div className="p-2 bg-blue-50 text-blue-700 rounded">SEEK_SET (Start)</div>
                            <div className="p-2 bg-blue-50 text-blue-700 rounded">SEEK_CUR (Current)</div>
                            <div className="p-2 bg-blue-50 text-blue-700 rounded">SEEK_END (End)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Topic 7: Buffering Mechanisms */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">7. Buffering: The Hidden Efficiency</h2>
                <div className="bg-white p-8 rounded-xl border border-slate-200">
                    <p className="text-slate-700 mb-6 font-medium">
                        Writing to disk is <strong className="text-red-600">SLOW</strong>. C uses a "Waiting Room" called a Buffer.
                        Data waits in RAM until the buffer is full, then flushes to disk in one go.
                    </p>

                    <div className="space-y-4">
                        <div className="flex gap-4 items-start border-l-4 border-purple-500 pl-4 py-2">
                            <div>
                                <h4 className="font-bold text-slate-900">_IOFBF (Full Buffering)</h4>
                                <p className="text-sm text-slate-600">Standard for Files. Flushes when 4KB is full.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start border-l-4 border-blue-500 pl-4 py-2">
                            <div>
                                <h4 className="font-bold text-slate-900">_IOLBF (Line Buffering)</h4>
                                <p className="text-sm text-slate-600">Standard for Terminal (stdout). Flushes when you print `\n`. This is why `printf` sometimes doesn't appear immediately!</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start border-l-4 border-red-500 pl-4 py-2">
                            <div>
                                <h4 className="font-bold text-slate-900">_IONBF (No Buffering)</h4>
                                <p className="text-sm text-slate-600">Standard for Errors (stderr). Writes instantly. Crucial for crash logs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Unit8FileHandling;
