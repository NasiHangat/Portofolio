"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <motion.div 
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0A0A0A] border border-zinc-800/50 rounded-3xl overflow-hidden h-full flex flex-col hover:border-lime-400/30 transition-all duration-300 shadow-sm"
      >
        {/* Image Container dengan Aspek Rasio Bento */}
        <div className="aspect-[16/10] relative overflow-hidden bg-zinc-900">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            priority={project.id <= 3} 
          />
          
          {/* Overlay Gelap subtle */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Badge Kategori ala Bento (Top Left) */}
          <div className="absolute top-4 left-4">
            <span className="bg-black/60 backdrop-blur-md text-zinc-300 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/5">
              {project.category}
            </span>
          </div>

          {/* Arrow Icon dengan Warna Lime (Bottom Right) */}
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg shadow-lime-400/20">
            <ArrowUpRight size={18} className="text-black" strokeWidth={2.5} />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-lime-400 transition-colors mb-3">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 flex-grow mb-6">
            {project.description}
          </p>
          
          {/* Tech Stack Tags - Disederhanakan untuk tampilan teknis */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900">
            {project.tech.slice(0, 3).map((t: string) => (
              <span 
                key={t} 
                className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 px-2 py-1 bg-zinc-900/50 rounded-md border border-zinc-800"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[9px] font-mono text-zinc-600 self-center">
                +{project.tech.length - 3} MORE
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}