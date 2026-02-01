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
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden h-full flex flex-col hover:border-zinc-700 transition-colors duration-300"
      >
        {/* Image Container */}
        <div className="aspect-video relative overflow-hidden bg-zinc-800/50">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            priority={project.id <= 3} 
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Arrow Icon on Hover */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
            <ArrowUpRight size={18} className="text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow space-y-4">
          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
              {project.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-white group-hover:text-zinc-200 transition-colors leading-tight">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 flex-grow">
            {project.description}
          </p>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.slice(0, 4).map((t: string) => (
              <span 
                key={t} 
                className="text-xs font-medium bg-zinc-800/60 border border-zinc-700/60 px-3 py-1.5 rounded-full text-zinc-300 transition-colors hover:bg-zinc-700/60"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs font-medium text-zinc-500 px-2 py-1.5">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}