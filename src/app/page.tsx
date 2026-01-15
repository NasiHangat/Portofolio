"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "PHP", "PostgreSQL", "Framer Motion"];

export default function HomePage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Development", "UI/UX Design"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      {/* --- HERO SECTION WITH IDENTITY --- */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
        {/* Dekorasi Background Minimalis */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            I'm <span className="text-white">Aziss</span>.
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-8 text-zinc-500 text-sm font-mono uppercase tracking-widest"
        >
          <span className="flex items-center gap-2"><Briefcase size={14} /> Software Engineer</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> Bandung, Indonesia</span>
          <span className="flex items-center gap-2"><GraduationCap size={14} /> UPI Student</span>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 max-w-2xl text-lg md:text-xl leading-relaxed font-light italic"
        >
          "Crafting efficient code while obsessing over pixel-perfect user experiences."
        </motion.p>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <div className="w-full py-14 overflow-hidden bg-zinc-950/30 border-y border-zinc-900/50 mb-20">
        <motion.div 
          className="flex whitespace-nowrap gap-20"
          animate={{ x: [0, -1800] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={index} className="text-zinc-800 font-mono text-3xl font-black uppercase tracking-[0.3em] hover:text-blue-500/50 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- PROJECTS GALLERY --- */}
      <section id="projects-gallery" className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-2">
            <div className="h-1 w-12 bg-blue-600 mb-4" />
            <h2 className="text-5xl font-bold text-white tracking-tight">Works.</h2>
            <p className="text-zinc-500 text-lg">Selected projects in code and visual design.</p>
          </div>
          
          <div className="flex bg-zinc-900/40 p-1.5 rounded-2xl border border-zinc-800/50 backdrop-blur-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? "bg-white text-black shadow-2xl" 
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- CONTACT & IDENTITY FOOTER --- */}
      <footer className="max-w-7xl mx-auto pt-40 pb-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-zinc-900 pt-20">
          <div>
            <h3 className="text-4xl font-bold mb-6">Let's build something <span className="text-zinc-500">meaningful</span> together.</h3>
            <p className="text-zinc-400 max-w-sm leading-relaxed mb-8">
              Terbuka untuk kolaborasi proyek, diskusi seputar IT Governance, hingga kustomisasi Linux.
            </p>
            <a 
              href="mailto:muhammadabdulazis747@gmail.com" 
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Say Hello
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-center gap-6">
            <div className="flex gap-10 text-zinc-500 font-mono uppercase tracking-widest text-sm">
              <a href="https://www.linkedin.com/in/muhamad-azis-8493001a0/" className="hover:text-blue-500 transition-colors">LinkedIn</a>
              <a href="https://github.com/NasiHangat" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.instagram.com/nasi_pisgor/" className="hover:text-white transition-colors">Instagram</a>
            </div>
            <p className="text-zinc-800 text-xs font-mono">
              LOCAL TIME: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} WIB
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}