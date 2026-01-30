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
            borderRadius: '0.75rem',
            border: '1px solid rgba(79, 70, 229, 0.2)', // indigo border
        },
    };

    return (
        <div className={cn("relative group", className)}>
            {/* Language Badge */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 rounded border border-indigo-500/20">
                {language}
            </div>

            {/* Copy Button */}
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Copy code"
            >
                {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                ) : (
                    <Copy className="w-4 h-4 text-slate-300" />
                )}
            </button>

            {/* Code Block */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-sm">
                <SyntaxHighlighter
                    language={language}
                    style={customStyle}
                    showLineNumbers={showLineNumbers}
                    customStyle={{
                        margin: 0,
                        background: 'transparent',
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: 'var(--font-geist-mono), monospace',
                            fontSize: '0.875rem',
                        }
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
