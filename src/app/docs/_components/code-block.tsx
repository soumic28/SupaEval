"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
    code: string;
    language: string;
    showLineNumbers?: boolean;
    className?: string;
}

export function CodeBlock({ code, language, showLineNumbers = false, className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Custom style matching SupaEval theme
    const customStyle = {
        ...vscDarkPlus,
        'code[class*="language-"]': {
            ...vscDarkPlus['code[class*="language-"]'],
            backgroundColor: 'transparent',
            fontFamily: 'var(--font-geist-mono), monospace',
        },
        'pre[class*="language-"]': {
            ...vscDarkPlus['pre[class*="language-"]'],
            backgroundColor: 'rgba(15, 23, 42, 0.8)', // slate-900 with opacity
            margin: 0,
            padding: '1.25rem',
            paddingTop: '2.5rem', // Space for badge
            borderRadius: '0.75rem',
            border: '1px solid rgba(79, 70, 229, 0.2)', // indigo border
        },
    };

    return (
        <div className={cn("relative group my-6 not-prose", className)}>
            {/* Code Block Container with Overflow */}
            <div className="rounded-xl overflow-x-auto border border-white/10 bg-slate-900/80 backdrop-blur-sm">
                {/* Header with Language Badge and Copy Button */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-slate-900/60 sticky left-0">
                    <div className="flex items-center gap-2">
                        <div className="px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 rounded border border-indigo-500/20">
                            {language}
                        </div>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        aria-label="Copy code"
                    >
                        {copied ? (
                            <Check className="w-4 h-4 text-green-400" />
                        ) : (
                            <Copy className="w-4 h-4 text-slate-300" />
                        )}
                    </button>
                </div>

                {/* Code Content */}
                <div className="overflow-x-auto">
                    <SyntaxHighlighter
                        language={language}
                        style={customStyle}
                        showLineNumbers={showLineNumbers}
                        customStyle={{
                            margin: 0,
                            background: 'transparent',
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                        }}
                        codeTagProps={{
                            style: {
                                fontFamily: 'var(--font-geist-mono), monospace',
                                fontSize: '0.875rem',
                                lineHeight: '1.7',
                            }
                        }}
                        wrapLongLines={false}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
