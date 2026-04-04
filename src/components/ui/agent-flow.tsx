"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = ["Intent", "Retrieval", "Reasoning", "Tool", "Response"] as const;

export function AgentFlow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="rounded-3xl border border-slate-200 bg-white/75 p-4 md:p-6 shadow-lg shadow-slate-200/40"
    >
      <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-indigo-600">
        AI Agent Flow
      </div>

      {/* Desktop: horizontal flow */}
      <div className="hidden lg:block">
        <div className="flex items-center gap-3">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step}>
              <motion.div
                animate={
                  step === "Retrieval"
                    ? { boxShadow: ["0 0 0 rgba(239,68,68,0)", "0 0 28px rgba(239,68,68,0.28)", "0 0 0 rgba(239,68,68,0)"] }
                    : { boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 18px rgba(99,102,241,0.12)", "0 0 0 rgba(99,102,241,0)"] }
                }
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
                className={`relative rounded-2xl border px-4 py-2.5 text-base font-semibold ${
                  step === "Retrieval"
                    ? "border-red-300 bg-red-50 text-red-600"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                {step}
                {step === "Retrieval" && (
                  <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.06, 0.95] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[-4px] rounded-[1.15rem] border border-red-400/50"
                  />
                )}
              </motion.div>
              {idx < 4 && (
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [0.35, 1, 0.35], x: [0, 3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.12 }}
                  className="text-slate-300"
                >
                  →
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-3 ml-28">
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.35, 1, 0.35], y: [0, 4, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            className="mb-2 text-2xl leading-none text-red-500"
          >
            ↓
          </motion.div>
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl text-red-500"
            >
              ✕
            </motion.span>
            <motion.div
              animate={{ boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 24px rgba(99,102,241,0.18)", "0 0 0 rgba(99,102,241,0)"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-base font-semibold text-indigo-700 whitespace-nowrap"
            >
              SupaEval finds this
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: vertical flow with SupaEval finds this beside Retrieval */}
      <div className="lg:hidden flex flex-col items-start gap-1">
        {STEPS.map((step, idx) => (
          <React.Fragment key={step}>
            {step === "Retrieval" ? (
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ boxShadow: ["0 0 0 rgba(239,68,68,0)", "0 0 28px rgba(239,68,68,0.28)", "0 0 0 rgba(239,68,68,0)"] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
                  className="relative rounded-2xl border px-3 py-2 text-sm font-semibold border-red-300 bg-red-50 text-red-600"
                >
                  {step}
                  <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.06, 0.95] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-[-4px] rounded-[1.15rem] border border-red-400/50"
                  />
                </motion.div>
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [0.35, 1, 0.35], x: [0, 3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="text-slate-300 text-sm"
                >
                  →
                </motion.span>
                <div className="flex items-center gap-1.5">
                  <motion.span
                    animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
                    className="text-base text-red-500"
                  >
                    ✕
                  </motion.span>
                  <motion.div
                    animate={{ boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 24px rgba(99,102,241,0.18)", "0 0 0 rgba(99,102,241,0)"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-2xl border border-indigo-200 bg-indigo-50 px-2.5 py-1.5 text-xs font-semibold text-indigo-700 whitespace-nowrap"
                  >
                    SupaEval finds this
                  </motion.div>
                </div>
              </div>
            ) : (
              <motion.div
                animate={{ boxShadow: ["0 0 0 rgba(99,102,241,0)", "0 0 18px rgba(99,102,241,0.12)", "0 0 0 rgba(99,102,241,0)"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}
                className="rounded-2xl border px-4 py-2.5 text-base font-semibold border-slate-200 bg-slate-50 text-slate-700"
              >
                {step}
              </motion.div>
            )}
            {idx < 4 && (
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [0.35, 1, 0.35], y: [0, 3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.12 }}
                className="text-slate-300 text-lg pl-3"
              >
                ↓
              </motion.span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}
