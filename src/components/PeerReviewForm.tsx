"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, User, MessageSquare, Star } from "lucide-react";

export default function PeerReviewForm() {
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
          Professional feedback from peers helps document our shared technical journey and growth.
        </p>
      </div>

      {/* Form Area */}
      <form 
        action="https://formspree.io/f/your-id" // Ganti dengan ID Formspree Muhammad Abdul Azis
        method="POST"
        className="space-y-10"
      >
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
              className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors placeholder:text-zinc-700"
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
              className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors placeholder:text-zinc-700"
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
            className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:border-white outline-none transition-colors resize-none placeholder:text-zinc-700"
          />
        </div>

        <button 
          type="submit"
          className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300 active:scale-[0.98]"
        >
          <span>Send Testimony</span>
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </form>
    </div>
  );
}