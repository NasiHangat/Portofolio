"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; 

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div 
        whileHover={{ y: -5 }}
        className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer h-full flex flex-col"
      >
        {/* Container Image  */}
        <div className="aspect-video relative overflow-hidden bg-zinc-800">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={project.id <= 3} 
          />
          {/* Overlay gelap saat hover agar teks lebih pop */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-grow">
          <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-semibold">
            {project.category}
          </span>
          
          <h3 className="text-xl font-bold mt-1 text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-zinc-400 text-sm mt-2 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.tech.map((t: string) => (
              <span 
                key={t} 
                className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}