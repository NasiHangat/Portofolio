"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

export default function PeerReviewForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      project: formData.get("project") || "General Collaboration",
      message: formData.get("message"),
      role: (formData.get("name") as string).split("—")[1]?.trim() || "Peer Reviewer",
    };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        // Reset status kembali ke idle setelah 5 detik
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
            Full Name & Role
          </label>
          <input 
            type="text" 
            name="name"
            placeholder="e.g. Budi — Backend Partner"
            required
            disabled={status === "loading"}
            className="w-full bg-black/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 outline-none transition-all placeholder:text-zinc-700 disabled:opacity-50 font-sans"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
            Project Context
          </label>
          <input 
            type="text" 
            name="project"
            placeholder="e.g. System Integration"
            disabled={status === "loading"}
            className="w-full bg-black/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 outline-none transition-all placeholder:text-zinc-700 disabled:opacity-50 font-sans"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">
          Professional Testimony
        </label>
        <textarea 
          name="message"
          rows={4}
          placeholder="Share insights on our collaboration, technical proficiency, or project impact..."
          required
          disabled={status === "loading"}
          className="w-full bg-black/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-white focus:border-lime-400/50 focus:ring-1 focus:ring-lime-400/50 outline-none transition-all resize-none placeholder:text-zinc-700 disabled:opacity-50 font-sans custom-scrollbar"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
        <button 
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-zinc-100 text-black px-8 py-3.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-lime-400 transition-all duration-300 active:scale-[0.98] disabled:bg-zinc-900 disabled:text-zinc-600 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <span>Transmitting...</span>
              <Loader2 size={16} className="animate-spin" />
            </>
          ) : status === "success" ? (
            <>
              <span>Data Secured</span>
              <CheckCircle2 size={16} className="text-lime-600" />
            </>
          ) : (
            <>
              <span>Submit Record</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </>
          )}
        </button>

        <AnimatePresence>
          {status === "error" && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-red-400 font-mono text-[10px] uppercase tracking-widest font-bold"
            >
              System Error. Try Again.
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}