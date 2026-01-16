"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Quote } from "lucide-react";

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
      
      {/* --- SECTION: ABOUT & SOCIAL PROOF --- */}
      <section className="max-w-7xl mx-auto py-24 px-6 border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Kolom Kiri: About Me (Muhammad Abdul Azis) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">About Me</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                <p>
                  Halo! Saya <span className="text-white font-medium">Muhammad Abdul Azis</span>, seorang Software Engineer yang berbasis di Bandung. 
                  Saat ini saya menempuh pendidikan di Universitas Pendidikan Indonesia, fokus pada pengembangan web dan riset teknologi.
                </p>
                <p>
                  Saya memiliki ketertarikan mendalam pada ekosistem <span className="text-blue-400">Next.js</span>, manajemen database, dan optimasi sistem. 
                  Di luar coding, saya antusias dengan kustomisasi sistem operasi Linux (Arch Linux) dan tata kelola IT menggunakan framework COBIT.
                </p>
              </div>
            </div>

            {/* Badge Pencapaian/Status */}
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-zinc-300">
                📍 Bandung, Indonesia
              </div>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs font-mono text-blue-400">
                🚀 Open for Internships
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Testimoni / Peer Review */}
          <div className="lg:col-span-5">
            <div className="relative p-8 bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden group">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-zinc-800/50 group-hover:text-blue-500/10 transition-colors" />
              
              <div className="relative z-10">
                <p className="text-zinc-300 italic leading-relaxed mb-8">
                  "Azis memiliki kemampuan luar biasa dalam menerjemahkan kebutuhan sistem yang kompleks menjadi desain yang intuitif dan kode yang rapi. Dedikasinya pada detail proyek sangat terlihat."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                    PR
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Peer Reviewer</h4>
                    <p className="text-xs text-zinc-500">Project Partner @ UPI</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tambahan: Tipografi halus untuk menambah kesan "Niat" */}
            <p className="mt-6 text-center text-xs text-zinc-600 font-mono tracking-widest uppercase">
              Verified Competency • 2026
            </p>
          </div>

        </div>
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