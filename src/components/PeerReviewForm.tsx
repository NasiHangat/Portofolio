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
    <div className="space-y-12">
      {/* Header Form */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-zinc-800" />
          <span className="text-xs font-medium text-zinc-500 tracking-widest uppercase">Contribution</span>
        </div>
        <h3 className="font-display text-4xl md:text-5xl font-medium text-white">
          Submit a Review
        </h3>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
          Professional feedback helps document our shared technical journey at UPI and beyond.
        </p>
      </div>

      {/* Form Area */}
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Full Name & Role
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="e.g. Budi — Backend Partner"
              required
              disabled={status === "loading"}
              className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors placeholder:text-zinc-700 disabled:opacity-50"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Project Context
            </label>
            <input 
              type="text" 
              name="project"
              placeholder="e.g. UPIku Super Apps"
              disabled={status === "loading"}
              className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors placeholder:text-zinc-700 disabled:opacity-50"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Professional Testimony
          </label>
          <textarea 
            name="message"
            rows={4}
            placeholder="Share insights on our collaboration, technical proficiency, or project impact..."
            required
            disabled={status === "loading"}
            className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors resize-none placeholder:text-zinc-700 disabled:opacity-50"
          />
        </div>

        <div className="flex items-center gap-6">
          <button 
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300 active:scale-[0.98] disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <span>Sending...</span>
                <Loader2 size={18} className="animate-spin" />
              </>
            ) : status === "success" ? (
              <>
                <span>Sent Successfully</span>
                <CheckCircle2 size={18} className="text-emerald-500" />
              </>
            ) : (
              <>
                <span>Send Testimony</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </>
            )}
          </button>

          <AnimatePresence>
            {status === "error" && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-500 text-sm font-medium"
              >
                Failed to send. Please try again.
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}