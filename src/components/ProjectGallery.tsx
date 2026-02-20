"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react";

interface ProjectGalleryProps {
  screenshots: string[];
  projectTitle: string;
}

export default function ProjectGallery({ screenshots, projectTitle }: ProjectGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Menampilkan 2 gambar awal agar tetap rapi dalam layout Bento
  const initialShowCount = 2;
  const hasMore = screenshots.length > initialShowCount;
  const displayedScreenshots = isExpanded ? screenshots : screenshots.slice(0, initialShowCount);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="col-span-full py-20 text-center border border-dashed border-zinc-800 rounded-[2rem] bg-zinc-900/10 flex flex-col items-center justify-center gap-4">
        <ImageIcon className="text-zinc-800" size={32} />
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em]">
          Visual preview not yet available for this project.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {displayedScreenshots.map((img, index) => (
            <motion.div
              layout
              key={img}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              className="relative break-inside-avoid rounded-3xl overflow-hidden border border-zinc-800/50 bg-zinc-950 hover:border-lime-400/30 transition-all group"
            >
              <img
                src={img}
                alt={`${projectTitle} screenshot ${index + 1}`}
                className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Overlay teknis saat hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-end p-6">
                <span className="text-[9px] font-mono text-lime-400 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-lime-400/20">
                  Preview 0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 px-8 py-4 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-400 hover:text-black hover:bg-lime-400 transition-all duration-300 font-mono text-[10px] uppercase tracking-widest font-bold active:scale-95"
          >
            {isExpanded ? (
              <>Collapse Gallery <ChevronUp size={14} className="group-hover:translate-y-[-2px] transition-transform" /></>
            ) : (
              <>Expand Gallery ({screenshots.length - initialShowCount}+) <ChevronDown size={14} className="group-hover:translate-y-[2px] transition-transform" /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}