"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ProjectGalleryProps {
  screenshots: string[];
  projectTitle: string;
}

export default function ProjectGallery({ screenshots, projectTitle }: ProjectGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Tentukan berapa banyak foto yang muncul di awal (misalnya 2)
  const initialShowCount = 2;
  const hasMore = screenshots.length > initialShowCount;
  const displayedScreenshots = isExpanded ? screenshots : screenshots.slice(0, initialShowCount);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="col-span-full py-20 text-center border border-dashed border-zinc-800 rounded-3xl text-zinc-600">
        Pratinjau visual tambahan belum tersedia untuk proyek ini.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {displayedScreenshots.map((img, index) => (
            <motion.div
              layout
              key={img}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative break-inside-avoid rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all group shadow-xl"
            >
              <img
                src={img}
                alt={`${projectTitle} screenshot ${index + 1}`}
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all font-medium active:scale-95"
          >
            {isExpanded ? (
              <>Tampilkan Lebih Sedikit <ChevronUp size={18} /></>
            ) : (
              <>Lihat Lebih Banyak ({screenshots.length - initialShowCount}+) <ChevronDown size={18} /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}